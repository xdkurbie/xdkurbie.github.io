var Ju="170";var t0=0,Gd=1,e0=2;var nm=1,n0=2,Bi=3,_r=0,Ln=1,ki=2,mr=0,Fs=1,Wd=2,Xd=3,Yd=4,i0=5,kr=100,r0=101,s0=102,o0=103,a0=104,l0=200,c0=201,h0=202,u0=203,Ph=204,Ih=205,f0=206,d0=207,p0=208,m0=209,g0=210,_0=211,x0=212,v0=213,y0=214,Dh=0,Lh=1,Uh=2,Vs=3,Nh=4,Oh=5,Fh=6,Bh=7,im=0,M0=1,S0=2,gr=0,b0=1,w0=2,E0=3,$u=4,T0=5,A0=6,C0=7;var rm=300,Hs=301,Gs=302,Vo=303,zh=304,ql=306,kh=1e3,Gr=1001,Vh=1002,Xn=1003,R0=1004;var Ha=1005;var ti=1006,Zc=1007;var Wr=1008;var Gi=1009,sm=1010,om=1011,Ho=1012,Ku=1013,Xr=1014,Si=1015,ea=1016,Qu=1017,ju=1018,Ws=1020,am=35902,lm=1021,cm=1022,di=1023,hm=1024,um=1025,Bs=1026,Xs=1027,tf=1028,ef=1029,fm=1030,nf=1031;var rf=1033,gl=33776,_l=33777,xl=33778,vl=33779,Hh=35840,Gh=35841,Wh=35842,Xh=35843,Yh=36196,qh=37492,Zh=37496,Jh=37808,$h=37809,Kh=37810,Qh=37811,jh=37812,tu=37813,eu=37814,nu=37815,iu=37816,ru=37817,su=37818,ou=37819,au=37820,lu=37821,yl=36492,cu=36494,hu=36495,dm=36283,uu=36284,fu=36285,du=36286;var Ml=2300,pu=2301,Jc=2302,qd=2400,Zd=2401,Jd=2402;var P0=3200,I0=3201;var pm=0,D0=1,pr="",tn="srgb",Ks="srgb-linear",Zl="linear",pe="srgb";var Ms=7680;var $d=519,L0=512,U0=513,N0=514,mm=515,O0=516,F0=517,B0=518,z0=519,Kd=35044;var Qd="300 es",Vi=2e3,Sl=2001,xr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let i=this._listeners[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var $c=Math.PI/180,mu=180/Math.PI;function na(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[r&255]+an[r>>8&255]+an[r>>16&255]+an[r>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function en(r,t,e){return Math.max(t,Math.min(e,r))}function k0(r,t){return(r%t+t)%t}function Kc(r,t,e){return(1-e)*r+e*t}function Ro(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Dn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var jt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],M=i[1],S=i[4],x=i[7],C=i[2],T=i[5],E=i[8];return s[0]=o*g+a*M+l*C,s[3]=o*m+a*S+l*T,s[6]=o*p+a*x+l*E,s[1]=c*g+h*M+d*C,s[4]=c*m+h*S+d*T,s[7]=c*p+h*x+d*E,s[2]=u*g+f*M+_*C,s[5]=u*m+f*S+_*T,s[8]=u*p+f*x+_*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*s,f=c*s-o*l,_=e*d+n*u+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/_;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Qc.makeScale(t,e)),this}rotate(t){return this.premultiply(Qc.makeRotation(-t)),this}translate(t,e){return this.premultiply(Qc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Qc=new Jt;function gm(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Go(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function V0(){let r=Go("canvas");return r.style.display="block",r}var jd={};function Bo(r){r in jd||(jd[r]=!0,console.warn(r))}function H0(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function G0(r){let t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function W0(r){let t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var ae={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===pe&&(r.r=Hi(r.r),r.g=Hi(r.g),r.b=Hi(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===pe&&(r.r=zs(r.r),r.g=zs(r.g),r.b=zs(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===pr?Zl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function zs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var tp=[.64,.33,.3,.6,.15,.06],ep=[.2126,.7152,.0722],np=[.3127,.329],ip=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),rp=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[Ks]:{primaries:tp,whitePoint:np,transfer:Zl,toXYZ:ip,fromXYZ:rp,luminanceCoefficients:ep,workingColorSpaceConfig:{unpackColorSpace:tn},outputColorSpaceConfig:{drawingBufferColorSpace:tn}},[tn]:{primaries:tp,whitePoint:np,transfer:pe,toXYZ:ip,fromXYZ:rp,luminanceCoefficients:ep,outputColorSpaceConfig:{drawingBufferColorSpace:tn}}});var Ss,gu=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ss===void 0&&(Ss=Go("canvas")),Ss.width=t.width,Ss.height=t.height;let n=Ss.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ss}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Go("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Hi(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hi(e[n]/255)*255):e[n]=Hi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},X0=0,bl=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:X0++}),this.uuid=na(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(jc(i[o].image)):s.push(jc(i[o]))}else s=jc(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function jc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?gu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Y0=0,hn=class r extends xr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Gr,i=Gr,s=ti,o=Wr,a=di,l=Gi,c=r.DEFAULT_ANISOTROPY,h=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Y0++}),this.uuid=na(),this.name="",this.source=new bl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new jt(0,0),this.repeat=new jt(1,1),this.center=new jt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==rm)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kh:t.x=t.x-Math.floor(t.x);break;case Gr:t.x=t.x<0?0:1;break;case Vh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kh:t.y=t.y-Math.floor(t.y);break;case Gr:t.y=t.y<0?0:1;break;case Vh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=rm;hn.DEFAULT_ANISOTROPY=1;var me=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,x=(f+1)/2,C=(p+1)/2,T=(h+u)/4,E=(d+g)/4,R=(_+m)/4;return S>x&&S>C?S<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(S),i=T/n,s=E/n):x>C?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=T/i,s=R/i):C<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(C),n=E/s,i=R/s),this.set(n,i,s,e),this}let M=Math.sqrt((m-_)*(m-_)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-_)/M,this.y=(d-g)/M,this.z=(u-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_u=class extends xr{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new me(0,0,t,e),this.scissorTest=!1,this.viewport=new me(0,0,t,e);let i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new hn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new bl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Yn=class extends _u{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},wl=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xu=class extends hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Gr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var vr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=s[o+0],f=s[o+1],_=s[o+2],g=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=u,t[e+1]=f,t[e+2]=_,t[e+3]=g;return}if(d!==g||l!==u||c!==f||h!==_){let m=1-a,p=l*u+c*f+h*_+d*g,M=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){let C=Math.sqrt(S),T=Math.atan2(C,p*M);m=Math.sin(m*T)/C,a=Math.sin(a*T)/C}let x=a*M;if(l=l*m+u*x,c=c*m+f*x,h=h*m+_*x,d=d*m+g*x,m===1-a){let C=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=C,c*=C,h*=C,d*=C}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=s[o],u=s[o+1],f=s[o+2],_=s[o+3];return t[e]=a*_+h*d+l*f-c*u,t[e+1]=l*_+h*u+c*d-a*f,t[e+2]=c*_+h*f+a*u-l*d,t[e+3]=h*_-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(s/2),u=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"YXZ":this._x=u*h*d+c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"ZXY":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d-u*f*_;break;case"ZYX":this._x=u*h*d-c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d+u*f*_;break;case"YZX":this._x=u*h*d+c*f*_,this._y=c*f*d+u*h*_,this._z=c*h*_-u*f*d,this._w=c*h*d-u*f*_;break;case"XZY":this._x=u*h*d-c*f*_,this._y=c*f*d-u*h*_,this._z=c*h*_+u*f*d,this._w=c*h*d+u*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(en(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,i=this._y,s=this._z,o=this._w,a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;let l=1-a*a;if(l<=Number.EPSILON){let f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,a),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=o*d+this._w*u,this._x=n*d+this._x*u,this._y=i*d+this._y*u,this._z=s*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},O=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(sp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(sp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),d=2*(s*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-s*d,this.z=i+l*d+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return th.copy(this).projectOnVector(t),this.sub(th)}reflect(t){return this.sub(th.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(en(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},th=new O,sp=new vr,Wi=class{constructor(t=new O(1/0,1/0,1/0),e=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hi):hi.fromBufferAttribute(s,o),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ga.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ga.copy(n.boundingBox)),Ga.applyMatrix4(t.matrixWorld),this.union(Ga)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Po),Wa.subVectors(this.max,Po),bs.subVectors(t.a,Po),ws.subVectors(t.b,Po),Es.subVectors(t.c,Po),lr.subVectors(ws,bs),cr.subVectors(Es,ws),Lr.subVectors(bs,Es);let e=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Lr.z,Lr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Lr.z,0,-Lr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Lr.y,Lr.x,0];return!eh(e,bs,ws,Es,Wa)||(e=[1,0,0,0,1,0,0,0,1],!eh(e,bs,ws,Es,Wa))?!1:(Xa.crossVectors(lr,cr),e=[Xa.x,Xa.y,Xa.z],eh(e,bs,ws,Es,Wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},Li=[new O,new O,new O,new O,new O,new O,new O,new O],hi=new O,Ga=new Wi,bs=new O,ws=new O,Es=new O,lr=new O,cr=new O,Lr=new O,Po=new O,Wa=new O,Xa=new O,Ur=new O;function eh(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ur.fromArray(r,s);let a=i.x*Math.abs(Ur.x)+i.y*Math.abs(Ur.y)+i.z*Math.abs(Ur.z),l=t.dot(Ur),c=e.dot(Ur),h=n.dot(Ur);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var q0=new Wi,Io=new O,nh=new O,Xi=class{constructor(t=new O,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):q0.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);let e=Io.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Io,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(nh)),this.expandByPoint(Io.copy(t.center).sub(nh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Ui=new O,ih=new O,Ya=new O,hr=new O,rh=new O,qa=new O,sh=new O,Wo=class{constructor(t=new O,e=new O(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ui)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ui.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ui.copy(this.origin).addScaledVector(this.direction,e),Ui.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ih.copy(t).add(e).multiplyScalar(.5),Ya.copy(e).sub(t).normalize(),hr.copy(this.origin).sub(ih);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ya),a=hr.dot(this.direction),l=-hr.dot(Ya),c=hr.lengthSq(),h=Math.abs(1-o*o),d,u,f,_;if(h>0)if(d=o*l-a,u=o*a-l,_=s*h,d>=0)if(u>=-_)if(u<=_){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-_?(d=Math.max(0,-(-o*s+a)),u=d>0?-s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c):u<=_?(d=0,u=Math.min(Math.max(-s,-l),s),f=u*(u+2*l)+c):(d=Math.max(0,-(o*s+a)),u=d>0?s:Math.min(Math.max(-s,-l),s),f=-d*d+u*(u+2*l)+c);else u=o>0?-s:s,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ih).addScaledVector(Ya,u),f}intersectSphere(t,e){Ui.subVectors(t.center,this.origin);let n=Ui.dot(this.direction),i=Ui.dot(Ui)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(s=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(s=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ui)!==null}intersectTriangle(t,e,n,i,s){rh.subVectors(e,t),qa.subVectors(n,t),sh.crossVectors(rh,qa);let o=this.direction.dot(sh),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hr.subVectors(this.origin,t);let l=a*this.direction.dot(qa.crossVectors(hr,qa));if(l<0)return null;let c=a*this.direction.dot(rh.cross(hr));if(c<0||l+c>o)return null;let h=-a*hr.dot(sh);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ge=class r{constructor(t,e,n,i,s,o,a,l,c,h,d,u,f,_,g,m){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,d,u,f,_,g,m)}set(t,e,n,i,s,o,a,l,c,h,d,u,f,_,g,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,i=1/Ts.setFromMatrixColumn(t,0).length(),s=1/Ts.setFromMatrixColumn(t,1).length(),o=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),d=Math.sin(s);if(t.order==="XYZ"){let u=o*h,f=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+_*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=_+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,_=c*h,g=c*d;e[0]=u+g*a,e[4]=_*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-_,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,_=c*h,g=c*d;e[0]=u-g*a,e[4]=-o*d,e[8]=_+f*a,e[1]=f+_*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,_=a*h,g=a*d;e[0]=l*h,e[4]=_*c-f,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=f*c-_,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=_*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+_,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*l,f=o*c,_=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-_,e[2]=_*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Z0,t,J0)}lookAt(t,e,n){let i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),ur.crossVectors(n,Gn),ur.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),ur.crossVectors(n,Gn)),ur.normalize(),Za.crossVectors(Gn,ur),i[0]=ur.x,i[4]=Za.x,i[8]=Gn.x,i[1]=ur.y,i[5]=Za.y,i[9]=Gn.y,i[2]=ur.z,i[6]=Za.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],M=n[3],S=n[7],x=n[11],C=n[15],T=i[0],E=i[4],R=i[8],y=i[12],v=i[1],P=i[5],N=i[9],B=i[13],X=i[2],J=i[6],W=i[10],Z=i[14],H=i[3],et=i[7],I=i[11],ht=i[15];return s[0]=o*T+a*v+l*X+c*H,s[4]=o*E+a*P+l*J+c*et,s[8]=o*R+a*N+l*W+c*I,s[12]=o*y+a*B+l*Z+c*ht,s[1]=h*T+d*v+u*X+f*H,s[5]=h*E+d*P+u*J+f*et,s[9]=h*R+d*N+u*W+f*I,s[13]=h*y+d*B+u*Z+f*ht,s[2]=_*T+g*v+m*X+p*H,s[6]=_*E+g*P+m*J+p*et,s[10]=_*R+g*N+m*W+p*I,s[14]=_*y+g*B+m*Z+p*ht,s[3]=M*T+S*v+x*X+C*H,s[7]=M*E+S*P+x*J+C*et,s[11]=M*R+S*N+x*W+C*I,s[15]=M*y+S*B+x*Z+C*ht,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],_=t[3],g=t[7],m=t[11],p=t[15];return _*(+s*l*d-i*c*d-s*a*u+n*c*u+i*a*f-n*l*f)+g*(+e*l*f-e*c*u+s*o*u-i*o*f+i*c*h-s*l*h)+m*(+e*c*d-e*a*f-s*o*d+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*d+e*a*u+i*o*d-n*o*u+n*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],_=t[12],g=t[13],m=t[14],p=t[15],M=d*m*c-g*u*c+g*l*f-a*m*f-d*l*p+a*u*p,S=_*u*c-h*m*c-_*l*f+o*m*f+h*l*p-o*u*p,x=h*g*c-_*d*c+_*a*f-o*g*f-h*a*p+o*d*p,C=_*d*l-h*g*l-_*a*u+o*g*u+h*a*m-o*d*m,T=e*M+n*S+i*x+s*C;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/T;return t[0]=M*E,t[1]=(g*u*s-d*m*s-g*i*f+n*m*f+d*i*p-n*u*p)*E,t[2]=(a*m*s-g*l*s+g*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(d*l*s-a*u*s-d*i*c+n*u*c+a*i*f-n*l*f)*E,t[4]=S*E,t[5]=(h*m*s-_*u*s+_*i*f-e*m*f-h*i*p+e*u*p)*E,t[6]=(_*l*s-o*m*s-_*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*u*s-h*l*s+h*i*c-e*u*c-o*i*f+e*l*f)*E,t[8]=x*E,t[9]=(_*d*s-h*g*s-_*n*f+e*g*f+h*n*p-e*d*p)*E,t[10]=(o*g*s-_*a*s+_*n*c-e*g*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*d*s-h*n*c+e*d*c+o*n*f-e*a*f)*E,t[12]=C*E,t[13]=(h*g*i-_*d*i+_*n*u-e*g*u-h*n*m+e*d*m)*E,t[14]=(_*a*i-o*g*i-_*n*l+e*g*l+o*n*m-e*a*m)*E,t[15]=(o*d*i-h*a*i+h*n*l-e*d*l-o*n*u+e*a*u)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,d=a+a,u=s*c,f=s*h,_=s*d,g=o*h,m=o*d,p=a*d,M=l*c,S=l*h,x=l*d,C=n.x,T=n.y,E=n.z;return i[0]=(1-(g+p))*C,i[1]=(f+x)*C,i[2]=(_-S)*C,i[3]=0,i[4]=(f-x)*T,i[5]=(1-(u+p))*T,i[6]=(m+M)*T,i[7]=0,i[8]=(_+S)*E,i[9]=(m-M)*E,i[10]=(1-(u+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements,s=Ts.set(i[0],i[1],i[2]).length(),o=Ts.set(i[4],i[5],i[6]).length(),a=Ts.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],ui.copy(this);let c=1/s,h=1/o,d=1/a;return ui.elements[0]*=c,ui.elements[1]*=c,ui.elements[2]*=c,ui.elements[4]*=h,ui.elements[5]*=h,ui.elements[6]*=h,ui.elements[8]*=d,ui.elements[9]*=d,ui.elements[10]*=d,e.setFromRotationMatrix(ui),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Vi){let l=this.elements,c=2*s/(e-t),h=2*s/(n-i),d=(e+t)/(e-t),u=(n+i)/(n-i),f,_;if(a===Vi)f=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Sl)f=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Vi){let l=this.elements,c=1/(e-t),h=1/(n-i),d=1/(o-s),u=(e+t)*c,f=(n+i)*h,_,g;if(a===Vi)_=(o+s)*d,g=-2*d;else if(a===Sl)_=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ts=new O,ui=new ge,Z0=new O(0,0,0),J0=new O(1,1,1),ur=new O,Za=new O,Gn=new O,op=new ge,ap=new vr,bi=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(en(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-en(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(en(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-en(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(en(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-en(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return op.makeRotationFromQuaternion(t),this.setFromRotationMatrix(op,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ap.setFromEuler(this),this.setFromQuaternion(ap,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bi.DEFAULT_ORDER="XYZ";var El=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},$0=0,lp=new O,As=new vr,Ni=new ge,Ja=new O,Do=new O,K0=new O,Q0=new vr,cp=new O(1,0,0),hp=new O(0,1,0),up=new O(0,0,1),fp={type:"added"},j0={type:"removed"},Cs={type:"childadded",child:null},oh={type:"childremoved",child:null},Je=class r extends xr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$0++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new O,e=new bi,n=new vr,i=new O(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ge},normalMatrix:{value:new Jt}}),this.matrix=new ge,this.matrixWorld=new ge,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new El,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.multiply(As),this}rotateOnWorldAxis(t,e){return As.setFromAxisAngle(t,e),this.quaternion.premultiply(As),this}rotateX(t){return this.rotateOnAxis(cp,t)}rotateY(t){return this.rotateOnAxis(hp,t)}rotateZ(t){return this.rotateOnAxis(up,t)}translateOnAxis(t,e){return lp.copy(t).applyQuaternion(this.quaternion),this.position.add(lp.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cp,t)}translateY(t){return this.translateOnAxis(hp,t)}translateZ(t){return this.translateOnAxis(up,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ni.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ja.copy(t):Ja.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ni.lookAt(Do,Ja,this.up):Ni.lookAt(Ja,Do,this.up),this.quaternion.setFromRotationMatrix(Ni),i&&(Ni.extractRotation(i.matrixWorld),As.setFromRotationMatrix(Ni),this.quaternion.premultiply(As.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fp),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(j0),oh.child=t,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ni.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ni.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ni),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fp),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,K0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,Q0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];s(t.shapes,d)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),_=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};Je.DEFAULT_UP=new O(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fi=new O,Oi=new O,ah=new O,Fi=new O,Rs=new O,Ps=new O,dp=new O,lh=new O,ch=new O,hh=new O,uh=new me,fh=new me,dh=new me,Vr=class r{constructor(t=new O,e=new O,n=new O){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),fi.subVectors(t,e),i.cross(fi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){fi.subVectors(i,e),Oi.subVectors(n,e),ah.subVectors(t,e);let o=fi.dot(fi),a=fi.dot(Oi),l=fi.dot(ah),c=Oi.dot(Oi),h=Oi.dot(ah),d=o*c-a*a;if(d===0)return s.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,_=(o*h-a*l)*u;return s.set(1-f-_,_,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Fi)===null?!1:Fi.x>=0&&Fi.y>=0&&Fi.x+Fi.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Fi.x),l.addScaledVector(o,Fi.y),l.addScaledVector(a,Fi.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return uh.setScalar(0),fh.setScalar(0),dh.setScalar(0),uh.fromBufferAttribute(t,e),fh.fromBufferAttribute(t,n),dh.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(uh,s.x),o.addScaledVector(fh,s.y),o.addScaledVector(dh,s.z),o}static isFrontFacing(t,e,n,i){return fi.subVectors(n,e),Oi.subVectors(t,e),fi.cross(Oi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return fi.subVectors(this.c,this.b),Oi.subVectors(this.a,this.b),fi.cross(Oi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Rs.subVectors(i,n),Ps.subVectors(s,n),lh.subVectors(t,n);let l=Rs.dot(lh),c=Ps.dot(lh);if(l<=0&&c<=0)return e.copy(n);ch.subVectors(t,i);let h=Rs.dot(ch),d=Ps.dot(ch);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Rs,o);hh.subVectors(t,s);let f=Rs.dot(hh),_=Ps.dot(hh);if(_>=0&&f<=_)return e.copy(s);let g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),e.copy(n).addScaledVector(Ps,a);let m=h*_-f*d;if(m<=0&&d-h>=0&&f-_>=0)return dp.subVectors(s,i),a=(d-h)/(d-h+(f-_)),e.copy(i).addScaledVector(dp,a);let p=1/(m+g+u);return o=g*p,a=u*p,e.copy(n).addScaledVector(Rs,o).addScaledVector(Ps,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_m={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},$a={h:0,s:0,l:0};function ph(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=tn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=ae.workingColorSpace){return this.r=t,this.g=e,this.b=n,ae.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=ae.workingColorSpace){if(t=k0(t,1),e=en(e,0,1),n=en(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=ph(o,s,t+1/3),this.g=ph(o,s,t),this.b=ph(o,s,t-1/3)}return ae.toWorkingColorSpace(this,i),this}setStyle(t,e=tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=tn){let n=_m[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hi(t.r),this.g=Hi(t.g),this.b=Hi(t.b),this}copyLinearToSRGB(t){return this.r=zs(t.r),this.g=zs(t.g),this.b=zs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=tn){return ae.fromWorkingColorSpace(ln.copy(this),t),Math.round(en(ln.r*255,0,255))*65536+Math.round(en(ln.g*255,0,255))*256+Math.round(en(ln.b*255,0,255))}getHexString(t=tn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(ln.copy(this),e);let n=ln.r,i=ln.g,s=ln.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-s)/d+(i<s?6:0);break;case i:l=(s-n)/d+2;break;case s:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=tn){ae.fromWorkingColorSpace(ln.copy(this),t);let e=ln.r,n=ln.g,i=ln.b;return t!==tn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(fr),this.setHSL(fr.h+t,fr.s+e,fr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(fr),t.getHSL($a);let n=Kc(fr.h,$a.h,e),i=Kc(fr.s,$a.s,e),s=Kc(fr.l,$a.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ln=new Bt;Bt.NAMES=_m;var tx=0,Yi=class extends xr{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=na(),this.name="",this.blending=Fs,this.side=_r,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Vs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ms,this.stencilZFail=Ms,this.stencilZPass=Ms,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==_r&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ph&&(n.blendSrc=this.blendSrc),this.blendDst!==Ih&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Vs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==$d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ms&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ms&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ms&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yr=class extends Yi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.combine=im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ze=new O,Ka=new jt,Mn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Kd,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ka.fromBufferAttribute(this,e),Ka.applyMatrix3(t),this.setXY(e,Ka.x,Ka.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix3(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyMatrix4(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.applyNormalMatrix(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ze.fromBufferAttribute(this,e),ze.transformDirection(t),this.setXYZ(e,ze.x,ze.y,ze.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ro(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Dn(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ro(e,this.array)),e}setX(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ro(e,this.array)),e}setY(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ro(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ro(e,this.array)),e}setW(t,e){return this.normalized&&(e=Dn(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),i=Dn(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Dn(e,this.array),n=Dn(n,this.array),i=Dn(i,this.array),s=Dn(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Kd&&(t.usage=this.usage),t}};var Tl=class extends Mn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Al=class extends Mn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Ge=class extends Mn{constructor(t,e,n){super(new Float32Array(t),e,n)}},ex=0,jn=new ge,mh=new Je,Is=new O,Wn=new Wi,Lo=new Wi,Ze=new O,Un=class r extends xr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ex++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(gm(t)?Al:Tl)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Jt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return jn.makeRotationFromQuaternion(t),this.applyMatrix4(jn),this}rotateX(t){return jn.makeRotationX(t),this.applyMatrix4(jn),this}rotateY(t){return jn.makeRotationY(t),this.applyMatrix4(jn),this}rotateZ(t){return jn.makeRotationZ(t),this.applyMatrix4(jn),this}translate(t,e,n){return jn.makeTranslation(t,e,n),this.applyMatrix4(jn),this}scale(t,e,n){return jn.makeScale(t,e,n),this.applyMatrix4(jn),this}lookAt(t){return mh.lookAt(t),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ge(n,3))}else{for(let n=0,i=e.count;n<i;n++){let s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Wn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Wn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Wn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Wn.min),this.boundingBox.expandByPoint(Wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(t){let n=this.boundingSphere.center;if(Wn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ze.addVectors(Wn.min,Lo.min),Wn.expandByPoint(Ze),Ze.addVectors(Wn.max,Lo.max),Wn.expandByPoint(Ze)):(Wn.expandByPoint(Lo.min),Wn.expandByPoint(Lo.max))}Wn.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Ze.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Ze));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Ze.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(t,c),Ze.add(Is)),i=Math.max(i,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new O,l[R]=new O;let c=new O,h=new O,d=new O,u=new jt,f=new jt,_=new jt,g=new O,m=new O;function p(R,y,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),d.fromBufferAttribute(n,v),u.fromBufferAttribute(s,R),f.fromBufferAttribute(s,y),_.fromBufferAttribute(s,v),h.sub(c),d.sub(c),f.sub(u),_.sub(u);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(d,-f.y).multiplyScalar(P),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[R].add(g),a[y].add(g),a[v].add(g),l[R].add(m),l[y].add(m),l[v].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let R=0,y=M.length;R<y;++R){let v=M[R],P=v.start,N=v.count;for(let B=P,X=P+N;B<X;B+=3)p(t.getX(B+0),t.getX(B+1),t.getX(B+2))}let S=new O,x=new O,C=new O,T=new O;function E(R){C.fromBufferAttribute(i,R),T.copy(C);let y=a[R];S.copy(y),S.sub(C.multiplyScalar(C.dot(y))).normalize(),x.crossVectors(T,y);let P=x.dot(l[R])<0?-1:1;o.setXYZW(R,S.x,S.y,S.z,P)}for(let R=0,y=M.length;R<y;++R){let v=M[R],P=v.start,N=v.count;for(let B=P,X=P+N;B<X;B+=3)E(t.getX(B+0)),E(t.getX(B+1)),E(t.getX(B+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Mn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new O,s=new O,o=new O,a=new O,l=new O,c=new O,h=new O,d=new O;if(t)for(let u=0,f=t.count;u<f;u+=3){let _=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,_),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),s.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,s),d.subVectors(i,s),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)u[_++]=c[f++]}return new Mn(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],d=s[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},pp=new ge,Nr=new Wo,Qa=new Xi,mp=new O,ja=new O,tl=new O,el=new O,gh=new O,nl=new O,gp=new O,il=new O,Ee=class extends Je{constructor(t=new Un,e=new yr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){nl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],d=s[l];h!==0&&(gh.fromBufferAttribute(d,t),o?nl.addScaledVector(gh,h):nl.addScaledVector(gh.sub(e),h))}e.add(nl)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qa.copy(n.boundingSphere),Qa.applyMatrix4(s),Nr.copy(t.ray).recast(t.near),!(Qa.containsPoint(Nr.origin)===!1&&(Nr.intersectSphere(Qa,mp)===null||Nr.origin.distanceToSquared(mp)>(t.far-t.near)**2))&&(pp.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(pp),!(n.boundingBox!==null&&Nr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,d=s.attributes.normal,u=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){let m=u[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,C=S;x<C;x+=3){let T=a.getX(x),E=a.getX(x+1),R=a.getX(x+2);i=rl(this,p,t,n,c,h,d,T,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=a.getX(m),S=a.getX(m+1),x=a.getX(m+2);i=rl(this,o,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=u.length;_<g;_++){let m=u[_],p=o[m.materialIndex],M=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=M,C=S;x<C;x+=3){let T=x,E=x+1,R=x+2;i=rl(this,p,t,n,c,h,d,T,E,R),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){let M=m,S=m+1,x=m+2;i=rl(this,o,t,n,c,h,d,M,S,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function nx(r,t,e,n,i,s,o,a){let l;if(t.side===Ln?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===_r,a),l===null)return null;il.copy(a),il.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(il);return c<e.near||c>e.far?null:{distance:c,point:il.clone(),object:r}}function rl(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,ja),r.getVertexPosition(l,tl),r.getVertexPosition(c,el);let h=nx(r,t,e,n,ja,tl,el,gp);if(h){let d=new O;Vr.getBarycoord(gp,ja,tl,el,d),i&&(h.uv=Vr.getInterpolatedAttribute(i,a,l,c,d,new jt)),s&&(h.uv1=Vr.getInterpolatedAttribute(s,a,l,c,d,new jt)),o&&(h.normal=Vr.getInterpolatedAttribute(o,a,l,c,d,new O),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new O,materialIndex:0};Vr.getNormal(ja,tl,el,u.normal),h.face=u,h.barycoord=d}return h}var Sn=class r extends Un{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;_("z","y","x",-1,-1,n,e,t,o,s,0),_("z","y","x",1,-1,n,e,-t,o,s,1),_("x","z","y",1,1,t,n,e,i,o,2),_("x","z","y",1,-1,t,n,-e,i,o,3),_("x","y","z",1,-1,t,e,n,i,s,4),_("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(h,3)),this.setAttribute("uv",new Ge(d,2));function _(g,m,p,M,S,x,C,T,E,R,y){let v=x/E,P=C/R,N=x/2,B=C/2,X=T/2,J=E+1,W=R+1,Z=0,H=0,et=new O;for(let I=0;I<W;I++){let ht=I*P-B;for(let Dt=0;Dt<J;Dt++){let Kt=Dt*v-N;et[g]=Kt*M,et[m]=ht*S,et[p]=X,c.push(et.x,et.y,et.z),et[g]=0,et[m]=0,et[p]=T>0?1:-1,h.push(et.x,et.y,et.z),d.push(Dt/E),d.push(1-I/R),Z+=1}}for(let I=0;I<R;I++)for(let ht=0;ht<E;ht++){let Dt=u+ht+J*I,Kt=u+ht+J*(I+1),q=u+(ht+1)+J*(I+1),tt=u+(ht+1)+J*I;l.push(Dt,Kt,tt),l.push(Kt,q,tt),H+=6}a.addGroup(f,H,y),f+=H,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ys(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function yn(r){let t={};for(let e=0;e<r.length;e++){let n=Ys(r[e]);for(let i in n)t[i]=n[i]}return t}function ix(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function xm(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}var rx={clone:Ys,merge:yn},sx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nn=class extends Yi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sx,this.fragmentShader=ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=ix(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Cl=class extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ge,this.projectionMatrix=new ge,this.projectionMatrixInverse=new ge,this.coordinateSystem=Vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},dr=new O,_p=new jt,xp=new jt,cn=class extends Cl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=mu*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan($c*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return mu*2*Math.atan(Math.tan($c*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(dr.x,dr.y).multiplyScalar(-t/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-t/dr.z)}getViewSize(t,e){return this.getViewBounds(t,_p,xp),e.subVectors(xp,_p)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan($c*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ds=-90,Ls=1,vu=class extends Je{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(Ds,Ls,t,e);i.layers=this.layers,this.add(i);let s=new cn(Ds,Ls,t,e);s.layers=this.layers,this.add(s);let o=new cn(Ds,Ls,t,e);o.layers=this.layers,this.add(o);let a=new cn(Ds,Ls,t,e);a.layers=this.layers,this.add(a);let l=new cn(Ds,Ls,t,e);l.layers=this.layers,this.add(l);let c=new cn(Ds,Ls,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Sl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},Rl=class extends hn{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Hs,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},yu=class extends Yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Rl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ti}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Sn(5,5,5),s=new Nn({name:"CubemapFromEquirect",uniforms:Ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ln,blending:mr});s.uniforms.tEquirect.value=e;let o=new Ee(i,s),a=e.minFilter;return e.minFilter===Wr&&(e.minFilter=ti),new vu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},_h=new O,ax=new O,lx=new Jt,zi=class{constructor(t=new O(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=_h.subVectors(n,e).cross(ax.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(_h),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||lx.getNormalMatrix(t),i=this.coplanarPoint(_h).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Or=new Xi,sl=new O,Xo=class{constructor(t=new zi,e=new zi,n=new zi,i=new zi,s=new zi,o=new zi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi){let n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],d=i[6],u=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],M=i[13],S=i[14],x=i[15];if(n[0].setComponents(l-s,u-c,m-f,x-p).normalize(),n[1].setComponents(l+s,u+c,m+f,x+p).normalize(),n[2].setComponents(l+o,u+h,m+_,x+M).normalize(),n[3].setComponents(l-o,u-h,m-_,x-M).normalize(),n[4].setComponents(l-a,u-d,m-g,x-S).normalize(),e===Vi)n[5].setComponents(l+a,u+d,m+g,x+S).normalize();else if(e===Sl)n[5].setComponents(a,d,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Or.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Or.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Or)}intersectsSprite(t){return Or.center.set(0,0,0),Or.radius=.7071067811865476,Or.applyMatrix4(t.matrixWorld),this.intersectsSphere(Or)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(sl.x=i.normal.x>0?t.max.x:t.min.x,sl.y=i.normal.y>0?t.max.y:t.min.y,sl.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sl)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function vm(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function cx(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(r.bindBuffer(c,a),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,_)=>f.start-_.start);let u=0;for(let f=1;f<d.length;f++){let _=d[u],g=d[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,_=d.length;f<_;f++){let g=d[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Yr=class r extends Un{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){let M=p*u-o;for(let S=0;S<c;S++){let x=S*d-s;_.push(x,-M,0),g.push(0,0,1),m.push(S/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let S=M+c*p,x=M+c*(p+1),C=M+1+c*(p+1),T=M+1+c*p;f.push(S,x,T),f.push(x,C,T)}this.setIndex(f),this.setAttribute("position",new Ge(_,3)),this.setAttribute("normal",new Ge(g,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}},hx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ux=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,fx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,px=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,vx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Sx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Px=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ix=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Lx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ux=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ox=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Fx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,zx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Vx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Wx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Yx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$x=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ev=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,nv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,iv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,rv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ov=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,av=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lv=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hv=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,uv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fv=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dv=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pv=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mv=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,gv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_v=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,vv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ev=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Tv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Av=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Cv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Rv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Iv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Lv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Uv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ov=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Fv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Bv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,zv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Wv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Xv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Yv=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,qv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zv=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$v=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Kv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ty=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,ey=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ny=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,iy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ry=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,sy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,oy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ay=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ly=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,cy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hy=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,py=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,my=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,gy=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_y=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xy=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Sy=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,by=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ey=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ty=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ay=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Cy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ry=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Py=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Iy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ly=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Oy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,By=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ky=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Vy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$t={alphahash_fragment:hx,alphahash_pars_fragment:ux,alphamap_fragment:fx,alphamap_pars_fragment:dx,alphatest_fragment:px,alphatest_pars_fragment:mx,aomap_fragment:gx,aomap_pars_fragment:_x,batching_pars_vertex:xx,batching_vertex:vx,begin_vertex:yx,beginnormal_vertex:Mx,bsdfs:Sx,iridescence_fragment:bx,bumpmap_pars_fragment:wx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Tx,clipping_planes_pars_vertex:Ax,clipping_planes_vertex:Cx,color_fragment:Rx,color_pars_fragment:Px,color_pars_vertex:Ix,color_vertex:Dx,common:Lx,cube_uv_reflection_fragment:Ux,defaultnormal_vertex:Nx,displacementmap_pars_vertex:Ox,displacementmap_vertex:Fx,emissivemap_fragment:Bx,emissivemap_pars_fragment:zx,colorspace_fragment:kx,colorspace_pars_fragment:Vx,envmap_fragment:Hx,envmap_common_pars_fragment:Gx,envmap_pars_fragment:Wx,envmap_pars_vertex:Xx,envmap_physical_pars_fragment:nv,envmap_vertex:Yx,fog_vertex:qx,fog_pars_vertex:Zx,fog_fragment:Jx,fog_pars_fragment:$x,gradientmap_pars_fragment:Kx,lightmap_pars_fragment:Qx,lights_lambert_fragment:jx,lights_lambert_pars_fragment:tv,lights_pars_begin:ev,lights_toon_fragment:iv,lights_toon_pars_fragment:rv,lights_phong_fragment:sv,lights_phong_pars_fragment:ov,lights_physical_fragment:av,lights_physical_pars_fragment:lv,lights_fragment_begin:cv,lights_fragment_maps:hv,lights_fragment_end:uv,logdepthbuf_fragment:fv,logdepthbuf_pars_fragment:dv,logdepthbuf_pars_vertex:pv,logdepthbuf_vertex:mv,map_fragment:gv,map_pars_fragment:_v,map_particle_fragment:xv,map_particle_pars_fragment:vv,metalnessmap_fragment:yv,metalnessmap_pars_fragment:Mv,morphinstance_vertex:Sv,morphcolor_vertex:bv,morphnormal_vertex:wv,morphtarget_pars_vertex:Ev,morphtarget_vertex:Tv,normal_fragment_begin:Av,normal_fragment_maps:Cv,normal_pars_fragment:Rv,normal_pars_vertex:Pv,normal_vertex:Iv,normalmap_pars_fragment:Dv,clearcoat_normal_fragment_begin:Lv,clearcoat_normal_fragment_maps:Uv,clearcoat_pars_fragment:Nv,iridescence_pars_fragment:Ov,opaque_fragment:Fv,packing:Bv,premultiplied_alpha_fragment:zv,project_vertex:kv,dithering_fragment:Vv,dithering_pars_fragment:Hv,roughnessmap_fragment:Gv,roughnessmap_pars_fragment:Wv,shadowmap_pars_fragment:Xv,shadowmap_pars_vertex:Yv,shadowmap_vertex:qv,shadowmask_pars_fragment:Zv,skinbase_vertex:Jv,skinning_pars_vertex:$v,skinning_vertex:Kv,skinnormal_vertex:Qv,specularmap_fragment:jv,specularmap_pars_fragment:ty,tonemapping_fragment:ey,tonemapping_pars_fragment:ny,transmission_fragment:iy,transmission_pars_fragment:ry,uv_pars_fragment:sy,uv_pars_vertex:oy,uv_vertex:ay,worldpos_vertex:ly,background_vert:cy,background_frag:hy,backgroundCube_vert:uy,backgroundCube_frag:fy,cube_vert:dy,cube_frag:py,depth_vert:my,depth_frag:gy,distanceRGBA_vert:_y,distanceRGBA_frag:xy,equirect_vert:vy,equirect_frag:yy,linedashed_vert:My,linedashed_frag:Sy,meshbasic_vert:by,meshbasic_frag:wy,meshlambert_vert:Ey,meshlambert_frag:Ty,meshmatcap_vert:Ay,meshmatcap_frag:Cy,meshnormal_vert:Ry,meshnormal_frag:Py,meshphong_vert:Iy,meshphong_frag:Dy,meshphysical_vert:Ly,meshphysical_frag:Uy,meshtoon_vert:Ny,meshtoon_frag:Oy,points_vert:Fy,points_frag:By,shadow_vert:zy,shadow_frag:ky,sprite_vert:Vy,sprite_frag:Hy},gt={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new jt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new jt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Mi={basic:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:yn([gt.common,gt.specularmap,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:yn([gt.common,gt.envmap,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.roughnessmap,gt.metalnessmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:yn([gt.common,gt.aomap,gt.lightmap,gt.emissivemap,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.gradientmap,gt.fog,gt.lights,{emissive:{value:new Bt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,gt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:yn([gt.points,gt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:yn([gt.common,gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:yn([gt.common,gt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:yn([gt.common,gt.bumpmap,gt.normalmap,gt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:yn([gt.sprite,gt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:yn([gt.common,gt.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:yn([gt.lights,gt.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Mi.physical={uniforms:yn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new jt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new jt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new jt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};var ol={r:0,b:0,g:0},Fr=new bi,Gy=new ge;function Wy(r,t,e,n,i,s,o){let a=new Bt(0),l=s===!0?0:1,c,h,d=null,u=0,f=null;function _(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function g(M){let S=!1,x=_(M);x===null?p(a,l):x&&x.isColor&&(p(x,1),S=!0);let C=r.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(M,S){let x=_(S);x&&(x.isCubeTexture||x.mapping===ql)?(h===void 0&&(h=new Ee(new Sn(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:Ys(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Ln,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,T,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Fr.copy(S.backgroundRotation),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Gy.makeRotationFromEuler(Fr)),h.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,(d!==x||u!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Ee(new Yr(2,2),new Nn({name:"BackgroundMaterial",uniforms:Ys(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:_r,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ae.getTransfer(x.colorSpace)!==pe,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||u!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=x,u=x.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,S){M.getRGB(ol,xm(r)),n.buffers.color.setClear(ol.r,ol.g,ol.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(M,S=1){a.set(M),l=S,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:g,addToRenderList:m}}function Xy(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=u(null),s=i,o=!1;function a(v,P,N,B,X){let J=!1,W=d(B,N,P);s!==W&&(s=W,c(s.object)),J=f(v,B,N,X),J&&_(v,B,N,X),X!==null&&t.update(X,r.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(v,P,N,B),X!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function d(v,P,N){let B=N.wireframe===!0,X=n[v.id];X===void 0&&(X={},n[v.id]=X);let J=X[P.id];J===void 0&&(J={},X[P.id]=J);let W=J[B];return W===void 0&&(W=u(l()),J[B]=W),W}function u(v){let P=[],N=[],B=[];for(let X=0;X<e;X++)P[X]=0,N[X]=0,B[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:v,attributes:{},index:null}}function f(v,P,N,B){let X=s.attributes,J=P.attributes,W=0,Z=N.getAttributes();for(let H in Z)if(Z[H].location>=0){let I=X[H],ht=J[H];if(ht===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(ht=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(ht=v.instanceColor)),I===void 0||I.attribute!==ht||ht&&I.data!==ht.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function _(v,P,N,B){let X={},J=P.attributes,W=0,Z=N.getAttributes();for(let H in Z)if(Z[H].location>=0){let I=J[H];I===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(I=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(I=v.instanceColor));let ht={};ht.attribute=I,I&&I.data&&(ht.data=I.data),X[H]=ht,W++}s.attributes=X,s.attributesNum=W,s.index=B}function g(){let v=s.newAttributes;for(let P=0,N=v.length;P<N;P++)v[P]=0}function m(v){p(v,0)}function p(v,P){let N=s.newAttributes,B=s.enabledAttributes,X=s.attributeDivisors;N[v]=1,B[v]===0&&(r.enableVertexAttribArray(v),B[v]=1),X[v]!==P&&(r.vertexAttribDivisor(v,P),X[v]=P)}function M(){let v=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==v[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function S(v,P,N,B,X,J,W){W===!0?r.vertexAttribIPointer(v,P,N,X,J):r.vertexAttribPointer(v,P,N,B,X,J)}function x(v,P,N,B){g();let X=B.attributes,J=N.getAttributes(),W=P.defaultAttributeValues;for(let Z in J){let H=J[Z];if(H.location>=0){let et=X[Z];if(et===void 0&&(Z==="instanceMatrix"&&v.instanceMatrix&&(et=v.instanceMatrix),Z==="instanceColor"&&v.instanceColor&&(et=v.instanceColor)),et!==void 0){let I=et.normalized,ht=et.itemSize,Dt=t.get(et);if(Dt===void 0)continue;let Kt=Dt.buffer,q=Dt.type,tt=Dt.bytesPerElement,_t=q===r.INT||q===r.UNSIGNED_INT||et.gpuType===Ku;if(et.isInterleavedBufferAttribute){let nt=et.data,bt=nt.stride,Tt=et.offset;if(nt.isInstancedInterleavedBuffer){for(let kt=0;kt<H.locationSize;kt++)p(H.location+kt,nt.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let kt=0;kt<H.locationSize;kt++)m(H.location+kt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let kt=0;kt<H.locationSize;kt++)S(H.location+kt,ht/H.locationSize,q,I,bt*tt,(Tt+ht/H.locationSize*kt)*tt,_t)}else{if(et.isInstancedBufferAttribute){for(let nt=0;nt<H.locationSize;nt++)p(H.location+nt,et.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let nt=0;nt<H.locationSize;nt++)m(H.location+nt);r.bindBuffer(r.ARRAY_BUFFER,Kt);for(let nt=0;nt<H.locationSize;nt++)S(H.location+nt,ht/H.locationSize,q,I,ht*tt,ht/H.locationSize*nt*tt,_t)}}else if(W!==void 0){let I=W[Z];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(H.location,I);break;case 3:r.vertexAttrib3fv(H.location,I);break;case 4:r.vertexAttrib4fv(H.location,I);break;default:r.vertexAttrib1fv(H.location,I)}}}}M()}function C(){R();for(let v in n){let P=n[v];for(let N in P){let B=P[N];for(let X in B)h(B[X].object),delete B[X];delete P[N]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let P=n[v.id];for(let N in P){let B=P[N];for(let X in B)h(B[X].object),delete B[X];delete P[N]}delete n[v.id]}function E(v){for(let P in n){let N=n[P];if(N[v.id]===void 0)continue;let B=N[v.id];for(let X in B)h(B[X].object),delete B[X];delete N[v.id]}}function R(){y(),o=!0,s!==i&&(s=i,c(s.object))}function y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:m,disableUnusedAttributes:M}}function Yy(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,d){d!==0&&(r.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function a(c,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let _=0;_<d;_++)f+=h[_];e.update(f,n,1)}function l(c,h,d,u){if(d===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],u[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let _=0;for(let g=0;g<d;g++)_+=h[g]*u[g];e.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function qy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==di&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let R=E===ea&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Gi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Si&&!R)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),S=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),C=_>0,T=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:C,maxSamples:T}}function Zy(r){let t=this,e=null,n=0,i=!1,s=!1,o=new zi,a=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let _=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||_===null||_.length===0||s&&!m)s?h(null):c();else{let M=s?0:n,S=M*4,x=p.clippingState||null;l.value=x,x=h(_,u,S,f);for(let C=0;C!==S;++C)x[C]=e[C];p.clippingState=x,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,_){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,_!==!0||m===null){let p=f+g*4,M=u.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,x=f;S!==g;++S,x+=4)o.copy(d[S]).applyMatrix4(M,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}function Jy(r){let t=new WeakMap;function e(o,a){return a===Vo?o.mapping=Hs:a===zh&&(o.mapping=Gs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Vo||a===zh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new yu(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var qs=class extends Cl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Os=4,vp=[.125,.215,.35,.446,.526,.582],Hr=20,xh=new qs,yp=new Bt,vh=null,yh=0,Mh=0,Sh=!1,zr=(1+Math.sqrt(5))/2,Us=1/zr,Mp=[new O(-zr,Us,0),new O(zr,Us,0),new O(-Us,0,zr),new O(Us,0,zr),new O(0,zr,-Us),new O(0,zr,Us),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)],Zs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){vh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vh,yh,Mh),this._renderer.xr.enabled=Sh,t.scissorTest=!1,al(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hs||t.mapping===Gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vh=this._renderer.getRenderTarget(),yh=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ti,minFilter:ti,generateMipmaps:!1,type:ea,format:di,colorSpace:Ks,depthBuffer:!1},i=Sp(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sp(t,e,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$y(s)),this._blurMaterial=Ky(s,t,e)}return i}_compileMaterial(t){let e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,xh)}_sceneToCubeUV(t,e,n,i){let a=new cn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(yp),h.toneMapping=gr,h.autoClear=!1;let f=new yr({name:"PMREM.Background",side:Ln,depthWrite:!1,depthTest:!1}),_=new Ee(new Sn,f),g=!1,m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,g=!0):(f.color.copy(yp),g=!0);for(let p=0;p<6;p++){let M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));let S=this._cubeSize;al(i,M*S,p>2?S:0,S,S),h.setRenderTarget(i),g&&h.render(_,a),h.render(t,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===Hs||t.mapping===Gs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wp()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bp());let s=i?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;al(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,xh)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodPlanes.length;for(let s=1;s<i;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Mp[(i-s-1)%Mp.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ee(this._lodPlanes[i],c),u=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Hr-1),g=s/_,m=isFinite(s)?1+Math.floor(h*g):Hr;m>Hr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Hr}`);let p=[],M=0;for(let E=0;E<Hr;++E){let R=E/g,y=Math.exp(-R*R/2);p.push(y),E===0?M+=y:E<m&&(M+=2*y)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;u.envMap.value=t.texture,u.samples.value=m,u.weights.value=p,u.latitudinal.value=o==="latitudinal",a&&(u.poleAxis.value=a);let{_lodMax:S}=this;u.dTheta.value=_,u.mipInt.value=S-n;let x=this._sizeLods[i],C=3*x*(i>S-Os?i-S+Os:0),T=4*(this._cubeSize-x);al(e,C,T,3*x,2*x),l.setRenderTarget(e),l.render(d,xh)}};function $y(r){let t=[],e=[],n=[],i=r,s=r-Os+1+vp.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Os?l=vp[o-r+Os-1]:o===0&&(l=0),n.push(l);let c=1/(a-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,_=6,g=3,m=2,p=1,M=new Float32Array(g*_*f),S=new Float32Array(m*_*f),x=new Float32Array(p*_*f);for(let T=0;T<f;T++){let E=T%3*2/3-1,R=T>2?0:-1,y=[E,R,0,E+2/3,R,0,E+2/3,R+1,0,E,R,0,E+2/3,R+1,0,E,R+1,0];M.set(y,g*_*T),S.set(u,m*_*T);let v=[T,T,T,T,T,T];x.set(v,p*_*T)}let C=new Un;C.setAttribute("position",new Mn(M,g)),C.setAttribute("uv",new Mn(S,m)),C.setAttribute("faceIndex",new Mn(x,p)),t.push(C),i>Os&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Sp(r,t,e){let n=new Yn(r,t,e);return n.texture.mapping=ql,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function al(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Ky(r,t,e){let n=new Float32Array(Hr),i=new O(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Hr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function bp(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function wp(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function sf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Qy(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Vo||l===zh,h=l===Hs||l===Gs;if(c||h){let d=t.get(a),u=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==u)return e===null&&(e=new Zs(r)),d=c?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Zs(r)),d=c?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",s),d.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function jy(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Bo("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function tM(r,t,e,n){let i={},s=new WeakMap;function o(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let _ in u.attributes)t.remove(u.attributes[_]);for(let _ in u.morphAttributes){let g=u.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)t.remove(g[m])}u.removeEventListener("dispose",o),delete i[u.id];let f=s.get(u);f&&(t.remove(f),s.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function a(d,u){return i[u.id]===!0||(u.addEventListener("dispose",o),i[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let _ in u)t.update(u[_],r.ARRAY_BUFFER);let f=d.morphAttributes;for(let _ in f){let g=f[_];for(let m=0,p=g.length;m<p;m++)t.update(g[m],r.ARRAY_BUFFER)}}function c(d){let u=[],f=d.index,_=d.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let S=0,x=M.length;S<x;S+=3){let C=M[S+0],T=M[S+1],E=M[S+2];u.push(C,T,T,E,E,C)}}else if(_!==void 0){let M=_.array;g=_.version;for(let S=0,x=M.length/3-1;S<x;S+=3){let C=S+0,T=S+1,E=S+2;u.push(C,T,T,E,E,C)}}else return;let m=new(gm(u)?Al:Tl)(u,1);m.version=g;let p=s.get(d);p&&t.remove(p),s.set(d,m)}function h(d){let u=s.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:h}}function eM(r,t,e){let n;function i(u){n=u}let s,o;function a(u){s=u.type,o=u.bytesPerElement}function l(u,f){r.drawElements(n,f,s,u*o),e.update(f,n,1)}function c(u,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,u*o,_),e.update(f,n,_))}function h(u,f,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,u,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];e.update(m,n,1)}function d(u,f,_,g){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<u.length;p++)c(u[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,u,0,g,0,_);let p=0;for(let M=0;M<_;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function nM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function iM(r,t,e){let n=new WeakMap,i=new me;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let y=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",y)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],S=0;f===!0&&(S=1),_===!0&&(S=2),g===!0&&(S=3);let x=a.attributes.position.count*S,C=1;x>t.maxTextureSize&&(C=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);let T=new Float32Array(x*C*4*d),E=new wl(T,x,C,d);E.type=Si,E.needsUpdate=!0;let R=S*4;for(let v=0;v<d;v++){let P=m[v],N=p[v],B=M[v],X=x*C*4*v;for(let J=0;J<P.count;J++){let W=J*R;f===!0&&(i.fromBufferAttribute(P,J),T[X+W+0]=i.x,T[X+W+1]=i.y,T[X+W+2]=i.z,T[X+W+3]=0),_===!0&&(i.fromBufferAttribute(N,J),T[X+W+4]=i.x,T[X+W+5]=i.y,T[X+W+6]=i.z,T[X+W+7]=0),g===!0&&(i.fromBufferAttribute(B,J),T[X+W+8]=i.x,T[X+W+9]=i.y,T[X+W+10]=i.z,T[X+W+11]=B.itemSize===4?i.w:1)}}u={count:d,texture:E,size:new jt(x,C)},n.set(a,u),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:s}}function rM(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,d=t.get(l,h);if(i.get(d)!==c&&(t.update(d),i.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let u=l.skeleton;i.get(u)!==c&&(u.update(),i.set(u,c))}return d}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var Pl=class extends hn{constructor(t,e,n,i,s,o,a,l,c,h=Bs){if(h!==Bs&&h!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Bs&&(n=Xr),n===void 0&&h===Xs&&(n=Ws),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Xn,this.minFilter=l!==void 0?l:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},ym=new hn,Ep=new Pl(1,1),Mm=new wl,Sm=new xu,bm=new Rl,Tp=[],Ap=[],Cp=new Float32Array(16),Rp=new Float32Array(9),Pp=new Float32Array(4);function Qs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Tp[i];if(s===void 0&&(s=new Float32Array(i),Tp[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function We(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Xe(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Jl(r,t){let e=Ap[t];e===void 0&&(e=new Int32Array(t),Ap[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function sM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function oM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2fv(this.addr,t),Xe(e,t)}}function aM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;r.uniform3fv(this.addr,t),Xe(e,t)}}function lM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4fv(this.addr,t),Xe(e,t)}}function cM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Pp.set(n),r.uniformMatrix2fv(this.addr,!1,Pp),Xe(e,n)}}function hM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Rp.set(n),r.uniformMatrix3fv(this.addr,!1,Rp),Xe(e,n)}}function uM(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Xe(e,t)}else{if(We(e,n))return;Cp.set(n),r.uniformMatrix4fv(this.addr,!1,Cp),Xe(e,n)}}function fM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function dM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2iv(this.addr,t),Xe(e,t)}}function pM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3iv(this.addr,t),Xe(e,t)}}function mM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4iv(this.addr,t),Xe(e,t)}}function gM(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function _M(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;r.uniform2uiv(this.addr,t),Xe(e,t)}}function xM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;r.uniform3uiv(this.addr,t),Xe(e,t)}}function vM(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;r.uniform4uiv(this.addr,t),Xe(e,t)}}function yM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ep.compareFunction=mm,s=Ep):s=ym,e.setTexture2D(t||s,i)}function MM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Sm,i)}function SM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||bm,i)}function bM(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||Mm,i)}function wM(r){switch(r){case 5126:return sM;case 35664:return oM;case 35665:return aM;case 35666:return lM;case 35674:return cM;case 35675:return hM;case 35676:return uM;case 5124:case 35670:return fM;case 35667:case 35671:return dM;case 35668:case 35672:return pM;case 35669:case 35673:return mM;case 5125:return gM;case 36294:return _M;case 36295:return xM;case 36296:return vM;case 35678:case 36198:case 36298:case 36306:case 35682:return yM;case 35679:case 36299:case 36307:return MM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return bM}}function EM(r,t){r.uniform1fv(this.addr,t)}function TM(r,t){let e=Qs(t,this.size,2);r.uniform2fv(this.addr,e)}function AM(r,t){let e=Qs(t,this.size,3);r.uniform3fv(this.addr,e)}function CM(r,t){let e=Qs(t,this.size,4);r.uniform4fv(this.addr,e)}function RM(r,t){let e=Qs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function PM(r,t){let e=Qs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function IM(r,t){let e=Qs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function DM(r,t){r.uniform1iv(this.addr,t)}function LM(r,t){r.uniform2iv(this.addr,t)}function UM(r,t){r.uniform3iv(this.addr,t)}function NM(r,t){r.uniform4iv(this.addr,t)}function OM(r,t){r.uniform1uiv(this.addr,t)}function FM(r,t){r.uniform2uiv(this.addr,t)}function BM(r,t){r.uniform3uiv(this.addr,t)}function zM(r,t){r.uniform4uiv(this.addr,t)}function kM(r,t,e){let n=this.cache,i=t.length,s=Jl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||ym,s[o])}function VM(r,t,e){let n=this.cache,i=t.length,s=Jl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Sm,s[o])}function HM(r,t,e){let n=this.cache,i=t.length,s=Jl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||bm,s[o])}function GM(r,t,e){let n=this.cache,i=t.length,s=Jl(e,i);We(n,s)||(r.uniform1iv(this.addr,s),Xe(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||Mm,s[o])}function WM(r){switch(r){case 5126:return EM;case 35664:return TM;case 35665:return AM;case 35666:return CM;case 35674:return RM;case 35675:return PM;case 35676:return IM;case 5124:case 35670:return DM;case 35667:case 35671:return LM;case 35668:case 35672:return UM;case 35669:case 35673:return NM;case 5125:return OM;case 36294:return FM;case 36295:return BM;case 36296:return zM;case 35678:case 36198:case 36298:case 36306:case 35682:return kM;case 35679:case 36299:case 36307:return VM;case 35680:case 36300:case 36308:case 36293:return HM;case 36289:case 36303:case 36311:case 36292:return GM}}var Mu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=wM(e.type)}},Su=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=WM(e.type)}},bu=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},bh=/(\w+)(\])?(\[|\.)?/g;function Ip(r,t){r.seq.push(t),r.map[t.id]=t}function XM(r,t,e){let n=r.name,i=n.length;for(bh.lastIndex=0;;){let s=bh.exec(n),o=bh.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ip(e,c===void 0?new Mu(a,r,t):new Su(a,r,t));break}else{let d=e.map[a];d===void 0&&(d=new bu(a),Ip(e,d)),e=d}}}var ks=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);XM(s,o,this)}}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Dp(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var YM=37297,qM=0;function ZM(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Lp=new Jt;function JM(r){ae._getMatrix(Lp,ae.workingColorSpace,r);let t=`mat3( ${Lp.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(r)){case Zl:return[t,"LinearTransferOETF"];case pe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Up(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";let s=/ERROR: 0:(\d+)/.exec(i);if(s){let o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+ZM(r.getShaderSource(t),o)}else return i}function $M(r,t){let e=JM(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function KM(r,t){let e;switch(t){case b0:e="Linear";break;case w0:e="Reinhard";break;case E0:e="Cineon";break;case $u:e="ACESFilmic";break;case A0:e="AgX";break;case C0:e="Neutral";break;case T0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ll=new O;function QM(){ae.getLuminanceCoefficients(ll);let r=ll.x.toFixed(4),t=ll.y.toFixed(4),e=ll.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function jM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zo).join(`
`)}function tS(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function eS(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function zo(r){return r!==""}function Np(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Op(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var nS=/^[ \t]*#include +<([\w\d./]+)>/gm;function wu(r){return r.replace(nS,rS)}var iS=new Map;function rS(r,t){let e=$t[t];if(e===void 0){let n=iS.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wu(e)}var sS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fp(r){return r.replace(sS,oS)}function oS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Bp(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function aS(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===nm?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===n0?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Bi&&(t="SHADOWMAP_TYPE_VSM"),t}function lS(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Hs:case Gs:t="ENVMAP_TYPE_CUBE";break;case ql:t="ENVMAP_TYPE_CUBE_UV";break}return t}function cS(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Gs:t="ENVMAP_MODE_REFRACTION";break}return t}function hS(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case im:t="ENVMAP_BLENDING_MULTIPLY";break;case M0:t="ENVMAP_BLENDING_MIX";break;case S0:t="ENVMAP_BLENDING_ADD";break}return t}function uS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function fS(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=aS(e),c=lS(e),h=cS(e),d=hS(e),u=uS(e),f=jM(e),_=tS(s),g=i.createProgram(),m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(zo).join(`
`),p.length>0&&(p+=`
`)):(m=[Bp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zo).join(`
`),p=[Bp(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gr?"#define TONE_MAPPING":"",e.toneMapping!==gr?$t.tonemapping_pars_fragment:"",e.toneMapping!==gr?KM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,$M("linearToOutputTexel",e.outputColorSpace),QM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zo).join(`
`)),o=wu(o),o=Np(o,e),o=Op(o,e),a=wu(a),a=Np(a,e),a=Op(a,e),o=Fp(o),a=Fp(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=M+m+o,x=M+p+a,C=Dp(i,i.VERTEX_SHADER,S),T=Dp(i,i.FRAGMENT_SHADER,x);i.attachShader(g,C),i.attachShader(g,T),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(g).trim(),B=i.getShaderInfoLog(C).trim(),X=i.getShaderInfoLog(T).trim(),J=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(J=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,C,T);else{let Z=Up(i,C,"vertex"),H=Up(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+N+`
`+Z+`
`+H)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(B===""||X==="")&&(W=!1);W&&(P.diagnostics={runnable:J,programLog:N,vertexShader:{log:B,prefix:m},fragmentShader:{log:X,prefix:p}})}i.deleteShader(C),i.deleteShader(T),R=new ks(i,g),y=eS(i,g)}let R;this.getUniforms=function(){return R===void 0&&E(this),R};let y;this.getAttributes=function(){return y===void 0&&E(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=i.getProgramParameter(g,YM)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=qM++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=C,this.fragmentShader=T,this}var dS=0,Eu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Tu(t),e.set(t,n)),n}},Tu=class{constructor(t){this.id=dS++,this.code=t,this.usedTimes=0}};function pS(r,t,e,n,i,s,o){let a=new El,l=new Eu,c=new Set,h=[],d=i.logarithmicDepthBuffer,u=i.vertexTextures,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,P,N,B){let X=N.fog,J=B.geometry,W=y.isMeshStandardMaterial?N.environment:null,Z=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),H=Z&&Z.mapping===ql?Z.image.height:null,et=_[y.type];y.precision!==null&&(f=i.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));let I=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ht=I!==void 0?I.length:0,Dt=0;J.morphAttributes.position!==void 0&&(Dt=1),J.morphAttributes.normal!==void 0&&(Dt=2),J.morphAttributes.color!==void 0&&(Dt=3);let Kt,q,tt,_t;if(et){let xt=Mi[et];Kt=xt.vertexShader,q=xt.fragmentShader}else Kt=y.vertexShader,q=y.fragmentShader,l.update(y),tt=l.getVertexShaderID(y),_t=l.getFragmentShaderID(y);let nt=r.getRenderTarget(),bt=r.state.buffers.depth.getReversed(),Tt=B.isInstancedMesh===!0,kt=B.isBatchedMesh===!0,Qt=!!y.map,Vt=!!y.matcap,Pt=!!Z,L=!!y.aoMap,_e=!!y.lightMap,Nt=!!y.bumpMap,z=!!y.normalMap,wt=!!y.displacementMap,ie=!!y.emissiveMap,At=!!y.metalnessMap,A=!!y.roughnessMap,b=y.anisotropy>0,G=y.clearcoat>0,j=y.dispersion>0,Q=y.iridescence>0,$=y.sheen>0,ut=y.transmission>0,at=b&&!!y.anisotropyMap,pt=G&&!!y.clearcoatMap,Xt=G&&!!y.clearcoatNormalMap,it=G&&!!y.clearcoatRoughnessMap,ot=Q&&!!y.iridescenceMap,Lt=Q&&!!y.iridescenceThicknessMap,It=$&&!!y.sheenColorMap,vt=$&&!!y.sheenRoughnessMap,qt=!!y.specularMap,Ut=!!y.specularColorMap,oe=!!y.specularIntensityMap,D=ut&&!!y.transmissionMap,ct=ut&&!!y.thicknessMap,Y=!!y.gradientMap,K=!!y.alphaMap,lt=y.alphaTest>0,ft=!!y.alphaHash,Ot=!!y.extensions,le=gr;y.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(le=r.toneMapping);let De={shaderID:et,shaderType:y.type,shaderName:y.name,vertexShader:Kt,fragmentShader:q,defines:y.defines,customVertexShaderID:tt,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:kt,batchingColor:kt&&B._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&B.instanceColor!==null,instancingMorph:Tt&&B.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:Ks,alphaToCoverage:!!y.alphaToCoverage,map:Qt,matcap:Vt,envMap:Pt,envMapMode:Pt&&Z.mapping,envMapCubeUVHeight:H,aoMap:L,lightMap:_e,bumpMap:Nt,normalMap:z,displacementMap:u&&wt,emissiveMap:ie,normalMapObjectSpace:z&&y.normalMapType===D0,normalMapTangentSpace:z&&y.normalMapType===pm,metalnessMap:At,roughnessMap:A,anisotropy:b,anisotropyMap:at,clearcoat:G,clearcoatMap:pt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:it,dispersion:j,iridescence:Q,iridescenceMap:ot,iridescenceThicknessMap:Lt,sheen:$,sheenColorMap:It,sheenRoughnessMap:vt,specularMap:qt,specularColorMap:Ut,specularIntensityMap:oe,transmission:ut,transmissionMap:D,thicknessMap:ct,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Fs&&y.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ft,combine:y.combine,mapUv:Qt&&g(y.map.channel),aoMapUv:L&&g(y.aoMap.channel),lightMapUv:_e&&g(y.lightMap.channel),bumpMapUv:Nt&&g(y.bumpMap.channel),normalMapUv:z&&g(y.normalMap.channel),displacementMapUv:wt&&g(y.displacementMap.channel),emissiveMapUv:ie&&g(y.emissiveMap.channel),metalnessMapUv:At&&g(y.metalnessMap.channel),roughnessMapUv:A&&g(y.roughnessMap.channel),anisotropyMapUv:at&&g(y.anisotropyMap.channel),clearcoatMapUv:pt&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:It&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:vt&&g(y.sheenRoughnessMap.channel),specularMapUv:qt&&g(y.specularMap.channel),specularColorMapUv:Ut&&g(y.specularColorMap.channel),specularIntensityMapUv:oe&&g(y.specularIntensityMap.channel),transmissionMapUv:D&&g(y.transmissionMap.channel),thicknessMapUv:ct&&g(y.thicknessMap.channel),alphaMapUv:K&&g(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(z||b),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!J.attributes.uv&&(Qt||K),fog:!!X,useFog:y.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:bt,skinning:B.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:ht,morphTextureStride:Dt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:Qt&&y.map.isVideoTexture===!0&&ae.getTransfer(y.map.colorSpace)===pe,decodeVideoTextureEmissive:ie&&y.emissiveMap.isVideoTexture===!0&&ae.getTransfer(y.emissiveMap.colorSpace)===pe,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===ki,flipSided:y.side===Ln,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ot&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&y.extensions.multiDraw===!0||kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return De.vertexUv1s=c.has(1),De.vertexUv2s=c.has(2),De.vertexUv3s=c.has(3),c.clear(),De}function p(y){let v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(let P in y.defines)v.push(P),v.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(v,y),S(v,y),v.push(r.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function M(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function S(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){let v=_[y.type],P;if(v){let N=Mi[v];P=rx.clone(N.uniforms)}else P=y.uniforms;return P}function C(y,v){let P;for(let N=0,B=h.length;N<B;N++){let X=h[N];if(X.cacheKey===v){P=X,++P.usedTimes;break}}return P===void 0&&(P=new fS(r,v,y,s),h.push(P)),P}function T(y){if(--y.usedTimes===0){let v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function E(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:C,releaseProgram:T,releaseShaderCache:E,programs:h,dispose:R}}function mS(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function gS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function zp(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function kp(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(d,u,f,_,g,m){let p=r[t];return p===void 0?(p={id:d.id,object:d,geometry:u,material:f,groupOrder:_,renderOrder:d.renderOrder,z:g,group:m},r[t]=p):(p.id=d.id,p.object=d,p.geometry=u,p.material=f,p.groupOrder=_,p.renderOrder=d.renderOrder,p.z=g,p.group=m),t++,p}function a(d,u,f,_,g,m){let p=o(d,u,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(d,u,f,_,g,m){let p=o(d,u,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(d,u){e.length>1&&e.sort(d||gS),n.length>1&&n.sort(u||zp),i.length>1&&i.sort(u||zp)}function h(){for(let d=t,u=r.length;d<u;d++){let f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function _S(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new kp,r.set(n,[o])):i>=s.length?(o=new kp,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function xS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new O,color:new Bt};break;case"SpotLight":e={position:new O,direction:new O,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new O,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new O,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new O,halfWidth:new O,halfHeight:new O};break}return r[t.id]=e,e}}}function vS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new jt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var yS=0;function MS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function SS(r){let t=new xS,e=vS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new O);let i=new O,s=new ge,o=new ge;function a(c){let h=0,d=0,u=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,M=0,S=0,x=0,C=0,T=0,E=0;c.sort(MS);for(let y=0,v=c.length;y<v;y++){let P=c[y],N=P.color,B=P.intensity,X=P.distance,J=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=N.r*B,d+=N.g*B,u+=N.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);E++}else if(P.isDirectionalLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.directionalShadow[f]=H,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=W,f++}else if(P.isSpotLight){let W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(B),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[g]=W;let Z=P.shadow;if(P.map&&(n.spotLightMap[C]=P.map,C++,Z.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[g]=Z.matrix,P.castShadow){let H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,n.spotShadow[g]=H,n.spotShadowMap[g]=J,x++}g++}else if(P.isRectAreaLight){let W=t.get(P);W.color.copy(N).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=W,m++}else if(P.isPointLight){let W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let Z=P.shadow,H=e.get(P);H.shadowIntensity=Z.intensity,H.shadowBias=Z.bias,H.shadowNormalBias=Z.normalBias,H.shadowRadius=Z.radius,H.shadowMapSize=Z.mapSize,H.shadowCameraNear=Z.camera.near,H.shadowCameraFar=Z.camera.far,n.pointShadow[_]=H,n.pointShadowMap[_]=J,n.pointShadowMatrix[_]=P.shadow.matrix,S++}n.point[_]=W,_++}else if(P.isHemisphereLight){let W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=W,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=gt.LTC_FLOAT_1,n.rectAreaLTC2=gt.LTC_FLOAT_2):(n.rectAreaLTC1=gt.LTC_HALF_1,n.rectAreaLTC2=gt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let R=n.hash;(R.directionalLength!==f||R.pointLength!==_||R.spotLength!==g||R.rectAreaLength!==m||R.hemiLength!==p||R.numDirectionalShadows!==M||R.numPointShadows!==S||R.numSpotShadows!==x||R.numSpotMaps!==C||R.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+C-T,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=E,R.directionalLength=f,R.pointLength=_,R.spotLength=g,R.rectAreaLength=m,R.hemiLength=p,R.numDirectionalShadows=M,R.numPointShadows=S,R.numSpotShadows=x,R.numSpotMaps=C,R.numLightProbes=E,n.version=yS++)}function l(c,h){let d=0,u=0,f=0,_=0,g=0,m=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let S=c[p];if(S.isDirectionalLight){let x=n.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),d++}else if(S.isSpotLight){let x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(S.isRectAreaLight){let x=n.rectArea[_];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(S.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(S.isPointLight){let x=n.point[u];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(m),u++}else if(S.isHemisphereLight){let x=n.hemi[g];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Vp(r){let t=new SS(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function bS(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Vp(r),t.set(i,[a])):s>=o.length?(a=new Vp(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Au=class extends Yi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=P0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Cu=class extends Yi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},wS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ES=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function TS(r,t,e){let n=new Xo,i=new jt,s=new jt,o=new me,a=new Au({depthPacking:I0}),l=new Cu,c={},h=e.maxTextureSize,d={[_r]:Ln,[Ln]:_r,[ki]:ki},u=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new jt},radius:{value:4}},vertexShader:wS,fragmentShader:ES}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let _=new Un;_.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Ee(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nm;let p=this.type;this.render=function(T,E,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let y=r.getRenderTarget(),v=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(mr),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==Bi&&this.type===Bi,X=p===Bi&&this.type!==Bi;for(let J=0,W=T.length;J<W;J++){let Z=T[J],H=Z.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);let et=H.getFrameExtents();if(i.multiply(et),s.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/et.x),i.x=s.x*et.x,H.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/et.y),i.y=s.y*et.y,H.mapSize.y=s.y)),H.map===null||B===!0||X===!0){let ht=this.type!==Bi?{minFilter:Xn,magFilter:Xn}:{};H.map!==null&&H.map.dispose(),H.map=new Yn(i.x,i.y,ht),H.map.texture.name=Z.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();let I=H.getViewportCount();for(let ht=0;ht<I;ht++){let Dt=H.getViewport(ht);o.set(s.x*Dt.x,s.y*Dt.y,s.x*Dt.z,s.y*Dt.w),N.viewport(o),H.updateMatrices(Z,ht),n=H.getFrustum(),x(E,R,H.camera,Z,this.type)}H.isPointLightShadow!==!0&&this.type===Bi&&M(H,R),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(y,v,P)};function M(T,E){let R=t.update(g);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yn(i.x,i.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(E,null,R,u,g,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(E,null,R,f,g,null)}function S(T,E,R,y){let v=null,P=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)v=P;else if(v=R.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){let N=v.uuid,B=E.uuid,X=c[N];X===void 0&&(X={},c[N]=X);let J=X[B];J===void 0&&(J=v.clone(),X[B]=J,E.addEventListener("dispose",C)),v=J}if(v.visible=E.visible,v.wireframe=E.wireframe,y===Bi?v.side=E.shadowSide!==null?E.shadowSide:E.side:v.side=E.shadowSide!==null?E.shadowSide:d[E.side],v.alphaMap=E.alphaMap,v.alphaTest=E.alphaTest,v.map=E.map,v.clipShadows=E.clipShadows,v.clippingPlanes=E.clippingPlanes,v.clipIntersection=E.clipIntersection,v.displacementMap=E.displacementMap,v.displacementScale=E.displacementScale,v.displacementBias=E.displacementBias,v.wireframeLinewidth=E.wireframeLinewidth,v.linewidth=E.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let N=r.properties.get(v);N.light=R}return v}function x(T,E,R,y,v){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Bi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);let B=t.update(T),X=T.material;if(Array.isArray(X)){let J=B.groups;for(let W=0,Z=J.length;W<Z;W++){let H=J[W],et=X[H.materialIndex];if(et&&et.visible){let I=S(T,et,y,v);T.onBeforeShadow(r,T,E,R,B,I,H),r.renderBufferDirect(R,null,B,I,T,H),T.onAfterShadow(r,T,E,R,B,I,H)}}}else if(X.visible){let J=S(T,X,y,v);T.onBeforeShadow(r,T,E,R,B,J,null),r.renderBufferDirect(R,null,B,J,T,null),T.onAfterShadow(r,T,E,R,B,J,null)}}let N=T.children;for(let B=0,X=N.length;B<X;B++)x(N[B],E,R,y,v)}function C(T){T.target.removeEventListener("dispose",C);for(let R in c){let y=c[R],v=T.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}var AS={[Dh]:Lh,[Uh]:Fh,[Nh]:Bh,[Vs]:Oh,[Lh]:Dh,[Fh]:Uh,[Bh]:Nh,[Oh]:Vs};function CS(r,t){function e(){let D=!1,ct=new me,Y=null,K=new me(0,0,0,0);return{setMask:function(lt){Y!==lt&&!D&&(r.colorMask(lt,lt,lt,lt),Y=lt)},setLocked:function(lt){D=lt},setClear:function(lt,ft,Ot,le,De){De===!0&&(lt*=le,ft*=le,Ot*=le),ct.set(lt,ft,Ot,le),K.equals(ct)===!1&&(r.clearColor(lt,ft,Ot,le),K.copy(ct))},reset:function(){D=!1,Y=null,K.set(-1,0,0,0)}}}function n(){let D=!1,ct=!1,Y=null,K=null,lt=null;return{setReversed:function(ft){if(ct!==ft){let Ot=t.get("EXT_clip_control");ct?Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.ZERO_TO_ONE_EXT):Ot.clipControlEXT(Ot.LOWER_LEFT_EXT,Ot.NEGATIVE_ONE_TO_ONE_EXT);let le=lt;lt=null,this.setClear(le)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?nt(r.DEPTH_TEST):bt(r.DEPTH_TEST)},setMask:function(ft){Y!==ft&&!D&&(r.depthMask(ft),Y=ft)},setFunc:function(ft){if(ct&&(ft=AS[ft]),K!==ft){switch(ft){case Dh:r.depthFunc(r.NEVER);break;case Lh:r.depthFunc(r.ALWAYS);break;case Uh:r.depthFunc(r.LESS);break;case Vs:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Oh:r.depthFunc(r.GEQUAL);break;case Fh:r.depthFunc(r.GREATER);break;case Bh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}K=ft}},setLocked:function(ft){D=ft},setClear:function(ft){lt!==ft&&(ct&&(ft=1-ft),r.clearDepth(ft),lt=ft)},reset:function(){D=!1,Y=null,K=null,lt=null,ct=!1}}}function i(){let D=!1,ct=null,Y=null,K=null,lt=null,ft=null,Ot=null,le=null,De=null;return{setTest:function(xt){D||(xt?nt(r.STENCIL_TEST):bt(r.STENCIL_TEST))},setMask:function(xt){ct!==xt&&!D&&(r.stencilMask(xt),ct=xt)},setFunc:function(xt,Et,Zt){(Y!==xt||K!==Et||lt!==Zt)&&(r.stencilFunc(xt,Et,Zt),Y=xt,K=Et,lt=Zt)},setOp:function(xt,Et,Zt){(ft!==xt||Ot!==Et||le!==Zt)&&(r.stencilOp(xt,Et,Zt),ft=xt,Ot=Et,le=Zt)},setLocked:function(xt){D=xt},setClear:function(xt){De!==xt&&(r.clearStencil(xt),De=xt)},reset:function(){D=!1,ct=null,Y=null,K=null,lt=null,ft=null,Ot=null,le=null,De=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,x=null,C=null,T=null,E=new Bt(0,0,0),R=0,y=!1,v=null,P=null,N=null,B=null,X=null,J=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,Z=0,H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Z>=1):H.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Z>=2);let et=null,I={},ht=r.getParameter(r.SCISSOR_BOX),Dt=r.getParameter(r.VIEWPORT),Kt=new me().fromArray(ht),q=new me().fromArray(Dt);function tt(D,ct,Y,K){let lt=new Uint8Array(4),ft=r.createTexture();r.bindTexture(D,ft),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ot=0;Ot<Y;Ot++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ct,0,r.RGBA,1,1,K,0,r.RGBA,r.UNSIGNED_BYTE,lt):r.texImage2D(ct+Ot,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,lt);return ft}let _t={};_t[r.TEXTURE_2D]=tt(r.TEXTURE_2D,r.TEXTURE_2D,1),_t[r.TEXTURE_CUBE_MAP]=tt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[r.TEXTURE_2D_ARRAY]=tt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),_t[r.TEXTURE_3D]=tt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(Vs),Nt(!1),z(Gd),nt(r.CULL_FACE),L(mr);function nt(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function bt(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Tt(D,ct){return d[D]!==ct?(r.bindFramebuffer(D,ct),d[D]=ct,D===r.DRAW_FRAMEBUFFER&&(d[r.FRAMEBUFFER]=ct),D===r.FRAMEBUFFER&&(d[r.DRAW_FRAMEBUFFER]=ct),!0):!1}function kt(D,ct){let Y=f,K=!1;if(D){Y=u.get(ct),Y===void 0&&(Y=[],u.set(ct,Y));let lt=D.textures;if(Y.length!==lt.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let ft=0,Ot=lt.length;ft<Ot;ft++)Y[ft]=r.COLOR_ATTACHMENT0+ft;Y.length=lt.length,K=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,K=!0);K&&r.drawBuffers(Y)}function Qt(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let Vt={[kr]:r.FUNC_ADD,[r0]:r.FUNC_SUBTRACT,[s0]:r.FUNC_REVERSE_SUBTRACT};Vt[o0]=r.MIN,Vt[a0]=r.MAX;let Pt={[l0]:r.ZERO,[c0]:r.ONE,[h0]:r.SRC_COLOR,[Ph]:r.SRC_ALPHA,[g0]:r.SRC_ALPHA_SATURATE,[p0]:r.DST_COLOR,[f0]:r.DST_ALPHA,[u0]:r.ONE_MINUS_SRC_COLOR,[Ih]:r.ONE_MINUS_SRC_ALPHA,[m0]:r.ONE_MINUS_DST_COLOR,[d0]:r.ONE_MINUS_DST_ALPHA,[_0]:r.CONSTANT_COLOR,[x0]:r.ONE_MINUS_CONSTANT_COLOR,[v0]:r.CONSTANT_ALPHA,[y0]:r.ONE_MINUS_CONSTANT_ALPHA};function L(D,ct,Y,K,lt,ft,Ot,le,De,xt){if(D===mr){g===!0&&(bt(r.BLEND),g=!1);return}if(g===!1&&(nt(r.BLEND),g=!0),D!==i0){if(D!==m||xt!==y){if((p!==kr||x!==kr)&&(r.blendEquation(r.FUNC_ADD),p=kr,x=kr),xt)switch(D){case Fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wd:r.blendFunc(r.ONE,r.ONE);break;case Xd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yd:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Wd:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Xd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Yd:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}M=null,S=null,C=null,T=null,E.set(0,0,0),R=0,m=D,y=xt}return}lt=lt||ct,ft=ft||Y,Ot=Ot||K,(ct!==p||lt!==x)&&(r.blendEquationSeparate(Vt[ct],Vt[lt]),p=ct,x=lt),(Y!==M||K!==S||ft!==C||Ot!==T)&&(r.blendFuncSeparate(Pt[Y],Pt[K],Pt[ft],Pt[Ot]),M=Y,S=K,C=ft,T=Ot),(le.equals(E)===!1||De!==R)&&(r.blendColor(le.r,le.g,le.b,De),E.copy(le),R=De),m=D,y=!1}function _e(D,ct){D.side===ki?bt(r.CULL_FACE):nt(r.CULL_FACE);let Y=D.side===Ln;ct&&(Y=!Y),Nt(Y),D.blending===Fs&&D.transparent===!1?L(mr):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ie(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):bt(r.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(D){v!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),v=D)}function z(D){D!==t0?(nt(r.CULL_FACE),D!==P&&(D===Gd?r.cullFace(r.BACK):D===e0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):bt(r.CULL_FACE),P=D}function wt(D){D!==N&&(W&&r.lineWidth(D),N=D)}function ie(D,ct,Y){D?(nt(r.POLYGON_OFFSET_FILL),(B!==ct||X!==Y)&&(r.polygonOffset(ct,Y),B=ct,X=Y)):bt(r.POLYGON_OFFSET_FILL)}function At(D){D?nt(r.SCISSOR_TEST):bt(r.SCISSOR_TEST)}function A(D){D===void 0&&(D=r.TEXTURE0+J-1),et!==D&&(r.activeTexture(D),et=D)}function b(D,ct,Y){Y===void 0&&(et===null?Y=r.TEXTURE0+J-1:Y=et);let K=I[Y];K===void 0&&(K={type:void 0,texture:void 0},I[Y]=K),(K.type!==D||K.texture!==ct)&&(et!==Y&&(r.activeTexture(Y),et=Y),r.bindTexture(D,ct||_t[D]),K.type=D,K.texture=ct)}function G(){let D=I[et];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{r.compressedTexImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{r.compressedTexImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{r.texSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ut(){try{r.texSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function at(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Xt(){try{r.texStorage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function it(){try{r.texStorage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ot(){try{r.texImage2D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(){try{r.texImage3D.apply(r,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function It(D){Kt.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Kt.copy(D))}function vt(D){q.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),q.copy(D))}function qt(D,ct){let Y=c.get(ct);Y===void 0&&(Y=new WeakMap,c.set(ct,Y));let K=Y.get(D);K===void 0&&(K=r.getUniformBlockIndex(ct,D.name),Y.set(D,K))}function Ut(D,ct){let K=c.get(ct).get(D);l.get(ct)!==K&&(r.uniformBlockBinding(ct,K,D.__bindingPointIndex),l.set(ct,K))}function oe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,I={},d={},u=new WeakMap,f=[],_=null,g=!1,m=null,p=null,M=null,S=null,x=null,C=null,T=null,E=new Bt(0,0,0),R=0,y=!1,v=null,P=null,N=null,B=null,X=null,Kt.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:bt,bindFramebuffer:Tt,drawBuffers:kt,useProgram:Qt,setBlending:L,setMaterial:_e,setFlipSided:Nt,setCullFace:z,setLineWidth:wt,setPolygonOffset:ie,setScissorTest:At,activeTexture:A,bindTexture:b,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:Q,texImage2D:ot,texImage3D:Lt,updateUBOMapping:qt,uniformBlockBinding:Ut,texStorage2D:Xt,texStorage3D:it,texSubImage2D:$,texSubImage3D:ut,compressedTexSubImage2D:at,compressedTexSubImage3D:pt,scissor:It,viewport:vt,reset:oe}}function Hp(r,t,e,n){let i=RS(n);switch(e){case lm:return r*t;case hm:return r*t;case um:return r*t*2;case tf:return r*t/i.components*i.byteLength;case ef:return r*t/i.components*i.byteLength;case fm:return r*t*2/i.components*i.byteLength;case nf:return r*t*2/i.components*i.byteLength;case cm:return r*t*3/i.components*i.byteLength;case di:return r*t*4/i.components*i.byteLength;case rf:return r*t*4/i.components*i.byteLength;case gl:case _l:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xl:case vl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Gh:case Xh:return Math.max(r,16)*Math.max(t,8)/4;case Hh:case Wh:return Math.max(r,8)*Math.max(t,8)/2;case Yh:case qh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Zh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case $h:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Kh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Qh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case jh:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case tu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case eu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case nu:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case iu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ru:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case su:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ou:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case au:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case lu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case yl:case cu:case hu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case dm:case uu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case fu:case du:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function RS(r){switch(r){case Gi:case sm:return{byteLength:1,components:1};case Ho:case om:case ea:return{byteLength:2,components:1};case Qu:case ju:return{byteLength:2,components:4};case Xr:case Ku:case Si:return{byteLength:4,components:1};case am:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function PS(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new jt,h=new WeakMap,d,u=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,b){return f?new OffscreenCanvas(A,b):Go("canvas")}function g(A,b,G){let j=1,Q=At(A);if((Q.width>G||Q.height>G)&&(j=G/Math.max(Q.width,Q.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){let $=Math.floor(j*Q.width),ut=Math.floor(j*Q.height);d===void 0&&(d=_($,ut));let at=b?_($,ut):d;return at.width=$,at.height=ut,at.getContext("2d").drawImage(A,0,0,$,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+$+"x"+ut+")."),at}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){r.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(A,b,G,j,Q=!1){if(A!==null){if(r[A]!==void 0)return r[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=b;if(b===r.RED&&(G===r.FLOAT&&($=r.R32F),G===r.HALF_FLOAT&&($=r.R16F),G===r.UNSIGNED_BYTE&&($=r.R8)),b===r.RED_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.R8UI),G===r.UNSIGNED_SHORT&&($=r.R16UI),G===r.UNSIGNED_INT&&($=r.R32UI),G===r.BYTE&&($=r.R8I),G===r.SHORT&&($=r.R16I),G===r.INT&&($=r.R32I)),b===r.RG&&(G===r.FLOAT&&($=r.RG32F),G===r.HALF_FLOAT&&($=r.RG16F),G===r.UNSIGNED_BYTE&&($=r.RG8)),b===r.RG_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RG8UI),G===r.UNSIGNED_SHORT&&($=r.RG16UI),G===r.UNSIGNED_INT&&($=r.RG32UI),G===r.BYTE&&($=r.RG8I),G===r.SHORT&&($=r.RG16I),G===r.INT&&($=r.RG32I)),b===r.RGB_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGB8UI),G===r.UNSIGNED_SHORT&&($=r.RGB16UI),G===r.UNSIGNED_INT&&($=r.RGB32UI),G===r.BYTE&&($=r.RGB8I),G===r.SHORT&&($=r.RGB16I),G===r.INT&&($=r.RGB32I)),b===r.RGBA_INTEGER&&(G===r.UNSIGNED_BYTE&&($=r.RGBA8UI),G===r.UNSIGNED_SHORT&&($=r.RGBA16UI),G===r.UNSIGNED_INT&&($=r.RGBA32UI),G===r.BYTE&&($=r.RGBA8I),G===r.SHORT&&($=r.RGBA16I),G===r.INT&&($=r.RGBA32I)),b===r.RGB&&G===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),b===r.RGBA){let ut=Q?Zl:ae.getTransfer(j);G===r.FLOAT&&($=r.RGBA32F),G===r.HALF_FLOAT&&($=r.RGBA16F),G===r.UNSIGNED_BYTE&&($=ut===pe?r.SRGB8_ALPHA8:r.RGBA8),G===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),G===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function x(A,b){let G;return A?b===null||b===Xr||b===Ws?G=r.DEPTH24_STENCIL8:b===Si?G=r.DEPTH32F_STENCIL8:b===Ho&&(G=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Xr||b===Ws?G=r.DEPTH_COMPONENT24:b===Si?G=r.DEPTH_COMPONENT32F:b===Ho&&(G=r.DEPTH_COMPONENT16),G}function C(A,b){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xn&&A.minFilter!==ti?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){let b=A.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&h.delete(b)}function E(A){let b=A.target;b.removeEventListener("dispose",E),v(b)}function R(A){let b=n.get(A);if(b.__webglInit===void 0)return;let G=A.source,j=u.get(G);if(j){let Q=j[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&y(A),Object.keys(j).length===0&&u.delete(G)}n.remove(A)}function y(A){let b=n.get(A);r.deleteTexture(b.__webglTexture);let G=A.source,j=u.get(G);delete j[b.__cacheKey],o.memory.textures--}function v(A){let b=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(b.__webglFramebuffer[j]))for(let Q=0;Q<b.__webglFramebuffer[j].length;Q++)r.deleteFramebuffer(b.__webglFramebuffer[j][Q]);else r.deleteFramebuffer(b.__webglFramebuffer[j]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[j])}else{if(Array.isArray(b.__webglFramebuffer))for(let j=0;j<b.__webglFramebuffer.length;j++)r.deleteFramebuffer(b.__webglFramebuffer[j]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let j=0;j<b.__webglColorRenderbuffer.length;j++)b.__webglColorRenderbuffer[j]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[j]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let G=A.textures;for(let j=0,Q=G.length;j<Q;j++){let $=n.get(G[j]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),o.memory.textures--),n.remove(G[j])}n.remove(A)}let P=0;function N(){P=0}function B(){let A=P;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),P+=1,A}function X(A){let b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function J(A,b){let G=n.get(A);if(A.isVideoTexture&&wt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){let j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(G,A,b);return}}e.bindTexture(r.TEXTURE_2D,G.__webglTexture,r.TEXTURE0+b)}function W(A,b){let G=n.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,b);return}e.bindTexture(r.TEXTURE_2D_ARRAY,G.__webglTexture,r.TEXTURE0+b)}function Z(A,b){let G=n.get(A);if(A.version>0&&G.__version!==A.version){q(G,A,b);return}e.bindTexture(r.TEXTURE_3D,G.__webglTexture,r.TEXTURE0+b)}function H(A,b){let G=n.get(A);if(A.version>0&&G.__version!==A.version){tt(G,A,b);return}e.bindTexture(r.TEXTURE_CUBE_MAP,G.__webglTexture,r.TEXTURE0+b)}let et={[kh]:r.REPEAT,[Gr]:r.CLAMP_TO_EDGE,[Vh]:r.MIRRORED_REPEAT},I={[Xn]:r.NEAREST,[R0]:r.NEAREST_MIPMAP_NEAREST,[Ha]:r.NEAREST_MIPMAP_LINEAR,[ti]:r.LINEAR,[Zc]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},ht={[L0]:r.NEVER,[z0]:r.ALWAYS,[U0]:r.LESS,[mm]:r.LEQUAL,[N0]:r.EQUAL,[B0]:r.GEQUAL,[O0]:r.GREATER,[F0]:r.NOTEQUAL};function Dt(A,b){if(b.type===Si&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===ti||b.magFilter===Zc||b.magFilter===Ha||b.magFilter===Wr||b.minFilter===ti||b.minFilter===Zc||b.minFilter===Ha||b.minFilter===Wr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(A,r.TEXTURE_WRAP_S,et[b.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,et[b.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,et[b.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,I[b.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,I[b.minFilter]),b.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,ht[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Xn||b.minFilter!==Ha&&b.minFilter!==Wr||b.type===Si&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");r.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,i.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function Kt(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));let j=b.source,Q=u.get(j);Q===void 0&&(Q={},u.set(j,Q));let $=X(b);if($!==A.__cacheKey){Q[$]===void 0&&(Q[$]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,G=!0),Q[$].usedTimes++;let ut=Q[A.__cacheKey];ut!==void 0&&(Q[A.__cacheKey].usedTimes--,ut.usedTimes===0&&y(b)),A.__cacheKey=$,A.__webglTexture=Q[$].texture}return G}function q(A,b,G){let j=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(j=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(j=r.TEXTURE_3D);let Q=Kt(A,b),$=b.source;e.bindTexture(j,A.__webglTexture,r.TEXTURE0+G);let ut=n.get($);if($.version!==ut.__version||Q===!0){e.activeTexture(r.TEXTURE0+G);let at=ae.getPrimaries(ae.workingColorSpace),pt=b.colorSpace===pr?null:ae.getPrimaries(b.colorSpace),Xt=b.colorSpace===pr||at===pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let it=g(b.image,!1,i.maxTextureSize);it=ie(b,it);let ot=s.convert(b.format,b.colorSpace),Lt=s.convert(b.type),It=S(b.internalFormat,ot,Lt,b.colorSpace,b.isVideoTexture);Dt(j,b);let vt,qt=b.mipmaps,Ut=b.isVideoTexture!==!0,oe=ut.__version===void 0||Q===!0,D=$.dataReady,ct=C(b,it);if(b.isDepthTexture)It=x(b.format===Xs,b.type),oe&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,It,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,It,it.width,it.height,0,ot,Lt,null));else if(b.isDataTexture)if(qt.length>0){Ut&&oe&&e.texStorage2D(r.TEXTURE_2D,ct,It,qt[0].width,qt[0].height);for(let Y=0,K=qt.length;Y<K;Y++)vt=qt[Y],Ut?D&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,vt.width,vt.height,ot,Lt,vt.data):e.texImage2D(r.TEXTURE_2D,Y,It,vt.width,vt.height,0,ot,Lt,vt.data);b.generateMipmaps=!1}else Ut?(oe&&e.texStorage2D(r.TEXTURE_2D,ct,It,it.width,it.height),D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,it.width,it.height,ot,Lt,it.data)):e.texImage2D(r.TEXTURE_2D,0,It,it.width,it.height,0,ot,Lt,it.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ut&&oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,It,qt[0].width,qt[0].height,it.depth);for(let Y=0,K=qt.length;Y<K;Y++)if(vt=qt[Y],b.format!==di)if(ot!==null)if(Ut){if(D)if(b.layerUpdates.size>0){let lt=Hp(vt.width,vt.height,b.format,b.type);for(let ft of b.layerUpdates){let Ot=vt.data.subarray(ft*lt/vt.data.BYTES_PER_ELEMENT,(ft+1)*lt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,ft,vt.width,vt.height,1,ot,Ot)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,it.depth,ot,vt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,It,vt.width,vt.height,it.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?D&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,vt.width,vt.height,it.depth,ot,Lt,vt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Y,It,vt.width,vt.height,it.depth,0,ot,Lt,vt.data)}else{Ut&&oe&&e.texStorage2D(r.TEXTURE_2D,ct,It,qt[0].width,qt[0].height);for(let Y=0,K=qt.length;Y<K;Y++)vt=qt[Y],b.format!==di?ot!==null?Ut?D&&e.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,vt.width,vt.height,ot,vt.data):e.compressedTexImage2D(r.TEXTURE_2D,Y,It,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?D&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,vt.width,vt.height,ot,Lt,vt.data):e.texImage2D(r.TEXTURE_2D,Y,It,vt.width,vt.height,0,ot,Lt,vt.data)}else if(b.isDataArrayTexture)if(Ut){if(oe&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ct,It,it.width,it.height,it.depth),D)if(b.layerUpdates.size>0){let Y=Hp(it.width,it.height,b.format,b.type);for(let K of b.layerUpdates){let lt=it.data.subarray(K*Y/it.data.BYTES_PER_ELEMENT,(K+1)*Y/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,K,it.width,it.height,1,ot,Lt,lt)}b.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,ot,Lt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,It,it.width,it.height,it.depth,0,ot,Lt,it.data);else if(b.isData3DTexture)Ut?(oe&&e.texStorage3D(r.TEXTURE_3D,ct,It,it.width,it.height,it.depth),D&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,ot,Lt,it.data)):e.texImage3D(r.TEXTURE_3D,0,It,it.width,it.height,it.depth,0,ot,Lt,it.data);else if(b.isFramebufferTexture){if(oe)if(Ut)e.texStorage2D(r.TEXTURE_2D,ct,It,it.width,it.height);else{let Y=it.width,K=it.height;for(let lt=0;lt<ct;lt++)e.texImage2D(r.TEXTURE_2D,lt,It,Y,K,0,ot,Lt,null),Y>>=1,K>>=1}}else if(qt.length>0){if(Ut&&oe){let Y=At(qt[0]);e.texStorage2D(r.TEXTURE_2D,ct,It,Y.width,Y.height)}for(let Y=0,K=qt.length;Y<K;Y++)vt=qt[Y],Ut?D&&e.texSubImage2D(r.TEXTURE_2D,Y,0,0,ot,Lt,vt):e.texImage2D(r.TEXTURE_2D,Y,It,ot,Lt,vt);b.generateMipmaps=!1}else if(Ut){if(oe){let Y=At(it);e.texStorage2D(r.TEXTURE_2D,ct,It,Y.width,Y.height)}D&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,ot,Lt,it)}else e.texImage2D(r.TEXTURE_2D,0,It,ot,Lt,it);m(b)&&p(j),ut.__version=$.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function tt(A,b,G){if(b.image.length!==6)return;let j=Kt(A,b),Q=b.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+G);let $=n.get(Q);if(Q.version!==$.__version||j===!0){e.activeTexture(r.TEXTURE0+G);let ut=ae.getPrimaries(ae.workingColorSpace),at=b.colorSpace===pr?null:ae.getPrimaries(b.colorSpace),pt=b.colorSpace===pr||ut===at?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Xt=b.isCompressedTexture||b.image[0].isCompressedTexture,it=b.image[0]&&b.image[0].isDataTexture,ot=[];for(let K=0;K<6;K++)!Xt&&!it?ot[K]=g(b.image[K],!0,i.maxCubemapSize):ot[K]=it?b.image[K].image:b.image[K],ot[K]=ie(b,ot[K]);let Lt=ot[0],It=s.convert(b.format,b.colorSpace),vt=s.convert(b.type),qt=S(b.internalFormat,It,vt,b.colorSpace),Ut=b.isVideoTexture!==!0,oe=$.__version===void 0||j===!0,D=Q.dataReady,ct=C(b,Lt);Dt(r.TEXTURE_CUBE_MAP,b);let Y;if(Xt){Ut&&oe&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,qt,Lt.width,Lt.height);for(let K=0;K<6;K++){Y=ot[K].mipmaps;for(let lt=0;lt<Y.length;lt++){let ft=Y[lt];b.format!==di?It!==null?Ut?D&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ft.width,ft.height,It,ft.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,qt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ft.width,ft.height,It,vt,ft.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,qt,ft.width,ft.height,0,It,vt,ft.data)}}}else{if(Y=b.mipmaps,Ut&&oe){Y.length>0&&ct++;let K=At(ot[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ct,qt,K.width,K.height)}for(let K=0;K<6;K++)if(it){Ut?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ot[K].width,ot[K].height,It,vt,ot[K].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,ot[K].width,ot[K].height,0,It,vt,ot[K].data);for(let lt=0;lt<Y.length;lt++){let Ot=Y[lt].image[K].image;Ut?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Ot.width,Ot.height,It,vt,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,qt,Ot.width,Ot.height,0,It,vt,Ot.data)}}else{Ut?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,It,vt,ot[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,qt,It,vt,ot[K]);for(let lt=0;lt<Y.length;lt++){let ft=Y[lt];Ut?D&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,It,vt,ft.image[K]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,qt,It,vt,ft.image[K])}}}m(b)&&p(r.TEXTURE_CUBE_MAP),$.__version=Q.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function _t(A,b,G,j,Q,$){let ut=s.convert(G.format,G.colorSpace),at=s.convert(G.type),pt=S(G.internalFormat,ut,at,G.colorSpace),Xt=n.get(b),it=n.get(G);if(it.__renderTarget=b,!Xt.__hasExternalTextures){let ot=Math.max(1,b.width>>$),Lt=Math.max(1,b.height>>$);Q===r.TEXTURE_3D||Q===r.TEXTURE_2D_ARRAY?e.texImage3D(Q,$,pt,ot,Lt,b.depth,0,ut,at,null):e.texImage2D(Q,$,pt,ot,Lt,0,ut,at,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,j,Q,it.__webglTexture,0,Nt(b)):(Q===r.TEXTURE_2D||Q>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,j,Q,it.__webglTexture,$),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(A,b,G){if(r.bindRenderbuffer(r.RENDERBUFFER,A),b.depthBuffer){let j=b.depthTexture,Q=j&&j.isDepthTexture?j.type:null,$=x(b.stencilBuffer,Q),ut=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,at=Nt(b);z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,at,$,b.width,b.height):G?r.renderbufferStorageMultisample(r.RENDERBUFFER,at,$,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,$,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ut,r.RENDERBUFFER,A)}else{let j=b.textures;for(let Q=0;Q<j.length;Q++){let $=j[Q],ut=s.convert($.format,$.colorSpace),at=s.convert($.type),pt=S($.internalFormat,ut,at,$.colorSpace),Xt=Nt(b);G&&z(b)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Xt,pt,b.width,b.height):z(b)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Xt,pt,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,pt,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function bt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(b.depthTexture);j.__renderTarget=b,(!j.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),J(b.depthTexture,0);let Q=j.__webglTexture,$=Nt(b);if(b.depthTexture.format===Bs)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Q,0);else if(b.depthTexture.format===Xs)z(b)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0,$):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Q,0);else throw new Error("Unknown depthTexture format")}function Tt(A){let b=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){let j=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),j){let Q=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,j.removeEventListener("dispose",Q)};j.addEventListener("dispose",Q),b.__depthDisposeCallback=Q}b.__boundDepthTexture=j}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");bt(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[j]),b.__webglDepthbuffer[j]===void 0)b.__webglDepthbuffer[j]=r.createRenderbuffer(),nt(b.__webglDepthbuffer[j],A,!1);else{let Q=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=b.__webglDepthbuffer[j];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,Q,r.RENDERBUFFER,$)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),nt(b.__webglDepthbuffer,A,!1);else{let j=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Q=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Q),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,Q)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function kt(A,b,G){let j=n.get(A);b!==void 0&&_t(j.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),G!==void 0&&Tt(A)}function Qt(A){let b=A.texture,G=n.get(A),j=n.get(b);A.addEventListener("dispose",E);let Q=A.textures,$=A.isWebGLCubeRenderTarget===!0,ut=Q.length>1;if(ut||(j.__webglTexture===void 0&&(j.__webglTexture=r.createTexture()),j.__version=b.version,o.memory.textures++),$){G.__webglFramebuffer=[];for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[at]=[];for(let pt=0;pt<b.mipmaps.length;pt++)G.__webglFramebuffer[at][pt]=r.createFramebuffer()}else G.__webglFramebuffer[at]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let at=0;at<b.mipmaps.length;at++)G.__webglFramebuffer[at]=r.createFramebuffer()}else G.__webglFramebuffer=r.createFramebuffer();if(ut)for(let at=0,pt=Q.length;at<pt;at++){let Xt=n.get(Q[at]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=r.createTexture(),o.memory.textures++)}if(A.samples>0&&z(A)===!1){G.__webglMultisampledFramebuffer=r.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let at=0;at<Q.length;at++){let pt=Q[at];G.__webglColorRenderbuffer[at]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,G.__webglColorRenderbuffer[at]);let Xt=s.convert(pt.format,pt.colorSpace),it=s.convert(pt.type),ot=S(pt.internalFormat,Xt,it,pt.colorSpace,A.isXRRenderTarget===!0),Lt=Nt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,Lt,ot,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+at,r.RENDERBUFFER,G.__webglColorRenderbuffer[at])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){e.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),Dt(r.TEXTURE_CUBE_MAP,b);for(let at=0;at<6;at++)if(b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)_t(G.__webglFramebuffer[at][pt],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,pt);else _t(G.__webglFramebuffer[at],A,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);m(b)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ut){for(let at=0,pt=Q.length;at<pt;at++){let Xt=Q[at],it=n.get(Xt);e.bindTexture(r.TEXTURE_2D,it.__webglTexture),Dt(r.TEXTURE_2D,Xt),_t(G.__webglFramebuffer,A,Xt,r.COLOR_ATTACHMENT0+at,r.TEXTURE_2D,0),m(Xt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let at=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(at=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Dt(at,b),b.mipmaps&&b.mipmaps.length>0)for(let pt=0;pt<b.mipmaps.length;pt++)_t(G.__webglFramebuffer[pt],A,b,r.COLOR_ATTACHMENT0,at,pt);else _t(G.__webglFramebuffer,A,b,r.COLOR_ATTACHMENT0,at,0);m(b)&&p(at),e.unbindTexture()}A.depthBuffer&&Tt(A)}function Vt(A){let b=A.textures;for(let G=0,j=b.length;G<j;G++){let Q=b[G];if(m(Q)){let $=M(A),ut=n.get(Q).__webglTexture;e.bindTexture($,ut),p($),e.unbindTexture()}}}let Pt=[],L=[];function _e(A){if(A.samples>0){if(z(A)===!1){let b=A.textures,G=A.width,j=A.height,Q=r.COLOR_BUFFER_BIT,$=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=n.get(A),at=b.length>1;if(at)for(let pt=0;pt<b.length;pt++)e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let pt=0;pt<b.length;pt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Q|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Q|=r.STENCIL_BUFFER_BIT)),at){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Xt=n.get(b[pt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Xt,0)}r.blitFramebuffer(0,0,G,j,0,0,G,j,Q,r.NEAREST),l===!0&&(Pt.length=0,L.length=0,Pt.push(r.COLOR_ATTACHMENT0+pt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Pt.push($),L.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,L)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Pt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),at)for(let pt=0;pt<b.length;pt++){e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.RENDERBUFFER,ut.__webglColorRenderbuffer[pt]);let Xt=n.get(b[pt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ut.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+pt,r.TEXTURE_2D,Xt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){let b=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function Nt(A){return Math.min(i.maxSamples,A.samples)}function z(A){let b=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function wt(A){let b=o.render.frame;h.get(A)!==b&&(h.set(A,b),A.update())}function ie(A,b){let G=A.colorSpace,j=A.format,Q=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ks&&G!==pr&&(ae.getTransfer(G)===pe?(j!==di||Q!==Gi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function At(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=H,this.rebindTextures=kt,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=z}function IS(r,t){function e(n,i=pr){let s,o=ae.getTransfer(i);if(n===Gi)return r.UNSIGNED_BYTE;if(n===Qu)return r.UNSIGNED_SHORT_4_4_4_4;if(n===ju)return r.UNSIGNED_SHORT_5_5_5_1;if(n===am)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===sm)return r.BYTE;if(n===om)return r.SHORT;if(n===Ho)return r.UNSIGNED_SHORT;if(n===Ku)return r.INT;if(n===Xr)return r.UNSIGNED_INT;if(n===Si)return r.FLOAT;if(n===ea)return r.HALF_FLOAT;if(n===lm)return r.ALPHA;if(n===cm)return r.RGB;if(n===di)return r.RGBA;if(n===hm)return r.LUMINANCE;if(n===um)return r.LUMINANCE_ALPHA;if(n===Bs)return r.DEPTH_COMPONENT;if(n===Xs)return r.DEPTH_STENCIL;if(n===tf)return r.RED;if(n===ef)return r.RED_INTEGER;if(n===fm)return r.RG;if(n===nf)return r.RG_INTEGER;if(n===rf)return r.RGBA_INTEGER;if(n===gl||n===_l||n===xl||n===vl)if(o===pe)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===gl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===gl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_l)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hh||n===Gh||n===Wh||n===Xh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yh||n===qh||n===Zh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yh||n===qh)return o===pe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zh)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Jh||n===$h||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Jh)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Qh)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===jh)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===tu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===nu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===iu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ru)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ou)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===au)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===lu)return o===pe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yl||n===cu||n===hu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===yl)return o===pe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===hu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===dm||n===uu||n===fu||n===du)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===yl)return s.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===fu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ws?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Ru=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},ei=class extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}},DS={type:"move"},ko=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ei,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ei,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ei,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,_=.005;c.inputState.pinching&&u>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(DS)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ei;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},LS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Pu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){let i=new hn,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Nn({vertexShader:LS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new Yr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Iu=class extends xr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,_=null,g=new Pu,m=e.getContextAttributes(),p=null,M=null,S=[],x=[],C=new jt,T=null,E=new cn;E.viewport=new me;let R=new cn;R.viewport=new me;let y=[E,R],v=new Ru,P=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let tt=S[q];return tt===void 0&&(tt=new ko,S[q]=tt),tt.getTargetRaySpace()},this.getControllerGrip=function(q){let tt=S[q];return tt===void 0&&(tt=new ko,S[q]=tt),tt.getGripSpace()},this.getHand=function(q){let tt=S[q];return tt===void 0&&(tt=new ko,S[q]=tt),tt.getHandSpace()};function B(q){let tt=x.indexOf(q.inputSource);if(tt===-1)return;let _t=S[tt];_t!==void 0&&(_t.update(q.inputSource,q.frame,c||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function X(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",X),i.removeEventListener("inputsourceschange",J);for(let q=0;q<S.length;q++){let tt=x[q];tt!==null&&(x[q]=null,S[q].disconnect(tt))}P=null,N=null,g.reset(),t.setRenderTarget(p),f=null,u=null,d=null,i=null,M=null,Kt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",X),i.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(C),i.renderState.layers===void 0){let tt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,tt),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),M=new Yn(f.framebufferWidth,f.framebufferHeight,{format:di,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let tt=null,_t=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,tt=m.stencil?Xs:Bs,_t=m.stencil?Ws:Xr);let bt={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};d=new XRWebGLBinding(i,e),u=d.createProjectionLayer(bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Yn(u.textureWidth,u.textureHeight,{format:di,type:Gi,depthTexture:new Pl(u.textureWidth,u.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,tt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Kt.setContext(i),Kt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J(q){for(let tt=0;tt<q.removed.length;tt++){let _t=q.removed[tt],nt=x.indexOf(_t);nt>=0&&(x[nt]=null,S[nt].disconnect(_t))}for(let tt=0;tt<q.added.length;tt++){let _t=q.added[tt],nt=x.indexOf(_t);if(nt===-1){for(let Tt=0;Tt<S.length;Tt++)if(Tt>=x.length){x.push(_t),nt=Tt;break}else if(x[Tt]===null){x[Tt]=_t,nt=Tt;break}if(nt===-1)break}let bt=S[nt];bt&&bt.connect(_t)}}let W=new O,Z=new O;function H(q,tt,_t){W.setFromMatrixPosition(tt.matrixWorld),Z.setFromMatrixPosition(_t.matrixWorld);let nt=W.distanceTo(Z),bt=tt.projectionMatrix.elements,Tt=_t.projectionMatrix.elements,kt=bt[14]/(bt[10]-1),Qt=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],Pt=(bt[9]-1)/bt[5],L=(bt[8]-1)/bt[0],_e=(Tt[8]+1)/Tt[0],Nt=kt*L,z=kt*_e,wt=nt/(-L+_e),ie=wt*-L;if(tt.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ie),q.translateZ(wt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),bt[10]===-1)q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse);else{let At=kt+wt,A=Qt+wt,b=Nt-ie,G=z+(nt-ie),j=Vt*Qt/A*At,Q=Pt*Qt/A*At;q.projectionMatrix.makePerspective(b,G,j,Q,At,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function et(q,tt){tt===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(tt.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let tt=q.near,_t=q.far;g.texture!==null&&(g.depthNear>0&&(tt=g.depthNear),g.depthFar>0&&(_t=g.depthFar)),v.near=R.near=E.near=tt,v.far=R.far=E.far=_t,(P!==v.near||N!==v.far)&&(i.updateRenderState({depthNear:v.near,depthFar:v.far}),P=v.near,N=v.far),E.layers.mask=q.layers.mask|2,R.layers.mask=q.layers.mask|4,v.layers.mask=E.layers.mask|R.layers.mask;let nt=q.parent,bt=v.cameras;et(v,nt);for(let Tt=0;Tt<bt.length;Tt++)et(bt[Tt],nt);bt.length===2?H(v,E,R):v.projectionMatrix.copy(E.projectionMatrix),I(q,v,nt)};function I(q,tt,_t){_t===null?q.matrix.copy(tt.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(tt.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(tt.projectionMatrix),q.projectionMatrixInverse.copy(tt.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=mu*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(q){l=q,u!==null&&(u.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(v)};let ht=null;function Dt(q,tt){if(h=tt.getViewerPose(c||o),_=tt,h!==null){let _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(M,f.framebuffer),t.setRenderTarget(M));let nt=!1;_t.length!==v.cameras.length&&(v.cameras.length=0,nt=!0);for(let Tt=0;Tt<_t.length;Tt++){let kt=_t[Tt],Qt=null;if(f!==null)Qt=f.getViewport(kt);else{let Pt=d.getViewSubImage(u,kt);Qt=Pt.viewport,Tt===0&&(t.setRenderTargetTextures(M,Pt.colorTexture,u.ignoreDepthValues?void 0:Pt.depthStencilTexture),t.setRenderTarget(M))}let Vt=y[Tt];Vt===void 0&&(Vt=new cn,Vt.layers.enable(Tt),Vt.viewport=new me,y[Tt]=Vt),Vt.matrix.fromArray(kt.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(kt.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Tt===0&&(v.matrix.copy(Vt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),nt===!0&&v.cameras.push(Vt)}let bt=i.enabledFeatures;if(bt&&bt.includes("depth-sensing")){let Tt=d.getDepthInformation(_t[0]);Tt&&Tt.isValid&&Tt.texture&&g.init(t,Tt,i.renderState)}}for(let _t=0;_t<S.length;_t++){let nt=x[_t],bt=S[_t];nt!==null&&bt!==void 0&&bt.update(nt,tt,c||o)}ht&&ht(q,tt),tt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:tt}),_=null}let Kt=new vm;Kt.setAnimationLoop(Dt),this.setAnimationLoop=function(q){ht=q},this.dispose=function(){}}},Br=new bi,NS=new ge;function OS(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),_(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),g(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ln&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ln&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=t.get(p),S=M.envMap,x=M.envMapRotation;S&&(m.envMap.value=S,Br.copy(x),Br.x*=-1,Br.y*=-1,Br.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),m.envMapRotation.value.setFromMatrix4(NS.makeRotationFromEuler(Br)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ln&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){let M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function FS(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,S){let x=S.program;n.uniformBlockBinding(M,x)}function c(M,S){let x=i[M.id];x===void 0&&(_(M),x=h(M),i[M.id]=x,M.addEventListener("dispose",m));let C=S.program;n.updateUBOMapping(M,C);let T=t.render.frame;s[M.id]!==T&&(u(M),s[M.id]=T)}function h(M){let S=d();M.__bindingPointIndex=S;let x=r.createBuffer(),C=M.__size,T=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,C,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,S,x),x}function d(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){let S=i[M.id],x=M.uniforms,C=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,S);for(let T=0,E=x.length;T<E;T++){let R=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,v=R.length;y<v;y++){let P=R[y];if(f(P,T,y,C)===!0){let N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],X=0;for(let J=0;J<B.length;J++){let W=B[J],Z=g(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,S,x,C){let T=M.value,E=S+"_"+x;if(C[E]===void 0)return typeof T=="number"||typeof T=="boolean"?C[E]=T:C[E]=T.clone(),!0;{let R=C[E];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return C[E]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function _(M){let S=M.uniforms,x=0,C=16;for(let E=0,R=S.length;E<R;E++){let y=Array.isArray(S[E])?S[E]:[S[E]];for(let v=0,P=y.length;v<P;v++){let N=y[v],B=Array.isArray(N.value)?N.value:[N.value];for(let X=0,J=B.length;X<J;X++){let W=B[X],Z=g(W),H=x%C,et=H%Z.boundary,I=H+et;x+=et,I!==0&&C-I<Z.storage&&(x+=C-I),N.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=x,x+=Z.storage}}}let T=x%C;return T>0&&(x+=C-T),M.__size=x,M.__cache={},this}function g(M){let S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){let S=M.target;S.removeEventListener("dispose",m);let x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[S.id]),delete i[S.id],delete s[S.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var Il=class{constructor(t={}){let{canvas:e=V0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let _=new Uint32Array(4),g=new Int32Array(4),m=null,p=null,M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=tn,this.toneMapping=gr,this.toneMappingExposure=1;let x=this,C=!1,T=0,E=0,R=null,y=-1,v=null,P=new me,N=new me,B=null,X=new Bt(0),J=0,W=e.width,Z=e.height,H=1,et=null,I=null,ht=new me(0,0,W,Z),Dt=new me(0,0,W,Z),Kt=!1,q=new Xo,tt=!1,_t=!1,nt=new ge,bt=new ge,Tt=new O,kt=new me,Qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function Pt(){return R===null?H:1}let L=n;function _e(w,U){return e.getContext(w,U)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ju}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),L===null){let U="webgl2";if(L=_e(U,w),L===null)throw _e(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Nt,z,wt,ie,At,A,b,G,j,Q,$,ut,at,pt,Xt,it,ot,Lt,It,vt,qt,Ut,oe,D;function ct(){Nt=new jy(L),Nt.init(),Ut=new IS(L,Nt),z=new qy(L,Nt,t,Ut),wt=new CS(L,Nt),z.reverseDepthBuffer&&u&&wt.buffers.depth.setReversed(!0),ie=new nM(L),At=new mS,A=new PS(L,Nt,wt,At,z,Ut,ie),b=new Jy(x),G=new Qy(x),j=new cx(L),oe=new Xy(L,j),Q=new tM(L,j,ie,oe),$=new rM(L,Q,j,ie),It=new iM(L,z,A),it=new Zy(At),ut=new pS(x,b,G,Nt,z,oe,it),at=new OS(x,At),pt=new _S,Xt=new bS(Nt),Lt=new Wy(x,b,G,wt,$,f,l),ot=new TS(x,$,z),D=new FS(L,ie,z,wt),vt=new Yy(L,Nt,ie),qt=new eM(L,Nt,ie),ie.programs=ut.programs,x.capabilities=z,x.extensions=Nt,x.properties=At,x.renderLists=pt,x.shadowMap=ot,x.state=wt,x.info=ie}ct();let Y=new Iu(x,L);this.xr=Y,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=Nt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=Nt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(W,Z,!1))},this.getSize=function(w){return w.set(W,Z)},this.setSize=function(w,U,k=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,Z=U,e.width=Math.floor(w*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=w+"px",e.style.height=U+"px"),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(W*H,Z*H).floor()},this.setDrawingBufferSize=function(w,U,k){W=w,Z=U,H=k,e.width=Math.floor(w*k),e.height=Math.floor(U*k),this.setViewport(0,0,w,U)},this.getCurrentViewport=function(w){return w.copy(P)},this.getViewport=function(w){return w.copy(ht)},this.setViewport=function(w,U,k,V){w.isVector4?ht.set(w.x,w.y,w.z,w.w):ht.set(w,U,k,V),wt.viewport(P.copy(ht).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(Dt)},this.setScissor=function(w,U,k,V){w.isVector4?Dt.set(w.x,w.y,w.z,w.w):Dt.set(w,U,k,V),wt.scissor(N.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(w){wt.setScissorTest(Kt=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){I=w},this.getClearColor=function(w){return w.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(w=!0,U=!0,k=!0){let V=0;if(w){let F=!1;if(R!==null){let rt=R.texture.format;F=rt===rf||rt===nf||rt===ef}if(F){let rt=R.texture.type,st=rt===Gi||rt===Xr||rt===Ho||rt===Ws||rt===Qu||rt===ju,dt=Lt.getClearColor(),yt=Lt.getClearAlpha(),Ft=dt.r,Gt=dt.g,St=dt.b;st?(_[0]=Ft,_[1]=Gt,_[2]=St,_[3]=yt,L.clearBufferuiv(L.COLOR,0,_)):(g[0]=Ft,g[1]=Gt,g[2]=St,g[3]=yt,L.clearBufferiv(L.COLOR,0,g))}else V|=L.COLOR_BUFFER_BIT}U&&(V|=L.DEPTH_BUFFER_BIT),k&&(V|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),pt.dispose(),Xt.dispose(),At.dispose(),b.dispose(),G.dispose(),$.dispose(),oe.dispose(),D.dispose(),ut.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",mt),Y.removeEventListener("sessionend",Ht),Ct.stop()};function K(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;let w=ie.autoReset,U=ot.enabled,k=ot.autoUpdate,V=ot.needsUpdate,F=ot.type;ct(),ie.autoReset=w,ot.enabled=U,ot.autoUpdate=k,ot.needsUpdate=V,ot.type=F}function ft(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ot(w){let U=w.target;U.removeEventListener("dispose",Ot),le(U)}function le(w){De(w),At.remove(w)}function De(w){let U=At.get(w).programs;U!==void 0&&(U.forEach(function(k){ut.releaseProgram(k)}),w.isShaderMaterial&&ut.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,k,V,F,rt){U===null&&(U=Qt);let st=F.isMesh&&F.matrixWorld.determinant()<0,dt=Vn(w,U,k,V,F);wt.setMaterial(V,st);let yt=k.index,Ft=1;if(V.wireframe===!0){if(yt=Q.getWireframeAttribute(k),yt===void 0)return;Ft=2}let Gt=k.drawRange,St=k.attributes.position,Yt=Gt.start*Ft,ce=(Gt.start+Gt.count)*Ft;rt!==null&&(Yt=Math.max(Yt,rt.start*Ft),ce=Math.min(ce,(rt.start+rt.count)*Ft)),yt!==null?(Yt=Math.max(Yt,0),ce=Math.min(ce,yt.count)):St!=null&&(Yt=Math.max(Yt,0),ce=Math.min(ce,St.count));let ue=ce-Yt;if(ue<0||ue===1/0)return;oe.setup(F,V,dt,k,yt);let Be,fe=vt;if(yt!==null&&(Be=j.get(yt),fe=qt,fe.setIndex(Be)),F.isMesh)V.wireframe===!0?(wt.setLineWidth(V.wireframeLinewidth*Pt()),fe.setMode(L.LINES)):fe.setMode(L.TRIANGLES);else if(F.isLine){let Rt=V.linewidth;Rt===void 0&&(Rt=1),wt.setLineWidth(Rt*Pt()),F.isLineSegments?fe.setMode(L.LINES):F.isLineLoop?fe.setMode(L.LINE_LOOP):fe.setMode(L.LINE_STRIP)}else F.isPoints?fe.setMode(L.POINTS):F.isSprite&&fe.setMode(L.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)fe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Nt.get("WEBGL_multi_draw"))fe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let Rt=F._multiDrawStarts,Di=F._multiDrawCounts,de=F._multiDrawCount,ci=yt?j.get(yt).bytesPerElement:1,ys=At.get(V).currentProgram.getUniforms();for(let Hn=0;Hn<de;Hn++)ys.setValue(L,"_gl_DrawID",Hn),fe.render(Rt[Hn]/ci,Di[Hn])}else if(F.isInstancedMesh)fe.renderInstances(Yt,ue,F.count);else if(k.isInstancedBufferGeometry){let Rt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Di=Math.min(k.instanceCount,Rt);fe.renderInstances(Yt,ue,Di)}else fe.render(Yt,ue)};function xt(w,U,k){w.transparent===!0&&w.side===ki&&w.forceSinglePass===!1?(w.side=Ln,w.needsUpdate=!0,xe(w,U,k),w.side=_r,w.needsUpdate=!0,xe(w,U,k),w.side=ki):xe(w,U,k)}this.compile=function(w,U,k=null){k===null&&(k=w),p=Xt.get(k),p.init(U),S.push(p),k.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),w!==k&&w.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(p.pushLight(F),F.castShadow&&p.pushShadow(F))}),p.setupLights();let V=new Set;return w.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let rt=F.material;if(rt)if(Array.isArray(rt))for(let st=0;st<rt.length;st++){let dt=rt[st];xt(dt,k,F),V.add(dt)}else xt(rt,k,F),V.add(rt)}),S.pop(),p=null,V},this.compileAsync=function(w,U,k=null){let V=this.compile(w,U,k);return new Promise(F=>{function rt(){if(V.forEach(function(st){At.get(st).currentProgram.isReady()&&V.delete(st)}),V.size===0){F(w);return}setTimeout(rt,10)}Nt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Et=null;function Zt(w){Et&&Et(w)}function mt(){Ct.stop()}function Ht(){Ct.start()}let Ct=new vm;Ct.setAnimationLoop(Zt),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(w){Et=w,Y.setAnimationLoop(w),w===null?Ct.stop():Ct.start()},Y.addEventListener("sessionstart",mt),Y.addEventListener("sessionend",Ht),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(U),U=Y.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,U,R),p=Xt.get(w,S.length),p.init(U),S.push(p),bt.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(bt),_t=this.localClippingEnabled,tt=it.init(this.clippingPlanes,_t),m=pt.get(w,M.length),m.init(),M.push(m),Y.enabled===!0&&Y.isPresenting===!0){let rt=x.xr.getDepthSensingMesh();rt!==null&&zt(rt,U,-1/0,x.sortObjects)}zt(w,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(et,I),Vt=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Vt&&Lt.addToRenderList(m,w),this.info.render.frame++,tt===!0&&it.beginShadows();let k=p.state.shadowsArray;ot.render(k,w,U),tt===!0&&it.endShadows(),this.info.autoReset===!0&&this.info.reset();let V=m.opaque,F=m.transmissive;if(p.setupLights(),U.isArrayCamera){let rt=U.cameras;if(F.length>0)for(let st=0,dt=rt.length;st<dt;st++){let yt=rt[st];te(V,F,w,yt)}Vt&&Lt.render(w);for(let st=0,dt=rt.length;st<dt;st++){let yt=rt[st];Oe(m,w,yt,yt.viewport)}}else F.length>0&&te(V,F,w,U),Vt&&Lt.render(w),Oe(m,w,U);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),w.isScene===!0&&w.onAfterRender(x,w,U),oe.resetDefaultState(),y=-1,v=null,S.pop(),S.length>0?(p=S[S.length-1],tt===!0&&it.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function zt(w,U,k,V){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){V&&kt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);let st=$.update(w),dt=w.material;dt.visible&&m.push(w,st,dt,k,kt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){let st=$.update(w),dt=w.material;if(V&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),kt.copy(w.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),kt.copy(st.boundingSphere.center)),kt.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(dt)){let yt=st.groups;for(let Ft=0,Gt=yt.length;Ft<Gt;Ft++){let St=yt[Ft],Yt=dt[St.materialIndex];Yt&&Yt.visible&&m.push(w,st,Yt,k,kt.z,St)}}else dt.visible&&m.push(w,st,dt,k,kt.z,null)}}let rt=w.children;for(let st=0,dt=rt.length;st<dt;st++)zt(rt[st],U,k,V)}function Oe(w,U,k,V){let F=w.opaque,rt=w.transmissive,st=w.transparent;p.setupLightsView(k),tt===!0&&it.setGlobalState(x.clippingPlanes,k),V&&wt.viewport(P.copy(V)),F.length>0&&Me(F,U,k),rt.length>0&&Me(rt,U,k),st.length>0&&Me(st,U,k),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function te(w,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Yn(1,1,{generateMipmaps:!0,type:Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float")?ea:Gi,minFilter:Wr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));let rt=p.state.transmissionRenderTarget[V.id],st=V.viewport||P;rt.setSize(st.z,st.w);let dt=x.getRenderTarget();x.setRenderTarget(rt),x.getClearColor(X),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),Vt&&Lt.render(k);let yt=x.toneMapping;x.toneMapping=gr;let Ft=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),tt===!0&&it.setGlobalState(x.clippingPlanes,V),Me(w,k,V),A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let St=0,Yt=U.length;St<Yt;St++){let ce=U[St],ue=ce.object,Be=ce.geometry,fe=ce.material,Rt=ce.group;if(fe.side===ki&&ue.layers.test(V.layers)){let Di=fe.side;fe.side=Ln,fe.needsUpdate=!0,He(ue,k,V,Be,fe,Rt),fe.side=Di,fe.needsUpdate=!0,Gt=!0}}Gt===!0&&(A.updateMultisampleRenderTarget(rt),A.updateRenderTargetMipmap(rt))}x.setRenderTarget(dt),x.setClearColor(X,J),Ft!==void 0&&(V.viewport=Ft),x.toneMapping=yt}function Me(w,U,k){let V=U.isScene===!0?U.overrideMaterial:null;for(let F=0,rt=w.length;F<rt;F++){let st=w[F],dt=st.object,yt=st.geometry,Ft=V===null?st.material:V,Gt=st.group;dt.layers.test(k.layers)&&He(dt,U,k,yt,Ft,Gt)}}function He(w,U,k,V,F,rt){w.onBeforeRender(x,U,k,V,F,rt),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),F.onBeforeRender(x,U,k,V,w,rt),F.transparent===!0&&F.side===ki&&F.forceSinglePass===!1?(F.side=Ln,F.needsUpdate=!0,x.renderBufferDirect(k,U,V,F,w,rt),F.side=_r,F.needsUpdate=!0,x.renderBufferDirect(k,U,V,F,w,rt),F.side=ki):x.renderBufferDirect(k,U,V,F,w,rt),w.onAfterRender(x,U,k,V,F,rt)}function xe(w,U,k){U.isScene!==!0&&(U=Qt);let V=At.get(w),F=p.state.lights,rt=p.state.shadowsArray,st=F.state.version,dt=ut.getParameters(w,F.state,rt,U,k),yt=ut.getProgramCacheKey(dt),Ft=V.programs;V.environment=w.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(w.isMeshStandardMaterial?G:b).get(w.envMap||V.environment),V.envMapRotation=V.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ft===void 0&&(w.addEventListener("dispose",Ot),Ft=new Map,V.programs=Ft);let Gt=Ft.get(yt);if(Gt!==void 0){if(V.currentProgram===Gt&&V.lightsStateVersion===st)return he(w,dt),Gt}else dt.uniforms=ut.getUniforms(w),w.onBeforeCompile(dt,x),Gt=ut.acquireProgram(dt,yt),Ft.set(yt,Gt),V.uniforms=dt.uniforms;let St=V.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(St.clippingPlanes=it.uniform),he(w,dt),V.needsLights=vn(w),V.lightsStateVersion=st,V.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),V.currentProgram=Gt,V.uniformsList=null,Gt}function ve(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=ks.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function he(w,U){let k=At.get(w);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Vn(w,U,k,V,F){U.isScene!==!0&&(U=Qt),A.resetTextureUnits();let rt=U.fog,st=V.isMeshStandardMaterial?U.environment:null,dt=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ks,yt=(V.isMeshStandardMaterial?G:b).get(V.envMap||st),Ft=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Gt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),St=!!k.morphAttributes.position,Yt=!!k.morphAttributes.normal,ce=!!k.morphAttributes.color,ue=gr;V.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(ue=x.toneMapping);let Be=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,fe=Be!==void 0?Be.length:0,Rt=At.get(V),Di=p.state.lights;if(tt===!0&&(_t===!0||w!==v)){let Qn=w===v&&V.id===y;it.setState(V,w,Qn)}let de=!1;V.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==Di.state.version||Rt.outputColorSpace!==dt||F.isBatchedMesh&&Rt.batching===!1||!F.isBatchedMesh&&Rt.batching===!0||F.isBatchedMesh&&Rt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Rt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Rt.instancing===!1||!F.isInstancedMesh&&Rt.instancing===!0||F.isSkinnedMesh&&Rt.skinning===!1||!F.isSkinnedMesh&&Rt.skinning===!0||F.isInstancedMesh&&Rt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Rt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Rt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Rt.instancingMorph===!1&&F.morphTexture!==null||Rt.envMap!==yt||V.fog===!0&&Rt.fog!==rt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==it.numPlanes||Rt.numIntersection!==it.numIntersection)||Rt.vertexAlphas!==Ft||Rt.vertexTangents!==Gt||Rt.morphTargets!==St||Rt.morphNormals!==Yt||Rt.morphColors!==ce||Rt.toneMapping!==ue||Rt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Rt.__version=V.version);let ci=Rt.currentProgram;de===!0&&(ci=xe(V,U,F));let ys=!1,Hn=!1,Ao=!1,we=ci.getUniforms(),yi=Rt.uniforms;if(wt.useProgram(ci.program)&&(ys=!0,Hn=!0,Ao=!0),V.id!==y&&(y=V.id,Hn=!0),ys||v!==w){wt.buffers.depth.getReversed()?(nt.copy(w.projectionMatrix),G0(nt),W0(nt),we.setValue(L,"projectionMatrix",nt)):we.setValue(L,"projectionMatrix",w.projectionMatrix),we.setValue(L,"viewMatrix",w.matrixWorldInverse);let or=we.map.cameraPosition;or!==void 0&&or.setValue(L,Tt.setFromMatrixPosition(w.matrixWorld)),z.logarithmicDepthBuffer&&we.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&we.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),v!==w&&(v=w,Hn=!0,Ao=!0)}if(F.isSkinnedMesh){we.setOptional(L,F,"bindMatrix"),we.setOptional(L,F,"bindMatrixInverse");let Qn=F.skeleton;Qn&&(Qn.boneTexture===null&&Qn.computeBoneTexture(),we.setValue(L,"boneTexture",Qn.boneTexture,A))}F.isBatchedMesh&&(we.setOptional(L,F,"batchingTexture"),we.setValue(L,"batchingTexture",F._matricesTexture,A),we.setOptional(L,F,"batchingIdTexture"),we.setValue(L,"batchingIdTexture",F._indirectTexture,A),we.setOptional(L,F,"batchingColorTexture"),F._colorsTexture!==null&&we.setValue(L,"batchingColorTexture",F._colorsTexture,A));let Co=k.morphAttributes;if((Co.position!==void 0||Co.normal!==void 0||Co.color!==void 0)&&It.update(F,k,ci),(Hn||Rt.receiveShadow!==F.receiveShadow)&&(Rt.receiveShadow=F.receiveShadow,we.setValue(L,"receiveShadow",F.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(yi.envMap.value=yt,yi.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(yi.envMapIntensity.value=U.environmentIntensity),Hn&&(we.setValue(L,"toneMappingExposure",x.toneMappingExposure),Rt.needsLights&&be(yi,Ao),rt&&V.fog===!0&&at.refreshFogUniforms(yi,rt),at.refreshMaterialUniforms(yi,V,H,Z,p.state.transmissionRenderTarget[w.id]),ks.upload(L,ve(Rt),yi,A)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ks.upload(L,ve(Rt),yi,A),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&we.setValue(L,"center",F.center),we.setValue(L,"modelViewMatrix",F.modelViewMatrix),we.setValue(L,"normalMatrix",F.normalMatrix),we.setValue(L,"modelMatrix",F.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){let Qn=V.uniformsGroups;for(let or=0,ar=Qn.length;or<ar;or++){let Hd=Qn[or];D.update(Hd,ci),D.bind(Hd,ci)}}return ci}function be(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function vn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(w,U,k){At.get(w.texture).__webglTexture=U,At.get(w.depthTexture).__webglTexture=k;let V=At.get(w);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||Nt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,U){let k=At.get(w);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,k=0){R=w,T=U,E=k;let V=!0,F=null,rt=!1,st=!1;if(w){let yt=At.get(w);if(yt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(L.FRAMEBUFFER,null),V=!1;else if(yt.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(yt.__hasExternalTextures)A.rebindTextures(w,At.get(w.texture).__webglTexture,At.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let St=w.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&At.has(St)&&(w.width!==St.image.width||w.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}let Ft=w.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(st=!0);let Gt=At.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?F=Gt[U][k]:F=Gt[U],rt=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?F=At.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[k]:F=Gt,P.copy(w.viewport),N.copy(w.scissor),B=w.scissorTest}else P.copy(ht).multiplyScalar(H).floor(),N.copy(Dt).multiplyScalar(H).floor(),B=Kt;if(wt.bindFramebuffer(L.FRAMEBUFFER,F)&&V&&wt.drawBuffers(w,F),wt.viewport(P),wt.scissor(N),wt.setScissorTest(B),rt){let yt=At.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+U,yt.__webglTexture,k)}else if(st){let yt=At.get(w.texture),Ft=U||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,yt.__webglTexture,k||0,Ft)}y=-1},this.readRenderTargetPixels=function(w,U,k,V,F,rt,st){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){wt.bindFramebuffer(L.FRAMEBUFFER,dt);try{let yt=w.texture,Ft=yt.format,Gt=yt.type;if(!z.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!z.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-V&&k>=0&&k<=w.height-F&&L.readPixels(U,k,V,F,Ut.convert(Ft),Ut.convert(Gt),rt)}finally{let yt=R!==null?At.get(R).__webglFramebuffer:null;wt.bindFramebuffer(L.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(w,U,k,V,F,rt,st){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=At.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&st!==void 0&&(dt=dt[st]),dt){let yt=w.texture,Ft=yt.format,Gt=yt.type;if(!z.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!z.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=w.width-V&&k>=0&&k<=w.height-F){wt.bindFramebuffer(L.FRAMEBUFFER,dt);let St=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,St),L.bufferData(L.PIXEL_PACK_BUFFER,rt.byteLength,L.STREAM_READ),L.readPixels(U,k,V,F,Ut.convert(Ft),Ut.convert(Gt),0);let Yt=R!==null?At.get(R).__webglFramebuffer:null;wt.bindFramebuffer(L.FRAMEBUFFER,Yt);let ce=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await H0(L,ce,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,St),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,rt),L.deleteBuffer(St),L.deleteSync(ce),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,U=null,k=0){w.isTexture!==!0&&(Bo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,w=arguments[1]);let V=Math.pow(2,-k),F=Math.floor(w.image.width*V),rt=Math.floor(w.image.height*V),st=U!==null?U.x:0,dt=U!==null?U.y:0;A.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,st,dt,F,rt),wt.unbindTexture()},this.copyTextureToTexture=function(w,U,k=null,V=null,F=0){w.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,w=arguments[1],U=arguments[2],F=arguments[3]||0,k=null);let rt,st,dt,yt,Ft,Gt,St,Yt,ce,ue=w.isCompressedTexture?w.mipmaps[F]:w.image;k!==null?(rt=k.max.x-k.min.x,st=k.max.y-k.min.y,dt=k.isBox3?k.max.z-k.min.z:1,yt=k.min.x,Ft=k.min.y,Gt=k.isBox3?k.min.z:0):(rt=ue.width,st=ue.height,dt=ue.depth||1,yt=0,Ft=0,Gt=0),V!==null?(St=V.x,Yt=V.y,ce=V.z):(St=0,Yt=0,ce=0);let Be=Ut.convert(U.format),fe=Ut.convert(U.type),Rt;U.isData3DTexture?(A.setTexture3D(U,0),Rt=L.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(A.setTexture2DArray(U,0),Rt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(U,0),Rt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,U.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,U.unpackAlignment);let Di=L.getParameter(L.UNPACK_ROW_LENGTH),de=L.getParameter(L.UNPACK_IMAGE_HEIGHT),ci=L.getParameter(L.UNPACK_SKIP_PIXELS),ys=L.getParameter(L.UNPACK_SKIP_ROWS),Hn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,yt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ft),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Gt);let Ao=w.isDataArrayTexture||w.isData3DTexture,we=U.isDataArrayTexture||U.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){let yi=At.get(w),Co=At.get(U),Qn=At.get(yi.__renderTarget),or=At.get(Co.__renderTarget);wt.bindFramebuffer(L.READ_FRAMEBUFFER,Qn.__webglFramebuffer),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,or.__webglFramebuffer);for(let ar=0;ar<dt;ar++)Ao&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.get(w).__webglTexture,F,Gt+ar),w.isDepthTexture?(we&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,At.get(U).__webglTexture,F,ce+ar),L.blitFramebuffer(yt,Ft,rt,st,St,Yt,rt,st,L.DEPTH_BUFFER_BIT,L.NEAREST)):we?L.copyTexSubImage3D(Rt,F,St,Yt,ce+ar,yt,Ft,rt,st):L.copyTexSubImage2D(Rt,F,St,Yt,ce+ar,yt,Ft,rt,st);wt.bindFramebuffer(L.READ_FRAMEBUFFER,null),wt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else we?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(Rt,F,St,Yt,ce,rt,st,dt,Be,fe,ue.data):U.isCompressedArrayTexture?L.compressedTexSubImage3D(Rt,F,St,Yt,ce,rt,st,dt,Be,ue.data):L.texSubImage3D(Rt,F,St,Yt,ce,rt,st,dt,Be,fe,ue):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,F,St,Yt,rt,st,Be,fe,ue.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,F,St,Yt,ue.width,ue.height,Be,ue.data):L.texSubImage2D(L.TEXTURE_2D,F,St,Yt,rt,st,Be,fe,ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,Di),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,de),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ci),L.pixelStorei(L.UNPACK_SKIP_ROWS,ys),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Hn),F===0&&U.generateMipmaps&&L.generateMipmap(Rt),wt.unbindTexture()},this.copyTextureToTexture3D=function(w,U,k=null,V=null,F=0){return w.isTexture!==!0&&(Bo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,w=arguments[2],U=arguments[3],F=arguments[4]||0),Bo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,U,k,V,F)},this.initRenderTarget=function(w){At.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),wt.unbindTexture()},this.resetState=function(){T=0,E=0,R=null,wt.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}};var Dl=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Bt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Yo=class extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bi,this.environmentIntensity=1,this.environmentRotation=new bi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Du=class extends hn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Xn,h=Xn,d,u){super(null,o,a,l,c,h,i,s,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ll=class extends Mn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ns=new ge,Gp=new ge,cl=[],Wp=new Wi,BS=new ge,Uo=new Ee,No=new Xi,Ul=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Ll(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,BS)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Wi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Wp.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Wp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),No.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(No)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Uo.geometry=this.geometry,Uo.material=this.material,Uo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),No.copy(this.boundingSphere),No.applyMatrix4(n),t.ray.intersectsSphere(No)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ns),Gp.multiplyMatrices(n,Ns),Uo.matrixWorld=Gp,Uo.raycast(t,cl);for(let o=0,a=cl.length;o<a;o++){let l=cl[o];l.instanceId=s,l.object=this,e.push(l)}cl.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Ll(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Du(new Float32Array(i*this.count),i,this.count,tf,Si));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var qo=class extends Yi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Nl=new O,Ol=new O,Xp=new ge,Oo=new Wo,hl=new Xi,wh=new O,Yp=new O,Lu=class extends Je{constructor(t=new Un,e=new qo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,s=e.count;i<s;i++)Nl.fromBufferAttribute(e,i-1),Ol.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Nl.distanceTo(Ol);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),hl.copy(n.boundingSphere),hl.applyMatrix4(i),hl.radius+=s,t.ray.intersectsSphere(hl)===!1)return;Xp.copy(i).invert(),Oo.copy(t.ray).applyMatrix4(Xp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){let p=h.getX(g),M=h.getX(g+1),S=ul(this,t,Oo,l,p,M);S&&e.push(S)}if(this.isLineLoop){let g=h.getX(_-1),m=h.getX(f),p=ul(this,t,Oo,l,g,m);p&&e.push(p)}}else{let f=Math.max(0,o.start),_=Math.min(u.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){let p=ul(this,t,Oo,l,g,g+1);p&&e.push(p)}if(this.isLineLoop){let g=ul(this,t,Oo,l,_-1,f);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ul(r,t,e,n,i,s){let o=r.geometry.attributes.position;if(Nl.fromBufferAttribute(o,i),Ol.fromBufferAttribute(o,s),e.distanceSqToSegment(Nl,Ol,wh,Yp)>n)return;wh.applyMatrix4(r.matrixWorld);let l=t.ray.origin.distanceTo(wh);if(!(l<t.near||l>t.far))return{distance:l,point:Yp.clone().applyMatrix4(r.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:r}}var qp=new O,Zp=new O,Fl=class extends Lu{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,s=e.count;i<s;i+=2)qp.fromBufferAttribute(e,i),Zp.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qp.distanceTo(Zp);t.setAttribute("lineDistance",new Ge(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Zo=class extends Yi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Jp=new ge,Uu=new Wo,fl=new Xi,dl=new O,Bl=class extends Je{constructor(t=new Un,e=new Zo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),fl.copy(n.boundingSphere),fl.applyMatrix4(i),fl.radius+=s,t.ray.intersectsSphere(fl)===!1)return;Jp.copy(i).invert(),Uu.copy(t.ray).applyMatrix4(Jp);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=u,g=f;_<g;_++){let m=c.getX(_);dl.fromBufferAttribute(d,m),$p(dl,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let _=u,g=f;_<g;_++)dl.fromBufferAttribute(d,_),$p(dl,_,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function $p(r,t,e,n,i,s,o){let a=Uu.distanceSqToPoint(r);if(a<e){let l=new O;Uu.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var zl=class extends hn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:ti,this.magFilter=s!==void 0?s:ti,this.generateMipmaps=!1;let h=this;function d(){h.needsUpdate=!0,t.requestVideoFrameCallback(d)}"requestVideoFrameCallback"in t&&t.requestVideoFrameCallback(d)}clone(){return new this.constructor(this.image).copy(this)}update(){let t=this.image;"requestVideoFrameCallback"in t===!1&&t.readyState>=t.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}};var kl=class extends hn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Nu=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new jt:new O);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new O,i=[],s=[],o=[],a=new O,l=new ge;for(let f=0;f<=t;f++){let _=f/t;i[f]=this.getTangentAt(_,new O)}s[0]=new O,o[0]=new O;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(en(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(en(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let _=1;_<=t;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}};function of(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,d){let u=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var pl=new O,Eh=new of,Th=new of,Ah=new of,Jo=class extends Nu{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new O){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(pl.subVectors(i[0],i[1]).add(i[0]),c=pl);let d=i[a%s],u=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(pl.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=pl),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Eh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,_,g,m),Th.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,_,g,m),Ah.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Eh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Th.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ah.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Eh.calc(l),Th.calc(l),Ah.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new O().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Ou=class r extends Un{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new Ge(s,3)),this.setAttribute("normal",new Ge(s.slice(),3)),this.setAttribute("uv",new Ge(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let S=new O,x=new O,C=new O;for(let T=0;T<e.length;T+=3)f(e[T+0],S),f(e[T+1],x),f(e[T+2],C),l(S,x,C,M)}function l(M,S,x,C){let T=C+1,E=[];for(let R=0;R<=T;R++){E[R]=[];let y=M.clone().lerp(x,R/T),v=S.clone().lerp(x,R/T),P=T-R;for(let N=0;N<=P;N++)N===0&&R===T?E[R][N]=y:E[R][N]=y.clone().lerp(v,N/P)}for(let R=0;R<T;R++)for(let y=0;y<2*(T-R)-1;y++){let v=Math.floor(y/2);y%2===0?(u(E[R][v+1]),u(E[R+1][v]),u(E[R][v])):(u(E[R][v+1]),u(E[R+1][v+1]),u(E[R+1][v]))}}function c(M){let S=new O;for(let x=0;x<s.length;x+=3)S.x=s[x+0],S.y=s[x+1],S.z=s[x+2],S.normalize().multiplyScalar(M),s[x+0]=S.x,s[x+1]=S.y,s[x+2]=S.z}function h(){let M=new O;for(let S=0;S<s.length;S+=3){M.x=s[S+0],M.y=s[S+1],M.z=s[S+2];let x=m(M)/2/Math.PI+.5,C=p(M)/Math.PI+.5;o.push(x,1-C)}_(),d()}function d(){for(let M=0;M<o.length;M+=6){let S=o[M+0],x=o[M+2],C=o[M+4],T=Math.max(S,x,C),E=Math.min(S,x,C);T>.9&&E<.1&&(S<.2&&(o[M+0]+=1),x<.2&&(o[M+2]+=1),C<.2&&(o[M+4]+=1))}}function u(M){s.push(M.x,M.y,M.z)}function f(M,S){let x=M*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function _(){let M=new O,S=new O,x=new O,C=new O,T=new jt,E=new jt,R=new jt;for(let y=0,v=0;y<s.length;y+=9,v+=6){M.set(s[y+0],s[y+1],s[y+2]),S.set(s[y+3],s[y+4],s[y+5]),x.set(s[y+6],s[y+7],s[y+8]),T.set(o[v+0],o[v+1]),E.set(o[v+2],o[v+3]),R.set(o[v+4],o[v+5]),C.copy(M).add(S).add(x).divideScalar(3);let P=m(C);g(T,v+0,M,P),g(E,v+2,S,P),g(R,v+4,x,P)}}function g(M,S,x,C){C<0&&M.x===1&&(o[S]=M.x-1),x.x===0&&x.z===0&&(o[S]=C/2/Math.PI+.5)}function m(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.details)}};var qr=class r extends Ou{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var $o=class r extends Un{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new O,d=new O,u=new O;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){let g=_/i*s,m=f/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(g),d.y=(t+e*Math.cos(m))*Math.sin(g),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),u.subVectors(d,h).normalize(),l.push(u.x,u.y,u.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){let g=(i+1)*f+_-1,m=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,M=(i+1)*f+_;o.push(g,m,M),o.push(m,p,M)}this.setIndex(o),this.setAttribute("position",new Ge(a,3)),this.setAttribute("normal",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Js=class extends Yi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=pm,this.normalScale=new jt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Vl=class extends Js{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new jt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return en(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function ml(r,t,e){return!r||!e&&r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}function zS(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}var $s=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fu=class extends $s{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:qd,endingEnd:qd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Zd:s=t,a=2*e-n;break;case Jd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Zd:o=t,l=2*n-e;break;case Jd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,_=(n-e)/(i-e),g=_*_,m=g*_,p=-u*m+2*u*g-u*_,M=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*_+1,S=(-1-f)*m+(1.5+f)*g+.5*_,x=f*m-f*g;for(let C=0;C!==a;++C)s[C]=p*o[h+C]+M*o[c+C]+S*o[l+C]+x*o[d+C];return s}},Bu=class extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)s[u]=o[c+u]*d+o[l+u]*h;return s}},zu=class extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=ml(e,this.TimeBufferType),this.values=ml(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:ml(t.times,Array),values:ml(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new zu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Bu(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Fu(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ml:e=this.InterpolantFactoryMethodDiscrete;break;case pu:e=this.InterpolantFactoryMethodLinear;break;case Jc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ml;case this.InterpolantFactoryMethodLinear:return pu;case this.InterpolantFactoryMethodSmooth:return Jc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&zS(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Jc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let _=0;_!==n;++_){let g=e[d+_];if(g!==e[u+_]||g!==e[f+_]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=pu;var Zr=class extends pi{constructor(t,e,n){super(t,e,n)}};Zr.prototype.ValueTypeName="bool";Zr.prototype.ValueBufferType=Array;Zr.prototype.DefaultInterpolation=Ml;Zr.prototype.InterpolantFactoryMethodLinear=void 0;Zr.prototype.InterpolantFactoryMethodSmooth=void 0;var ku=class extends pi{};ku.prototype.ValueTypeName="color";var Vu=class extends pi{};Vu.prototype.ValueTypeName="number";var Hu=class extends $s{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)vr.slerpFlat(s,0,o,c-a,o,c,l);return s}},Hl=class extends pi{InterpolantFactoryMethodLinear(t){return new Hu(this.times,this.values,this.getValueSize(),t)}};Hl.prototype.ValueTypeName="quaternion";Hl.prototype.InterpolantFactoryMethodSmooth=void 0;var Jr=class extends pi{constructor(t,e,n){super(t,e,n)}};Jr.prototype.ValueTypeName="string";Jr.prototype.ValueBufferType=Array;Jr.prototype.DefaultInterpolation=Ml;Jr.prototype.InterpolantFactoryMethodLinear=void 0;Jr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gu=class extends pi{};Gu.prototype.ValueTypeName="vector";var Kp={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}},Wu=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],_=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}},kS=new Wu,Ko=class{constructor(t){this.manager=t!==void 0?t:kS,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Ko.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xu=class extends Ko{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let s=this,o=Kp.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;let a=Go("img");function l(){h(),Kp.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(d){h(),i&&i(d),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}};var Gl=class extends Ko{constructor(t){super(t)}load(t,e,n,i){let s=new hn,o=new Xu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}},Qo=class extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}};var Ch=new ge,Qp=new O,jp=new O,Wl=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new jt(512,512),this.map=null,this.mapPass=null,this.matrix=new ge,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xo,this._frameExtents=new jt(1,1),this._viewportCount=1,this._viewports=[new me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Qp.setFromMatrixPosition(t.matrixWorld),e.position.copy(Qp),jp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(jp),e.updateMatrixWorld(),Ch.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ch),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ch)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var tm=new ge,Fo=new O,Rh=new O,Yu=class extends Wl{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new jt(4,2),this._viewportCount=6,this._viewports=[new me(2,1,1,1),new me(0,1,1,1),new me(3,1,1,1),new me(1,1,1,1),new me(3,0,1,1),new me(1,0,1,1)],this._cubeDirections=[new O(1,0,0),new O(-1,0,0),new O(0,0,1),new O(0,0,-1),new O(0,1,0),new O(0,-1,0)],this._cubeUps=[new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,1,0),new O(0,0,1),new O(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,i=this.matrix,s=t.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Fo.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fo),Rh.copy(n.position),Rh.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Rh),n.updateMatrixWorld(),i.makeTranslation(-Fo.x,-Fo.y,-Fo.z),tm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tm)}},jo=class extends Qo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},qu=class extends Wl{constructor(){super(new qs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ta=class extends Qo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new qu}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Xl=class extends Qo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Yl=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=em(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=em();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function em(){return performance.now()}var af="\\[\\]\\.:\\/",VS=new RegExp("["+af+"]","g"),lf="[^"+af+"]",HS="[^"+af.replace("\\.","")+"]",GS=/((?:WC+[\/:])*)/.source.replace("WC",lf),WS=/(WCOD+)?/.source.replace("WCOD",HS),XS=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",lf),YS=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",lf),qS=new RegExp("^"+GS+WS+XS+YS+"$"),ZS=["material","materials","bones","map"],Zu=class{constructor(t,e,n){let i=n||Ae.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ae=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(VS,"")}static parseTrackName(t){let e=qS.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ZS.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ae.Composite=Zu;Ae.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ae.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ae.prototype.GetterByBindingType=[Ae.prototype._getValue_direct,Ae.prototype._getValue_array,Ae.prototype._getValue_arrayElement,Ae.prototype._getValue_toArray];Ae.prototype.SetterByBindingTypeAndVersioning=[[Ae.prototype._setValue_direct,Ae.prototype._setValue_direct_setNeedsUpdate,Ae.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_array,Ae.prototype._setValue_array_setNeedsUpdate,Ae.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_arrayElement,Ae.prototype._setValue_arrayElement_setNeedsUpdate,Ae.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ae.prototype._setValue_fromArray,Ae.prototype._setValue_fromArray_setNeedsUpdate,Ae.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var V1=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ju}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ju);var $S="1.1.18";function Em(r,t,e){return Math.max(r,Math.min(t,e))}function KS(r,t,e){return(1-e)*r+e*t}function QS(r,t,e,n){return KS(r,t,1-Math.exp(-e*n))}function jS(r,t){return(r%t+t)%t}var tb=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=r;let e=Em(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=QS(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(r,t,{lerp:e,duration:n,easing:i,onStart:s,onUpdate:o}){this.from=this.value=r,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=o}};function eb(r,t){let e;return function(...n){let i=this;clearTimeout(e),e=setTimeout(()=>{e=void 0,r.apply(i,n)},t)}}var nb=class{constructor(r,t,{autoResize:e=!0,debounce:n=250}={}){this.wrapper=r,this.content=t,e&&(this.debouncedResize=eb(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Tm=class{events={};emit(r,...t){let e=this.events[r]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(r,t){return this.events[r]?.push(t)||(this.events[r]=[t]),()=>{this.events[r]=this.events[r]?.filter(e=>t!==e)}}off(r,t){this.events[r]=this.events[r]?.filter(e=>t!==e)}destroy(){this.events={}}},wm=100/6,Mr={passive:!1},ib=class{constructor(r,t={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Mr),this.element.addEventListener("touchstart",this.onTouchStart,Mr),this.element.addEventListener("touchmove",this.onTouchMove,Mr),this.element.addEventListener("touchend",this.onTouchEnd,Mr)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Tm;on(r,t){return this.emitter.on(r,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,Mr),this.element.removeEventListener("touchstart",this.onTouchStart,Mr),this.element.removeEventListener("touchmove",this.onTouchMove,Mr),this.element.removeEventListener("touchend",this.onTouchEnd,Mr)}onTouchStart=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{let{clientX:t,clientY:e}=r.targetTouches?r.targetTouches[0]:r,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:t,deltaY:e,deltaMode:n}=r,i=n===1?wm:n===2?this.window.width:1,s=n===1?wm:n===2?this.window.height:1;t*=i,e*=s,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},Am=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new tb;emitter=new Tm;dimensions;virtualScroll;constructor({wrapper:r=window,content:t=document.documentElement,eventsTarget:e=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaMultiplier:o=35,duration:a,easing:l=C=>Math.min(1,1.001-Math.pow(2,-10*C)),lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u="vertical",touchMultiplier:f=1,wheelMultiplier:_=1,autoResize:g=!0,prevent:m,virtualScroll:p,overscroll:M=!0,autoRaf:S=!1,__experimental__naiveDimensions:x=!1}={}){window.lenisVersion=$S,(!r||r===document.documentElement||r===document.body)&&(r=window),this.options={wrapper:r,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaMultiplier:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:_,autoResize:g,prevent:m,virtualScroll:p,overscroll:M,autoRaf:S,__experimental__naiveDimensions:x},this.dimensions=new nb(r,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new ib(e,{touchMultiplier:f,wheelMultiplier:_}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,t){return this.emitter.on(r,t)}off(r,t){return this.emitter.off(r,t)}setScroll(r){this.isHorizontal?this.rootElement.scrollLeft=r:this.rootElement.scrollTop=r}onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;let{deltaX:t,deltaY:e,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let l=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));let h=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof h=="function"&&h?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel"))))return;if(this.isStopped||this.isLocked){n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let u=e;this.options.gestureOrientation==="both"?u=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(u=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.preventDefault();let f=i&&this.options.syncTouch,g=i&&n.type==="touchend"&&Math.abs(u)>5;g&&(u=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+u,{programmatic:!1,...f?{lerp:g?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.reset(),this.isStopped=!1)}stop(){this.isStopped||(this.reset(),this.isStopped=!0)}raf=r=>{let t=r-(this.time||r);this.time=r,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:t=0,immediate:e=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:c=!1,programmatic:h=!0,userData:d}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let u;if(typeof r=="string"?u=document.querySelector(r):r instanceof HTMLElement&&r?.nodeType&&(u=r),u){if(this.options.wrapper!==window){let _=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?_.left:_.top}let f=u.getBoundingClientRect();r=(this.isHorizontal?f.left:f.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=t,r=Math.round(r),this.options.infinite?h&&(this.targetScroll=this.animatedScroll=this.scroll):r=Em(0,r,this.limit),r===this.targetScroll){a?.(this),l?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={};return}h||(this.targetScroll=r),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:o,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",a?.(this)},onUpdate:(u,f)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=u-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=u,this.setScroll(this.scroll),h&&(this.targetScroll=u),f||this.emit(),f&&(this.reset(),this.emit(),l?.(this),this.userData={},this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?jS(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function qi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Nm(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var zn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},to={duration:.5,overwrite:!1,delay:0},Af,un,Ce,ii=1e8,Se=1/ii,gf=Math.PI*2,rb=gf/4,sb=0,Om=Math.sqrt,ob=Math.cos,ab=Math.sin,Ye=function(t){return typeof t=="string"},Le=function(t){return typeof t=="function"},Ji=function(t){return typeof t=="number"},sc=function(t){return typeof t>"u"},Ti=function(t){return typeof t=="object"},Bn=function(t){return t!==!1},Cf=function(){return typeof window<"u"},$l=function(t){return Le(t)||Ye(t)},Fm=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},fn=Array.isArray,_f=/(?:-?\.?\d|\.)+/gi,Rf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ts=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Pf=/[+-]=-?[.\d]+/,Bm=/[^,'"\[\]\s]+/gi,lb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Re,wi,xf,If,Zn={},tc={},zm,km=function(t){return(tc=jr(t,Zn))&&dn},oc=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},la=function(t,e){return!e&&console.warn(t)},Vm=function(t,e){return t&&(Zn[t]=e)&&tc&&(tc[t]=e)||Zn},ca=function(){return 0},cb={suppressEvents:!0,isStart:!0,kill:!1},Kl={suppressEvents:!0,kill:!1},hb={suppressEvents:!0},Df={},br=[],vf={},Hm,On={},hf={},Cm=30,Ql=[],Lf="",Uf=function(t){var e=t[0],n,i;if(Ti(e)||Le(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ql.length;i--&&!Ql[i].targetTest(e););n=Ql[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Ff(t[i],n)))||t.splice(i,1);return t},wr=function(t){return t._gsap||Uf(ri(t))[0]._gsap},Nf=function(t,e,n){return(n=t[e])&&Le(n)?t[e]():sc(n)&&t.getAttribute&&t.getAttribute(e)||n},bn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ue=function(t){return Math.round(t*1e5)/1e5||0},$e=function(t){return Math.round(t*1e7)/1e7||0},es=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ub=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},ec=function(){var t=br.length,e=br.slice(0),n,i;for(vf={},br.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Gm=function(t,e,n,i){br.length&&!un&&ec(),t.render(e,n,i||un&&e<0&&(t._initted||t._startAt)),br.length&&!un&&ec()},Wm=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(Bm).length<2?e:Ye(t)?t.trim():t},Xm=function(t){return t},si=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},fb=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},jr=function(t,e){for(var n in e)t[n]=e[n];return t},Rm=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Ti(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},nc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},sa=function(t){var e=t.parent||Re,n=t.keyframes?fb(fn(t.keyframes)):si;if(Bn(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},db=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Ym=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ac=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Er=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},$r=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},pb=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},yf=function(t,e,n,i){return t._startAt&&(un?t._startAt.revert(Kl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},mb=function r(t){return!t||t._ts&&r(t.parent)},Pm=function(t){return t._repeat?eo(t._tTime,t=t.duration()+t._rDelay)*t:0},eo=function(t,e){var n=Math.floor(t/=e);return t&&n===t?n-1:n},ic=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},lc=function(t){return t._end=$e(t._start+(t._tDur/Math.abs(t._ts||t._rts||Se)||0))},cc=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=$e(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),lc(t),n._dirty||$r(n,t)),t},qm=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=ic(t.rawTime(),e),(!e._dur||fa(0,e.totalDuration(),n)-e._tTime>Se)&&e.render(n,!0)),$r(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Se}},Ei=function(t,e,n,i){return e.parent&&Er(e),e._start=$e((Ji(n)?n:n||t!==Re?ni(t,n,e):t._time)+e._delay),e._end=$e(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Ym(t,e,"_first","_last",t._sort?"_start":0),Mf(e)||(t._recent=e),i||qm(t,e),t._ts<0&&cc(t,t._tTime),t},Zm=function(t,e){return(Zn.ScrollTrigger||oc("scrollTrigger",e))&&Zn.ScrollTrigger.create(e,t)},Jm=function(t,e,n,i,s){if(kf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!un&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Hm!==Fn.frame)return br.push(t),t._lazy=[s,i],1},gb=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Mf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},_b=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&gb(t)&&!(!t._initted&&Mf(t))||(t._ts<0||t._dp._ts<0)&&!Mf(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=fa(0,t._tDur,e),h=eo(l,a),t._yoyo&&h&1&&(o=1-o),h!==eo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||un||i||t._zTime===Se||!e&&t._zTime){if(!t._initted&&Jm(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Se:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&yf(t,e,n,!0),t._onUpdate&&!n&&qn(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&qn(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Er(t,1),!n&&!un&&(qn(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},xb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},no=function(t,e,n,i){var s=t._repeat,o=$e(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:$e(o*(s+1)+t._rDelay*s):o,a>0&&!i&&cc(t,t._tTime=t._tDur*a),t.parent&&lc(t),n||$r(t.parent,t),t},Im=function(t){return t instanceof nn?$r(t):no(t,t._dur)},vb={_start:0,endTime:ca,totalDuration:ca},ni=function r(t,e,n){var i=t.labels,s=t._recent||vb,o=t.duration()>=ii?s.endTime(!1):t._dur,a,l,c;return Ye(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(fn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},oa=function(t,e,n){var i=Ji(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Bn(l.vars.inherit)&&l.parent;o.immediateRender=Bn(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Fe(e[0],o,e[s+1])},Tr=function(t,e){return t||t===0?e(t):e},fa=function(t,e,n){return n<t?t:n>e?e:n},rn=function(t,e){return!Ye(t)||!(e=lb.exec(t))?"":e[1]},yb=function(t,e,n){return Tr(n,function(i){return fa(t,e,i)})},Sf=[].slice,$m=function(t,e){return t&&Ti(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Ti(t[0]))&&!t.nodeType&&t!==wi},Mb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return Ye(i)&&!e||$m(i,1)?(s=n).push.apply(s,ri(i)):n.push(i)})||n},ri=function(t,e,n){return Ce&&!e&&Ce.selector?Ce.selector(t):Ye(t)&&!n&&(xf||!io())?Sf.call((e||If).querySelectorAll(t),0):fn(t)?Mb(t,n):$m(t)?Sf.call(t,0):t?[t]:[]},bf=function(t){return t=ri(t)[0]||la("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return ri(e,n.querySelectorAll?n:n===t?la("Invalid scope")||If.createElement("div"):t)}},Km=function(t){return t.sort(function(){return .5-Math.random()})},Qm=function(t){if(Le(t))return t;var e=Ti(t)?t:{each:t},n=Kr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return Ye(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,_){var g=(_||e).length,m=o[g],p,M,S,x,C,T,E,R,y;if(!m){if(y=e.grid==="auto"?0:(e.grid||[1,ii])[1],!y){for(E=-ii;E<(E=_[y++].getBoundingClientRect().left)&&y<g;);y<g&&y--}for(m=o[g]=[],p=l?Math.min(y,g)*h-.5:i%y,M=y===ii?0:l?g*d/y-.5:i/y|0,E=0,R=ii,T=0;T<g;T++)S=T%y-p,x=M-(T/y|0),m[T]=C=c?Math.abs(c==="y"?x:S):Om(S*S+x*x),C>E&&(E=C),C<R&&(R=C);i==="random"&&Km(m),m.max=E-R,m.min=R,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(y>g?g-1:c?c==="y"?g/y:y:Math.max(y,g/y))||0)*(i==="edges"?-1:1),m.b=g<0?s-g:s,m.u=rn(e.amount||e.each)||0,n=n&&g<0?ag(n):n}return g=(m[u]-m.min)/m.max||0,$e(m.b+(n?n(g):g)*m.v)+m.u}},wf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=$e(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ji(n)?0:rn(n))}},jm=function(t,e){var n=fn(t),i,s;return!n&&Ti(t)&&(i=n=t.radius||ii,t.values?(t=ri(t.values),(s=!Ji(t[0]))&&(i*=i)):t=wf(t.increment)),Tr(e,n?Le(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ii,h=0,d=t.length,u,f;d--;)s?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,s||h===o||Ji(o)?h:h+rn(o)}:wf(t))},tg=function(t,e,n,i){return Tr(fn(t)?!e:n===!0?!!(n=0):!i,function(){return fn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Sb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},bb=function(t,e){return function(n){return t(parseFloat(n))+(e||rn(n))}},wb=function(t,e,n){return ng(t,e,0,1,n)},eg=function(t,e,n){return Tr(n,function(i){return t[~~e(i)]})},Eb=function r(t,e,n){var i=e-t;return fn(t)?eg(t,r(0,t.length),e):Tr(n,function(s){return(i+(s-t)%i)%i+t})},Tb=function r(t,e,n){var i=e-t,s=i*2;return fn(t)?eg(t,r(0,t.length-1),e):Tr(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ro=function(t){for(var e=0,n="",i,s,o,a;~(i=t.indexOf("random(",e));)o=t.indexOf(")",i),a=t.charAt(i+7)==="[",s=t.substr(i+7,o-i-7).match(a?Bm:_f),n+=t.substr(e,i-e)+tg(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),e=o+1;return n+t.substr(e,t.length-e)},ng=function(t,e,n,i,s){var o=e-t,a=i-n;return Tr(s,function(l){return n+((l-t)/o*a||0)})},Ab=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=Ye(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(fn(t)&&!fn(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(r(t[c-1],t[c]));d--,s=function(_){_*=d;var g=Math.min(u,~~_);return h[g](_-g)},n=e}else i||(t=jr(fn(t)?[]:{},t));if(!h){for(l in e)Bf.call(a,t,l,"get",e[l]);s=function(_){return Gf(_,a)||(o?t.p:t)}}}return Tr(n,s)},Dm=function(t,e,n){var i=t.labels,s=ii,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qn=function(t,e,n){var i=t.vars,s=i[e],o=Ce,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&br.length&&ec(),a&&(Ce=a),h=l?s.apply(c,l):s.call(c),Ce=o,h},ia=function(t){return Er(t),t.scrollTrigger&&t.scrollTrigger.kill(!!un),t.progress()<1&&qn(t,"onInterrupt"),t},js,ig=[],rg=function(t){if(t)if(t=!t.name&&t.default||t,Cf()||t.headless){var e=t.name,n=Le(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:ca,render:Gf,add:Bf,kill:Gb,modifier:Hb,rawVars:0},o={targetTest:0,get:0,getSetter:hc,aliases:{},register:0};if(io(),t!==i){if(On[e])return;si(i,si(nc(t,s),o)),jr(i.prototype,jr(s,nc(t,o))),On[i.prop=e]=i,t.targetTest&&(Ql.push(i),Df[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Vm(e,i),t.register&&t.register(dn,i,wn)}else ig.push(t)},ye=255,ra={aqua:[0,ye,ye],lime:[0,ye,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ye],navy:[0,0,128],white:[ye,ye,ye],olive:[128,128,0],yellow:[ye,ye,0],orange:[ye,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ye,0,0],pink:[ye,192,203],cyan:[0,ye,ye],transparent:[ye,ye,ye,0]},uf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ye+.5|0},sg=function(t,e,n){var i=t?Ji(t)?[t>>16,t>>8&ye,t&ye]:0:ra.black,s,o,a,l,c,h,d,u,f,_;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ra[t])i=ra[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ye,i&ye,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ye,t&ye]}else if(t.substr(0,3)==="hsl"){if(i=_=t.match(_f),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=uf(l+1/3,s,o),i[1]=uf(l,s,o),i[2]=uf(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Rf),n&&i.length<4&&(i[3]=1),i}else i=t.match(_f)||ra.transparent;i=i.map(Number)}return e&&!_&&(s=i[0]/ye,o=i[1]/ye,a=i[2]/ye,d=Math.max(s,o,a),u=Math.min(s,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===s?(o-a)/f+(o<a?6:0):d===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},og=function(t){var e=[],n=[],i=-1;return t.split(Zi).forEach(function(s){var o=s.match(ts)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Lm=function(t,e,n){var i="",s=(t+i).match(Zi),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!s)return t;if(s=s.map(function(u){return(u=sg(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=og(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(Zi,"1").split(ts),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(Zi),d=c.length-1;a<d;a++)i+=c[a]+s[a];return i+c[d]},Zi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ra)r+="|"+t+"\\b";return new RegExp(r+")","gi")}(),Cb=/hsl[a]?\(/,Of=function(t){var e=t.join(" "),n;if(Zi.lastIndex=0,Zi.test(e))return n=Cb.test(e),t[1]=Lm(t[1],n),t[0]=Lm(t[0],n,og(t[1])),!0},ha,Fn=function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,d,u,f,_=function g(m){var p=r()-i,M=m===!0,S,x,C,T;if((p>t||p<0)&&(n+=p-e),i+=p,C=i-n,S=C-o,(S>0||M)&&(T=++d.frame,u=C-d.time*1e3,d.time=C=C/1e3,o+=S+(S>=s?4:s-S),x=1),M||(l=c(g)),x)for(f=0;f<a.length;f++)a[f](C,u,T,m)};return d={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){zm&&(!xf&&Cf()&&(wi=xf=window,If=wi.document||{},Zn.gsap=dn,(wi.gsapVersions||(wi.gsapVersions=[])).push(dn.version),km(tc||wi.GreenSockGlobals||!wi.gsap&&wi||{}),ig.forEach(rg)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},ha=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ha=0,c=ca},lagSmoothing:function(m,p){t=m||1/0,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,p,M){var S=p?function(x,C,T,E){m(x,C,T,E),d.remove(S)}:m;return d.remove(m),a[M?"unshift":"push"](S),io(),S},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},d}(),io=function(){return!ha&&Fn.wake()},re={},Rb=/^[\d.\-M][\d.\-,\s]/,Pb=/["']/g,Ib=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(Pb,"").trim():+c,i=l.substr(a+1).trim();return e},Db=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Lb=function(t){var e=(t+"").split("("),n=re[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Ib(e[1])]:Db(t).split(",").map(Wm)):re._CE&&Rb.test(t)?re._CE("",t):n},ag=function(t){return function(e){return 1-t(1-e)}},lg=function r(t,e){for(var n=t._first,i;n;)n instanceof nn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Kr=function(t,e){return t&&(Le(t)?t:re[t]||Lb(t))||e},ns=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return bn(t,function(a){re[a]=Zn[a]=s,re[o=a.toLowerCase()]=n;for(var l in s)re[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=re[a+"."+l]=s[l]}),s},cg=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},ff=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/gf*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*ab((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:cg(a);return s=gf/s,l.config=function(c,h){return r(t,c,h)},l},df=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:cg(n);return i.config=function(s){return r(t,s)},i};bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;ns(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});re.Linear.easeNone=re.none=re.Linear.easeIn;ns("Elastic",ff("in"),ff("out"),ff());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};ns("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ns("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ns("Circ",function(r){return-(Om(1-r*r)-1)});ns("Sine",function(r){return r===1?1:-ob(r*rb)+1});ns("Back",df("in"),df("out"),df());re.SteppedEase=re.steps=Zn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Se;return function(a){return((i*fa(0,o,a)|0)+s)*n}}};to.ease=re["quad.out"];bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Lf+=r+","+r+"Params,"});var Ff=function(t,e){this.id=sb++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Nf,this.set=e?e.getSetter:hc},ua=function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,no(this,+e.duration,1,1),this.data=e.data,Ce&&(this._ctx=Ce,Ce.data.push(this)),ha||Fn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,no(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(io(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(cc(this,n),!s._dp||s.parent||qm(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Se||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Gm(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Pm(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Pm(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?eo(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Se?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?ic(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Se?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this._tDur,s),i!==!1),lc(this),pb(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Se&&(this._tTime-=Se)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ei(i,this,n-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Bn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ic(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=hb);var i=un;return un=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),un=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Im(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Im(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ni(this,n),Bn(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Bn(i))},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Se:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Se,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Se)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this;return new Promise(function(s){var o=Le(n)?n:Xm,a=function(){var c=i.then;i.then=null,Le(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},t.kill=function(){ia(this)},r}();si(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Se,_prom:0,_ps:!1,_rts:1});var nn=function(r){Nm(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Bn(n.sortChildren),Re&&Ei(n.parent||Re,qi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zm(qi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return oa(0,arguments,this),this},e.from=function(i,s,o){return oa(1,arguments,this),this},e.fromTo=function(i,s,o,a){return oa(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Fe(i,s,ni(this,o),1),this},e.call=function(i,s,o){return Ei(this,Fe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Fe(i,o,ni(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,sa(o).immediateRender=Bn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,d){return a.startAt=o,sa(a).immediateRender=Bn(a.immediateRender),this.staggerTo(i,s,a,l,c,h,d)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:$e(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,_,g,m,p,M,S,x,C,T,E;if(this!==Re&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,x=this._start,S=this._ts,p=!S,d&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(u=$e(h%m),h===l?(g=this._repeat,u=c):(g=~~(h/m),g&&g===h/m&&(u=c,g--),u>c&&(u=c)),C=eo(this._tTime,m),!a&&this._tTime&&C!==g&&this._tTime-C*m-this._dur<=0&&(C=g),T&&g&1&&(u=c-u,E=1),g!==C&&!this._lock){var R=T&&C&1,y=R===(T&&g&1);if(g<C&&(R=!R),a=R?0:h%c?c:h,this._lock=1,this.render(a||(E?0:$e(g*m)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qn(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,y&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;lg(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=xb(this,$e(a),$e(u)),M&&(h-=u-(u=M._start))),this._tTime=h,this._time=u,this._act=!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&!s&&!g&&(qn(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||u>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,s,o),u!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=-Se);break}}f=_}else{f=this._last;for(var v=i<0?i:u;f;){if(_=f._prev,(f._act||v<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(v-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(v-f._start)*f._ts,s,o||un&&(f._initted||f._startAt)),u!==this._time||!this._ts&&!p){M=0,_&&(h+=this._zTime=v?-Se:Se);break}}f=_}}if(M&&!s&&(this.pause(),M.render(u>=a?0:-Se)._zTime=u>=a?1:-1,this._ts))return this._start=x,lc(this),this.render(i,s,o);this._onUpdate&&!s&&qn(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(x===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Er(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(qn(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ji(s)||(s=ni(this,s,i)),!(i instanceof ua)){if(fn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Ye(i))return this.addLabel(i,s);if(Le(i))i=Fe.delayedCall(0,i);else return this}return this!==i?Ei(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ii);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Fe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return Ye(i)?this.removeLabel(i):Le(i)?this.killTweensOf(i):(ac(this,i),i===this._recent&&(this._recent=this._last),$r(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=$e(Fn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ni(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Fe.delayedCall(0,s||ca,o);return a.data="isPause",this._hasPause=1,Ei(this,a,ni(this,i))},e.removePause=function(i){var s=this._first;for(i=ni(this,i);s;)s._start===i&&s.data==="isPause"&&Er(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Sr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=ri(i),l=this._first,c=Ji(s),h;l;)l instanceof Fe?ub(l._targets,a)&&(c?(!Sr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=ni(o,i),l=s,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,_=Fe.to(o,si({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Se,onStart:function(){if(o.pause(),!f){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==m&&no(_,m,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,d||[])}},s));return u?_.render(0):_},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,si({startAt:{time:ni(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Dm(this,ni(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Dm(this,ni(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Se)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return $r(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=ii,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Ei(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=h/o._ts,o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;no(o,o===Re&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Re._ts&&(Gm(Re,ic(i,Re)),Hm=Fn.frame),Fn.frame>=Cm){Cm+=zn.autoSleep||120;var s=Re._first;if((!s||!s._ts)&&zn.autoSleep&&Fn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Fn.sleep()}}},t}(ua);si(nn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ub=function(t,e,n,i,s,o,a){var l=new wn(this._pt,t,e,0,1,Hf,null,s),c=0,h=0,d,u,f,_,g,m,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ro(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),u=n.match(cf)||[];d=cf.exec(i);)_=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),_!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:_.charAt(1)==="="?es(m,_)-m:parseFloat(_)-m,m:f&&f<4?Math.round:0},c=cf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Pf.test(i)||p)&&(l.e=0),this._pt=l,l},Bf=function(t,e,n,i,s,o,a,l,c,h){Le(i)&&(i=i(s||0,t,o));var d=t[e],u=n!=="get"?n:Le(d)?c?t[e.indexOf("set")||!Le(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=Le(d)?c?zb:fg:Vf,_;if(Ye(i)&&(~i.indexOf("random(")&&(i=ro(i)),i.charAt(1)==="="&&(_=es(u,i)+(rn(u)||0),(_||_===0)&&(i=_))),!h||u!==i||Ef)return!isNaN(u*i)&&i!==""?(_=new wn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?Vb:dg,0,f),c&&(_.fp=c),a&&_.modifier(a,this,t),this._pt=_):(!d&&!(e in t)&&oc(e,i),Ub.call(this,t,e,u,i,f,l||zn.stringFilter,c))},Nb=function(t,e,n,i,s){if(Le(t)&&(t=aa(t,s,e,n,i)),!Ti(t)||t.style&&t.nodeType||fn(t)||Fm(t))return Ye(t)?aa(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=aa(t[a],s,e,n,i);return o},zf=function(t,e,n,i,s,o){var a,l,c,h;if(On[t]&&(a=new On[t]).init(s,a.rawVars?e[t]:Nb(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new wn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==js))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Sr,Ef,kf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,_=t._dur,g=t._startAt,m=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:m,S=t._overwrite==="auto"&&!Af,x=t.timeline,C,T,E,R,y,v,P,N,B,X,J,W,Z;if(x&&(!u||!s)&&(s="none"),t._ease=Kr(s,to.ease),t._yEase=d?ag(Kr(d===!0?s:d,to.ease)):0,d&&t._yoyo&&!t._repeat&&(d=t._yEase,t._yEase=t._ease,t._ease=d),t._from=!x&&!!i.runBackwards,!x||u&&!i.stagger){if(N=m[0]?wr(m[0]).harness:0,W=N&&i[N.prop],C=nc(i,Df),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&_?Kl:cb),g._lazy=0),o){if(Er(t._startAt=Fe.set(m,si({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&Bn(l),startAt:null,delay:0,onUpdate:c&&function(){return qn(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un||!a&&!f)&&t._startAt.revert(Kl),a&&_&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&_&&!g){if(e&&(a=!1),E=si({overwrite:!1,data:"isFromStart",lazy:a&&!g&&Bn(l),immediateRender:a,stagger:0,parent:p},C),W&&(E[N.prop]=W),Er(t._startAt=Fe.set(m,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un?t._startAt.revert(Kl):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Se,Se);else if(!e)return}for(t._pt=t._ptCache=0,l=_&&Bn(l)||l&&!_,T=0;T<m.length;T++){if(y=m[T],P=y._gsap||Uf(m)[T]._gsap,t._ptLookup[T]=X={},vf[P.id]&&br.length&&ec(),J=M===m?T:M.indexOf(y),N&&(B=new N).init(y,W||C,t,J,M)!==!1&&(t._pt=R=new wn(t._pt,y,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(H){X[H]=R}),B.priority&&(v=1)),!N||W)for(E in C)On[E]&&(B=zf(E,C,t,J,y,M))?B.priority&&(v=1):X[E]=R=Bf.call(t,y,E,"get",C[E],J,M,0,i.stringFilter);t._op&&t._op[T]&&t.kill(y,t._op[T]),S&&t._pt&&(Sr=t,Re.killTweensOf(y,X,t.globalTime(e)),Z=!t.parent,Sr=0),t._pt&&l&&(vf[P.id]=1)}v&&Wf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!Z,u&&e<=0&&x.render(ii,!0,!0)},Ob=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ef=1,t.vars[e]="+=0",kf(t,a),Ef=0,l?la(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=Ue(n)+rn(d.e)),d.b&&(d.b=h.s+rn(d.b))},Fb=function(t,e){var n=t[0]?wr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=jr({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Bb=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(fn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},aa=function(t,e,n,i,s){return Le(t)?t.call(e,n,i,s):Ye(t)&&~t.indexOf("random(")?ro(t):t},hg=Lf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ug={};bn(hg+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ug[r]=1});var Fe=function(r){Nm(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:sa(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,_=l.keyframes,g=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,M=i.parent||Re,S=(fn(n)||Fm(n)?Ji(n[0]):"length"in i)?[n]:ri(n),x,C,T,E,R,y,v,P;if(a._targets=S.length?Uf(S):la("GSAP target "+n+" not found. https://gsap.com",!zn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||u||$l(c)||$l(h)){if(i=a.vars,x=a.timeline=new nn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:S}),x.kill(),x.parent=x._dp=qi(a),x._start=0,u||$l(c)||$l(h)){if(E=S.length,v=u&&Qm(u),Ti(u))for(R in u)~hg.indexOf(R)&&(P||(P={}),P[R]=u[R]);for(C=0;C<E;C++)T=nc(i,ug),T.stagger=0,p&&(T.yoyoEase=p),P&&jr(T,P),y=S[C],T.duration=+aa(c,qi(a),C,y,S),T.delay=(+aa(h,qi(a),C,y,S)||0)-a._delay,!u&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),x.to(y,T,v?v(C,y,S):0),x._ease=re.none;x.duration()?c=h=0:a.timeline=0}else if(_){sa(si(x.vars.defaults,{ease:"none"})),x._ease=Kr(_.ease||i.ease||"none");var N=0,B,X,J;if(fn(_))_.forEach(function(W){return x.to(S,W,">")}),x.duration();else{T={};for(R in _)R==="ease"||R==="easeEach"||Bb(R,_[R],T,_.easeEach);for(R in T)for(B=T[R].sort(function(W,Z){return W.t-Z.t}),N=0,C=0;C<B.length;C++)X=B[C],J={ease:X.e,duration:(X.t-(C?B[C-1].t:0))/100*c},J[R]=X.v,x.to(S,J,N),N+=J.duration;x.duration()<c&&x.to({},{duration:c-x.duration()})}}c||a.duration(c=x.duration())}else a.timeline=0;return f===!0&&!Af&&(Sr=qi(a),Re.killTweensOf(S),Sr=0),Ei(M,qi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!_&&a._start===$e(M._time)&&Bn(d)&&mb(qi(a))&&M.data!=="nested")&&(a._tTime=-Se,a.render(Math.max(0,-h)||0)),m&&Zm(qi(a),m),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Se&&!h?l:i<Se?0:i,u,f,_,g,m,p,M,S,x;if(!c)_b(this,i,s,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h){if(u=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(u=$e(d%g),d===l?(_=this._repeat,u=c):(_=~~(d/g),_&&_===$e(d/g)&&(u=c,_--),u>c&&(u=c)),p=this._yoyo&&_&1,p&&(x=this._yEase,u=c-u),m=eo(this._tTime,g),u===a&&!o&&this._initted&&_===m)return this._tTime=d,this;_!==m&&(S&&this._yEase&&lg(S,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render($e(g*_),!0).invalidate()._lock=0))}if(!this._initted){if(Jm(this,h?i:u,o,s,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(x||this._ease)(u/c),this._from&&(this.ratio=M=1-M),u&&!a&&!s&&!_&&(qn(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&yf(this,i,s,o),qn(this,"onUpdate")),this._repeat&&_!==m&&this.vars.onRepeat&&!s&&this.parent&&qn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&yf(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Er(this,1),!s&&!(h&&!a)&&(d||a||p)&&(qn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ha||Fn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||kf(this,c),h=this._ease(c/this._dur),Ob(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(cc(this,0),this.parent||Ym(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Sr&&Sr.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&no(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?ri(i):a,c=this._ptLookup,h=this._pt,d,u,f,_,g,m,p;if((!s||s==="all")&&db(a,l))return s==="all"&&(this._pt=0),ia(this);for(d=this._op=this._op||[],s!=="all"&&(Ye(s)&&(g={},bn(s,function(M){return g[M]=1}),s=g),s=Fb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){u=c[p],s==="all"?(d[p]=s,_=u,f={}):(f=d[p]=d[p]||{},_=s);for(g in _)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&ac(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&ia(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return oa(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return oa(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Re.killTweensOf(i,s,o)},t}(ua);si(Fe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bn("staggerTo,staggerFrom,staggerFromTo",function(r){Fe[r]=function(){var t=new nn,e=Sf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Vf=function(t,e,n){return t[e]=n},fg=function(t,e,n){return t[e](n)},zb=function(t,e,n,i){return t[e](i.fp,n)},kb=function(t,e,n){return t.setAttribute(e,n)},hc=function(t,e){return Le(t[e])?fg:sc(t[e])&&t.setAttribute?kb:Vf},dg=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Vb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Hf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Gf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Hb=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Gb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ac(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Wb=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Wf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},wn=function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||dg,this.d=l||this,this.set=c||Vf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Wb,this.m=n,this.mt=s,this.tween=i},r}();bn(Lf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Df[r]=1});Zn.TweenMax=Zn.TweenLite=Fe;Zn.TimelineLite=Zn.TimelineMax=nn;Re=new nn({sortChildren:!1,defaults:to,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});zn.stringFilter=Of;var Qr=[],jl={},Xb=[],Um=0,Yb=0,pf=function(t){return(jl[t]||Xb).map(function(e){return e()})},Tf=function(){var t=Date.now(),e=[];t-Um>2&&(pf("matchMediaInit"),Qr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),pf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Um=t,pf("matchMedia"))},pg=function(){function r(e,n){this.selector=n&&bf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Yb++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Le(n)&&(s=i,i=n,n=Le);var o=this,a=function(){var c=Ce,h=o.selector,d;return c&&c!==o&&c.data.push(o),s&&(o.selector=bf(s)),Ce=o,d=i.apply(o,arguments),Le(d)&&o._r.push(d),Ce=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===Le?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ce;Ce=null,n(this),Ce=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Fe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof nn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Fe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Qr.length;o--;)Qr[o].id===this.id&&Qr.splice(o,1)},t.revert=function(n){this.kill(n||{})},r}(),qb=function(){function r(e){this.contexts=[],this.scope=e,Ce&&Ce.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ti(n)||(n={matches:n});var o=new pg(0,s||this.scope),a=o.conditions={},l,c,h;Ce&&!o.selector&&(o.selector=Ce.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=wi.matchMedia(n[c]),l&&(Qr.indexOf(o)<0&&Qr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Tf):l.addEventListener("change",Tf)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),rc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return rg(i)})},timeline:function(t){return new nn(t)},getTweensOf:function(t,e){return Re.getTweensOf(t,e)},getProperty:function(t,e,n,i){Ye(t)&&(t=ri(t)[0]);var s=wr(t||{}).get,o=n?Xm:Wm;return n==="native"&&(n=""),t&&(e?o((On[e]&&On[e].get||s)(t,e,n,i)):function(a,l,c){return o((On[a]&&On[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=ri(t),t.length>1){var i=t.map(function(h){return dn.quickSetter(h,e,n)}),s=i.length;return function(h){for(var d=s;d--;)i[d](h)}}t=t[0]||{};var o=On[e],a=wr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;js._pt=0,d.init(t,n?h+n:h,js,0,[t]),d.render(1,d),js._pt&&Gf(1,js)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=dn.to(t,jr((i={},i[e]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return Re.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Kr(t.ease,to.ease)),Rm(to,t||{})},config:function(t){return Rm(zn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!On[a]&&!Zn[a]&&la(e+" effect requires "+a+" plugin.")}),hf[e]=function(a,l,c){return n(ri(a),si(l||{},s),c)},o&&(nn.prototype[e]=function(a,l,c){return this.add(hf[e](a,Ti(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){re[t]=Kr(e)},parseEase:function(t,e){return arguments.length?Kr(t,e):re},getById:function(t){return Re.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new nn(t),i,s;for(n.smoothChildTiming=Bn(t.smoothChildTiming),Re.remove(n),n._dp=0,n._time=n._tTime=Re._time,i=Re._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Fe&&i.vars.onComplete===i._targets[0]))&&Ei(n,i,i._start-i._delay),i=s;return Ei(Re,n,0),n},context:function(t,e){return t?new pg(t,e):Ce},matchMedia:function(t){return new qb(t)},matchMediaRefresh:function(){return Qr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Tf()},addEventListener:function(t,e){var n=jl[t]||(jl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=jl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:Eb,wrapYoyo:Tb,distribute:Qm,random:tg,snap:jm,normalize:wb,getUnit:rn,clamp:yb,splitColor:sg,toArray:ri,selector:bf,mapRange:ng,pipe:Sb,unitize:bb,interpolate:Ab,shuffle:Km},install:km,effects:hf,ticker:Fn,updateRoot:nn.updateRoot,plugins:On,globalTimeline:Re,core:{PropTween:wn,globals:Vm,Tween:Fe,Timeline:nn,Animation:ua,getCache:wr,_removeLinkedListItem:ac,reverting:function(){return un},context:function(t){return t&&Ce&&(Ce.data.push(t),t._ctx=Ce),Ce},suppressOverwrites:function(t){return Af=t}}};bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return rc[r]=Fe[r]});Fn.add(nn.updateRoot);js=rc.to({},{duration:0});var Zb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Jb=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Zb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},mf=function(t,e){return{name:t,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Ye(s)&&(l={},bn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Jb(a,s)}}}},dn=rc.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},mf("roundProps",wf),mf("modifiers"),mf("snap",jm))||rc;Fe.version=nn.version=dn.version="3.12.5";zm=1;Cf()&&io();var $b=re.Power0,Kb=re.Power1,Qb=re.Power2,jb=re.Power3,tw=re.Power4,ew=re.Linear,nw=re.Quad,iw=re.Cubic,rw=re.Quart,sw=re.Quint,ow=re.Strong,aw=re.Elastic,lw=re.Back,cw=re.SteppedEase,hw=re.Bounce,uw=re.Sine,fw=re.Expo,dw=re.Circ;var mg,Ar,oo,Kf,os,pw,gg,Qf,mw=function(){return typeof window<"u"},Ki={},ss=180/Math.PI,ao=Math.PI/180,so=Math.atan2,_g=1e8,jf=/([A-Z])/g,gw=/(left|right|width|margin|padding|x)/i,_w=/[\s,\(]\S/,Ai={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},xw=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vw=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},yw=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},wg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},Eg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Mw=function(t,e,n){return t.style[e]=n},Sw=function(t,e,n){return t.style.setProperty(e,n)},bw=function(t,e,n){return t._gsap[e]=n},ww=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ew=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Tw=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Pe="transform",kn=Pe+"Origin",Aw=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Ki&&s){if(this.tfm=this.tfm||{},t!=="transform")t=Ai[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=$i(i,a)}):this.tfm[t]=o.x?o[t]:$i(i,t),t===kn&&(this.tfm.zOrigin=o.zOrigin);else return Ai.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Pe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(kn,e,"")),t=Pe}(s||e)&&this.props.push(t,e,s[t])},Tg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Cw=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(jf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Qf(),(!s||!s.isStart)&&!n[Pe]&&(Tg(n),i.zOrigin&&n[kn]&&(n[kn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ag=function(t,e){var n={target:t,props:[],revert:Cw,save:Aw};return t._gsap||dn.core.getCache(t),e&&e.split(",").forEach(function(i){return n.save(i)}),n},Cg,Zf=function(t,e){var n=Ar.createElementNS?Ar.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ar.createElement(t);return n&&n.style?n:Ar.createElement(t)},Ci=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(jf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,lo(e)||e,1)||""},xg="O,Moz,ms,Ms,Webkit".split(","),lo=function(t,e,n){var i=e||os,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(xg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?xg[o]:"")+t},Jf=function(){mw()&&window.document&&(mg=window,Ar=mg.document,oo=Ar.documentElement,os=Zf("div")||{style:{}},pw=Zf("div"),Pe=lo(Pe),kn=Pe+"Origin",os.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cg=!!lo("perspective"),Qf=dn.core.reverting,Kf=1)},Xf=function r(t){var e=Zf("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(oo.appendChild(e),e.appendChild(this),this.style.display="block",t)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),oo.removeChild(e),this.style.cssText=s,o},vg=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Rg=function(t){var e;try{e=t.getBBox()}catch{e=Xf.call(t,!0)}return e&&(e.width||e.height)||t.getBBox===Xf||(e=Xf.call(t,!0)),e&&!e.width&&!e.x&&!e.y?{x:+vg(t,["x","cx","x1"])||0,y:+vg(t,["y","cy","y1"])||0,width:0,height:0}:e},Pg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Rg(t))},as=function(t,e){if(e){var n=t.style,i;e in Ki&&e!==kn&&(e=Pe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(jf,"-$1").toLowerCase())):n.removeAttribute(e)}},Cr=function(t,e,n,i,s,o){var a=new wn(t._pt,e,n,0,1,o?Eg:wg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},yg={deg:1,rad:1,turn:1},Rw={grid:1,flex:1},Rr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=os.style,l=gw.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",_,g,m,p;if(i===o||!s||yg[i]||yg[o])return s;if(o!=="px"&&!u&&(s=r(t,e,n,"px")),p=t.getCTM&&Pg(t),(f||o==="%")&&(Ki[e]||~e.indexOf("adius")))return _=p?t.getBBox()[l?"width":"height"]:t[h],Ue(f?s/_*d:s/100*_);if(a[l?"width":"height"]=d+(u?o:i),g=~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Ar||!g.appendChild)&&(g=Ar.body),m=g._gsap,m&&f&&m.width&&l&&m.time===Fn.time&&!m.uncache)return Ue(s/m.width*d);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=d+i,_=t[h],M?t.style[e]=M:as(t,e)}else(f||o==="%")&&!Rw[Ci(g,"display")]&&(a.position=Ci(t,"position")),g===t&&(a.position="static"),g.appendChild(os),_=os[h],g.removeChild(os),a.position="absolute";return l&&f&&(m=wr(g),m.time=Fn.time,m.width=g[h]),Ue(u?_*s/d:_&&s?d/_*s:0)},$i=function(t,e,n,i){var s;return Kf||Jf(),e in Ai&&e!=="transform"&&(e=Ai[e],~e.indexOf(",")&&(e=e.split(",")[0])),Ki[e]&&e!=="transform"?(s=ma(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:fc(Ci(t,kn))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=uc[e]&&uc[e](t,e,n)||Ci(t,e)||Nf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Rr(t,e,s,n)+n:s},Pw=function(t,e,n,i){if(!n||n==="none"){var s=lo(e,t,1),o=s&&Ci(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=Ci(t,"borderTopColor"))}var a=new wn(this._pt,t.style,e,0,1,Hf),l=0,c=0,h,d,u,f,_,g,m,p,M,S,x,C;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(g=t.style[e],t.style[e]=i,i=Ci(t,e)||i,g?t.style[e]=g:as(t,e)),h=[n,i],Of(h),n=h[0],i=h[1],u=n.match(ts)||[],C=i.match(ts)||[],C.length){for(;d=ts.exec(i);)m=d[0],M=i.substring(l,d.index),_?_=(_+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(_=1),m!==(g=u[c++]||"")&&(f=parseFloat(g)||0,x=g.substr((f+"").length),m.charAt(1)==="="&&(m=es(f,m)+x),p=parseFloat(m),S=m.substr((p+"").length),l=ts.lastIndex-S.length,S||(S=S||zn.units[e]||x,l===i.length&&(i+=S,a.e+=S)),x!==S&&(f=Rr(t,e,g,S)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:_&&_<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?Eg:wg;return Pf.test(i)&&(a.e=0),this._pt=a,a},Mg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Iw=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=Mg[n]||n,e[1]=Mg[i]||i,e.join(" ")},Dw=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Ki[a]&&(l=1,a=a==="transformOrigin"?kn:Pe),as(n,a);l&&(as(n,Pe),o&&(o.svg&&n.removeAttribute("transform"),ma(n,1),o.uncache=1,Tg(i)))}},uc={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new wn(t._pt,e,n,0,0,Dw);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},pa=[1,0,0,1,0,0],Ig={},Dg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Sg=function(t){var e=Ci(t,Pe);return Dg(e)?pa:e.substr(7).match(Rf).map(Ue)},td=function(t,e){var n=t._gsap||wr(t),i=t.style,s=Sg(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?pa:s):(s===pa&&!t.offsetParent&&t!==oo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent)&&(c=1,a=t.nextElementSibling,oo.appendChild(t)),s=Sg(t),l?i.display=l:as(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):oo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$f=function(t,e,n,i,s,o){var a=t._gsap,l=s||td(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],_=l[1],g=l[2],m=l[3],p=l[4],M=l[5],S=e.split(" "),x=parseFloat(S[0])||0,C=parseFloat(S[1])||0,T,E,R,y;n?l!==pa&&(E=f*m-_*g)&&(R=x*(m/E)+C*(-g/E)+(g*M-m*p)/E,y=x*(-_/E)+C*(f/E)-(f*M-_*p)/E,x=R,C=y):(T=Rg(t),x=T.x+(~S[0].indexOf("%")?x/100*T.width:x),C=T.y+(~(S[1]||S[0]).indexOf("%")?C/100*T.height:C)),i||i!==!1&&a.smooth?(p=x-c,M=C-h,a.xOffset=d+(p*f+M*g)-p,a.yOffset=u+(p*_+M*m)-M):a.xOffset=a.yOffset=0,a.xOrigin=x,a.yOrigin=C,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[kn]="0px 0px",o&&(Cr(o,a,"xOrigin",c,x),Cr(o,a,"yOrigin",h,C),Cr(o,a,"xOffset",d,a.xOffset),Cr(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",x+" "+C)},ma=function(t,e){var n=t._gsap||new Ff(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=Ci(t,kn)||"0",h,d,u,f,_,g,m,p,M,S,x,C,T,E,R,y,v,P,N,B,X,J,W,Z,H,et,I,ht,Dt,Kt,q,tt;return h=d=u=g=m=p=M=S=x=0,f=_=1,n.svg=!!(t.getCTM&&Pg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Pe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Pe]!=="none"?l[Pe]:"")),i.scale=i.rotate=i.translate="none"),E=td(t,n.svg),n.svg&&(n.uncache?(H=t.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",Z=""):Z=!e&&t.getAttribute("data-svg-origin"),$f(t,Z||c,!!Z||n.originIsAbsolute,n.smooth!==!1,E)),C=n.xOrigin||0,T=n.yOrigin||0,E!==pa&&(P=E[0],N=E[1],B=E[2],X=E[3],h=J=E[4],d=W=E[5],E.length===6?(f=Math.sqrt(P*P+N*N),_=Math.sqrt(X*X+B*B),g=P||N?so(N,P)*ss:0,M=B||X?so(B,X)*ss+g:0,M&&(_*=Math.abs(Math.cos(M*ao))),n.svg&&(h-=C-(C*P+T*B),d-=T-(C*N+T*X))):(tt=E[6],Kt=E[7],I=E[8],ht=E[9],Dt=E[10],q=E[11],h=E[12],d=E[13],u=E[14],R=so(tt,Dt),m=R*ss,R&&(y=Math.cos(-R),v=Math.sin(-R),Z=J*y+I*v,H=W*y+ht*v,et=tt*y+Dt*v,I=J*-v+I*y,ht=W*-v+ht*y,Dt=tt*-v+Dt*y,q=Kt*-v+q*y,J=Z,W=H,tt=et),R=so(-B,Dt),p=R*ss,R&&(y=Math.cos(-R),v=Math.sin(-R),Z=P*y-I*v,H=N*y-ht*v,et=B*y-Dt*v,q=X*v+q*y,P=Z,N=H,B=et),R=so(N,P),g=R*ss,R&&(y=Math.cos(R),v=Math.sin(R),Z=P*y+N*v,H=J*y+W*v,N=N*y-P*v,W=W*y-J*v,P=Z,J=H),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,p=180-p),f=Ue(Math.sqrt(P*P+N*N+B*B)),_=Ue(Math.sqrt(W*W+tt*tt)),R=so(J,W),M=Math.abs(R)>2e-4?R*ss:0,x=q?1/(q<0?-q:q):0),n.svg&&(Z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Dg(Ci(t,Pe)),Z&&t.setAttribute("transform",Z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(_*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=Ue(f),n.scaleY=Ue(_),n.rotation=Ue(g)+a,n.rotationX=Ue(m)+a,n.rotationY=Ue(p)+a,n.skewX=M+a,n.skewY=S+a,n.transformPerspective=x+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[kn]=fc(c)),n.xOffset=n.yOffset=0,n.force3D=zn.force3D,n.renderTransform=n.svg?Uw:Cg?Lg:Lw,n.uncache=0,n},fc=function(t){return(t=t.split(" "))[0]+" "+t[1]},Yf=function(t,e,n){var i=rn(e);return Ue(parseFloat(e)+parseFloat(Rr(t,"x",n+"px",i)))+i},Lw=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Lg(t,e)},is="0deg",da="0px",rs=") ",Lg=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,_=n.scaleX,g=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,S=n.zOrigin,x="",C=p==="auto"&&t&&t!==1||p===!0;if(S&&(d!==is||h!==is)){var T=parseFloat(h)*ao,E=Math.sin(T),R=Math.cos(T),y;T=parseFloat(d)*ao,y=Math.cos(T),o=Yf(M,o,E*y*-S),a=Yf(M,a,-Math.sin(T)*-S),l=Yf(M,l,R*y*-S+S)}m!==da&&(x+="perspective("+m+rs),(i||s)&&(x+="translate("+i+"%, "+s+"%) "),(C||o!==da||a!==da||l!==da)&&(x+=l!==da||C?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+rs),c!==is&&(x+="rotate("+c+rs),h!==is&&(x+="rotateY("+h+rs),d!==is&&(x+="rotateX("+d+rs),(u!==is||f!==is)&&(x+="skew("+u+", "+f+rs),(_!==1||g!==1)&&(x+="scale("+_+", "+g+rs),M.style[Pe]=x||"translate(0, 0)"},Uw=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,_=n.xOrigin,g=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,S=parseFloat(o),x=parseFloat(a),C,T,E,R,y;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ao,c*=ao,C=Math.cos(l)*d,T=Math.sin(l)*d,E=Math.sin(l-c)*-u,R=Math.cos(l-c)*u,c&&(h*=ao,y=Math.tan(c-h),y=Math.sqrt(1+y*y),E*=y,R*=y,h&&(y=Math.tan(h),y=Math.sqrt(1+y*y),C*=y,T*=y)),C=Ue(C),T=Ue(T),E=Ue(E),R=Ue(R)):(C=d,R=u,T=E=0),(S&&!~(o+"").indexOf("px")||x&&!~(a+"").indexOf("px"))&&(S=Rr(f,"x",o,"px"),x=Rr(f,"y",a,"px")),(_||g||m||p)&&(S=Ue(S+_-(_*C+g*E)+m),x=Ue(x+g-(_*T+g*R)+p)),(i||s)&&(y=f.getBBox(),S=Ue(S+i/100*y.width),x=Ue(x+s/100*y.height)),y="matrix("+C+","+T+","+E+","+R+","+S+","+x+")",f.setAttribute("transform",y),M&&(f.style[Pe]=y)},Nw=function(t,e,n,i,s){var o=360,a=Ye(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ss:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=s.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*_g)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*_g)%o-~~(c/o)*o)),t._pt=u=new wn(t._pt,e,n,i,c,xw),u.e=h,u.u="deg",t._props.push(n),u},bg=function(t,e){for(var n in e)t[n]=e[n];return t},Ow=function(t,e,n){var i=bg({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Pe]=e,a=ma(n,1),as(n,Pe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Pe],o[Pe]=e,a=ma(n,1),o[Pe]=c);for(l in Ki)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=rn(c),_=rn(h),d=f!==_?Rr(n,l,c,_):parseFloat(c),u=parseFloat(h),t._pt=new wn(t._pt,a,l,d,u-d,qf),t._pt.u=_||0,t._props.push(l));bg(a,i)};bn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});uc[t>1?"border"+r:r]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(_){return $i(a,_,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(_,g){return f[_]=u[g]=u[g]||u[(g-1)/2|0]}),a.init(l,f,d)}});var ed={name:"css",register:Jf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,_,g,m,p,M,S,x,C,T,E,R;Kf||Jf(),this.styles=this.styles||Ag(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(On[g]&&zf(g,e,n,i,t,s)))){if(f=typeof h,_=uc[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ro(h)),_)_(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",Zi.lastIndex=0,Zi.test(c)||(m=rn(c),p=rn(h)),p?m!==p&&(c=Rr(t,g,c,p)+p):m&&(h+=m),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],Ye(c)&&~c.indexOf("random(")&&(c=ro(c)),rn(c+"")||c==="auto"||(c+=zn.units[g]||rn($i(t,g))||""),(c+"").charAt(1)==="="&&(c=$i(t,g))):c=$i(t,g),u=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),d=parseFloat(h),g in Ai&&(g==="autoAlpha"&&(u===1&&$i(t,"visibility")==="hidden"&&d&&(u=0),R.push("visibility",0,a.visibility),Cr(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ai[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in Ki,S){if(this.styles.save(g),x||(C=t._gsap,C.renderTransform&&!e.parseTransform||ma(t,e.parseTransform),T=e.smoothOrigin!==!1&&C.smooth,x=this._pt=new wn(this._pt,a,Pe,0,1,C.renderTransform,C,0,-1),x.dep=1),g==="scale")this._pt=new wn(this._pt,C,"scaleY",C.scaleY,(M?es(C.scaleY,M+d):d)-C.scaleY||0,qf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(kn,0,a[kn]),h=Iw(h),C.svg?$f(t,h,0,T,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==C.zOrigin&&Cr(this,C,"zOrigin",C.zOrigin,p),Cr(this,a,g,fc(c),fc(h)));continue}else if(g==="svgOrigin"){$f(t,h,1,T,0,this);continue}else if(g in Ig){Nw(this,C,g,u,M?es(u,M+h):h);continue}else if(g==="smoothOrigin"){Cr(this,C,"smooth",C.smooth,h);continue}else if(g==="force3D"){C[g]=h;continue}else if(g==="transform"){Ow(this,h,t);continue}}else g in a||(g=lo(g)||g);if(S||(d||d===0)&&(u||u===0)&&!_w.test(h)&&g in a)m=(c+"").substr((u+"").length),d||(d=0),p=rn(h)||(g in zn.units?zn.units[g]:m),m!==p&&(u=Rr(t,g,c,p)),this._pt=new wn(this._pt,S?C:a,g,u,(M?es(u,M+d):d)-u,!S&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?yw:qf),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vw);else if(g in a)Pw.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){oc(g,h);continue}S||(g in a?R.push(g,0,a[g]):R.push(g,1,c||t[g])),o.push(g)}}E&&Wf(this)},render:function(t,e){if(e.tween._time||!Qf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:$i,aliases:Ai,getSetter:function(t,e,n){var i=Ai[e];return i&&i.indexOf(",")<0&&(e=i),e in Ki&&e!==kn&&(t._gsap.x||$i(t,"x"))?n&&gg===n?e==="scale"?ww:bw:(gg=n||{})&&(e==="scale"?Ew:Tw):t.style&&!sc(t.style[e])?Mw:~e.indexOf("-")?Sw:hc(t,e)},core:{_removeProperty:as,_getMatrix:td}};dn.utils.checkPrefix=lo;dn.core.getStyleSaver=Ag;(function(r,t,e,n){var i=bn(r+","+t+","+e,function(s){Ki[s]=1});bn(t,function(s){zn.units[s]="deg",Ig[s]=1}),Ai[i[13]]=r+","+t,bn(n,function(s){var o=s.split(":");Ai[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){zn.units[r]="px"});dn.registerPlugin(ed);var ga=dn.registerPlugin(ed)||dn,eE=ga.core.Tween;function Ug(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Fw(r,t,e){return t&&Ug(r.prototype,t),e&&Ug(r,e),r}var sn,mc,Bw,Jn,Pr,Ir,ho,Og,ls,xa,Fg,Qi,mi,Bg,zg=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},kg=1,co=[],ee=[],gi=[],va=Date.now,nd=function(t,e){return e},zw=function(){var t=xa.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ee),i.push.apply(i,gi),ee=n,gi=i,nd=function(o,a){return e[o](a)}},tr=function(t,e){return~gi.indexOf(t)&&gi[gi.indexOf(t)+1][e]},ya=function(t){return!!~Fg.indexOf(t)},Tn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},En=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},dc="scrollLeft",pc="scrollTop",id=function(){return Qi&&Qi.isPressed||ee.cache++},gc=function(t,e){var n=function i(s){if(s||s===0){kg&&(Jn.history.scrollRestoration="manual");var o=Qi&&Qi.isPressed;s=i.v=Math.round(s)||(Qi&&Qi.iOS?1:0),t(s),i.cacheID=ee.cache,o&&nd("ss",s)}else(e||ee.cache!==i.cacheID||nd("ref"))&&(i.cacheID=ee.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},pn={s:dc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:gc(function(r){return arguments.length?Jn.scrollTo(r,ke.sc()):Jn.pageXOffset||Pr[dc]||Ir[dc]||ho[dc]||0})},ke={s:pc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:pn,sc:gc(function(r){return arguments.length?Jn.scrollTo(pn.sc(),r):Jn.pageYOffset||Pr[pc]||Ir[pc]||ho[pc]||0})},An=function(t,e){return(e&&e._ctx&&e._ctx.selector||sn.utils.toArray)(t)[0]||(typeof t=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ji=function(t,e){var n=e.s,i=e.sc;ya(t)&&(t=Pr.scrollingElement||Ir);var s=ee.indexOf(t),o=i===ke.sc?1:2;!~s&&(s=ee.push(t)-1),ee[s+o]||Tn(t,"scroll",id);var a=ee[s+o],l=a||(ee[s+o]=gc(tr(t,n),!0)||(ya(t)?i:gc(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=sn.getProperty(t,"scrollBehavior")==="smooth"),l},_c=function(t,e,n){var i=t,s=t,o=va(),a=o,l=e||50,c=Math.max(500,l*3),h=function(_,g){var m=va();g||m-o>l?(s=i,i=_,a=o,o=m):n?i+=_:i=s+(_-s)/(m-a)*(o-a)},d=function(){s=i=n?0:i,a=o=0},u=function(_){var g=a,m=s,p=va();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?m:-m))/((n?p:o)-g)*1e3};return{update:h,reset:d,getVelocity:u}},_a=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Ng=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Vg=function(){xa=sn.core.globals().ScrollTrigger,xa&&xa.core&&zw()},Hg=function(t){return sn=t||zg(),!mc&&sn&&typeof document<"u"&&document.body&&(Jn=window,Pr=document,Ir=Pr.documentElement,ho=Pr.body,Fg=[Jn,Pr,Ir,ho],Bw=sn.utils.clamp,Bg=sn.core.context||function(){},ls="onpointerenter"in ho?"pointer":"mouse",Og=Ne.isTouch=Jn.matchMedia&&Jn.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Jn||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,mi=Ne.eventTypes=("ontouchstart"in Ir?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ir?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return kg=0},500),Vg(),mc=1),mc};pn.op=ke;ee.cache=0;var Ne=function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){mc||Hg(sn)||console.warn("Please gsap.registerPlugin(Observer)"),xa||Vg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,g=n.event,m=n.onDragStart,p=n.onDragEnd,M=n.onDrag,S=n.onPress,x=n.onRelease,C=n.onRight,T=n.onLeft,E=n.onUp,R=n.onDown,y=n.onChangeX,v=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,X=n.onHover,J=n.onHoverEnd,W=n.onMove,Z=n.ignoreCheck,H=n.isNormalizer,et=n.onGestureStart,I=n.onGestureEnd,ht=n.onWheel,Dt=n.onEnable,Kt=n.onDisable,q=n.onClick,tt=n.scrollSpeed,_t=n.capture,nt=n.allowClicks,bt=n.lockAxis,Tt=n.onLockAxis;this.target=a=An(a)||Ir,this.vars=n,f&&(f=sn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,tt=tt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Jn.getComputedStyle(ho).lineHeight)||22);var kt,Qt,Vt,Pt,L,_e,Nt,z=this,wt=0,ie=0,At=n.passive||!h,A=ji(a,pn),b=ji(a,ke),G=A(),j=b(),Q=~o.indexOf("touch")&&!~o.indexOf("pointer")&&mi[0]==="pointerdown",$=ya(a),ut=a.ownerDocument||Pr,at=[0,0,0],pt=[0,0,0],Xt=0,it=function(){return Xt=va()},ot=function(Et,Zt){return(z.event=Et)&&f&&~f.indexOf(Et.target)||Zt&&Q&&Et.pointerType!=="touch"||Z&&Z(Et,Zt)},Lt=function(){z._vx.reset(),z._vy.reset(),Qt.pause(),d&&d(z)},It=function(){var Et=z.deltaX=Ng(at),Zt=z.deltaY=Ng(pt),mt=Math.abs(Et)>=i,Ht=Math.abs(Zt)>=i;P&&(mt||Ht)&&P(z,Et,Zt,at,pt),mt&&(C&&z.deltaX>0&&C(z),T&&z.deltaX<0&&T(z),y&&y(z),N&&z.deltaX<0!=wt<0&&N(z),wt=z.deltaX,at[0]=at[1]=at[2]=0),Ht&&(R&&z.deltaY>0&&R(z),E&&z.deltaY<0&&E(z),v&&v(z),B&&z.deltaY<0!=ie<0&&B(z),ie=z.deltaY,pt[0]=pt[1]=pt[2]=0),(Pt||Vt)&&(W&&W(z),Vt&&(M(z),Vt=!1),Pt=!1),_e&&!(_e=!1)&&Tt&&Tt(z),L&&(ht(z),L=!1),kt=0},vt=function(Et,Zt,mt){at[mt]+=Et,pt[mt]+=Zt,z._vx.update(Et),z._vy.update(Zt),c?kt||(kt=requestAnimationFrame(It)):It()},qt=function(Et,Zt){bt&&!Nt&&(z.axis=Nt=Math.abs(Et)>Math.abs(Zt)?"x":"y",_e=!0),Nt!=="y"&&(at[2]+=Et,z._vx.update(Et,!0)),Nt!=="x"&&(pt[2]+=Zt,z._vy.update(Zt,!0)),c?kt||(kt=requestAnimationFrame(It)):It()},Ut=function(Et){if(!ot(Et,1)){Et=_a(Et,h);var Zt=Et.clientX,mt=Et.clientY,Ht=Zt-z.x,Ct=mt-z.y,zt=z.isDragging;z.x=Zt,z.y=mt,(zt||Math.abs(z.startX-Zt)>=s||Math.abs(z.startY-mt)>=s)&&(M&&(Vt=!0),zt||(z.isDragging=!0),qt(Ht,Ct),zt||m&&m(z))}},oe=z.onPress=function(xt){ot(xt,1)||xt&&xt.button||(z.axis=Nt=null,Qt.pause(),z.isPressed=!0,xt=_a(xt),wt=ie=0,z.startX=z.x=xt.clientX,z.startY=z.y=xt.clientY,z._vx.reset(),z._vy.reset(),Tn(H?a:ut,mi[1],Ut,At,!0),z.deltaX=z.deltaY=0,S&&S(z))},D=z.onRelease=function(xt){if(!ot(xt,1)){En(H?a:ut,mi[1],Ut,!0);var Et=!isNaN(z.y-z.startY),Zt=z.isDragging,mt=Zt&&(Math.abs(z.x-z.startX)>3||Math.abs(z.y-z.startY)>3),Ht=_a(xt);!mt&&Et&&(z._vx.reset(),z._vy.reset(),h&&nt&&sn.delayedCall(.08,function(){if(va()-Xt>300&&!xt.defaultPrevented){if(xt.target.click)xt.target.click();else if(ut.createEvent){var Ct=ut.createEvent("MouseEvents");Ct.initMouseEvent("click",!0,!0,Jn,1,Ht.screenX,Ht.screenY,Ht.clientX,Ht.clientY,!1,!1,!1,!1,0,null),xt.target.dispatchEvent(Ct)}}})),z.isDragging=z.isGesturing=z.isPressed=!1,d&&Zt&&!H&&Qt.restart(!0),p&&Zt&&p(z),x&&x(z,mt)}},ct=function(Et){return Et.touches&&Et.touches.length>1&&(z.isGesturing=!0)&&et(Et,z.isDragging)},Y=function(){return(z.isGesturing=!1)||I(z)},K=function(Et){if(!ot(Et)){var Zt=A(),mt=b();vt((Zt-G)*tt,(mt-j)*tt,1),G=Zt,j=mt,d&&Qt.restart(!0)}},lt=function(Et){if(!ot(Et)){Et=_a(Et,h),ht&&(L=!0);var Zt=(Et.deltaMode===1?l:Et.deltaMode===2?Jn.innerHeight:1)*_;vt(Et.deltaX*Zt,Et.deltaY*Zt,0),d&&!H&&Qt.restart(!0)}},ft=function(Et){if(!ot(Et)){var Zt=Et.clientX,mt=Et.clientY,Ht=Zt-z.x,Ct=mt-z.y;z.x=Zt,z.y=mt,Pt=!0,d&&Qt.restart(!0),(Ht||Ct)&&qt(Ht,Ct)}},Ot=function(Et){z.event=Et,X(z)},le=function(Et){z.event=Et,J(z)},De=function(Et){return ot(Et)||_a(Et,h)&&q(z)};Qt=z._dc=sn.delayedCall(u||.25,Lt).pause(),z.deltaX=z.deltaY=0,z._vx=_c(0,50,!0),z._vy=_c(0,50,!0),z.scrollX=A,z.scrollY=b,z.isDragging=z.isGesturing=z.isPressed=!1,Bg(this),z.enable=function(xt){return z.isEnabled||(Tn($?ut:a,"scroll",id),o.indexOf("scroll")>=0&&Tn($?ut:a,"scroll",K,At,_t),o.indexOf("wheel")>=0&&Tn(a,"wheel",lt,At,_t),(o.indexOf("touch")>=0&&Og||o.indexOf("pointer")>=0)&&(Tn(a,mi[0],oe,At,_t),Tn(ut,mi[2],D),Tn(ut,mi[3],D),nt&&Tn(a,"click",it,!0,!0),q&&Tn(a,"click",De),et&&Tn(ut,"gesturestart",ct),I&&Tn(ut,"gestureend",Y),X&&Tn(a,ls+"enter",Ot),J&&Tn(a,ls+"leave",le),W&&Tn(a,ls+"move",ft)),z.isEnabled=!0,xt&&xt.type&&oe(xt),Dt&&Dt(z)),z},z.disable=function(){z.isEnabled&&(co.filter(function(xt){return xt!==z&&ya(xt.target)}).length||En($?ut:a,"scroll",id),z.isPressed&&(z._vx.reset(),z._vy.reset(),En(H?a:ut,mi[1],Ut,!0)),En($?ut:a,"scroll",K,_t),En(a,"wheel",lt,_t),En(a,mi[0],oe,_t),En(ut,mi[2],D),En(ut,mi[3],D),En(a,"click",it,!0),En(a,"click",De),En(ut,"gesturestart",ct),En(ut,"gestureend",Y),En(a,ls+"enter",Ot),En(a,ls+"leave",le),En(a,ls+"move",ft),z.isEnabled=z.isPressed=z.isDragging=!1,Kt&&Kt(z))},z.kill=z.revert=function(){z.disable();var xt=co.indexOf(z);xt>=0&&co.splice(xt,1),Qi===z&&(Qi=0)},co.push(z),H&&ya(a)&&(Qi=z),z.enable(g)},Fw(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r}();Ne.version="3.12.5";Ne.create=function(r){return new Ne(r)};Ne.register=Hg;Ne.getAll=function(){return co.slice()};Ne.getById=function(r){return co.filter(function(t){return t.vars.id===r})[0]};zg()&&sn.registerPlugin(Ne);var Mt,po,se,Ie,_i,Te,o_,Lc,La,Aa,Sa,xc,mn,Fc,ud,Rn,Gg,Wg,mo,a_,rd,l_,Cn,fd,c_,h_,Dr,dd,xd,go,vd,Uc,pd,sd,vc=1,gn=Date.now,od=gn(),li=0,ba=0,Xg=function(t,e,n){var i=Kn(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Yg=function(t,e){return e&&(!Kn(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},kw=function r(){return ba&&requestAnimationFrame(r)},qg=function(){return Fc=1},Zg=function(){return Fc=0},Ri=function(t){return t},wa=function(t){return Math.round(t*1e5)/1e5||0},u_=function(){return typeof window<"u"},f_=function(){return Mt||u_()&&(Mt=window.gsap)&&Mt.registerPlugin&&Mt},ps=function(t){return!!~o_.indexOf(t)},d_=function(t){return(t==="Height"?vd:se["inner"+t])||_i["client"+t]||Te["client"+t]},p_=function(t){return tr(t,"getBoundingClientRect")||(ps(t)?function(){return Dc.width=se.innerWidth,Dc.height=vd,Dc}:function(){return er(t)})},Vw=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=tr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?d_(s):t["client"+s])||0}},Hw=function(t,e){return!e||~gi.indexOf(t)?p_(t):function(){return Dc}},Pi=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=tr(t,n))?o()-p_(t)()[s]:ps(t)?(_i[n]||Te[n])-d_(i):t[n]-t["offset"+i])},yc=function(t,e){for(var n=0;n<mo.length;n+=3)(!e||~e.indexOf(mo[n+1]))&&t(mo[n],mo[n+1],mo[n+2])},Kn=function(t){return typeof t=="string"},In=function(t){return typeof t=="function"},Ea=function(t){return typeof t=="number"},cs=function(t){return typeof t=="object"},Ma=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},ad=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},uo=Math.abs,m_="left",g_="top",yd="right",Md="bottom",us="width",fs="height",Ca="Right",Ra="Left",Pa="Top",Ia="Bottom",Ve="padding",oi="margin",xo="Width",Sd="Height",qe="px",ai=function(t){return se.getComputedStyle(t)},Gw=function(t){var e=ai(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Jg=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},er=function(t,e){var n=e&&ai(t)[ud]!=="matrix(1, 0, 0, 1, 0, 0)"&&Mt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Nc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},__=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},Ww=function(t){return function(e){return Mt.utils.snap(__(t),e)}},bd=function(t){var e=Mt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},Xw=function(t){return function(e,n){return bd(__(t))(e,n.direction)}},Mc=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},Qe=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},Ke=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Sc=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},$g={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},bc={toggleActions:"play",anticipatePin:0},Oc={top:0,left:0,center:.5,bottom:1,right:1},Cc=function(t,e){if(Kn(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Oc?Oc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},wc=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,d=s.fontSize,u=s.indent,f=s.fontWeight,_=Ie.createElement("div"),g=ps(n)||tr(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,p=g?Te:n,M=t.indexOf("start")!==-1,S=M?c:h,x="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return x+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(x+=(i===ke?yd:Md)+":"+(o+parseFloat(u))+"px;"),a&&(x+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=M,_.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),_.style.cssText=x,_.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],Rc(_,0,i,M),_},Rc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+xo]=1,s["border"+a+xo]=0,s[n.p]=e+"px",Mt.set(t,s)},ne=[],md={},Ua,Kg=function(){return gn()-li>34&&(Ua||(Ua=requestAnimationFrame(nr)))},fo=function(){(!Cn||!Cn.isPressed||Cn.startX>Te.clientWidth)&&(ee.cache++,Cn?Ua||(Ua=requestAnimationFrame(nr)):nr(),li||gs("scrollStart"),li=gn())},ld=function(){h_=se.innerWidth,c_=se.innerHeight},Ta=function(){ee.cache++,!mn&&!l_&&!Ie.fullscreenElement&&!Ie.webkitFullscreenElement&&(!fd||h_!==se.innerWidth||Math.abs(se.innerHeight-c_)>se.innerHeight*.25)&&Lc.restart(!0)},ms={},Yw=[],x_=function r(){return Ke(Wt,"scrollEnd",r)||hs(!0)},gs=function(t){return ms[t]&&ms[t].map(function(e){return e()})||Yw},$n=[],v_=function(t){for(var e=0;e<$n.length;e+=5)(!t||$n[e+4]&&$n[e+4].query===t)&&($n[e].style.cssText=$n[e+1],$n[e].getBBox&&$n[e].setAttribute("transform",$n[e+2]||""),$n[e+3].uncache=1)},wd=function(t,e){var n;for(Rn=0;Rn<ne.length;Rn++)n=ne[Rn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Uc=!0,e&&v_(e),e||gs("revert")},y_=function(t,e){ee.cache++,(e||!Pn)&&ee.forEach(function(n){return In(n)&&n.cacheID++&&(n.rec=0)}),Kn(t)&&(se.history.scrollRestoration=xd=t)},Pn,ds=0,Qg,qw=function(){if(Qg!==ds){var t=Qg=ds;requestAnimationFrame(function(){return t===ds&&hs(!0)})}},M_=function(){Te.appendChild(go),vd=!Cn&&go.offsetHeight||se.innerHeight,Te.removeChild(go)},jg=function(t){return La(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},hs=function(t,e){if(li&&!t&&!Uc){Qe(Wt,"scrollEnd",x_);return}M_(),Pn=Wt.isRefreshing=!0,ee.forEach(function(i){return In(i)&&++i.cacheID&&(i.rec=i())});var n=gs("refreshInit");a_&&Wt.sort(),e||wd(),ee.forEach(function(i){In(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ne.slice(0).forEach(function(i){return i.refresh()}),Uc=!1,ne.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),pd=1,jg(!0),ne.forEach(function(i){var s=Pi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),jg(!1),pd=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ee.forEach(function(i){In(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),y_(xd,1),Lc.pause(),ds++,Pn=2,nr(2),ne.forEach(function(i){return In(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Pn=Wt.isRefreshing=!1,gs("refresh")},gd=0,Pc=1,Da,nr=function(t){if(t===2||!Pn&&!Uc){Wt.isUpdating=!0,Da&&Da.update(0);var e=ne.length,n=gn(),i=n-od>=50,s=e&&ne[0].scroll();if(Pc=gd>s?-1:1,Pn||(gd=s),i&&(li&&!Fc&&n-li>200&&(li=0,gs("scrollEnd")),Sa=od,od=n),Pc<0){for(Rn=e;Rn-- >0;)ne[Rn]&&ne[Rn].update(0,i);Pc=1}else for(Rn=0;Rn<e;Rn++)ne[Rn]&&ne[Rn].update(0,i);Wt.isUpdating=!1}Ua=0},_d=[m_,g_,Md,yd,oi+Ia,oi+Ca,oi+Pa,oi+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ic=_d.concat([us,fs,"boxSizing","max"+xo,"max"+Sd,"position",oi,Ve,Ve+Pa,Ve+Ca,Ve+Ia,Ve+Ra]),Zw=function(t,e,n){_o(n);var i=t._gsap;if(i.spacerIsNative)_o(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},cd=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=_d.length,o=e.style,a=t.style,l;s--;)l=_d[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Md]=a[yd]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[us]=Nc(t,pn)+qe,o[fs]=Nc(t,ke)+qe,o[Ve]=a[oi]=a[g_]=a[m_]="0",_o(i),a[us]=a["max"+xo]=n[us],a[fs]=a["max"+Sd]=n[fs],a[Ve]=n[Ve],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Jw=/([A-Z])/g,_o=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Mt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(Jw,"-$1").toLowerCase())}},Ec=function(t){for(var e=Ic.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ic[s],n[Ic[s]]);return i.t=t,i},$w=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Dc={left:0,top:0},t_=function(t,e,n,i,s,o,a,l,c,h,d,u,f,_){In(t)&&(t=t(l)),Kn(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?Cc("0"+t.substr(3),n):0));var g=f?f.time():0,m,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),Ea(t))f&&(t=Mt.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&Rc(a,n,i,!0);else{In(e)&&(e=e(l));var S=(t||"0").split(" "),x,C,T,E;M=An(e,l)||Te,x=er(M)||{},(!x||!x.left&&!x.top)&&ai(M).display==="none"&&(E=M.style.display,M.style.display="block",x=er(M),E?M.style.display=E:M.style.removeProperty("display")),C=Cc(S[0],x[i.d]),T=Cc(S[1]||"0",n),t=x[i.p]-c[i.p]-h+C+s-T,a&&Rc(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(_&&(l[_]=t||-.001,t<0&&(t=0)),o){var R=t+n,y=o._isStart;m="scroll"+i.d2,Rc(o,R,i,y&&R>20||!y&&(d?Math.max(Te[m],_i[m]):o.parentNode[m])<=R+1),d&&(c=er(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+qe))}return f&&M&&(m=er(M),f.seek(u),p=er(M),f._caScrollDist=m[i.p]-p[i.p],t=t/f._caScrollDist*u),f&&f.seek(g),f?t:Math.round(t)},Kw=/(webkit|moz|length|cssText|inset)/i,e_=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Te){t._stOrig=s.cssText,a=ai(t);for(o in a)!+o&&!Kw.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Mt.core.getCache(t).uncache=1,e.appendChild(t)}},S_=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=o,o}},Tc=function(t,e,n){var i={};i[e.p]="+="+n,Mt.set(t,i)},n_=function(t,e){var n=ji(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,_={};c=c||n();var g=S_(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return g(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ee.cache++,o.tween&&nr()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Mt.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},Qe(t,"wheel",n.wheelHandler),Wt.isTouch&&Qe(t,"touchmove",n.wheelHandler),s},Wt=function(){function r(e,n){po||r.register(Mt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),dd(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ba){this.update=this.refresh=this.kill=Ri;return}n=Jg(Kn(n)||Ea(n)||n.nodeType?{trigger:n}:n,bc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,d=s.scrub,u=s.trigger,f=s.pin,_=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,S=s.once,x=s.snap,C=s.pinReparent,T=s.pinSpacer,E=s.containerAnimation,R=s.fastScrollEnd,y=s.preventOverlaps,v=n.horizontal||n.containerAnimation&&n.horizontal!==!1?pn:ke,P=!d&&d!==0,N=An(n.scroller||se),B=Mt.core.getCache(N),X=ps(N),J=("pinType"in n?n.pinType:tr(N,"pinType")||X&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],Z=P&&n.toggleActions.split(" "),H="markers"in n?n.markers:bc.markers,et=X?0:parseFloat(ai(N)["border"+v.p2+xo])||0,I=this,ht=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Dt=Vw(N,X,v),Kt=Hw(N,X),q=0,tt=0,_t=0,nt=ji(N,v),bt,Tt,kt,Qt,Vt,Pt,L,_e,Nt,z,wt,ie,At,A,b,G,j,Q,$,ut,at,pt,Xt,it,ot,Lt,It,vt,qt,Ut,oe,D,ct,Y,K,lt,ft,Ot,le;if(I._startClamp=I._endClamp=!1,I._dir=v,m*=45,I.scroller=N,I.scroll=E?E.time.bind(E):nt,Qt=nt(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(a_=1,n.refreshPriority===-9999&&(Da=I)),B.tweenScroll=B.tweenScroll||{top:n_(N,ke),left:n_(N,pn)},I.tweenTo=bt=B.tweenScroll[v.p],I.scrubDuration=function(mt){ct=Ea(mt)&&mt,ct?D?D.duration(mt):D=Mt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ct,paused:!0,onComplete:function(){return p&&p(I)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(d),Ut=0,l||(l=i.vars.id)),x&&((!cs(x)||x.push)&&(x={snapTo:x}),"scrollBehavior"in Te.style&&Mt.set(X?[Te,_i]:N,{scrollBehavior:"auto"}),ee.forEach(function(mt){return In(mt)&&mt.target===(X?Ie.scrollingElement||_i:N)&&(mt.smooth=!1)}),kt=In(x.snapTo)?x.snapTo:x.snapTo==="labels"?Ww(i):x.snapTo==="labelsDirectional"?Xw(i):x.directional!==!1?function(mt,Ht){return bd(x.snapTo)(mt,gn()-tt<500?0:Ht.direction)}:Mt.utils.snap(x.snapTo),Y=x.duration||{min:.1,max:2},Y=cs(Y)?Aa(Y.min,Y.max):Aa(Y,Y),K=Mt.delayedCall(x.delay||ct/2||.1,function(){var mt=nt(),Ht=gn()-tt<500,Ct=bt.tween;if((Ht||Math.abs(I.getVelocity())<10)&&!Ct&&!Fc&&q!==mt){var zt=(mt-Pt)/A,Oe=i&&!P?i.totalProgress():zt,te=Ht?0:(Oe-oe)/(gn()-Sa)*1e3||0,Me=Mt.utils.clamp(-zt,1-zt,uo(te/2)*te/.185),He=zt+(x.inertia===!1?0:Me),xe,ve,he=x,Vn=he.onStart,be=he.onInterrupt,vn=he.onComplete;if(xe=kt(He,I),Ea(xe)||(xe=He),ve=Math.round(Pt+xe*A),mt<=L&&mt>=Pt&&ve!==mt){if(Ct&&!Ct._initted&&Ct.data<=uo(ve-mt))return;x.inertia===!1&&(Me=xe-zt),bt(ve,{duration:Y(uo(Math.max(uo(He-Oe),uo(xe-Oe))*.185/te/.05||0)),ease:x.ease||"power3",data:uo(ve-mt),onInterrupt:function(){return K.restart(!0)&&be&&be(I)},onComplete:function(){I.update(),q=nt(),i&&(D?D.resetTo("totalProgress",xe,i._tTime/i._tDur):i.progress(xe)),Ut=oe=i&&!P?i.totalProgress():I.progress,M&&M(I),vn&&vn(I)}},mt,Me*A,ve-mt-Me*A),Vn&&Vn(I,bt.tween)}}else I.isActive&&q!==mt&&K.restart(!0)}).pause()),l&&(md[l]=I),u=I.trigger=An(u||f!==!0&&f),le=u&&u._gsap&&u._gsap.stRevert,le&&(le=le(I)),f=f===!0?u:An(f),Kn(a)&&(a={targets:u,className:a}),f&&(_===!1||_===oi||(_=!_&&f.parentNode&&f.parentNode.style&&ai(f.parentNode).display==="flex"?!1:Ve),I.pin=f,Tt=Mt.core.getCache(f),Tt.spacer?b=Tt.pinState:(T&&(T=An(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Tt.spacerIsNative=!!T,T&&(Tt.spacerState=Ec(T))),Tt.spacer=Q=T||Ie.createElement("div"),Q.classList.add("pin-spacer"),l&&Q.classList.add("pin-spacer-"+l),Tt.pinState=b=Ec(f)),n.force3D!==!1&&Mt.set(f,{force3D:!0}),I.spacer=Q=Tt.spacer,qt=ai(f),it=qt[_+v.os2],ut=Mt.getProperty(f),at=Mt.quickSetter(f,v.a,qe),cd(f,Q,qt),j=Ec(f)),H){ie=cs(H)?Jg(H,$g):$g,z=wc("scroller-start",l,N,v,ie,0),wt=wc("scroller-end",l,N,v,ie,0,z),$=z["offset"+v.op.d2];var De=An(tr(N,"content")||N);_e=this.markerStart=wc("start",l,De,v,ie,$,0,E),Nt=this.markerEnd=wc("end",l,De,v,ie,$,0,E),E&&(Ot=Mt.quickSetter([_e,Nt],v.a,qe)),!J&&!(gi.length&&tr(N,"fixedMarkers")===!0)&&(Gw(X?Te:N),Mt.set([z,wt],{force3D:!0}),Lt=Mt.quickSetter(z,v.a,qe),vt=Mt.quickSetter(wt,v.a,qe))}if(E){var xt=E.vars.onUpdate,Et=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){I.update(0,0,1),xt&&xt.apply(E,Et||[])})}if(I.previous=function(){return ne[ne.indexOf(I)-1]},I.next=function(){return ne[ne.indexOf(I)+1]},I.revert=function(mt,Ht){if(!Ht)return I.kill(!0);var Ct=mt!==!1||!I.enabled,zt=mn;Ct!==I.isReverted&&(Ct&&(lt=Math.max(nt(),I.scroll.rec||0),_t=I.progress,ft=i&&i.progress()),_e&&[_e,Nt,z,wt].forEach(function(Oe){return Oe.style.display=Ct?"none":"block"}),Ct&&(mn=I,I.update(Ct)),f&&(!C||!I.isActive)&&(Ct?Zw(f,Q,b):cd(f,Q,ai(f),ot)),Ct||I.update(Ct),mn=zt,I.isReverted=Ct)},I.refresh=function(mt,Ht,Ct,zt){if(!((mn||!I.enabled)&&!Ht)){if(f&&mt&&li){Qe(r,"scrollEnd",x_);return}!Pn&&ht&&ht(I),mn=I,bt.tween&&!Ct&&(bt.tween.kill(),bt.tween=0),D&&D.pause(),g&&i&&i.revert({kill:!1}).invalidate(),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Oe=Dt(),te=Kt(),Me=E?E.duration():Pi(N,v),He=A<=.01,xe=0,ve=zt||0,he=cs(Ct)?Ct.end:n.end,Vn=n.endTrigger||u,be=cs(Ct)?Ct.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),vn=I.pinnedContainer=n.pinnedContainer&&An(n.pinnedContainer,I),w=u&&Math.max(0,ne.indexOf(I))||0,U=w,k,V,F,rt,st,dt,yt,Ft,Gt,St,Yt,ce,ue;for(H&&cs(Ct)&&(ce=Mt.getProperty(z,v.p),ue=Mt.getProperty(wt,v.p));U--;)dt=ne[U],dt.end||dt.refresh(0,1)||(mn=I),yt=dt.pin,yt&&(yt===u||yt===f||yt===vn)&&!dt.isReverted&&(St||(St=[]),St.unshift(dt),dt.revert(!0,!0)),dt!==ne[U]&&(w--,U--);for(In(be)&&(be=be(I)),be=Xg(be,"start",I),Pt=t_(be,u,Oe,v,nt(),_e,z,I,te,et,J,Me,E,I._startClamp&&"_startClamp")||(f?-.001:0),In(he)&&(he=he(I)),Kn(he)&&!he.indexOf("+=")&&(~he.indexOf(" ")?he=(Kn(be)?be.split(" ")[0]:"")+he:(xe=Cc(he.substr(2),Oe),he=Kn(be)?be:(E?Mt.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,Pt):Pt)+xe,Vn=u)),he=Xg(he,"end",I),L=Math.max(Pt,t_(he||(Vn?"100% 0":Me),Vn,Oe,v,nt()+xe,Nt,wt,I,te,et,J,Me,E,I._endClamp&&"_endClamp"))||-.001,xe=0,U=w;U--;)dt=ne[U],yt=dt.pin,yt&&dt.start-dt._pinPush<=Pt&&!E&&dt.end>0&&(k=dt.end-(I._startClamp?Math.max(0,dt.start):dt.start),(yt===u&&dt.start-dt._pinPush<Pt||yt===vn)&&isNaN(be)&&(xe+=k*(1-dt.progress)),yt===f&&(ve+=k));if(Pt+=xe,L+=xe,I._startClamp&&(I._startClamp+=xe),I._endClamp&&!Pn&&(I._endClamp=L||-.001,L=Math.min(L,Pi(N,v))),A=L-Pt||(Pt-=.01)&&.001,He&&(_t=Mt.utils.clamp(0,1,Mt.utils.normalize(Pt,L,lt))),I._pinPush=ve,_e&&xe&&(k={},k[v.a]="+="+xe,vn&&(k[v.p]="-="+nt()),Mt.set([_e,Nt],k)),f&&!(pd&&I.end>=Pi(N,v)))k=ai(f),rt=v===ke,F=nt(),pt=parseFloat(ut(v.a))+ve,!Me&&L>1&&(Yt=(X?Ie.scrollingElement||_i:N).style,Yt={style:Yt,value:Yt["overflow"+v.a.toUpperCase()]},X&&ai(Te)["overflow"+v.a.toUpperCase()]!=="scroll"&&(Yt.style["overflow"+v.a.toUpperCase()]="scroll")),cd(f,Q,k),j=Ec(f),V=er(f,!0),Ft=J&&ji(N,rt?pn:ke)(),_?(ot=[_+v.os2,A+ve+qe],ot.t=Q,U=_===Ve?Nc(f,v)+A+ve:0,U&&(ot.push(v.d,U+qe),Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+qe)),_o(ot),vn&&ne.forEach(function(Be){Be.pin===vn&&Be.vars.pinSpacing!==!1&&(Be._subPinOffset=!0)}),J&&nt(lt)):(U=Nc(f,v),U&&Q.style.flexBasis!=="auto"&&(Q.style.flexBasis=U+qe)),J&&(st={top:V.top+(rt?F-Pt:Ft)+qe,left:V.left+(rt?Ft:F-Pt)+qe,boxSizing:"border-box",position:"fixed"},st[us]=st["max"+xo]=Math.ceil(V.width)+qe,st[fs]=st["max"+Sd]=Math.ceil(V.height)+qe,st[oi]=st[oi+Pa]=st[oi+Ca]=st[oi+Ia]=st[oi+Ra]="0",st[Ve]=k[Ve],st[Ve+Pa]=k[Ve+Pa],st[Ve+Ca]=k[Ve+Ca],st[Ve+Ia]=k[Ve+Ia],st[Ve+Ra]=k[Ve+Ra],G=$w(b,st,C),Pn&&nt(0)),i?(Gt=i._initted,rd(1),i.render(i.duration(),!0,!0),Xt=ut(v.a)-pt+A+ve,It=Math.abs(A-Xt)>1,J&&It&&G.splice(G.length-2,2),i.render(0,!0,!0),Gt||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),rd(0)):Xt=A,Yt&&(Yt.value?Yt.style["overflow"+v.a.toUpperCase()]=Yt.value:Yt.style.removeProperty("overflow-"+v.a));else if(u&&nt()&&!E)for(V=u.parentNode;V&&V!==Te;)V._pinOffset&&(Pt-=V._pinOffset,L-=V._pinOffset),V=V.parentNode;St&&St.forEach(function(Be){return Be.revert(!1,!0)}),I.start=Pt,I.end=L,Qt=Vt=Pn?lt:nt(),!E&&!Pn&&(Qt<lt&&nt(lt),I.scroll.rec=0),I.revert(!1,!0),tt=gn(),K&&(q=-1,K.restart(!0)),mn=0,i&&P&&(i._initted||ft)&&i.progress()!==ft&&i.progress(ft||0,!0).render(i.time(),!0,!0),(He||_t!==I.progress||E||g)&&(i&&!P&&i.totalProgress(E&&Pt<-.001&&!_t?Mt.utils.normalize(Pt,L,0):_t,!0),I.progress=He||(Qt-Pt)/A===_t?0:_t),f&&_&&(Q._pinOffset=Math.round(I.progress*Xt)),D&&D.invalidate(),isNaN(ce)||(ce-=Mt.getProperty(z,v.p),ue-=Mt.getProperty(wt,v.p),Tc(z,v,ce),Tc(_e,v,ce-(zt||0)),Tc(wt,v,ue),Tc(Nt,v,ue-(zt||0))),He&&!Pn&&I.update(),h&&!Pn&&!At&&(At=!0,h(I),At=!1)}},I.getVelocity=function(){return(nt()-Vt)/(gn()-Sa)*1e3||0},I.endAnimation=function(){Ma(I.callbackAnimation),i&&(D?D.progress(1):i.paused()?P||Ma(i,I.direction<0,1):Ma(i,i.reversed()))},I.labelToScroll=function(mt){return i&&i.labels&&(Pt||I.refresh()||Pt)+i.labels[mt]/i.duration()*A||0},I.getTrailing=function(mt){var Ht=ne.indexOf(I),Ct=I.direction>0?ne.slice(0,Ht).reverse():ne.slice(Ht+1);return(Kn(mt)?Ct.filter(function(zt){return zt.vars.preventOverlaps===mt}):Ct).filter(function(zt){return I.direction>0?zt.end<=Pt:zt.start>=L})},I.update=function(mt,Ht,Ct){if(!(E&&!Ct&&!mt)){var zt=Pn===!0?lt:I.scroll(),Oe=mt?0:(zt-Pt)/A,te=Oe<0?0:Oe>1?1:Oe||0,Me=I.progress,He,xe,ve,he,Vn,be,vn,w;if(Ht&&(Vt=Qt,Qt=E?nt():zt,x&&(oe=Ut,Ut=i&&!P?i.totalProgress():te)),m&&f&&!mn&&!vc&&li&&(!te&&Pt<zt+(zt-Vt)/(gn()-Sa)*m?te=1e-4:te===1&&L>zt+(zt-Vt)/(gn()-Sa)*m&&(te=.9999)),te!==Me&&I.enabled){if(He=I.isActive=!!te&&te<1,xe=!!Me&&Me<1,be=He!==xe,Vn=be||!!te!=!!Me,I.direction=te>Me?1:-1,I.progress=te,Vn&&!mn&&(ve=te&&!Me?0:te===1?1:Me===1?2:3,P&&(he=!be&&Z[ve+1]!=="none"&&Z[ve+1]||Z[ve],w=i&&(he==="complete"||he==="reset"||he in i))),y&&(be||w)&&(w||d||!i)&&(In(y)?y(I):I.getTrailing(y).forEach(function(F){return F.endAnimation()})),P||(D&&!mn&&!vc?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",te,i._tTime/i._tDur):(D.vars.totalProgress=te,D.invalidate().restart())):i&&i.totalProgress(te,!!(mn&&(tt||mt)))),f){if(mt&&_&&(Q.style[_+v.os2]=it),!J)at(wa(pt+Xt*te));else if(Vn){if(vn=!mt&&te>Me&&L+1>zt&&zt+1>=Pi(N,v),C)if(!mt&&(He||vn)){var U=er(f,!0),k=zt-Pt;e_(f,Te,U.top+(v===ke?k:0)+qe,U.left+(v===ke?0:k)+qe)}else e_(f,Q);_o(He||vn?G:j),It&&te<1&&He||at(pt+(te===1&&!vn?Xt:0))}}x&&!bt.tween&&!mn&&!vc&&K.restart(!0),a&&(be||S&&te&&(te<1||!sd))&&La(a.targets).forEach(function(F){return F.classList[He||S?"add":"remove"](a.className)}),o&&!P&&!mt&&o(I),Vn&&!mn?(P&&(w&&(he==="complete"?i.pause().totalProgress(1):he==="reset"?i.restart(!0).pause():he==="restart"?i.restart(!0):i[he]()),o&&o(I)),(be||!sd)&&(c&&be&&ad(I,c),W[ve]&&ad(I,W[ve]),S&&(te===1?I.kill(!1,1):W[ve]=0),be||(ve=te===1?1:3,W[ve]&&ad(I,W[ve]))),R&&!He&&Math.abs(I.getVelocity())>(Ea(R)?R:2500)&&(Ma(I.callbackAnimation),D?D.progress(1):Ma(i,he==="reverse"?1:!te,1))):P&&o&&!mn&&o(I)}if(vt){var V=E?zt/E.duration()*(E._caScrollDist||0):zt;Lt(V+(z._isFlipped?1:0)),vt(V)}Ot&&Ot(-zt/E.duration()*(E._caScrollDist||0))}},I.enable=function(mt,Ht){I.enabled||(I.enabled=!0,Qe(N,"resize",Ta),X||Qe(N,"scroll",fo),ht&&Qe(r,"refreshInit",ht),mt!==!1&&(I.progress=_t=0,Qt=Vt=q=nt()),Ht!==!1&&I.refresh())},I.getTween=function(mt){return mt&&bt?bt.tween:D},I.setPositions=function(mt,Ht,Ct,zt){if(E){var Oe=E.scrollTrigger,te=E.duration(),Me=Oe.end-Oe.start;mt=Oe.start+Me*mt/te,Ht=Oe.start+Me*Ht/te}I.refresh(!1,!1,{start:Yg(mt,Ct&&!!I._startClamp),end:Yg(Ht,Ct&&!!I._endClamp)},zt),I.update()},I.adjustPinSpacing=function(mt){if(ot&&mt){var Ht=ot.indexOf(v.d)+1;ot[Ht]=parseFloat(ot[Ht])+mt+qe,ot[1]=parseFloat(ot[1])+mt+qe,_o(ot)}},I.disable=function(mt,Ht){if(I.enabled&&(mt!==!1&&I.revert(!0,!0),I.enabled=I.isActive=!1,Ht||D&&D.pause(),lt=0,Tt&&(Tt.uncache=1),ht&&Ke(r,"refreshInit",ht),K&&(K.pause(),bt.tween&&bt.tween.kill()&&(bt.tween=0)),!X)){for(var Ct=ne.length;Ct--;)if(ne[Ct].scroller===N&&ne[Ct]!==I)return;Ke(N,"resize",Ta),X||Ke(N,"scroll",fo)}},I.kill=function(mt,Ht){I.disable(mt,Ht),D&&!Ht&&D.kill(),l&&delete md[l];var Ct=ne.indexOf(I);Ct>=0&&ne.splice(Ct,1),Ct===Rn&&Pc>0&&Rn--,Ct=0,ne.forEach(function(zt){return zt.scroller===I.scroller&&(Ct=1)}),Ct||Pn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,mt&&i.revert({kill:!1}),Ht||i.kill()),_e&&[_e,Nt,z,wt].forEach(function(zt){return zt.parentNode&&zt.parentNode.removeChild(zt)}),Da===I&&(Da=0),f&&(Tt&&(Tt.uncache=1),Ct=0,ne.forEach(function(zt){return zt.pin===f&&Ct++}),Ct||(Tt.spacer=0)),n.onKill&&n.onKill(I)},ne.push(I),I.enable(!1,!1),le&&le(I),i&&i.add&&!A){var Zt=I.update;I.update=function(){I.update=Zt,Pt||L||I.refresh()},Mt.delayedCall(.01,I.update),A=.01,Pt=L=0}else I.refresh();f&&qw()},r.register=function(n){return po||(Mt=n||f_(),u_()&&window.document&&r.enable(),po=ba),po},r.defaults=function(n){if(n)for(var i in n)bc[i]=n[i];return bc},r.disable=function(n,i){ba=0,ne.forEach(function(o){return o[i?"kill":"disable"](n)}),Ke(se,"wheel",fo),Ke(Ie,"scroll",fo),clearInterval(xc),Ke(Ie,"touchcancel",Ri),Ke(Te,"touchstart",Ri),Mc(Ke,Ie,"pointerdown,touchstart,mousedown",qg),Mc(Ke,Ie,"pointerup,touchend,mouseup",Zg),Lc.kill(),yc(Ke);for(var s=0;s<ee.length;s+=3)Sc(Ke,ee[s],ee[s+1]),Sc(Ke,ee[s],ee[s+2])},r.enable=function(){if(se=window,Ie=document,_i=Ie.documentElement,Te=Ie.body,Mt&&(La=Mt.utils.toArray,Aa=Mt.utils.clamp,dd=Mt.core.context||Ri,rd=Mt.core.suppressOverwrites||Ri,xd=se.history.scrollRestoration||"auto",gd=se.pageYOffset,Mt.core.globals("ScrollTrigger",r),Te)){ba=1,go=document.createElement("div"),go.style.height="100vh",go.style.position="absolute",M_(),kw(),Ne.register(Mt),r.isTouch=Ne.isTouch,Dr=Ne.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),fd=Ne.isTouch===1,Qe(se,"wheel",fo),o_=[se,Ie,_i,Te],Mt.matchMedia?(r.matchMedia=function(l){var c=Mt.matchMedia(),h;for(h in l)c.add(h,l[h]);return c},Mt.addEventListener("matchMediaInit",function(){return wd()}),Mt.addEventListener("matchMediaRevert",function(){return v_()}),Mt.addEventListener("matchMedia",function(){hs(0,1),gs("matchMedia")}),Mt.matchMedia("(orientation: portrait)",function(){return ld(),ld})):console.warn("Requires GSAP 3.11.0 or later"),ld(),Qe(Ie,"scroll",fo);var n=Te.style,i=n.borderTopStyle,s=Mt.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),n.borderTopStyle="solid",o=er(Te),ke.m=Math.round(o.top+ke.sc())||0,pn.m=Math.round(o.left+pn.sc())||0,i?n.borderTopStyle=i:n.removeProperty("border-top-style"),xc=setInterval(Kg,250),Mt.delayedCall(.5,function(){return vc=0}),Qe(Ie,"touchcancel",Ri),Qe(Te,"touchstart",Ri),Mc(Qe,Ie,"pointerdown,touchstart,mousedown",qg),Mc(Qe,Ie,"pointerup,touchend,mouseup",Zg),ud=Mt.utils.checkPrefix("transform"),Ic.push(ud),po=gn(),Lc=Mt.delayedCall(.2,hs).pause(),mo=[Ie,"visibilitychange",function(){var l=se.innerWidth,c=se.innerHeight;Ie.hidden?(Gg=l,Wg=c):(Gg!==l||Wg!==c)&&Ta()},Ie,"DOMContentLoaded",hs,se,"load",hs,se,"resize",Ta],yc(Qe),ne.forEach(function(l){return l.enable(0,1)}),a=0;a<ee.length;a+=3)Sc(Ke,ee[a],ee[a+1]),Sc(Ke,ee[a],ee[a+2])}},r.config=function(n){"limitCallbacks"in n&&(sd=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(xc)||(xc=i)&&setInterval(Kg,i),"ignoreMobileResize"in n&&(fd=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(yc(Ke)||yc(Qe,n.autoRefreshEvents||"none"),l_=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=An(n),o=ee.indexOf(s),a=ps(s);~o&&ee.splice(o,a?6:2),i&&(a?gi.unshift(se,i,Te,i,_i,i):gi.unshift(s,i))},r.clearMatchMedia=function(n){ne.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Kn(n)?An(n):n).getBoundingClientRect(),a=o[s?us:fs]*i||0;return s?o.right-a>0&&o.left+a<se.innerWidth:o.bottom-a>0&&o.top+a<se.innerHeight},r.positionInViewport=function(n,i,s){Kn(n)&&(n=An(n));var o=n.getBoundingClientRect(),a=o[s?us:fs],l=i==null?a/2:i in Oc?Oc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/se.innerWidth:(o.top+l)/se.innerHeight},r.killAll=function(n){if(ne.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ms.killAll||[];ms={},i.forEach(function(s){return s()})}},r}();Wt.version="3.12.5";Wt.saveStyles=function(r){return r?La(r).forEach(function(t){if(t&&t.style){var e=$n.indexOf(t);e>=0&&$n.splice(e,5),$n.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Mt.core.getCache(t),dd())}}):$n};Wt.revert=function(r,t){return wd(!r,t)};Wt.create=function(r,t){return new Wt(r,t)};Wt.refresh=function(r){return r?Ta():(po||Wt.register())&&hs(!0)};Wt.update=function(r){return++ee.cache&&nr(r===!0?2:0)};Wt.clearScrollMemory=y_;Wt.maxScroll=function(r,t){return Pi(r,t?pn:ke)};Wt.getScrollFunc=function(r,t){return ji(An(r),t?pn:ke)};Wt.getById=function(r){return md[r]};Wt.getAll=function(){return ne.filter(function(r){return r.vars.id!=="ScrollSmoother"})};Wt.isScrolling=function(){return!!li};Wt.snapDirectional=bd;Wt.addEventListener=function(r,t){var e=ms[r]||(ms[r]=[]);~e.indexOf(t)||e.push(t)};Wt.removeEventListener=function(r,t){var e=ms[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};Wt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Mt.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(_){d.length||f.restart(!0),d.push(_.trigger),u.push(_),s<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&In(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return In(s)&&(s=s(),Qe(Wt,"refresh",function(){return s=t.batchMax()})),La(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(Wt.create(c))}),e};var i_=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},hd=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ne.isTouch?" pinch-zoom":""):"none",t===_i&&r(Te,e)},Ac={auto:1,scroll:1},Qw=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Mt.core.getCache(s),a=gn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Te&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Ac[(l=ai(s)).overflowY]||Ac[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ps(s)&&(Ac[(l=ai(s)).overflowY]||Ac[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},b_=function(t,e,n,i){return Ne.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Qw,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&Qe(Ie,Ne.eventTypes[0],s_,!1,!0)},onDisable:function(){return Ke(Ie,Ne.eventTypes[0],s_,!0)}})},jw=/(input|label|select|textarea)/i,r_,s_=function(t){var e=jw.test(t.target.tagName);(e||r_)&&(t._gsapAllow=!0,r_=e)},t1=function(t){cs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=An(t.target)||_i,h=Mt.core.globals().ScrollSmoother,d=h&&h.get(),u=Dr&&(t.content&&An(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=ji(c,ke),_=ji(c,pn),g=1,m=(Ne.isTouch&&se.visualViewport?se.visualViewport.scale*se.visualViewport.width:se.outerWidth)/se.innerWidth,p=0,M=In(i)?function(){return i(a)}:function(){return i||2.8},S,x,C=b_(c,t.type,!0,s),T=function(){return x=!1},E=Ri,R=Ri,y=function(){l=Pi(c,ke),R=Aa(Dr?1:0,l),n&&(E=Aa(0,Pi(c,pn))),S=ds},v=function(){u._gsap.y=wa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(x){requestAnimationFrame(T);var H=wa(a.deltaY/2),et=R(f.v-H);if(u&&et!==f.v+f.offset){f.offset=et-f.v;var I=wa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",u._gsap.y=I+"px",f.cacheID=ee.cache,nr()}return!0}f.offset&&v(),x=!0},N,B,X,J,W=function(){y(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return u&&Mt.set(u,{y:"+=0"}),t.ignoreCheck=function(Z){return Dr&&Z.type==="touchmove"&&P(Z)||g>1.05&&Z.type!=="touchstart"||a.isGesturing||Z.touches&&Z.touches.length>1},t.onPress=function(){x=!1;var Z=g;g=wa((se.visualViewport&&se.visualViewport.scale||1)/m),N.pause(),Z!==g&&hd(c,g>1.01?!0:n?!1:"x"),B=_(),X=f(),y(),S=ds},t.onRelease=t.onGestureStart=function(Z,H){if(f.offset&&v(),!H)J.restart(!0);else{ee.cache++;var et=M(),I,ht;n&&(I=_(),ht=I+et*.05*-Z.velocityX/.227,et*=i_(_,I,ht,Pi(c,pn)),N.vars.scrollX=E(ht)),I=f(),ht=I+et*.05*-Z.velocityY/.227,et*=i_(f,I,ht,Pi(c,ke)),N.vars.scrollY=R(ht),N.invalidate().duration(et).play(.01),(Dr&&N.vars.scrollY>=l||I>=l-1)&&Mt.to({},{onUpdate:W,duration:et})}o&&o(Z)},t.onWheel=function(){N._ts&&N.pause(),gn()-p>1e3&&(S=0,p=gn())},t.onChange=function(Z,H,et,I,ht){if(ds!==S&&y(),H&&n&&_(E(I[2]===H?B+(Z.startX-Z.x):_()+H-I[1])),et){f.offset&&v();var Dt=ht[2]===et,Kt=Dt?X+Z.startY-Z.y:f()+et-ht[1],q=R(Kt);Dt&&Kt!==q&&(X+=q-Kt),f(q)}(et||H)&&nr()},t.onEnable=function(){hd(c,n?!1:"x"),Wt.addEventListener("refresh",W),Qe(se,"resize",W),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),C.enable()},t.onDisable=function(){hd(c,!0),Ke(se,"resize",W),Wt.removeEventListener("refresh",W),C.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ne(t),a.iOS=Dr,Dr&&!f()&&f(1),Dr&&Mt.ticker.add(Ri),J=a._dc,N=Mt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:S_(f,f(),function(){return N.pause()})},onUpdate:nr,onComplete:J.vars.onComplete}),a};Wt.sort=function(r){return ne.sort(r||function(t,e){return(t.vars.refreshPriority||0)*-1e6+t.start-(e.start+(e.vars.refreshPriority||0)*-1e6)})};Wt.observe=function(r){return new Ne(r)};Wt.normalizeScroll=function(r){if(typeof r>"u")return Cn;if(r===!0&&Cn)return Cn.enable();if(r===!1){Cn&&Cn.kill(),Cn=r;return}var t=r instanceof Ne?r:t1(r);return Cn&&Cn.target===t.target&&Cn.kill(),ps(t.target)&&(Cn=t),t};Wt.core={_getVelocityProp:_c,_inputObserver:b_,_scrollers:ee,_proxies:gi,bridge:{ss:function(){li||gs("scrollStart"),li=gn()},ref:function(){return mn}}};f_()&&Mt.registerPlugin(Wt);var xi=document.documentElement,e1=(document.querySelector("script[data-tier]")||{}).dataset?.tier||"full",on=e1==="low",ka=new Bt("#d2ff00"),So=new Bt("#07090a");function n1(r){let t=r>>>0;return function(){t=t+1831565813|0;let n=Math.imul(t^t>>>15,1|t);return n=n+Math.imul(n^n>>>7,61|n)^n,((n^n>>>14)>>>0)/4294967296}}function bo(r,t,e){return new O(r,e,-t)}function vi(r){let t=Math.min(1,Math.max(0,r));return t*t*(3-2*t)}var i1=[[-1.8,-6.5,.9],[1.6,-5.2,.3],[3.3,6,.6],[.8,11.6,.15],[-.6,12.4,-.1],[-2.6,19,.4],[0,28.2,.1],[.35,30.6,0],[.6,41,.2],[0,43.4,.05]].map(r=>bo(r[0],r[1],r[2])),r1=[[0,0,0],[0,0,0],[0,12,0],[0,16,0],[0,16,0],[0,30,0],[0,35.5,.2],[0,35.5,.3],[0,48,0],[0,48,0]].map(r=>bo(r[0],r[1],r[2])),C_=document.getElementById("journey-gl");if(!C_||xi.getAttribute("data-motion")!=="on")throw new Error("journey skipped");ga.registerPlugin(Wt);var xn=new Il({canvas:C_,antialias:!on,alpha:!1,powerPreference:on?"low-power":"high-performance"});xn.outputColorSpace=tn;xn.toneMapping=$u;xn.toneMappingExposure=1.08;xn.setClearColor(So,1);xn.shadowMap.enabled=!1;xn.setPixelRatio(Math.min(window.devicePixelRatio||1,on?1.15:1.5));var je=new Yo;je.background=So;je.fog=new Dl(So,12,62);var ir=new cn(35,1,.08,90),s1=new Jo(i1,!1,"centripetal",.5),o1=new Jo(r1,!1,"centripetal",.5);function a1(){let r=document.createElement("canvas");r.width=128,r.height=64;let t=r.getContext("2d"),e=t.createLinearGradient(0,0,0,64);e.addColorStop(0,"#24300c"),e.addColorStop(.45,"#10140c"),e.addColorStop(1,"#050607"),t.fillStyle=e,t.fillRect(0,0,128,64),t.fillStyle="#d2ff00",t.globalAlpha=.9,t.beginPath(),t.ellipse(64,16,10,6,0,0,Math.PI*2),t.fill(),t.globalAlpha=.35,t.fillStyle="#5cf2ff",t.fillRect(18,40,22,4);let n=new kl(r);n.mapping=Vo,n.colorSpace=tn;let i=new Zs(xn),s=i.fromEquirectangular(n).texture;return i.dispose(),n.dispose(),s}je.environment=a1();je.add(new Xl(10399940,.38));var Ld=new ta(15204250,1.55);Ld.position.set(5,7,8);je.add(Ld);var Ud=new ta(6091519,.35);Ud.position.set(-6,2,-4);je.add(Ud);var R_=[];function wo(r,t,e){let n=e&&!on,i=new Vl({color:t,metalness:0,roughness:r,transmission:n?1:0,thickness:n?1.15:.35,ior:1.5,transparent:!n,opacity:n?1:.2,envMapIntensity:n?1.8:2.5,clearcoat:1,clearcoatRoughness:.06,iridescence:n?.22:.55,iridescenceIOR:1.35,attenuationColor:new Bt("#d7ffe0"),attenuationDistance:2.4});return R_.push(i),i}var Nd=[];function Eo(r,t){let e=new yr({color:ka}),n=new Ee(r,e);return n.userData.bloom=t||1,Nd.push(n),n}var _n=n1(7),vs=new ei,Rd=90,l1=2,xs=[];for(let r=0;r<Rd;r+=1){let t=1-2*(r+.5)/Rd,e=Math.sqrt(Math.max(0,1-t*t)),n=Math.PI*(3-Math.sqrt(5))*r;xs.push(new O(Math.cos(n)*e,t,Math.sin(n)*e).multiplyScalar(l1))}var c1=new qr(.045,1),Va=new Ul(c1,new yr({color:ka}),Rd),Ed=new Je;xs.forEach((r,t)=>{Ed.position.copy(r),Ed.updateMatrix(),Va.setMatrixAt(t,Ed.matrix)});Va.userData.bloom=1;Nd.push(Va);vs.add(Va);var P_=[];xs.forEach((r,t)=>{xs.map((n,i)=>({j:i,d:n.distanceTo(r)})).filter(n=>n.j!==t).sort((n,i)=>n.d-i.d).slice(0,3).forEach(n=>{(n.j>t||_n()<.3)&&P_.push(r.x,r.y,r.z,xs[n.j].x,xs[n.j].y,xs[n.j].z)})});var I_=new Un;I_.setAttribute("position",new Ge(P_,3));var D_=new Fl(I_,new qo({color:ka,transparent:!0,opacity:.45}));vs.add(D_);var Pd=new Ee(new qr(1.05,1),wo(.05,14021887,!0));vs.add(Pd);var Od=Eo(new qr(.35,2),1.4);vs.add(Od);je.add(vs);var sr=new ei;sr.position.copy(bo(.95,16,0));var h1=1920/612,Wc=1.28,Fd=Wc*h1,u1=Xc({key:"fish",poster:"/img/clips/fish-poster.webp",src:"/img/clips/fish.mp4",srcSm:"/img/clips/fish-sm.mp4",w:Fd,h:Wc,position:new O(0,0,0),allowVideo:!0,parent:sr}),L_=new Ee(new Sn(Fd+.28,Wc+.22,.16),wo(.02,15204338,!0));L_.position.z=.08;sr.add(L_);[-1,1].forEach(r=>{let t=Eo(new Sn(Fd+.36,.025,.03),1.2);t.position.set(0,r*(Wc/2+.16),.16),sr.add(t)});var f1=wo(.04,13172692,!1),U_=[];for(let r=0;r<(on?7:12);r+=1){let t=new Ee(new qr(.08+_n()*.16,0),f1),e=_n()<.5?-1:1;t.position.set(1.1+_n()*2.2,(_n()-.5)*1.8,(_n()-.5)*1.4),t.scale.set(1,.35+_n()*.8,1.4+_n()),t.userData.spin=.3+_n()*.6,sr.add(t),U_.push(t)}sr.visible=!1;je.add(sr);var Bd=new jo(13827942,on?4:8,14);Bd.position.set(0,1.4,sr.position.z+1.2);je.add(Bd);var N_=Xc({key:"sakura",poster:"/img/clips/sakura-poster.webp",src:"/img/clips/sakura.mp4",srcSm:"/img/clips/sakura-sm.mp4",w:1.15,h:1.15*(800/1920),position:bo(3.9,16.2,.55),allowVideo:!1});je.add(N_.group);var rr=new ei,O_=-35.5;rr.position.set(0,0,O_);var d1=1600/544,F_=2.15,p1=F_*d1,B_=Xc({key:"forest",poster:"/img/clips/forest-poster.webp",src:"/img/clips/forest.mp4",srcSm:"/img/clips/forest-sm.mp4",w:p1,h:F_,position:new O(0,.35,0),allowVideo:!0,parent:rr}),m1=wo(.35,14017778,!0);[-1,1].forEach(r=>{let t=new Ee(new Sn(.06,2.8,7.2),m1);t.position.set(r*3.35,.35,1.6),rr.add(t);let e=Eo(new Sn(.025,.02,7.4),1);e.position.set(r*3.05,-1.22,1.6),rr.add(e)});var z_=new Ee(new Sn(8,.08,9),new Js({color:790546,roughness:.35,metalness:.25}));z_.position.set(0,-1.32,1.4);rr.add(z_);var k_=new Ee(new Sn(8,.08,9),new Js({color:460809,roughness:.7,metalness:0}));k_.position.set(0,1.85,1.4);rr.add(k_);rr.visible=!1;je.add(rr);var zd=new jo(13688319,on?3:6,16);zd.position.set(0,1.3,O_+2);je.add(zd);var V_=Xc({key:"tree",poster:"/img/clips/tree-poster.webp",src:"/img/clips/tree.mp4",srcSm:"/img/clips/tree-sm.mp4",w:1.05,h:1.05*(950/1920),position:bo(3.7,33.2,.45),allowVideo:!1});je.add(V_.group);var To=new ei;To.position.copy(bo(0,48,0));var g1=Eo(new $o(1.6,.018,12,64),1.5);To.add(g1);var H_=new Ee(new $o(1.88,.09,16,48),wo(.08,15335412,!0));To.add(H_);To.visible=!1;je.add(To);var G_=[];for(let r=0;r<(on?8:16);r+=1){let t=Eo(new Sn(.07,.07,.07),.8);t.position.set((_n()-.5)*8,(_n()-.5)*3,-4-_n()*46),t.userData.bob=_n()*Math.PI*2,t.userData.baseY=t.position.y,je.add(t),G_.push(t)}var W_=on?700:1400,zc=new Float32Array(W_*3);for(let r=0;r<W_;r+=1)zc[r*3]=(_n()-.5)*12,zc[r*3+1]=(_n()-.5)*5,zc[r*3+2]=8-_n()*58;var X_=new Un;X_.setAttribute("position",new Mn(zc,3));var kd=new Zo({color:ka,size:on?.035:.028,transparent:!0,opacity:.75,depthWrite:!1,sizeAttenuation:!0}),Id=new Bl(X_,kd);je.add(Id);var za=[u1,B_],_1=[N_,V_],x1={0:[],1:["fish"],2:["forest"],3:[]};function Xc(r){let t=new ei;t.position.copy(r.position||new O);let e=Eo(new Sn(r.w+.08,r.h+.08,.03),.7);t.add(e);let n=new Gl().load(r.poster);n.colorSpace=tn;let i=new Ee(new Yr(r.w,r.h),new yr({map:n}));i.position.z=.03,t.add(i);let s=new Ee(new Sn(r.w+.05,r.h+.05,.04),wo(.08,16055295,!1));return s.position.z=.05,t.add(s),r.parent&&r.parent.add(t),{key:r.key,group:t,screen:i,posterTex:n,src:r.src,srcSm:r.srcSm,allowVideo:r.allowVideo,video:null,texture:null}}var Y_=!0,Hc=0,v1=on?2:4;function y1(r){return matchMedia("(max-width: 720px)").matches&&r.srcSm?r.srcSm:r.src}function M1(r){if(!r.allowVideo||r.video||Hc>=v1)return;let t=document.createElement("video");t.muted=!0,t.defaultMuted=!0,t.loop=!0,t.playsInline=!0,t.preload="auto",t.crossOrigin="anonymous",t.setAttribute("playsinline",""),t.src=y1(r);let e=new zl(t);e.colorSpace=tn,r.video=t,r.texture=e,Hc+=1}function S1(r){if(M1(r),!r.video)return;r.screen.material.map!==r.texture&&(r.screen.material.map=r.texture,r.screen.material.needsUpdate=!0);let t=r.video.play();t&&t.catch&&t.catch(function(){})}function b1(r){r.video&&r.video.pause()}function w1(r){r.video&&(r.video.pause(),r.video.removeAttribute("src"),r.video.load(),r.texture&&r.texture.dispose(),r.video=null,r.texture=null,Hc=Math.max(0,Hc-1),r.screen.material.map=r.posterTex,r.screen.material.needsUpdate=!0)}var Ba=-1;function q_(r){if(r===Ba)return;Ba=r;let t=new Set(x1[r]||[]);za.forEach(n=>{t.has(n.key)||w1(n)}),za.forEach(n=>{t.has(n.key)&&S1(n)});let e=document.getElementById("progress-label");if(e){let n=xi.lang==="en"?["01 NETWORK","02 CRYSTAL","03 FOREST","04 CONTACT"]:["01 NETTVERK","02 KRYSTALL","03 SKOG","04 KONTAKT"];e.textContent=n[r]||n[0]}}function E1(){let r=Math.max(1,document.documentElement.scrollHeight-window.innerHeight);return["hero","krystall","prosjekter","om-meg","kontakt"].map(n=>{let i=document.getElementById(n);return i?Math.min(.995,Math.max(0,(i.getBoundingClientRect().top+window.scrollY)/r)):0}).concat([1])}var w_=[[.02,.2],[.26,.5],[.5,.64],[.64,.86],[.86,1]];function T1(r){return r<.7?r/.7*.18:.18+vi((r-.7)/.3)*.82}function A1(r){return r<.16?vi(r/.16)*.58:r<.74?.58+(r-.16)/.58*.12:.7+vi((r-.74)/.26)*.3}function C1(r){return vi(r)}function R1(r){return r<.2?vi(r/.2)*.78:.78+(r-.2)/.8*.22}var Mo=[0,.18,.34,.62,.84,1];function Z_(){Mo=E1()}function P1(r){let t=0;for(;t<Mo.length-2&&r>=Mo[t+1]-.001;)t+=1;let e=Math.max(1e-4,Mo[t+1]-Mo[t]),n=Math.min(1,Math.max(0,(r-Mo[t])/e)),i=t===0?T1(n):t===2?C1(n):t===4?R1(n):A1(n),s=w_[t][0],o=w_[t][1];return{u:s+(o-s)*i,i:t,local:n}}var J_={p:0},Yc=new Am({lerp:.06,smoothWheel:!0,syncTouch:!1,autoRaf:!1});Yc.on("scroll",Wt.update);Wt.create({trigger:"#innhold",start:"top top",end:"bottom bottom",scrub:1.2,onUpdate:r=>{J_.p=r.progress}});var kc=new Yn(2,2,{depthBuffer:!0}),Oa=new Yn(2,2),Vc=new Yn(2,2),I1=new qs(-1,1,1,-1,0,1),D1=new Yr(2,2),Dd=new Nn({uniforms:{tDiffuse:{value:null},threshold:{value:on?.72:.62}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float threshold; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); float b = max(c.r, max(c.g, c.b)); float k = smoothstep(threshold, threshold + 0.18, b); gl_FragColor = vec4(c.rgb * k, 1.0); }"}),_s=new Nn({uniforms:{tDiffuse:{value:null},direction:{value:new jt(1,0)},texel:{value:new jt(1,1)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform vec2 direction; uniform vec2 texel; varying vec2 vUv; void main(){ vec2 o = direction * texel; vec3 c = texture2D(tDiffuse, vUv).rgb * 0.227; c += texture2D(tDiffuse, vUv + o).rgb * 0.1946; c += texture2D(tDiffuse, vUv - o).rgb * 0.1946; c += texture2D(tDiffuse, vUv + o * 2.0).rgb * 0.1216; c += texture2D(tDiffuse, vUv - o * 2.0).rgb * 0.1216; c += texture2D(tDiffuse, vUv + o * 3.0).rgb * 0.07; c += texture2D(tDiffuse, vUv - o * 3.0).rgb * 0.07; gl_FragColor = vec4(c, 1.0); }"}),Fa=new Nn({uniforms:{tBeauty:{value:null},tBloom:{value:null},strength:{value:on?.28:.62},tint:{value:new Bt("#d2ff00")}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:"uniform sampler2D tBeauty; uniform sampler2D tBloom; uniform float strength; uniform vec3 tint; varying vec2 vUv; void main(){ vec3 base = texture2D(tBeauty, vUv).rgb; vec3 glow = texture2D(tBloom, vUv).rgb; float lum = max(glow.r, max(glow.g, glow.b)); vec3 tinted = mix(glow, tint * lum, 0.72); gl_FragColor = vec4(base + tinted * strength, 1.0); }"}),$_=new Ee(D1,Dd),K_=new Yo;K_.add($_);function Q_(){let r=window.innerWidth,t=Math.max(1,window.innerHeight);xn.setPixelRatio(Math.min(window.devicePixelRatio||1,on?1.15:1.5)),xn.setSize(r,t,!1),ir.aspect=r/t,ir.updateProjectionMatrix();let e=Math.max(2,Math.floor(r*xn.getPixelRatio())),n=Math.max(2,Math.floor(t*xn.getPixelRatio()));kc.setSize(e,n);let i=Math.max(2,Math.floor(e/2)),s=Math.max(2,Math.floor(n/2));Oa.setSize(i,s),Vc.setSize(i,s),_s.uniforms.texel.value.set(1/i,1/s)}Q_();window.addEventListener("resize",()=>{Q_(),Wt.refresh()});function Bc(r,t){$_.material=r,xn.setRenderTarget(t),xn.render(K_,I1)}var qc=!1,L1=new Yl;Z_();Wt.addEventListener("refresh",Z_);var E_=document.getElementById("journey-veil"),Gc={x:0,y:0},vo={x:0,y:0},Td=matchMedia("(max-width: 760px)"),yo=new O,T_={0:document.querySelector("#hero .hero-sticky"),1:document.querySelector("#krystall .beat-copy"),3:document.querySelector("#skog .beat-copy"),4:document.querySelector("#kontakt .wrap")};window.addEventListener("pointermove",r=>{Gc.x=r.clientX/Math.max(1,window.innerWidth)*2-1,Gc.y=r.clientY/Math.max(1,window.innerHeight)*2-1},{passive:!0});function U1(r,t){return r===2?1:r===0?t<.58?1:1-vi((t-.58)/.3):t<.12?vi(t/.12):t<.66?1:1-vi((t-.66)/.24)}function N1(){if(qc||xi.getAttribute("data-motion")!=="on")return;let r=L1.getElapsedTime(),t=J_.p,e=P1(t),n=Math.min(.999,Math.max(.001,e.u));xi.style.setProperty("--page",t.toFixed(4));let i=s1.getPointAt(n),s=o1.getPointAt(n),o=n>.28&&n<.52,a=n>.66&&n<.84;if(o||a){let u=s.clone().sub(i);u.length()>.5&&(u.normalize(),i.addScaledVector(u,o?.85:.5))}ir.position.copy(i),ir.lookAt(s),!Td.matches&&!on&&(vo.x+=(Gc.x-vo.x)*.045,vo.y+=(Gc.y-vo.y)*.045,ir.position.x+=vo.x*.14,ir.position.y+=-vo.y*.07);let l=0;if(e.i!==2){let u=e.i===0?0:1-vi(e.local/.14),f=vi((e.local-.82)/.18);l=Math.max(u,f)}E_&&(E_.style.opacity=String(l)),Object.keys(T_).forEach(u=>{let f=T_[u];if(!f)return;let _=Number(u)===e.i;f.style.opacity=_?String(U1(e.i,e.local)):"0",f.classList.toggle("is-on",_&&e.local>.04&&e.local<.8)});let c=n<.24?0:n<.56?1:n<.86?2:3;sr.visible=n>.22&&n<.62,rr.visible=n>.48,To.visible=n>.7,performance.now()<j_&&Vd(),_1.forEach(u=>{if(!(u.key==="sakura"&&c===1||u.key==="tree"&&c===2)||Td.matches||l>.35){u.group.visible=!1;return}u.group.getWorldPosition(yo).project(ir),u.group.visible=yo.z<1&&yo.x>.46}),vs.rotation.y=r*.12,vs.rotation.x=.18,Pd.rotation.x=r*.18,Pd.rotation.y=r*.27,Od.scale.setScalar(1+Math.sin(r*2.2)*.04),H_.rotation.z=r*.45,U_.forEach((u,f)=>{if(u.rotation.x=r*u.userData.spin+f,u.rotation.y=r*u.userData.spin*.7,Td.matches){u.visible=!1;return}u.getWorldPosition(yo).project(ir),u.visible=yo.z<1&&yo.x>.08}),G_.forEach(u=>{u.position.y=u.userData.baseY+Math.sin(r*.8+u.userData.bob)*.12,u.rotation.y=r*.4}),Id.position.y=Math.sin(r*.15)*.15,Id.position.z=Math.sin(r*.08)*.2-l*2.4,kd.size=(on?.035:.028)*(1+l*2.4);let h=vi((n-.845)/.06);B_.group.position.y=.35+h*3.15,q_(c);let d=document.getElementById("progress-label");if(d){let u=xi.lang==="en"?["01 NETWORK","02 CRYSTAL","02 PROJECTS","03 FOREST","04 CONTACT"]:["01 NETTVERK","02 KRYSTALL","02 PROSJEKTER","03 SKOG","04 KONTAKT"];d.textContent=u[e.i]||u[0]}za.forEach(u=>{u.texture&&(u.texture.needsUpdate=!0)}),xn.setRenderTarget(kc),xn.render(je,ir),Dd.uniforms.tDiffuse.value=kc.texture,Bc(Dd,Oa),_s.uniforms.tDiffuse.value=Oa.texture,_s.uniforms.direction.value.set(1,0),Bc(_s,Vc),on?Fa.uniforms.tBloom.value=Vc.texture:(_s.uniforms.tDiffuse.value=Vc.texture,_s.uniforms.direction.value.set(0,1),Bc(_s,Oa),Fa.uniforms.tBloom.value=Oa.texture),Fa.uniforms.tBeauty.value=kc.texture,Bc(Fa,null)}var Ad=document.createElement("canvas").getContext("2d",{willReadFrequently:!0}),A_=new Bt,O1=new Bt("#ffffff"),Ii=new Bt("#d2ff00"),Na=new Bt("#5cf2ff"),j_=0;function Cd(r,t,e){let n=(r||"").trim();Ad.fillStyle="#000000",n&&(Ad.fillStyle=n);let i=Ad.fillStyle;return typeof i=="string"&&i.charAt(0)==="#"?e.set(i):e.set(t),e}function Vd(){let r=getComputedStyle(xi);Cd(r.getPropertyValue("--signal"),"#d2ff00",Ii),Cd(r.getPropertyValue("--packet"),"#5cf2ff",Na),Cd(r.getPropertyValue("--bg"),"#07090a",So),ka.copy(Ii),Va.material.color.copy(Ii),D_.material.color.copy(Na),Od.material.color.copy(Ii),kd.color.copy(Ii),Nd.forEach(t=>{t.material&&t.material.color&&t.material.color.copy(Ii)}),A_.copy(Na).lerp(O1,.58),R_.forEach(t=>{t.color.copy(A_),t.attenuationColor.copy(Ii)}),Ld.color.copy(Ii),Ud.color.copy(Na),Bd.color.copy(Ii),zd.color.copy(Na),Fa.uniforms.tint.value.copy(Ii),je.background=So,xn.setClearColor(So,1)}function F1(){j_=performance.now()+700,Vd()}Vd();new MutationObserver(F1).observe(xi,{attributes:!0,attributeFilter:["data-palette","data-theme"]});function B1(){qc=!0,Y_=!1,xi.removeAttribute("data-journey"),Yc.stop(),za.forEach(r=>b1(r))}function z1(){xi.getAttribute("data-motion")==="on"&&(qc=!1,Y_=!0,xi.setAttribute("data-journey","3d"),Yc.start(),Wt.refresh())}function k1(r){qc||(Yc.raf(r*1e3),N1())}xi.setAttribute("data-journey","3d");ga.ticker.add(k1);ga.ticker.lagSmoothing(0);requestAnimationFrame(()=>Wt.refresh());window.__journey={stop:B1,start:z1};document.addEventListener("visibilitychange",()=>{if(za.forEach(r=>{r.video&&document.hidden&&r.video.pause()}),!document.hidden){let r=Ba<0?0:Ba;Ba=-1,q_(r)}});window.addEventListener("load",()=>Wt.refresh());
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

gsap/gsap-core.js:
  (*!
   * GSAP 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.12.5
   * https://gsap.com
   *
   * Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.12.5
   * https://gsap.com
   *
   * @license Copyright 2008-2024, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license or for
   * Club GSAP members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  *)
*/
