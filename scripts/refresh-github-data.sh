#!/usr/bin/env bash
# Refresh data/github.json from the GitHub API (authenticated via gh).
set -euo pipefail
cd "$(dirname "$0")/.."
python3 - <<'PY'
import json, subprocess, os, re
from datetime import datetime, timezone

def gh_api(path: str):
    return json.loads(subprocess.check_output(["gh", "api", path], text=True))

repos_raw = gh_api("users/xdkurbie/repos?per_page=100&sort=pushed")
repos = [{
    "name": r["name"],
    "private": r["private"],
    "fork": r["fork"],
    "archived": r.get("archived", False),
    "description": r.get("description"),
    "html_url": r["html_url"],
    "homepage": r.get("homepage") or "",
    "language": r.get("language"),
    "pushed_at": r.get("pushed_at"),
} for r in repos_raw]

wanted = sorted(set(re.findall(r'data-repo="([^"]+)"', open("index.html", encoding="utf-8").read())))
releases = {}
for name in wanted:
    try:
        data = gh_api(f"repos/xdkurbie/{name}/releases/latest")
    except subprocess.CalledProcessError:
        continue
    releases[name] = {
        "tag_name": data.get("tag_name"),
        "html_url": data.get("html_url"),
        "assets": [{
            "name": a["name"],
            "browser_download_url": a["browser_download_url"],
            "size": a["size"],
        } for a in data.get("assets") or []],
    }

commits = gh_api("repos/xdkurbie/xdkurbie.github.io/commits?per_page=1&sha=main")
commit = commits[0]
out = {
    "generated_at": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"),
    "commit": {"sha": commit["sha"], "html_url": commit.get("html_url")},
    "repos": repos,
    "releases": releases,
}
os.makedirs("data", exist_ok=True)
with open("data/github.json", "w", encoding="utf-8") as f:
    json.dump(out, f, indent=2, ensure_ascii=False)
    f.write("\n")
print(f"wrote data/github.json ({len(repos)} repos, {len(releases)} releases)")
PY
