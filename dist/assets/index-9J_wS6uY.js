(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Yr="161",li={ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lc=0,wo=1,cc=2,hl=1,dl=2,vn=3,Fn=0,Nt=1,on=2,Un=0,Ci=1,Ir=2,Ao=3,Ro=4,uc=5,qn=100,hc=101,dc=102,Co=103,Lo=104,fc=200,pc=201,mc=202,gc=203,Dr=204,Ur=205,_c=206,vc=207,xc=208,yc=209,Mc=210,Sc=211,Ec=212,bc=213,Tc=214,wc=0,Ac=1,Rc=2,Ls=3,Cc=4,Lc=5,Pc=6,Ic=7,Kr=0,Dc=1,Uc=2,Nn=0,Nc=1,Oc=2,Fc=3,fl=4,Bc=5,zc=6,pl=300,Ii=301,Di=302,Nr=303,Or=304,zs=306,Fr=1e3,en=1001,Br=1002,Ct=1003,Po=1004,ki=1005,Dt=1006,Js=1007,Yn=1008,On=1009,kc=1010,Gc=1011,$r=1012,ml=1013,In=1014,xn=1015,Zi=1016,gl=1017,_l=1018,$n=1020,Hc=1021,tn=1023,Vc=1024,Wc=1025,Zn=1026,Ui=1027,Xc=1028,vl=1029,qc=1030,xl=1031,yl=1033,Qs=33776,er=33777,tr=33778,nr=33779,Io=35840,Do=35841,Uo=35842,No=35843,Ml=36196,Oo=37492,Fo=37496,Bo=37808,zo=37809,ko=37810,Go=37811,Ho=37812,Vo=37813,Wo=37814,Xo=37815,qo=37816,jo=37817,Yo=37818,Ko=37819,$o=37820,Zo=37821,ir=36492,Jo=36494,Qo=36495,jc=36283,ea=36284,ta=36285,na=36286,Sl=3e3,Jn=3001,Yc=3200,Kc=3201,Zr=0,$c=1,qt="",yt="srgb",Mn="srgb-linear",Jr="display-p3",ks="display-p3-linear",Ps="linear",tt="srgb",Is="rec709",Ds="p3",ui=7680,ia=519,Zc=512,Jc=513,Qc=514,El=515,eu=516,tu=517,nu=518,iu=519,sa=35044,ra="300 es",zr=1035,yn=2e3,Us=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ws=Math.PI/180,kr=180/Math.PI;function Ji(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Tt(i,e,t){return Math.max(e,Math.min(t,i))}function su(i,e){return(i%e+e)%e}function sr(i,e,t){return(1-t)*i+t*e}function oa(i){return(i&i-1)===0&&i!==0}function Gr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Pt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ru={DEG2RAD:ws};class Se{constructor(e=0,t=0){Se.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,s,r,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],p=n[2],m=n[5],_=n[8],x=s[0],f=s[3],h=s[6],M=s[1],y=s[4],E=s[7],P=s[2],C=s[5],A=s[8];return r[0]=a*x+o*M+l*P,r[3]=a*f+o*y+l*C,r[6]=a*h+o*E+l*A,r[1]=c*x+u*M+d*P,r[4]=c*f+u*y+d*C,r[7]=c*h+u*E+d*A,r[2]=p*x+m*M+_*P,r[5]=p*f+m*y+_*C,r[8]=p*h+m*E+_*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,p=o*l-u*r,m=c*r-a*l,_=t*d+n*p+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/_;return e[0]=d*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=p*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(rr.makeScale(e,t)),this}rotate(e){return this.premultiply(rr.makeRotation(-e)),this}translate(e,t){return this.premultiply(rr.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rr=new We;function bl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ou(){const i=Ns("canvas");return i.style.display="block",i}const aa={};function Li(i){i in aa||(aa[i]=!0,console.warn(i))}const la=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ca=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ns={[Mn]:{transfer:Ps,primaries:Is,toReference:i=>i,fromReference:i=>i},[yt]:{transfer:tt,primaries:Is,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ks]:{transfer:Ps,primaries:Ds,toReference:i=>i.applyMatrix3(ca),fromReference:i=>i.applyMatrix3(la)},[Jr]:{transfer:tt,primaries:Ds,toReference:i=>i.convertSRGBToLinear().applyMatrix3(ca),fromReference:i=>i.applyMatrix3(la).convertLinearToSRGB()}},au=new Set([Mn,ks]),Je={enabled:!0,_workingColorSpace:Mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!au.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ns[e].toReference,s=ns[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ns[i].primaries},getTransfer:function(i){return i===qt?Ps:ns[i].transfer}};function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function or(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let hi;class Tl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=Ns("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lu=0;class wl{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lu++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ar(s[a].image)):r.push(ar(s[a]))}else r=ar(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Tl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cu=0;class Ot extends oi{constructor(e=Ot.DEFAULT_IMAGE,t=Ot.DEFAULT_MAPPING,n=en,s=en,r=Dt,a=Yn,o=tn,l=On,c=Ot.DEFAULT_ANISOTROPY,u=qt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=Ji(),this.name="",this.source=new wl(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Se(0,0),this.repeat=new Se(1,1),this.center=new Se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Jn?yt:qt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Fr:e.x=e.x-Math.floor(e.x);break;case en:e.x=e.x<0?0:1;break;case Br:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Fr:e.y=e.y-Math.floor(e.y);break;case en:e.y=e.y<0?0:1;break;case Br:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Jn:Sl}set encoding(e){Li("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Jn?yt:qt}}Ot.DEFAULT_IMAGE=null;Ot.DEFAULT_MAPPING=pl;Ot.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,s=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],u=l[4],d=l[8],p=l[1],m=l[5],_=l[9],x=l[2],f=l[6],h=l[10];if(Math.abs(u-p)<.01&&Math.abs(d-x)<.01&&Math.abs(_-f)<.01){if(Math.abs(u+p)<.1&&Math.abs(d+x)<.1&&Math.abs(_+f)<.1&&Math.abs(c+m+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,E=(m+1)/2,P=(h+1)/2,C=(u+p)/4,A=(d+x)/4,N=(_+f)/4;return y>E&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=C/n,r=A/n):E>P?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=C/s,r=N/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=N/r),this.set(n,s,r,t),this}let M=Math.sqrt((f-_)*(f-_)+(d-x)*(d-x)+(p-u)*(p-u));return Math.abs(M)<.001&&(M=1),this.x=(f-_)/M,this.y=(d-x)/M,this.z=(p-u)/M,this.w=Math.acos((c+m+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uu extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const s={width:e,height:t,depth:1};n.encoding!==void 0&&(Li("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Jn?yt:qt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Dt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ot(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new wl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ti extends uu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Al extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class hu extends Ot{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],d=n[s+3];const p=r[a+0],m=r[a+1],_=r[a+2],x=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o===1){e[t+0]=p,e[t+1]=m,e[t+2]=_,e[t+3]=x;return}if(d!==x||l!==p||c!==m||u!==_){let f=1-o;const h=l*p+c*m+u*_+d*x,M=h>=0?1:-1,y=1-h*h;if(y>Number.EPSILON){const P=Math.sqrt(y),C=Math.atan2(P,h*M);f=Math.sin(f*C)/P,o=Math.sin(o*C)/P}const E=o*M;if(l=l*f+p*E,c=c*f+m*E,u=u*f+_*E,d=d*f+x*E,f===1-o){const P=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=P,c*=P,u*=P,d*=P}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],d=r[a],p=r[a+1],m=r[a+2],_=r[a+3];return e[t]=o*_+u*d+l*m-c*p,e[t+1]=l*_+u*p+c*d-o*m,e[t+2]=c*_+u*m+o*p-l*d,e[t+3]=u*_-o*d-l*p-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),d=o(r/2),p=l(n/2),m=l(s/2),_=l(r/2);switch(a){case"XYZ":this._x=p*u*d+c*m*_,this._y=c*m*d-p*u*_,this._z=c*u*_+p*m*d,this._w=c*u*d-p*m*_;break;case"YXZ":this._x=p*u*d+c*m*_,this._y=c*m*d-p*u*_,this._z=c*u*_-p*m*d,this._w=c*u*d+p*m*_;break;case"ZXY":this._x=p*u*d-c*m*_,this._y=c*m*d+p*u*_,this._z=c*u*_+p*m*d,this._w=c*u*d-p*m*_;break;case"ZYX":this._x=p*u*d-c*m*_,this._y=c*m*d+p*u*_,this._z=c*u*_-p*m*d,this._w=c*u*d+p*m*_;break;case"YZX":this._x=p*u*d+c*m*_,this._y=c*m*d+p*u*_,this._z=c*u*_-p*m*d,this._w=c*u*d-p*m*_;break;case"XZY":this._x=p*u*d-c*m*_,this._y=c*m*d-p*u*_,this._z=c*u*_+p*m*d,this._w=c*u*d+p*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],p=n+o+d;if(p>0){const m=.5/Math.sqrt(p+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>d){const m=2*Math.sqrt(1+n-o-d);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>d){const m=2*Math.sqrt(1+o-n-d);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+d-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),d=Math.sin((1-t)*u)/c,p=Math.sin(t*u)/c;return this._w=a*d+this._w*p,this._x=n*d+this._x*p,this._y=s*d+this._y*p,this._z=r*d+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(s),n*Math.sin(r),n*Math.cos(r),t*Math.sin(s))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ua.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ua.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-r*d,this.z=s+l*d+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return lr.copy(this).projectOnVector(e),this.sub(lr)}reflect(e){return this.sub(lr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lr=new L,ua=new ni;class Qi{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint($t.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint($t.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=$t.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,$t):$t.fromBufferAttribute(r,a),$t.applyMatrix4(e.matrixWorld),this.expandByPoint($t);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),is.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),is.copy(n.boundingBox)),is.applyMatrix4(e.matrixWorld),this.union(is)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,$t),$t.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Hi),ss.subVectors(this.max,Hi),di.subVectors(e.a,Hi),fi.subVectors(e.b,Hi),pi.subVectors(e.c,Hi),Tn.subVectors(fi,di),wn.subVectors(pi,fi),Gn.subVectors(di,pi);let t=[0,-Tn.z,Tn.y,0,-wn.z,wn.y,0,-Gn.z,Gn.y,Tn.z,0,-Tn.x,wn.z,0,-wn.x,Gn.z,0,-Gn.x,-Tn.y,Tn.x,0,-wn.y,wn.x,0,-Gn.y,Gn.x,0];return!cr(t,di,fi,pi,ss)||(t=[1,0,0,0,1,0,0,0,1],!cr(t,di,fi,pi,ss))?!1:(rs.crossVectors(Tn,wn),t=[rs.x,rs.y,rs.z],cr(t,di,fi,pi,ss))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$t).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($t).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fn=[new L,new L,new L,new L,new L,new L,new L,new L],$t=new L,is=new Qi,di=new L,fi=new L,pi=new L,Tn=new L,wn=new L,Gn=new L,Hi=new L,ss=new L,rs=new L,Hn=new L;function cr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Hn.fromArray(i,r);const o=s.x*Math.abs(Hn.x)+s.y*Math.abs(Hn.y)+s.z*Math.abs(Hn.z),l=e.dot(Hn),c=t.dot(Hn),u=n.dot(Hn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const du=new Qi,Vi=new L,ur=new L;class Gs{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):du.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vi.subVectors(e,this.center);const t=Vi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Vi,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ur.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vi.copy(e.center).add(ur)),this.expandByPoint(Vi.copy(e.center).sub(ur))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new L,hr=new L,os=new L,An=new L,dr=new L,as=new L,fr=new L;class Hs{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pn.copy(this.origin).addScaledVector(this.direction,t),pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){hr.copy(e).add(t).multiplyScalar(.5),os.copy(t).sub(e).normalize(),An.copy(this.origin).sub(hr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(os),o=An.dot(this.direction),l=-An.dot(os),c=An.lengthSq(),u=Math.abs(1-a*a);let d,p,m,_;if(u>0)if(d=a*l-o,p=a*o-l,_=r*u,d>=0)if(p>=-_)if(p<=_){const x=1/u;d*=x,p*=x,m=d*(d+a*p+2*o)+p*(a*d+p+2*l)+c}else p=r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p=-r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;else p<=-_?(d=Math.max(0,-(-a*r+o)),p=d>0?-r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c):p<=_?(d=0,p=Math.min(Math.max(-r,-l),r),m=p*(p+2*l)+c):(d=Math.max(0,-(a*r+o)),p=d>0?r:Math.min(Math.max(-r,-l),r),m=-d*d+p*(p+2*l)+c);else p=a>0?-r:r,d=Math.max(0,-(a*p+o)),m=-d*d+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(hr).addScaledVector(os,p),m}intersectSphere(e,t){pn.subVectors(e.center,this.origin);const n=pn.dot(this.direction),s=pn.dot(pn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),u>=0?(r=(e.min.y-p.y)*u,a=(e.max.y-p.y)*u):(r=(e.max.y-p.y)*u,a=(e.min.y-p.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-p.z)*d,l=(e.max.z-p.z)*d):(o=(e.max.z-p.z)*d,l=(e.min.z-p.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,pn)!==null}intersectTriangle(e,t,n,s,r){dr.subVectors(t,e),as.subVectors(n,e),fr.crossVectors(dr,as);let a=this.direction.dot(fr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;An.subVectors(this.origin,e);const l=o*this.direction.dot(as.crossVectors(An,as));if(l<0)return null;const c=o*this.direction.dot(dr.cross(An));if(c<0||l+c>a)return null;const u=-o*An.dot(fr);return u<0?null:this.at(u/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ut{constructor(e,t,n,s,r,a,o,l,c,u,d,p,m,_,x,f){ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,d,p,m,_,x,f)}set(e,t,n,s,r,a,o,l,c,u,d,p,m,_,x,f){const h=this.elements;return h[0]=e,h[4]=t,h[8]=n,h[12]=s,h[1]=r,h[5]=a,h[9]=o,h[13]=l,h[2]=c,h[6]=u,h[10]=d,h[14]=p,h[3]=m,h[7]=_,h[11]=x,h[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ut().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/mi.setFromMatrixColumn(e,0).length(),r=1/mi.setFromMatrixColumn(e,1).length(),a=1/mi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){const p=a*u,m=a*d,_=o*u,x=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=m+_*c,t[5]=p-x*c,t[9]=-o*l,t[2]=x-p*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const p=l*u,m=l*d,_=c*u,x=c*d;t[0]=p+x*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=x+p*o,t[10]=a*l}else if(e.order==="ZXY"){const p=l*u,m=l*d,_=c*u,x=c*d;t[0]=p-x*o,t[4]=-a*d,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=x-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const p=a*u,m=a*d,_=o*u,x=o*d;t[0]=l*u,t[4]=_*c-m,t[8]=p*c+x,t[1]=l*d,t[5]=x*c+p,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const p=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=x-p*d,t[8]=_*d+m,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*d+_,t[10]=p-x*d}else if(e.order==="XZY"){const p=a*l,m=a*c,_=o*l,x=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=p*d+x,t[5]=a*u,t[9]=m*d-_,t[2]=_*d-m,t[6]=o*u,t[10]=x*d+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fu,e,pu)}lookAt(e,t,n){const s=this.elements;return zt.subVectors(e,t),zt.lengthSq()===0&&(zt.z=1),zt.normalize(),Rn.crossVectors(n,zt),Rn.lengthSq()===0&&(Math.abs(n.z)===1?zt.x+=1e-4:zt.z+=1e-4,zt.normalize(),Rn.crossVectors(n,zt)),Rn.normalize(),ls.crossVectors(zt,Rn),s[0]=Rn.x,s[4]=ls.x,s[8]=zt.x,s[1]=Rn.y,s[5]=ls.y,s[9]=zt.y,s[2]=Rn.z,s[6]=ls.z,s[10]=zt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],p=n[9],m=n[13],_=n[2],x=n[6],f=n[10],h=n[14],M=n[3],y=n[7],E=n[11],P=n[15],C=s[0],A=s[4],N=s[8],W=s[12],g=s[1],w=s[5],k=s[9],q=s[13],I=s[2],H=s[6],F=s[10],K=s[14],X=s[3],j=s[7],Y=s[11],se=s[15];return r[0]=a*C+o*g+l*I+c*X,r[4]=a*A+o*w+l*H+c*j,r[8]=a*N+o*k+l*F+c*Y,r[12]=a*W+o*q+l*K+c*se,r[1]=u*C+d*g+p*I+m*X,r[5]=u*A+d*w+p*H+m*j,r[9]=u*N+d*k+p*F+m*Y,r[13]=u*W+d*q+p*K+m*se,r[2]=_*C+x*g+f*I+h*X,r[6]=_*A+x*w+f*H+h*j,r[10]=_*N+x*k+f*F+h*Y,r[14]=_*W+x*q+f*K+h*se,r[3]=M*C+y*g+E*I+P*X,r[7]=M*A+y*w+E*H+P*j,r[11]=M*N+y*k+E*F+P*Y,r[15]=M*W+y*q+E*K+P*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],p=e[10],m=e[14],_=e[3],x=e[7],f=e[11],h=e[15];return _*(+r*l*d-s*c*d-r*o*p+n*c*p+s*o*m-n*l*m)+x*(+t*l*m-t*c*p+r*a*p-s*a*m+s*c*u-r*l*u)+f*(+t*c*d-t*o*m-r*a*d+n*a*m+r*o*u-n*c*u)+h*(-s*o*u-t*l*d+t*o*p+s*a*d-n*a*p+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],p=e[10],m=e[11],_=e[12],x=e[13],f=e[14],h=e[15],M=d*f*c-x*p*c+x*l*m-o*f*m-d*l*h+o*p*h,y=_*p*c-u*f*c-_*l*m+a*f*m+u*l*h-a*p*h,E=u*x*c-_*d*c+_*o*m-a*x*m-u*o*h+a*d*h,P=_*d*l-u*x*l-_*o*p+a*x*p+u*o*f-a*d*f,C=t*M+n*y+s*E+r*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/C;return e[0]=M*A,e[1]=(x*p*r-d*f*r-x*s*m+n*f*m+d*s*h-n*p*h)*A,e[2]=(o*f*r-x*l*r+x*s*c-n*f*c-o*s*h+n*l*h)*A,e[3]=(d*l*r-o*p*r-d*s*c+n*p*c+o*s*m-n*l*m)*A,e[4]=y*A,e[5]=(u*f*r-_*p*r+_*s*m-t*f*m-u*s*h+t*p*h)*A,e[6]=(_*l*r-a*f*r-_*s*c+t*f*c+a*s*h-t*l*h)*A,e[7]=(a*p*r-u*l*r+u*s*c-t*p*c-a*s*m+t*l*m)*A,e[8]=E*A,e[9]=(_*d*r-u*x*r-_*n*m+t*x*m+u*n*h-t*d*h)*A,e[10]=(a*x*r-_*o*r+_*n*c-t*x*c-a*n*h+t*o*h)*A,e[11]=(u*o*r-a*d*r-u*n*c+t*d*c+a*n*m-t*o*m)*A,e[12]=P*A,e[13]=(u*x*s-_*d*s+_*n*p-t*x*p-u*n*f+t*d*f)*A,e[14]=(_*o*s-a*x*s-_*n*l+t*x*l+a*n*f-t*o*f)*A,e[15]=(a*d*s-u*o*s+u*n*l-t*d*l-a*n*p+t*o*p)*A,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,d=o+o,p=r*c,m=r*u,_=r*d,x=a*u,f=a*d,h=o*d,M=l*c,y=l*u,E=l*d,P=n.x,C=n.y,A=n.z;return s[0]=(1-(x+h))*P,s[1]=(m+E)*P,s[2]=(_-y)*P,s[3]=0,s[4]=(m-E)*C,s[5]=(1-(p+h))*C,s[6]=(f+M)*C,s[7]=0,s[8]=(_+y)*A,s[9]=(f-M)*A,s[10]=(1-(p+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=mi.set(s[0],s[1],s[2]).length();const a=mi.set(s[4],s[5],s[6]).length(),o=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Zt.copy(this);const c=1/r,u=1/a,d=1/o;return Zt.elements[0]*=c,Zt.elements[1]*=c,Zt.elements[2]*=c,Zt.elements[4]*=u,Zt.elements[5]*=u,Zt.elements[6]*=u,Zt.elements[8]*=d,Zt.elements[9]*=d,Zt.elements[10]*=d,t.setFromRotationMatrix(Zt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=yn){const l=this.elements,c=2*r/(t-e),u=2*r/(n-s),d=(t+e)/(t-e),p=(n+s)/(n-s);let m,_;if(o===yn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Us)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=yn){const l=this.elements,c=1/(t-e),u=1/(n-s),d=1/(a-r),p=(t+e)*c,m=(n+s)*u;let _,x;if(o===yn)_=(a+r)*d,x=-2*d;else if(o===Us)_=r*d,x=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-p,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const mi=new L,Zt=new ut,fu=new L(0,0,0),pu=new L(1,1,1),Rn=new L,ls=new L,zt=new L,ha=new ut,da=new ni;class Vs{constructor(e=0,t=0,n=0,s=Vs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],d=s[2],p=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-d,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(p,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ha.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ha,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return da.setFromEuler(this),this.setFromQuaternion(da,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vs.DEFAULT_ORDER="XYZ";class Qr{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mu=0;const fa=new L,gi=new ni,mn=new ut,cs=new L,Wi=new L,gu=new L,_u=new ni,pa=new L(1,0,0),ma=new L(0,1,0),ga=new L(0,0,1),vu={type:"added"},xu={type:"removed"};class Mt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mu++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mt.DEFAULT_UP.clone();const e=new L,t=new Vs,n=new ni,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ut},normalMatrix:{value:new We}}),this.matrix=new ut,this.matrixWorld=new ut,this.matrixAutoUpdate=Mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.multiply(gi),this}rotateOnWorldAxis(e,t){return gi.setFromAxisAngle(e,t),this.quaternion.premultiply(gi),this}rotateX(e){return this.rotateOnAxis(pa,e)}rotateY(e){return this.rotateOnAxis(ma,e)}rotateZ(e){return this.rotateOnAxis(ga,e)}translateOnAxis(e,t){return fa.copy(e).applyQuaternion(this.quaternion),this.position.add(fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(pa,e)}translateY(e){return this.translateOnAxis(ma,e)}translateZ(e){return this.translateOnAxis(ga,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?cs.copy(e):cs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Wi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(Wi,cs,this.up):mn.lookAt(cs,Wi,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(mn),this.quaternion.premultiply(gi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(vu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(xu)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mn.multiply(e.parent.matrixWorld)),e.applyMatrix4(mn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,e,gu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Wi,_u,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),p=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),p.length>0&&(n.skeletons=p),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Mt.DEFAULT_UP=new L(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jt=new L,gn=new L,pr=new L,_n=new L,_i=new L,vi=new L,_a=new L,mr=new L,gr=new L,_r=new L;class an{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Jt.subVectors(e,t),s.cross(Jt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Jt.subVectors(s,t),gn.subVectors(n,t),pr.subVectors(e,t);const a=Jt.dot(Jt),o=Jt.dot(gn),l=Jt.dot(pr),c=gn.dot(gn),u=gn.dot(pr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const p=1/d,m=(c*l-o*u)*p,_=(a*u-o*l)*p;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,_n)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,_n.x),l.addScaledVector(a,_n.y),l.addScaledVector(o,_n.z),l)}static isFrontFacing(e,t,n,s){return Jt.subVectors(n,t),gn.subVectors(e,t),Jt.cross(gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jt.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),Jt.cross(gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return an.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return an.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return an.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return an.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return an.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;_i.subVectors(s,n),vi.subVectors(r,n),mr.subVectors(e,n);const l=_i.dot(mr),c=vi.dot(mr);if(l<=0&&c<=0)return t.copy(n);gr.subVectors(e,s);const u=_i.dot(gr),d=vi.dot(gr);if(u>=0&&d<=u)return t.copy(s);const p=l*d-u*c;if(p<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_i,a);_r.subVectors(e,r);const m=_i.dot(_r),_=vi.dot(_r);if(_>=0&&m<=_)return t.copy(r);const x=m*c-l*_;if(x<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(n).addScaledVector(vi,o);const f=u*_-m*d;if(f<=0&&d-u>=0&&m-_>=0)return _a.subVectors(r,s),o=(d-u)/(d-u+(m-_)),t.copy(s).addScaledVector(_a,o);const h=1/(f+x+p);return a=x*h,o=p*h,t.copy(n).addScaledVector(_i,a).addScaledVector(vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Rl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Cn={h:0,s:0,l:0},us={h:0,s:0,l:0};function vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Be{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=su(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=vr(a,r,e+1/3),this.g=vr(a,r,e),this.b=vr(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=yt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const n=Rl[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=or(e.r),this.g=or(e.g),this.b=or(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return Je.fromWorkingColorSpace(bt.copy(this),e),Math.round(Tt(bt.r*255,0,255))*65536+Math.round(Tt(bt.g*255,0,255))*256+Math.round(Tt(bt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(bt.copy(this),t);const n=bt.r,s=bt.g,r=bt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(bt.copy(this),t),e.r=bt.r,e.g=bt.g,e.b=bt.b,e}getStyle(e=yt){Je.fromWorkingColorSpace(bt.copy(this),e);const t=bt.r,n=bt.g,s=bt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Cn),this.setHSL(Cn.h+e,Cn.s+t,Cn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Cn),e.getHSL(us);const n=sr(Cn.h,us.h,t),s=sr(Cn.s,us.s,t),r=sr(Cn.l,us.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bt=new Be;Be.NAMES=Rl;let yu=0;class ai extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=Ci,this.side=Fn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Dr,this.blendDst=Ur,this.blendEquation=qn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ia,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ui,this.stencilZFail=ui,this.stencilZPass=ui,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Fn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Dr&&(n.blendSrc=this.blendSrc),this.blendDst!==Ur&&(n.blendDst=this.blendDst),this.blendEquation!==qn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ia&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ui&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ui&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ui&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ws extends ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new L,hs=new Se;class Ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=sa,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=xn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Li("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)hs.fromBufferAttribute(this,t),hs.applyMatrix3(e),this.setXY(t,hs.x,hs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Gi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),s=Pt(s,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sa&&(e.usage=this.usage),e}}class Cl extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Ll extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ot extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Mu=0;const Xt=new ut,xr=new Mt,xi=new L,kt=new Qi,Xi=new Qi,_t=new L;class Ft extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mu++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bl(e)?Ll:Cl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new We().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Xt.makeRotationFromQuaternion(e),this.applyMatrix4(Xt),this}rotateX(e){return Xt.makeRotationX(e),this.applyMatrix4(Xt),this}rotateY(e){return Xt.makeRotationY(e),this.applyMatrix4(Xt),this}rotateZ(e){return Xt.makeRotationZ(e),this.applyMatrix4(Xt),this}translate(e,t,n){return Xt.makeTranslation(e,t,n),this.applyMatrix4(Xt),this}scale(e,t,n){return Xt.makeScale(e,t,n),this.applyMatrix4(Xt),this}lookAt(e){return xr.lookAt(e),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xi).negate(),this.translate(xi.x,xi.y,xi.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ot(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];kt.setFromBufferAttribute(r),this.morphTargetsRelative?(_t.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(_t),_t.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(_t)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Xi.setFromBufferAttribute(o),this.morphTargetsRelative?(_t.addVectors(kt.min,Xi.min),kt.expandByPoint(_t),_t.addVectors(kt.max,Xi.max),kt.expandByPoint(_t)):(kt.expandByPoint(Xi.min),kt.expandByPoint(Xi.max))}kt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)_t.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(_t));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)_t.fromBufferAttribute(o,c),l&&(xi.fromBufferAttribute(e,c),_t.add(xi)),s=Math.max(s,n.distanceToSquared(_t))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,s=t.position.array,r=t.normal.array,a=t.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let g=0;g<o;g++)c[g]=new L,u[g]=new L;const d=new L,p=new L,m=new L,_=new Se,x=new Se,f=new Se,h=new L,M=new L;function y(g,w,k){d.fromArray(s,g*3),p.fromArray(s,w*3),m.fromArray(s,k*3),_.fromArray(a,g*2),x.fromArray(a,w*2),f.fromArray(a,k*2),p.sub(d),m.sub(d),x.sub(_),f.sub(_);const q=1/(x.x*f.y-f.x*x.y);isFinite(q)&&(h.copy(p).multiplyScalar(f.y).addScaledVector(m,-x.y).multiplyScalar(q),M.copy(m).multiplyScalar(x.x).addScaledVector(p,-f.x).multiplyScalar(q),c[g].add(h),c[w].add(h),c[k].add(h),u[g].add(M),u[w].add(M),u[k].add(M))}let E=this.groups;E.length===0&&(E=[{start:0,count:n.length}]);for(let g=0,w=E.length;g<w;++g){const k=E[g],q=k.start,I=k.count;for(let H=q,F=q+I;H<F;H+=3)y(n[H+0],n[H+1],n[H+2])}const P=new L,C=new L,A=new L,N=new L;function W(g){A.fromArray(r,g*3),N.copy(A);const w=c[g];P.copy(w),P.sub(A.multiplyScalar(A.dot(w))).normalize(),C.crossVectors(N,w);const q=C.dot(u[g])<0?-1:1;l[g*4]=P.x,l[g*4+1]=P.y,l[g*4+2]=P.z,l[g*4+3]=q}for(let g=0,w=E.length;g<w;++g){const k=E[g],q=k.start,I=k.count;for(let H=q,F=q+I;H<F;H+=3)W(n[H+0]),W(n[H+1]),W(n[H+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,m=n.count;p<m;p++)n.setXYZ(p,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,u=new L,d=new L;if(e)for(let p=0,m=e.count;p<m;p+=3){const _=e.getX(p+0),x=e.getX(p+1),f=e.getX(p+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,f),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),o.fromBufferAttribute(n,_),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,f),o.add(u),l.add(u),c.add(u),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(f,c.x,c.y,c.z)}else for(let p=0,m=t.count;p<m;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),u.subVectors(a,r),d.subVectors(s,r),u.cross(d),n.setXYZ(p+0,u.x,u.y,u.z),n.setXYZ(p+1,u.x,u.y,u.z),n.setXYZ(p+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)_t.fromBufferAttribute(e,t),_t.normalize(),e.setXYZ(t,_t.x,_t.y,_t.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,p=new c.constructor(l.length*u);let m=0,_=0;for(let x=0,f=l.length;x<f;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let h=0;h<u;h++)p[_++]=c[m++]}return new Ut(p,u,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let u=0,d=c.length;u<d;u++){const p=c[u],m=e(p,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,p=c.length;d<p;d++){const m=c[d];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],d=r[c];for(let p=0,m=d.length;p<m;p++)u.push(d[p].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const va=new ut,Vn=new Hs,ds=new Gs,xa=new L,yi=new L,Mi=new L,Si=new L,yr=new L,fs=new L,ps=new Se,ms=new Se,gs=new Se,ya=new L,Ma=new L,Sa=new L,_s=new L,vs=new L;class je extends Mt{constructor(e=new Ft,t=new Ws){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){fs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=o[l],d=r[l];u!==0&&(yr.fromBufferAttribute(d,e),a?fs.addScaledVector(yr,u):fs.addScaledVector(yr.sub(t),u))}t.add(fs)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ds.copy(n.boundingSphere),ds.applyMatrix4(r),Vn.copy(e.ray).recast(e.near),!(ds.containsPoint(Vn.origin)===!1&&(Vn.intersectSphere(ds,xa)===null||Vn.origin.distanceToSquared(xa)>(e.far-e.near)**2))&&(va.copy(r).invert(),Vn.copy(e.ray).applyMatrix4(va),!(n.boundingBox!==null&&Vn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Vn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,d=r.attributes.normal,p=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const f=p[_],h=a[f.materialIndex],M=Math.max(f.start,m.start),y=Math.min(o.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,P=y;E<P;E+=3){const C=o.getX(E),A=o.getX(E+1),N=o.getX(E+2);s=xs(this,h,e,n,c,u,d,C,A,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let f=_,h=x;f<h;f+=3){const M=o.getX(f),y=o.getX(f+1),E=o.getX(f+2);s=xs(this,a,e,n,c,u,d,M,y,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,x=p.length;_<x;_++){const f=p[_],h=a[f.materialIndex],M=Math.max(f.start,m.start),y=Math.min(l.count,Math.min(f.start+f.count,m.start+m.count));for(let E=M,P=y;E<P;E+=3){const C=E,A=E+1,N=E+2;s=xs(this,h,e,n,c,u,d,C,A,N),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=f.materialIndex,t.push(s))}}else{const _=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let f=_,h=x;f<h;f+=3){const M=f,y=f+1,E=f+2;s=xs(this,a,e,n,c,u,d,M,y,E),s&&(s.faceIndex=Math.floor(f/3),t.push(s))}}}}function Su(i,e,t,n,s,r,a,o){let l;if(e.side===Nt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Fn,o),l===null)return null;vs.copy(o),vs.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vs);return c<t.near||c>t.far?null:{distance:c,point:vs.clone(),object:i}}function xs(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,yi),i.getVertexPosition(l,Mi),i.getVertexPosition(c,Si);const u=Su(i,e,t,n,yi,Mi,Si,_s);if(u){s&&(ps.fromBufferAttribute(s,o),ms.fromBufferAttribute(s,l),gs.fromBufferAttribute(s,c),u.uv=an.getInterpolation(_s,yi,Mi,Si,ps,ms,gs,new Se)),r&&(ps.fromBufferAttribute(r,o),ms.fromBufferAttribute(r,l),gs.fromBufferAttribute(r,c),u.uv1=an.getInterpolation(_s,yi,Mi,Si,ps,ms,gs,new Se),u.uv2=u.uv1),a&&(ya.fromBufferAttribute(a,o),Ma.fromBufferAttribute(a,l),Sa.fromBufferAttribute(a,c),u.normal=an.getInterpolation(_s,yi,Mi,Si,ya,Ma,Sa,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new L,materialIndex:0};an.getNormal(yi,Mi,Si,d.normal),u.face=d}return u}class nn extends Ft{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],u=[],d=[];let p=0,m=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ot(c,3)),this.setAttribute("normal",new ot(u,3)),this.setAttribute("uv",new ot(d,2));function _(x,f,h,M,y,E,P,C,A,N,W){const g=E/A,w=P/N,k=E/2,q=P/2,I=C/2,H=A+1,F=N+1;let K=0,X=0;const j=new L;for(let Y=0;Y<F;Y++){const se=Y*w-q;for(let oe=0;oe<H;oe++){const Re=oe*g-k;j[x]=Re*M,j[f]=se*y,j[h]=I,c.push(j.x,j.y,j.z),j[x]=0,j[f]=0,j[h]=C>0?1:-1,u.push(j.x,j.y,j.z),d.push(oe/A),d.push(1-Y/N),K+=1}}for(let Y=0;Y<N;Y++)for(let se=0;se<A;se++){const oe=p+se+H*Y,Re=p+se+H*(Y+1),V=p+(se+1)+H*(Y+1),Q=p+(se+1)+H*Y;l.push(oe,Re,Q),l.push(Re,V,Q),X+=6}o.addGroup(m,X,W),m+=X,p+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ni(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function At(i){const e={};for(let t=0;t<i.length;t++){const n=Ni(i[t]);for(const s in n)e[s]=n[s]}return e}function Eu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Pl(i){return i.getRenderTarget()===null?i.outputColorSpace:Je.workingColorSpace}const bu={clone:Ni,merge:At};var Tu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Sn extends ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tu,this.fragmentShader=wu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ni(e.uniforms),this.uniformsGroups=Eu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Il extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ut,this.projectionMatrix=new ut,this.projectionMatrixInverse=new ut,this.coordinateSystem=yn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ln=new L,Ea=new Se,ba=new Se;class Vt extends Il{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ws*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kr*2*Math.atan(Math.tan(ws*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ln.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z),Ln.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ln.x,Ln.y).multiplyScalar(-e/Ln.z)}getViewSize(e,t){return this.getViewBounds(e,Ea,ba),t.subVectors(ba,Ea)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ws*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,bi=1;class Au extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(Ei,bi,e,t);s.layers=this.layers,this.add(s);const r=new Vt(Ei,bi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(Ei,bi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(Ei,bi,e,t);o.layers=this.layers,this.add(o);const l=new Vt(Ei,bi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Ei,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Us)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,u]=this.children,d=e.getRenderTarget(),p=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,u),e.setRenderTarget(d,p,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Dl extends Ot{constructor(e,t,n,s,r,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ru extends ti{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];t.encoding!==void 0&&(Li("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Jn?yt:qt),this.texture=new Dl(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Dt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new nn(5,5,5),r=new Sn({name:"CubemapFromEquirect",uniforms:Ni(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Nt,blending:Un});r.uniforms.tEquirect.value=t;const a=new je(s,r),o=t.minFilter;return t.minFilter===Yn&&(t.minFilter=Dt),new Au(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const Mr=new L,Cu=new L,Lu=new We;class Pn{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Mr.subVectors(n,t).cross(Cu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Mr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Lu.getNormalMatrix(e),s=this.coplanarPoint(Mr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Gs,ys=new L;class eo{constructor(e=new Pn,t=new Pn,n=new Pn,s=new Pn,r=new Pn,a=new Pn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],u=s[5],d=s[6],p=s[7],m=s[8],_=s[9],x=s[10],f=s[11],h=s[12],M=s[13],y=s[14],E=s[15];if(n[0].setComponents(l-r,p-c,f-m,E-h).normalize(),n[1].setComponents(l+r,p+c,f+m,E+h).normalize(),n[2].setComponents(l+a,p+u,f+_,E+M).normalize(),n[3].setComponents(l-a,p-u,f-_,E-M).normalize(),n[4].setComponents(l-o,p-d,f-x,E-y).normalize(),t===yn)n[5].setComponents(l+o,p+d,f+x,E+y).normalize();else if(t===Us)n[5].setComponents(o,d,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){return Wn.center.set(0,0,0),Wn.radius=.7071067811865476,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ys.x=s.normal.x>0?e.max.x:e.min.x,ys.y=s.normal.y>0?e.max.y:e.min.y,ys.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ys)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ul(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pu(i,e){const t=e.isWebGL2,n=new WeakMap;function s(c,u){const d=c.array,p=c.usage,m=d.byteLength,_=i.createBuffer();i.bindBuffer(u,_),i.bufferData(u,d,p),c.onUploadCallback();let x;if(d instanceof Float32Array)x=i.FLOAT;else if(d instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(d instanceof Int16Array)x=i.SHORT;else if(d instanceof Uint32Array)x=i.UNSIGNED_INT;else if(d instanceof Int32Array)x=i.INT;else if(d instanceof Int8Array)x=i.BYTE;else if(d instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:_,type:x,bytesPerElement:d.BYTES_PER_ELEMENT,version:c.version,size:m}}function r(c,u,d){const p=u.array,m=u._updateRange,_=u.updateRanges;if(i.bindBuffer(d,c),m.count===-1&&_.length===0&&i.bufferSubData(d,0,p),_.length!==0){for(let x=0,f=_.length;x<f;x++){const h=_[x];t?i.bufferSubData(d,h.start*p.BYTES_PER_ELEMENT,p,h.start,h.count):i.bufferSubData(d,h.start*p.BYTES_PER_ELEMENT,p.subarray(h.start,h.start+h.count))}u.clearUpdateRanges()}m.count!==-1&&(t?i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p,m.offset,m.count):i.bufferSubData(d,m.offset*p.BYTES_PER_ELEMENT,p.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const p=n.get(c);(!p||p.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const d=n.get(c);if(d===void 0)n.set(c,s(c,u));else if(d.version<c.version){if(d.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(d.buffer,c,u),d.version=c.version}}return{get:a,remove:o,update:l}}class Xs extends Ft{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,d=e/o,p=t/l,m=[],_=[],x=[],f=[];for(let h=0;h<u;h++){const M=h*p-a;for(let y=0;y<c;y++){const E=y*d-r;_.push(E,-M,0),x.push(0,0,1),f.push(y/o),f.push(1-h/l)}}for(let h=0;h<l;h++)for(let M=0;M<o;M++){const y=M+c*h,E=M+c*(h+1),P=M+1+c*(h+1),C=M+1+c*h;m.push(y,E,C),m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xs(e.width,e.height,e.widthSegments,e.heightSegments)}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Du=`#ifdef USE_ALPHAHASH
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
#endif`,Uu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ou=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bu=`#ifdef USE_AOMAP
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
#endif`,zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,Gu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Hu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
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
#endif`,qu=`#ifdef USE_BUMPMAP
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
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,th=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,nh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ih=`vec3 transformedNormal = objectNormal;
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
#endif`,sh=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ah=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lh="gl_FragColor = linearToOutputTexel( gl_FragColor );",ch=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uh=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,hh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,dh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xh=`#ifdef USE_GRADIENTMAP
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
}`,yh=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bh=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,Th=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,wh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ch=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lh=`PhysicalMaterial material;
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
#endif`,Ph=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Ih=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Dh=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Bh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hh=`#if defined( USE_POINTS_UV )
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
#endif`,Vh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Yh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$h=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Zh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
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
#endif`,td=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,id=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,sd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,ad=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ld=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,md=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_d=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vd=`#ifdef USE_SKINNING
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
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
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
#endif`,Md=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ed=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bd=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Td=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wd=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ad=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
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
}`,Dd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Od=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fd=`#include <common>
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
}`,Bd=`#if DEPTH_PACKING == 3200
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
	#endif
}`,zd=`#define DISTANCE
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
}`,kd=`#define DISTANCE
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
}`,Gd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vd=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Wd=`uniform vec3 diffuse;
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
}`,Xd=`#include <common>
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
}`,qd=`uniform vec3 diffuse;
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
}`,jd=`#define LAMBERT
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
}`,Yd=`#define LAMBERT
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
}`,Kd=`#define MATCAP
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
}`,$d=`#define MATCAP
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
}`,Zd=`#define NORMAL
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
}`,Jd=`#define NORMAL
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
}`,Qd=`#define PHONG
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
}`,ef=`#define PHONG
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
}`,tf=`#define STANDARD
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
}`,nf=`#define STANDARD
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
}`,sf=`#define TOON
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
}`,rf=`#define TOON
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
}`,of=`uniform float size;
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
}`,af=`uniform vec3 diffuse;
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
}`,lf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
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
}`,cf=`uniform vec3 color;
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
}`,uf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,hf=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:Iu,alphahash_pars_fragment:Du,alphamap_fragment:Uu,alphamap_pars_fragment:Nu,alphatest_fragment:Ou,alphatest_pars_fragment:Fu,aomap_fragment:Bu,aomap_pars_fragment:zu,batching_pars_vertex:ku,batching_vertex:Gu,begin_vertex:Hu,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:ju,clipping_planes_pars_fragment:Yu,clipping_planes_pars_vertex:Ku,clipping_planes_vertex:$u,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:Qu,color_vertex:eh,common:th,cube_uv_reflection_fragment:nh,defaultnormal_vertex:ih,displacementmap_pars_vertex:sh,displacementmap_vertex:rh,emissivemap_fragment:oh,emissivemap_pars_fragment:ah,colorspace_fragment:lh,colorspace_pars_fragment:ch,envmap_fragment:uh,envmap_common_pars_fragment:hh,envmap_pars_fragment:dh,envmap_pars_vertex:fh,envmap_physical_pars_fragment:Th,envmap_vertex:ph,fog_vertex:mh,fog_pars_vertex:gh,fog_fragment:_h,fog_pars_fragment:vh,gradientmap_pars_fragment:xh,lightmap_fragment:yh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Eh,lights_pars_begin:bh,lights_toon_fragment:wh,lights_toon_pars_fragment:Ah,lights_phong_fragment:Rh,lights_phong_pars_fragment:Ch,lights_physical_fragment:Lh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Ih,lights_fragment_maps:Dh,lights_fragment_end:Uh,logdepthbuf_fragment:Nh,logdepthbuf_pars_fragment:Oh,logdepthbuf_pars_vertex:Fh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:kh,map_particle_fragment:Gh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Vh,metalnessmap_pars_fragment:Wh,morphcolor_vertex:Xh,morphnormal_vertex:qh,morphtarget_pars_vertex:jh,morphtarget_vertex:Yh,normal_fragment_begin:Kh,normal_fragment_maps:$h,normal_pars_fragment:Zh,normal_pars_vertex:Jh,normal_vertex:Qh,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:td,clearcoat_normal_fragment_maps:nd,clearcoat_pars_fragment:id,iridescence_pars_fragment:sd,opaque_fragment:rd,packing:od,premultiplied_alpha_fragment:ad,project_vertex:ld,dithering_fragment:cd,dithering_pars_fragment:ud,roughnessmap_fragment:hd,roughnessmap_pars_fragment:dd,shadowmap_pars_fragment:fd,shadowmap_pars_vertex:pd,shadowmap_vertex:md,shadowmask_pars_fragment:gd,skinbase_vertex:_d,skinning_pars_vertex:vd,skinning_vertex:xd,skinnormal_vertex:yd,specularmap_fragment:Md,specularmap_pars_fragment:Sd,tonemapping_fragment:Ed,tonemapping_pars_fragment:bd,transmission_fragment:Td,transmission_pars_fragment:wd,uv_pars_fragment:Ad,uv_pars_vertex:Rd,uv_vertex:Cd,worldpos_vertex:Ld,background_vert:Pd,background_frag:Id,backgroundCube_vert:Dd,backgroundCube_frag:Ud,cube_vert:Nd,cube_frag:Od,depth_vert:Fd,depth_frag:Bd,distanceRGBA_vert:zd,distanceRGBA_frag:kd,equirect_vert:Gd,equirect_frag:Hd,linedashed_vert:Vd,linedashed_frag:Wd,meshbasic_vert:Xd,meshbasic_frag:qd,meshlambert_vert:jd,meshlambert_frag:Yd,meshmatcap_vert:Kd,meshmatcap_frag:$d,meshnormal_vert:Zd,meshnormal_frag:Jd,meshphong_vert:Qd,meshphong_frag:ef,meshphysical_vert:tf,meshphysical_frag:nf,meshtoon_vert:sf,meshtoon_frag:rf,points_vert:of,points_frag:af,shadow_vert:lf,shadow_frag:cf,sprite_vert:uf,sprite_frag:hf},re={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},rn={basic:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:At([re.common,re.specularmap,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.fog,re.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:At([re.common,re.envmap,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.roughnessmap,re.metalnessmap,re.fog,re.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:At([re.common,re.aomap,re.lightmap,re.emissivemap,re.bumpmap,re.normalmap,re.displacementmap,re.gradientmap,re.fog,re.lights,{emissive:{value:new Be(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,re.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:At([re.points,re.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:At([re.common,re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:At([re.common,re.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:At([re.common,re.bumpmap,re.normalmap,re.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:At([re.sprite,re.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:At([re.common,re.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:At([re.lights,re.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};rn.physical={uniforms:At([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Ms={r:0,b:0,g:0};function df(i,e,t,n,s,r,a){const o=new Be(0);let l=r===!0?0:1,c,u,d=null,p=0,m=null;function _(f,h){let M=!1,y=h.isScene===!0?h.background:null;y&&y.isTexture&&(y=(h.backgroundBlurriness>0?t:e).get(y)),y===null?x(o,l):y&&y.isColor&&(x(y,1),M=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||M)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),y&&(y.isCubeTexture||y.mapping===zs)?(u===void 0&&(u=new je(new nn(1,1,1),new Sn({name:"BackgroundCubeMaterial",uniforms:Ni(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(P,C,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=Je.getTransfer(y.colorSpace)!==tt,(d!==y||p!==y.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,d=y,p=y.version,m=i.toneMapping),u.layers.enableAll(),f.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new je(new Xs(2,2),new Sn({name:"BackgroundMaterial",uniforms:Ni(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=Je.getTransfer(y.colorSpace)!==tt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(d!==y||p!==y.version||m!==i.toneMapping)&&(c.material.needsUpdate=!0,d=y,p=y.version,m=i.toneMapping),c.layers.enableAll(),f.unshift(c,c.geometry,c.material,0,0,null))}function x(f,h){f.getRGB(Ms,Pl(i)),n.buffers.color.setClear(Ms.r,Ms.g,Ms.b,h,a)}return{getClearColor:function(){return o},setClearColor:function(f,h=1){o.set(f),l=h,x(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(f){l=f,x(o,l)},render:_}}function ff(i,e,t,n){const s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||r!==null,o={},l=f(null);let c=l,u=!1;function d(I,H,F,K,X){let j=!1;if(a){const Y=x(K,F,H);c!==Y&&(c=Y,m(c.object)),j=h(I,K,F,X),j&&M(I,K,F,X)}else{const Y=H.wireframe===!0;(c.geometry!==K.id||c.program!==F.id||c.wireframe!==Y)&&(c.geometry=K.id,c.program=F.id,c.wireframe=Y,j=!0)}X!==null&&t.update(X,i.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,N(I,H,F,K),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function p(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function m(I){return n.isWebGL2?i.bindVertexArray(I):r.bindVertexArrayOES(I)}function _(I){return n.isWebGL2?i.deleteVertexArray(I):r.deleteVertexArrayOES(I)}function x(I,H,F){const K=F.wireframe===!0;let X=o[I.id];X===void 0&&(X={},o[I.id]=X);let j=X[H.id];j===void 0&&(j={},X[H.id]=j);let Y=j[K];return Y===void 0&&(Y=f(p()),j[K]=Y),Y}function f(I){const H=[],F=[],K=[];for(let X=0;X<s;X++)H[X]=0,F[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:F,attributeDivisors:K,object:I,attributes:{},index:null}}function h(I,H,F,K){const X=c.attributes,j=H.attributes;let Y=0;const se=F.getAttributes();for(const oe in se)if(se[oe].location>=0){const V=X[oe];let Q=j[oe];if(Q===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor)),V===void 0||V.attribute!==Q||Q&&V.data!==Q.data)return!0;Y++}return c.attributesNum!==Y||c.index!==K}function M(I,H,F,K){const X={},j=H.attributes;let Y=0;const se=F.getAttributes();for(const oe in se)if(se[oe].location>=0){let V=j[oe];V===void 0&&(oe==="instanceMatrix"&&I.instanceMatrix&&(V=I.instanceMatrix),oe==="instanceColor"&&I.instanceColor&&(V=I.instanceColor));const Q={};Q.attribute=V,V&&V.data&&(Q.data=V.data),X[oe]=Q,Y++}c.attributes=X,c.attributesNum=Y,c.index=K}function y(){const I=c.newAttributes;for(let H=0,F=I.length;H<F;H++)I[H]=0}function E(I){P(I,0)}function P(I,H){const F=c.newAttributes,K=c.enabledAttributes,X=c.attributeDivisors;F[I]=1,K[I]===0&&(i.enableVertexAttribArray(I),K[I]=1),X[I]!==H&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,H),X[I]=H)}function C(){const I=c.newAttributes,H=c.enabledAttributes;for(let F=0,K=H.length;F<K;F++)H[F]!==I[F]&&(i.disableVertexAttribArray(F),H[F]=0)}function A(I,H,F,K,X,j,Y){Y===!0?i.vertexAttribIPointer(I,H,F,X,j):i.vertexAttribPointer(I,H,F,K,X,j)}function N(I,H,F,K){if(n.isWebGL2===!1&&(I.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;y();const X=K.attributes,j=F.getAttributes(),Y=H.defaultAttributeValues;for(const se in j){const oe=j[se];if(oe.location>=0){let Re=X[se];if(Re===void 0&&(se==="instanceMatrix"&&I.instanceMatrix&&(Re=I.instanceMatrix),se==="instanceColor"&&I.instanceColor&&(Re=I.instanceColor)),Re!==void 0){const V=Re.normalized,Q=Re.itemSize,he=t.get(Re);if(he===void 0)continue;const be=he.buffer,we=he.type,fe=he.bytesPerElement,qe=n.isWebGL2===!0&&(we===i.INT||we===i.UNSIGNED_INT||Re.gpuType===ml);if(Re.isInterleavedBufferAttribute){const Ie=Re.data,U=Ie.stride,dt=Re.offset;if(Ie.isInstancedInterleavedBuffer){for(let Me=0;Me<oe.locationSize;Me++)P(oe.location+Me,Ie.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ie.meshPerAttribute*Ie.count)}else for(let Me=0;Me<oe.locationSize;Me++)E(oe.location+Me);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Me=0;Me<oe.locationSize;Me++)A(oe.location+Me,Q/oe.locationSize,we,V,U*fe,(dt+Q/oe.locationSize*Me)*fe,qe)}else{if(Re.isInstancedBufferAttribute){for(let Ie=0;Ie<oe.locationSize;Ie++)P(oe.location+Ie,Re.meshPerAttribute);I.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Re.meshPerAttribute*Re.count)}else for(let Ie=0;Ie<oe.locationSize;Ie++)E(oe.location+Ie);i.bindBuffer(i.ARRAY_BUFFER,be);for(let Ie=0;Ie<oe.locationSize;Ie++)A(oe.location+Ie,Q/oe.locationSize,we,V,Q*fe,Q/oe.locationSize*Ie*fe,qe)}}else if(Y!==void 0){const V=Y[se];if(V!==void 0)switch(V.length){case 2:i.vertexAttrib2fv(oe.location,V);break;case 3:i.vertexAttrib3fv(oe.location,V);break;case 4:i.vertexAttrib4fv(oe.location,V);break;default:i.vertexAttrib1fv(oe.location,V)}}}}C()}function W(){k();for(const I in o){const H=o[I];for(const F in H){const K=H[F];for(const X in K)_(K[X].object),delete K[X];delete H[F]}delete o[I]}}function g(I){if(o[I.id]===void 0)return;const H=o[I.id];for(const F in H){const K=H[F];for(const X in K)_(K[X].object),delete K[X];delete H[F]}delete o[I.id]}function w(I){for(const H in o){const F=o[H];if(F[I.id]===void 0)continue;const K=F[I.id];for(const X in K)_(K[X].object),delete K[X];delete F[I.id]}}function k(){q(),u=!0,c!==l&&(c=l,m(c.object))}function q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:k,resetDefaultState:q,dispose:W,releaseStatesOfGeometry:g,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:E,disableUnusedAttributes:C}}function pf(i,e,t,n){const s=n.isWebGL2;let r;function a(u){r=u}function o(u,d){i.drawArrays(r,u,d),t.update(d,r,1)}function l(u,d,p){if(p===0)return;let m,_;if(s)m=i,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,u,d,p),t.update(d,r,p)}function c(u,d,p){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<p;_++)this.render(u[_],d[_]);else{m.multiDrawArraysWEBGL(r,u,0,d,0,p);let _=0;for(let x=0;x<p;x++)_+=d[x];t.update(_,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function mf(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),f=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),h=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,E=a||e.has("OES_texture_float"),P=y&&E,C=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:m,maxCubemapSize:_,maxAttributes:x,maxVertexUniforms:f,maxVaryings:h,maxFragmentUniforms:M,vertexTextures:y,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:C}}function gf(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new Pn,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,p){const m=d.length!==0||p||n!==0||s;return s=p,n=d.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,p){t=u(d,p,0)},this.setState=function(d,p,m){const _=d.clippingPlanes,x=d.clipIntersection,f=d.clipShadows,h=i.get(d);if(!s||_===null||_.length===0||r&&!f)r?u(null):c();else{const M=r?0:n,y=M*4;let E=h.clippingState||null;l.value=E,E=u(_,p,y,m);for(let P=0;P!==y;++P)E[P]=t[P];h.clippingState=E,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,p,m,_){const x=d!==null?d.length:0;let f=null;if(x!==0){if(f=l.value,_!==!0||f===null){const h=m+x*4,M=p.matrixWorldInverse;o.getNormalMatrix(M),(f===null||f.length<h)&&(f=new Float32Array(h));for(let y=0,E=m;y!==x;++y,E+=4)a.copy(d[y]).applyMatrix4(M,o),a.normal.toArray(f,E),f[E+3]=a.constant}l.value=f,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,f}}function _f(i){let e=new WeakMap;function t(a,o){return o===Nr?a.mapping=Ii:o===Or&&(a.mapping=Di),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Nr||o===Or)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Ru(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Nl extends Il{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const wi=4,Ta=[.125,.215,.35,.446,.526,.582],jn=20,Sr=new Nl,wa=new Be;let Er=null,br=0,Tr=0;const Xn=(1+Math.sqrt(5))/2,Ti=1/Xn,Aa=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Xn,Ti),new L(0,Xn,-Ti),new L(Ti,0,Xn),new L(-Ti,0,Xn),new L(Xn,Ti,0),new L(-Xn,Ti,0)];class Ra{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Er=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pa(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=La(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Er,br,Tr),e.scissorTest=!1,Ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===Di?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Er=this._renderer.getRenderTarget(),br=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Dt,minFilter:Dt,generateMipmaps:!1,type:Zi,format:tn,colorSpace:Mn,depthBuffer:!1},s=Ca(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ca(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vf(r)),this._blurMaterial=xf(r,e,t)}return s}_compileMaterial(e){const t=new je(this._lodPlanes[0],e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,n,s){const o=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,p=u.toneMapping;u.getClearColor(wa),u.toneMapping=Nn,u.autoClear=!1;const m=new Ws({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),_=new je(new nn,m);let x=!1;const f=e.background;f?f.isColor&&(m.color.copy(f),e.background=null,x=!0):(m.color.copy(wa),x=!0);for(let h=0;h<6;h++){const M=h%3;M===0?(o.up.set(0,l[h],0),o.lookAt(c[h],0,0)):M===1?(o.up.set(0,0,l[h]),o.lookAt(0,c[h],0)):(o.up.set(0,l[h],0),o.lookAt(0,0,c[h]));const y=this._cubeSize;Ss(s,M*y,h>2?y:0,y,y),u.setRenderTarget(s),x&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=p,u.autoClear=d,e.background=f}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ii||e.mapping===Di;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pa()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=La());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new je(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;Ss(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Sr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Aa[(s-1)%Aa.length];this._blur(e,s-1,s,r,a)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,d=new je(this._lodPlanes[s],c),p=c.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*jn-1),x=r/_,f=isFinite(r)?1+Math.floor(u*x):jn;f>jn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${jn}`);const h=[];let M=0;for(let A=0;A<jn;++A){const N=A/x,W=Math.exp(-N*N/2);h.push(W),A===0?M+=W:A<f&&(M+=2*W)}for(let A=0;A<h.length;A++)h[A]=h[A]/M;p.envMap.value=e.texture,p.samples.value=f,p.weights.value=h,p.latitudinal.value=a==="latitudinal",o&&(p.poleAxis.value=o);const{_lodMax:y}=this;p.dTheta.value=_,p.mipInt.value=y-n;const E=this._sizeLods[s],P=3*E*(s>y-wi?s-y+wi:0),C=4*(this._cubeSize-E);Ss(t,P,C,3*E,2*E),l.setRenderTarget(t),l.render(d,Sr)}}function vf(i){const e=[],t=[],n=[];let s=i;const r=i-wi+1+Ta.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let l=1/o;a>i-wi?l=Ta[a-i+wi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,d=1+c,p=[u,u,d,u,d,d,u,u,d,d,u,d],m=6,_=6,x=3,f=2,h=1,M=new Float32Array(x*_*m),y=new Float32Array(f*_*m),E=new Float32Array(h*_*m);for(let C=0;C<m;C++){const A=C%3*2/3-1,N=C>2?0:-1,W=[A,N,0,A+2/3,N,0,A+2/3,N+1,0,A,N,0,A+2/3,N+1,0,A,N+1,0];M.set(W,x*_*C),y.set(p,f*_*C);const g=[C,C,C,C,C,C];E.set(g,h*_*C)}const P=new Ft;P.setAttribute("position",new Ut(M,x)),P.setAttribute("uv",new Ut(y,f)),P.setAttribute("faceIndex",new Ut(E,h)),e.push(P),s>wi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ca(i,e,t){const n=new ti(i,e,t);return n.texture.mapping=zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ss(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function xf(i,e,t){const n=new Float32Array(jn),s=new L(0,1,0);return new Sn({name:"SphericalGaussianBlur",defines:{n:jn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:to(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function La(){return new Sn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:to(),fragmentShader:`

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
		`,blending:Un,depthTest:!1,depthWrite:!1})}function Pa(){return new Sn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:to(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Un,depthTest:!1,depthWrite:!1})}function to(){return`

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
	`}function yf(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Nr||l===Or,u=l===Ii||l===Di;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let d=e.get(o);return t===null&&(t=new Ra(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),e.set(o,d),d.texture}else{if(e.has(o))return e.get(o).texture;{const d=o.image;if(c&&d&&d.height>0||u&&d&&s(d)){t===null&&(t=new Ra(i));const p=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,p),o.addEventListener("dispose",r),p.texture}else return null}}}return o}function s(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Mf(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Sf(i,e,t,n){const s={},r=new WeakMap;function a(d){const p=d.target;p.index!==null&&e.remove(p.index);for(const _ in p.attributes)e.remove(p.attributes[_]);for(const _ in p.morphAttributes){const x=p.morphAttributes[_];for(let f=0,h=x.length;f<h;f++)e.remove(x[f])}p.removeEventListener("dispose",a),delete s[p.id];const m=r.get(p);m&&(e.remove(m),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(d,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(d){const p=d.attributes;for(const _ in p)e.update(p[_],i.ARRAY_BUFFER);const m=d.morphAttributes;for(const _ in m){const x=m[_];for(let f=0,h=x.length;f<h;f++)e.update(x[f],i.ARRAY_BUFFER)}}function c(d){const p=[],m=d.index,_=d.attributes.position;let x=0;if(m!==null){const M=m.array;x=m.version;for(let y=0,E=M.length;y<E;y+=3){const P=M[y+0],C=M[y+1],A=M[y+2];p.push(P,C,C,A,A,P)}}else if(_!==void 0){const M=_.array;x=_.version;for(let y=0,E=M.length/3-1;y<E;y+=3){const P=y+0,C=y+1,A=y+2;p.push(P,C,C,A,A,P)}}else return;const f=new(bl(p)?Ll:Cl)(p,1);f.version=x;const h=r.get(d);h&&e.remove(h),r.set(d,f)}function u(d){const p=r.get(d);if(p){const m=d.index;m!==null&&p.version<m.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function Ef(i,e,t,n){const s=n.isWebGL2;let r;function a(m){r=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function u(m,_){i.drawElements(r,_,o,m*l),t.update(_,r,1)}function d(m,_,x){if(x===0)return;let f,h;if(s)f=i,h="drawElementsInstanced";else if(f=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",f===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[h](r,_,o,m*l,x),t.update(_,r,x)}function p(m,_,x){if(x===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let h=0;h<x;h++)this.render(m[h]/l,_[h]);else{f.multiDrawElementsWEBGL(r,_,0,o,m,0,x);let h=0;for(let M=0;M<x;M++)h+=_[M];t.update(h,r,1)}}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=d,this.renderMultiDraw=p}function bf(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Tf(i,e){return i[0]-e[0]}function wf(i,e){return Math.abs(e[1])-Math.abs(i[1])}function Af(i,e,t){const n={},s=new Float32Array(8),r=new WeakMap,a=new nt,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,d){const p=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,x=_!==void 0?_.length:0;let f=r.get(u);if(f===void 0||f.count!==x){let H=function(){q.dispose(),r.delete(u),u.removeEventListener("dispose",H)};var m=H;f!==void 0&&f.texture.dispose();const y=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,P=u.morphAttributes.color!==void 0,C=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],N=u.morphAttributes.color||[];let W=0;y===!0&&(W=1),E===!0&&(W=2),P===!0&&(W=3);let g=u.attributes.position.count*W,w=1;g>e.maxTextureSize&&(w=Math.ceil(g/e.maxTextureSize),g=e.maxTextureSize);const k=new Float32Array(g*w*4*x),q=new Al(k,g,w,x);q.type=xn,q.needsUpdate=!0;const I=W*4;for(let F=0;F<x;F++){const K=C[F],X=A[F],j=N[F],Y=g*w*4*F;for(let se=0;se<K.count;se++){const oe=se*I;y===!0&&(a.fromBufferAttribute(K,se),k[Y+oe+0]=a.x,k[Y+oe+1]=a.y,k[Y+oe+2]=a.z,k[Y+oe+3]=0),E===!0&&(a.fromBufferAttribute(X,se),k[Y+oe+4]=a.x,k[Y+oe+5]=a.y,k[Y+oe+6]=a.z,k[Y+oe+7]=0),P===!0&&(a.fromBufferAttribute(j,se),k[Y+oe+8]=a.x,k[Y+oe+9]=a.y,k[Y+oe+10]=a.z,k[Y+oe+11]=j.itemSize===4?a.w:1)}}f={count:x,texture:q,size:new Se(g,w)},r.set(u,f),u.addEventListener("dispose",H)}let h=0;for(let y=0;y<p.length;y++)h+=p[y];const M=u.morphTargetsRelative?1:1-h;d.getUniforms().setValue(i,"morphTargetBaseInfluence",M),d.getUniforms().setValue(i,"morphTargetInfluences",p),d.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),d.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}else{const _=p===void 0?0:p.length;let x=n[u.id];if(x===void 0||x.length!==_){x=[];for(let E=0;E<_;E++)x[E]=[E,0];n[u.id]=x}for(let E=0;E<_;E++){const P=x[E];P[0]=E,P[1]=p[E]}x.sort(wf);for(let E=0;E<8;E++)E<_&&x[E][1]?(o[E][0]=x[E][0],o[E][1]=x[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(Tf);const f=u.morphAttributes.position,h=u.morphAttributes.normal;let M=0;for(let E=0;E<8;E++){const P=o[E],C=P[0],A=P[1];C!==Number.MAX_SAFE_INTEGER&&A?(f&&u.getAttribute("morphTarget"+E)!==f[C]&&u.setAttribute("morphTarget"+E,f[C]),h&&u.getAttribute("morphNormal"+E)!==h[C]&&u.setAttribute("morphNormal"+E,h[C]),s[E]=A,M+=A):(f&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),h&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const y=u.morphTargetsRelative?1:1-M;d.getUniforms().setValue(i,"morphTargetBaseInfluence",y),d.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:l}}function Rf(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const p=l.skeleton;s.get(p)!==c&&(p.update(),s.set(p,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}class Ol extends Ot{constructor(e,t,n,s,r,a,o,l,c,u){if(u=u!==void 0?u:Zn,u!==Zn&&u!==Ui)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Zn&&(n=In),n===void 0&&u===Ui&&(n=$n),super(null,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Fl=new Ot,Bl=new Ol(1,1);Bl.compareFunction=El;const zl=new Al,kl=new hu,Gl=new Dl,Ia=[],Da=[],Ua=new Float32Array(16),Na=new Float32Array(9),Oa=new Float32Array(4);function Bi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ia[s];if(r===void 0&&(r=new Float32Array(s),Ia[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function pt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qs(i,e){let t=Da[e];t===void 0&&(t=new Int32Array(e),Da[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Cf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2fv(this.addr,e),mt(t,e)}}function Pf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;i.uniform3fv(this.addr,e),mt(t,e)}}function If(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4fv(this.addr,e),mt(t,e)}}function Df(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Oa.set(n),i.uniformMatrix2fv(this.addr,!1,Oa),mt(t,n)}}function Uf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Na.set(n),i.uniformMatrix3fv(this.addr,!1,Na),mt(t,n)}}function Nf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ua.set(n),i.uniformMatrix4fv(this.addr,!1,Ua),mt(t,n)}}function Of(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2iv(this.addr,e),mt(t,e)}}function Bf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3iv(this.addr,e),mt(t,e)}}function zf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4iv(this.addr,e),mt(t,e)}}function kf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;i.uniform2uiv(this.addr,e),mt(t,e)}}function Hf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;i.uniform3uiv(this.addr,e),mt(t,e)}}function Vf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;i.uniform4uiv(this.addr,e),mt(t,e)}}function Wf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Bl:Fl;t.setTexture2D(e||r,s)}function Xf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||kl,s)}function qf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gl,s)}function jf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||zl,s)}function Yf(i){switch(i){case 5126:return Cf;case 35664:return Lf;case 35665:return Pf;case 35666:return If;case 35674:return Df;case 35675:return Uf;case 35676:return Nf;case 5124:case 35670:return Of;case 35667:case 35671:return Ff;case 35668:case 35672:return Bf;case 35669:case 35673:return zf;case 5125:return kf;case 36294:return Gf;case 36295:return Hf;case 36296:return Vf;case 35678:case 36198:case 36298:case 36306:case 35682:return Wf;case 35679:case 36299:case 36307:return Xf;case 35680:case 36300:case 36308:case 36293:return qf;case 36289:case 36303:case 36311:case 36292:return jf}}function Kf(i,e){i.uniform1fv(this.addr,e)}function $f(i,e){const t=Bi(e,this.size,2);i.uniform2fv(this.addr,t)}function Zf(i,e){const t=Bi(e,this.size,3);i.uniform3fv(this.addr,t)}function Jf(i,e){const t=Bi(e,this.size,4);i.uniform4fv(this.addr,t)}function Qf(i,e){const t=Bi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ep(i,e){const t=Bi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function tp(i,e){const t=Bi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function np(i,e){i.uniform1iv(this.addr,e)}function ip(i,e){i.uniform2iv(this.addr,e)}function sp(i,e){i.uniform3iv(this.addr,e)}function rp(i,e){i.uniform4iv(this.addr,e)}function op(i,e){i.uniform1uiv(this.addr,e)}function ap(i,e){i.uniform2uiv(this.addr,e)}function lp(i,e){i.uniform3uiv(this.addr,e)}function cp(i,e){i.uniform4uiv(this.addr,e)}function up(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Fl,r[a])}function hp(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||kl,r[a])}function dp(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gl,r[a])}function fp(i,e,t){const n=this.cache,s=e.length,r=qs(t,s);pt(n,r)||(i.uniform1iv(this.addr,r),mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||zl,r[a])}function pp(i){switch(i){case 5126:return Kf;case 35664:return $f;case 35665:return Zf;case 35666:return Jf;case 35674:return Qf;case 35675:return ep;case 35676:return tp;case 5124:case 35670:return np;case 35667:case 35671:return ip;case 35668:case 35672:return sp;case 35669:case 35673:return rp;case 5125:return op;case 36294:return ap;case 36295:return lp;case 36296:return cp;case 35678:case 36198:case 36298:case 36306:case 35682:return up;case 35679:case 36299:case 36307:return hp;case 35680:case 36300:case 36308:case 36293:return dp;case 36289:case 36303:case 36311:case 36292:return fp}}class mp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Yf(t.type)}}class gp{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pp(t.type)}}class _p{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const wr=/(\w+)(\])?(\[|\.)?/g;function Fa(i,e){i.seq.push(e),i.map[e.id]=e}function vp(i,e,t){const n=i.name,s=n.length;for(wr.lastIndex=0;;){const r=wr.exec(n),a=wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fa(t,c===void 0?new mp(o,i,e):new gp(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new _p(o),Fa(t,d)),t=d}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);vp(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ba(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const xp=37297;let yp=0;function Mp(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Sp(i){const e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i);let n;switch(e===t?n="":e===Ds&&t===Is?n="LinearDisplayP3ToLinearSRGB":e===Is&&t===Ds&&(n="LinearSRGBToLinearDisplayP3"),i){case Mn:case ks:return[n,"LinearTransferOETF"];case yt:case Jr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function za(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Mp(i.getShaderSource(e),a)}else return s}function Ep(i,e){const t=Sp(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function bp(i,e){let t;switch(e){case Nc:t="Linear";break;case Oc:t="Reinhard";break;case Fc:t="OptimizedCineon";break;case fl:t="ACESFilmic";break;case zc:t="AgX";break;case Bc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Tp(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.alphaToCoverage||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ai).join(`
`)}function wp(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ai).join(`
`)}function Ap(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Rp(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ai(i){return i!==""}function ka(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ga(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Cp=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hr(i){return i.replace(Cp,Pp)}const Lp=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pp(i,e){let t=ze[e];if(t===void 0){const n=Lp.get(e);if(n!==void 0)t=ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Hr(t)}const Ip=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ha(i){return i.replace(Ip,Dp)}function Dp(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Va(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	`;return i.isWebGL2&&(e+=`precision ${i.precision} sampler3D;
		precision ${i.precision} sampler2DArray;
		precision ${i.precision} sampler2DShadow;
		precision ${i.precision} samplerCubeShadow;
		precision ${i.precision} sampler2DArrayShadow;
		precision ${i.precision} isampler2D;
		precision ${i.precision} isampler3D;
		precision ${i.precision} isamplerCube;
		precision ${i.precision} isampler2DArray;
		precision ${i.precision} usampler2D;
		precision ${i.precision} usampler3D;
		precision ${i.precision} usamplerCube;
		precision ${i.precision} usampler2DArray;
		`),i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Up(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hl?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===dl?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===vn&&(e="SHADOWMAP_TYPE_VSM"),e}function Np(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case Di:e="ENVMAP_TYPE_CUBE";break;case zs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Op(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Di:e="ENVMAP_MODE_REFRACTION";break}return e}function Fp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Kr:e="ENVMAP_BLENDING_MULTIPLY";break;case Dc:e="ENVMAP_BLENDING_MIX";break;case Uc:e="ENVMAP_BLENDING_ADD";break}return e}function Bp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function zp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Up(t),c=Np(t),u=Op(t),d=Fp(t),p=Bp(t),m=t.isWebGL2?"":Tp(t),_=wp(t),x=Ap(r),f=s.createProgram();let h,M,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ai).join(`
`),h.length>0&&(h+=`
`),M=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(Ai).join(`
`),M.length>0&&(M+=`
`)):(h=[Va(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ai).join(`
`),M=[m,Va(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nn?"#define TONE_MAPPING":"",t.toneMapping!==Nn?ze.tonemapping_pars_fragment:"",t.toneMapping!==Nn?bp("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ep("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ai).join(`
`)),a=Hr(a),a=ka(a,t),a=Ga(a,t),o=Hr(o),o=ka(o,t),o=Ga(o,t),a=Ha(a),o=Ha(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,h=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,M=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+M);const E=y+h+a,P=y+M+o,C=Ba(s,s.VERTEX_SHADER,E),A=Ba(s,s.FRAGMENT_SHADER,P);s.attachShader(f,C),s.attachShader(f,A),t.index0AttributeName!==void 0?s.bindAttribLocation(f,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(f,0,"position"),s.linkProgram(f);function N(k){if(i.debug.checkShaderErrors){const q=s.getProgramInfoLog(f).trim(),I=s.getShaderInfoLog(C).trim(),H=s.getShaderInfoLog(A).trim();let F=!0,K=!0;if(s.getProgramParameter(f,s.LINK_STATUS)===!1)if(F=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,f,C,A);else{const X=za(s,C,"vertex"),j=za(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(f,s.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+X+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(I===""||H==="")&&(K=!1);K&&(k.diagnostics={runnable:F,programLog:q,vertexShader:{log:I,prefix:h},fragmentShader:{log:H,prefix:M}})}s.deleteShader(C),s.deleteShader(A),W=new As(s,f),g=Rp(s,f)}let W;this.getUniforms=function(){return W===void 0&&N(this),W};let g;this.getAttributes=function(){return g===void 0&&N(this),g};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(f,xp)),w},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(f),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yp++,this.cacheKey=e,this.usedTimes=1,this.program=f,this.vertexShader=C,this.fragmentShader=A,this}let kp=0;class Gp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Hp(e),t.set(e,n)),n}}class Hp{constructor(e){this.id=kp++,this.code=e,this.usedTimes=0}}function Vp(i,e,t,n,s,r,a){const o=new Qr,l=new Gp,c=new Set,u=[],d=s.isWebGL2,p=s.logarithmicDepthBuffer,m=s.vertexTextures;let _=s.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(g){return c.add(g),g===0?"uv":`uv${g}`}function h(g,w,k,q,I){const H=q.fog,F=I.geometry,K=g.isMeshStandardMaterial?q.environment:null,X=(g.isMeshStandardMaterial?t:e).get(g.envMap||K),j=X&&X.mapping===zs?X.image.height:null,Y=x[g.type];g.precision!==null&&(_=s.getMaxPrecision(g.precision),_!==g.precision&&console.warn("THREE.WebGLProgram.getParameters:",g.precision,"not supported, using",_,"instead."));const se=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,oe=se!==void 0?se.length:0;let Re=0;F.morphAttributes.position!==void 0&&(Re=1),F.morphAttributes.normal!==void 0&&(Re=2),F.morphAttributes.color!==void 0&&(Re=3);let V,Q,he,be;if(Y){const Xe=rn[Y];V=Xe.vertexShader,Q=Xe.fragmentShader}else V=g.vertexShader,Q=g.fragmentShader,l.update(g),he=l.getVertexShaderID(g),be=l.getFragmentShaderID(g);const we=i.getRenderTarget(),fe=I.isInstancedMesh===!0,qe=I.isBatchedMesh===!0,Ie=!!g.map,U=!!g.matcap,dt=!!X,Me=!!g.aoMap,Ce=!!g.lightMap,ge=!!g.bumpMap,et=!!g.normalMap,De=!!g.displacementMap,b=!!g.emissiveMap,v=!!g.metalnessMap,O=!!g.roughnessMap,ne=g.anisotropy>0,$=g.clearcoat>0,ee=g.iridescence>0,pe=g.sheen>0,ae=g.transmission>0,de=ne&&!!g.anisotropyMap,Te=$&&!!g.clearcoatMap,Ue=$&&!!g.clearcoatNormalMap,Z=$&&!!g.clearcoatRoughnessMap,$e=ee&&!!g.iridescenceMap,Ge=ee&&!!g.iridescenceThicknessMap,Le=pe&&!!g.sheenColorMap,ve=pe&&!!g.sheenRoughnessMap,ce=!!g.specularMap,Oe=!!g.specularColorMap,R=!!g.specularIntensityMap,ie=ae&&!!g.transmissionMap,le=ae&&!!g.thicknessMap,xe=!!g.gradientMap,T=!!g.alphaMap,te=g.alphaTest>0,J=!!g.alphaHash,me=!!g.extensions;let Ee=Nn;g.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(Ee=i.toneMapping);const Ye={isWebGL2:d,shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:V,fragmentShader:Q,defines:g.defines,customVertexShaderID:he,customFragmentShaderID:be,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:_,batching:qe,instancing:fe,instancingColor:fe&&I.instanceColor!==null,supportsVertexTextures:m,outputColorSpace:we===null?i.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:Mn,alphaToCoverage:!!g.alphaToCoverage,map:Ie,matcap:U,envMap:dt,envMapMode:dt&&X.mapping,envMapCubeUVHeight:j,aoMap:Me,lightMap:Ce,bumpMap:ge,normalMap:et,displacementMap:m&&De,emissiveMap:b,normalMapObjectSpace:et&&g.normalMapType===$c,normalMapTangentSpace:et&&g.normalMapType===Zr,metalnessMap:v,roughnessMap:O,anisotropy:ne,anisotropyMap:de,clearcoat:$,clearcoatMap:Te,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Z,iridescence:ee,iridescenceMap:$e,iridescenceThicknessMap:Ge,sheen:pe,sheenColorMap:Le,sheenRoughnessMap:ve,specularMap:ce,specularColorMap:Oe,specularIntensityMap:R,transmission:ae,transmissionMap:ie,thicknessMap:le,gradientMap:xe,opaque:g.transparent===!1&&g.blending===Ci&&g.alphaToCoverage===!1,alphaMap:T,alphaTest:te,alphaHash:J,combine:g.combine,mapUv:Ie&&f(g.map.channel),aoMapUv:Me&&f(g.aoMap.channel),lightMapUv:Ce&&f(g.lightMap.channel),bumpMapUv:ge&&f(g.bumpMap.channel),normalMapUv:et&&f(g.normalMap.channel),displacementMapUv:De&&f(g.displacementMap.channel),emissiveMapUv:b&&f(g.emissiveMap.channel),metalnessMapUv:v&&f(g.metalnessMap.channel),roughnessMapUv:O&&f(g.roughnessMap.channel),anisotropyMapUv:de&&f(g.anisotropyMap.channel),clearcoatMapUv:Te&&f(g.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&f(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&f(g.clearcoatRoughnessMap.channel),iridescenceMapUv:$e&&f(g.iridescenceMap.channel),iridescenceThicknessMapUv:Ge&&f(g.iridescenceThicknessMap.channel),sheenColorMapUv:Le&&f(g.sheenColorMap.channel),sheenRoughnessMapUv:ve&&f(g.sheenRoughnessMap.channel),specularMapUv:ce&&f(g.specularMap.channel),specularColorMapUv:Oe&&f(g.specularColorMap.channel),specularIntensityMapUv:R&&f(g.specularIntensityMap.channel),transmissionMapUv:ie&&f(g.transmissionMap.channel),thicknessMapUv:le&&f(g.thicknessMap.channel),alphaMapUv:T&&f(g.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(et||ne),vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Ie||T),fog:!!H,useFog:g.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:g.flatShading===!0,sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Re,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ie&&g.map.isVideoTexture===!0&&Je.getTransfer(g.map.colorSpace)===tt,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===on,flipSided:g.side===Nt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionDerivatives:me&&g.extensions.derivatives===!0,extensionFragDepth:me&&g.extensions.fragDepth===!0,extensionDrawBuffers:me&&g.extensions.drawBuffers===!0,extensionShaderTextureLOD:me&&g.extensions.shaderTextureLOD===!0,extensionClipCullDistance:me&&g.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:me&&g.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function M(g){const w=[];if(g.shaderID?w.push(g.shaderID):(w.push(g.customVertexShaderID),w.push(g.customFragmentShaderID)),g.defines!==void 0)for(const k in g.defines)w.push(k),w.push(g.defines[k]);return g.isRawShaderMaterial===!1&&(y(w,g),E(w,g),w.push(i.outputColorSpace)),w.push(g.customProgramCacheKey),w.join()}function y(g,w){g.push(w.precision),g.push(w.outputColorSpace),g.push(w.envMapMode),g.push(w.envMapCubeUVHeight),g.push(w.mapUv),g.push(w.alphaMapUv),g.push(w.lightMapUv),g.push(w.aoMapUv),g.push(w.bumpMapUv),g.push(w.normalMapUv),g.push(w.displacementMapUv),g.push(w.emissiveMapUv),g.push(w.metalnessMapUv),g.push(w.roughnessMapUv),g.push(w.anisotropyMapUv),g.push(w.clearcoatMapUv),g.push(w.clearcoatNormalMapUv),g.push(w.clearcoatRoughnessMapUv),g.push(w.iridescenceMapUv),g.push(w.iridescenceThicknessMapUv),g.push(w.sheenColorMapUv),g.push(w.sheenRoughnessMapUv),g.push(w.specularMapUv),g.push(w.specularColorMapUv),g.push(w.specularIntensityMapUv),g.push(w.transmissionMapUv),g.push(w.thicknessMapUv),g.push(w.combine),g.push(w.fogExp2),g.push(w.sizeAttenuation),g.push(w.morphTargetsCount),g.push(w.morphAttributeCount),g.push(w.numDirLights),g.push(w.numPointLights),g.push(w.numSpotLights),g.push(w.numSpotLightMaps),g.push(w.numHemiLights),g.push(w.numRectAreaLights),g.push(w.numDirLightShadows),g.push(w.numPointLightShadows),g.push(w.numSpotLightShadows),g.push(w.numSpotLightShadowsWithMaps),g.push(w.numLightProbes),g.push(w.shadowMapType),g.push(w.toneMapping),g.push(w.numClippingPlanes),g.push(w.numClipIntersection),g.push(w.depthPacking)}function E(g,w){o.disableAll(),w.isWebGL2&&o.enable(0),w.supportsVertexTextures&&o.enable(1),w.instancing&&o.enable(2),w.instancingColor&&o.enable(3),w.matcap&&o.enable(4),w.envMap&&o.enable(5),w.normalMapObjectSpace&&o.enable(6),w.normalMapTangentSpace&&o.enable(7),w.clearcoat&&o.enable(8),w.iridescence&&o.enable(9),w.alphaTest&&o.enable(10),w.vertexColors&&o.enable(11),w.vertexAlphas&&o.enable(12),w.vertexUv1s&&o.enable(13),w.vertexUv2s&&o.enable(14),w.vertexUv3s&&o.enable(15),w.vertexTangents&&o.enable(16),w.anisotropy&&o.enable(17),w.alphaHash&&o.enable(18),w.batching&&o.enable(19),g.push(o.mask),o.disableAll(),w.fog&&o.enable(0),w.useFog&&o.enable(1),w.flatShading&&o.enable(2),w.logarithmicDepthBuffer&&o.enable(3),w.skinning&&o.enable(4),w.morphTargets&&o.enable(5),w.morphNormals&&o.enable(6),w.morphColors&&o.enable(7),w.premultipliedAlpha&&o.enable(8),w.shadowMapEnabled&&o.enable(9),w.useLegacyLights&&o.enable(10),w.doubleSided&&o.enable(11),w.flipSided&&o.enable(12),w.useDepthPacking&&o.enable(13),w.dithering&&o.enable(14),w.transmission&&o.enable(15),w.sheen&&o.enable(16),w.opaque&&o.enable(17),w.pointsUvs&&o.enable(18),w.decodeVideoTexture&&o.enable(19),w.alphaToCoverage&&o.enable(20),g.push(o.mask)}function P(g){const w=x[g.type];let k;if(w){const q=rn[w];k=bu.clone(q.uniforms)}else k=g.uniforms;return k}function C(g,w){let k;for(let q=0,I=u.length;q<I;q++){const H=u[q];if(H.cacheKey===w){k=H,++k.usedTimes;break}}return k===void 0&&(k=new zp(i,w,g,r),u.push(k)),k}function A(g){if(--g.usedTimes===0){const w=u.indexOf(g);u[w]=u[u.length-1],u.pop(),g.destroy()}}function N(g){l.remove(g)}function W(){l.dispose()}return{getParameters:h,getProgramCacheKey:M,getUniforms:P,acquireProgram:C,releaseProgram:A,releaseShaderCache:N,programs:u,dispose:W}}function Wp(){let i=new WeakMap;function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function t(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function Xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Wa(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Xa(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,p,m,_,x,f){let h=i[e];return h===void 0?(h={id:d.id,object:d,geometry:p,material:m,groupOrder:_,renderOrder:d.renderOrder,z:x,group:f},i[e]=h):(h.id=d.id,h.object=d,h.geometry=p,h.material=m,h.groupOrder=_,h.renderOrder=d.renderOrder,h.z=x,h.group=f),e++,h}function o(d,p,m,_,x,f){const h=a(d,p,m,_,x,f);m.transmission>0?n.push(h):m.transparent===!0?s.push(h):t.push(h)}function l(d,p,m,_,x,f){const h=a(d,p,m,_,x,f);m.transmission>0?n.unshift(h):m.transparent===!0?s.unshift(h):t.unshift(h)}function c(d,p){t.length>1&&t.sort(d||Xp),n.length>1&&n.sort(p||Wa),s.length>1&&s.sort(p||Wa)}function u(){for(let d=e,p=i.length;d<p;d++){const m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:u,sort:c}}function qp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xa,i.set(n,[a])):s>=r.length?(a=new Xa,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function jp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Be};break;case"SpotLight":t={position:new L,direction:new L,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Be,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":t={color:new Be,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function Yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Se,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Kp=0;function $p(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Zp(i,e){const t=new jp,n=Yp(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new L);const r=new L,a=new ut,o=new ut;function l(u,d){let p=0,m=0,_=0;for(let k=0;k<9;k++)s.probe[k].set(0,0,0);let x=0,f=0,h=0,M=0,y=0,E=0,P=0,C=0,A=0,N=0,W=0;u.sort($p);const g=d===!0?Math.PI:1;for(let k=0,q=u.length;k<q;k++){const I=u[k],H=I.color,F=I.intensity,K=I.distance,X=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)p+=H.r*F*g,m+=H.g*F*g,_+=H.b*F*g;else if(I.isLightProbe){for(let j=0;j<9;j++)s.probe[j].addScaledVector(I.sh.coefficients[j],F);W++}else if(I.isDirectionalLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*g),I.castShadow){const Y=I.shadow,se=n.get(I);se.shadowBias=Y.bias,se.shadowNormalBias=Y.normalBias,se.shadowRadius=Y.radius,se.shadowMapSize=Y.mapSize,s.directionalShadow[x]=se,s.directionalShadowMap[x]=X,s.directionalShadowMatrix[x]=I.shadow.matrix,E++}s.directional[x]=j,x++}else if(I.isSpotLight){const j=t.get(I);j.position.setFromMatrixPosition(I.matrixWorld),j.color.copy(H).multiplyScalar(F*g),j.distance=K,j.coneCos=Math.cos(I.angle),j.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),j.decay=I.decay,s.spot[h]=j;const Y=I.shadow;if(I.map&&(s.spotLightMap[A]=I.map,A++,Y.updateMatrices(I),I.castShadow&&N++),s.spotLightMatrix[h]=Y.matrix,I.castShadow){const se=n.get(I);se.shadowBias=Y.bias,se.shadowNormalBias=Y.normalBias,se.shadowRadius=Y.radius,se.shadowMapSize=Y.mapSize,s.spotShadow[h]=se,s.spotShadowMap[h]=X,C++}h++}else if(I.isRectAreaLight){const j=t.get(I);j.color.copy(H).multiplyScalar(F),j.halfWidth.set(I.width*.5,0,0),j.halfHeight.set(0,I.height*.5,0),s.rectArea[M]=j,M++}else if(I.isPointLight){const j=t.get(I);if(j.color.copy(I.color).multiplyScalar(I.intensity*g),j.distance=I.distance,j.decay=I.decay,I.castShadow){const Y=I.shadow,se=n.get(I);se.shadowBias=Y.bias,se.shadowNormalBias=Y.normalBias,se.shadowRadius=Y.radius,se.shadowMapSize=Y.mapSize,se.shadowCameraNear=Y.camera.near,se.shadowCameraFar=Y.camera.far,s.pointShadow[f]=se,s.pointShadowMap[f]=X,s.pointShadowMatrix[f]=I.shadow.matrix,P++}s.point[f]=j,f++}else if(I.isHemisphereLight){const j=t.get(I);j.skyColor.copy(I.color).multiplyScalar(F*g),j.groundColor.copy(I.groundColor).multiplyScalar(F*g),s.hemi[y]=j,y++}}M>0&&(e.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=re.LTC_FLOAT_1,s.rectAreaLTC2=re.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=re.LTC_HALF_1,s.rectAreaLTC2=re.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=p,s.ambient[1]=m,s.ambient[2]=_;const w=s.hash;(w.directionalLength!==x||w.pointLength!==f||w.spotLength!==h||w.rectAreaLength!==M||w.hemiLength!==y||w.numDirectionalShadows!==E||w.numPointShadows!==P||w.numSpotShadows!==C||w.numSpotMaps!==A||w.numLightProbes!==W)&&(s.directional.length=x,s.spot.length=h,s.rectArea.length=M,s.point.length=f,s.hemi.length=y,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=C,s.spotShadowMap.length=C,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=C+A-N,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=N,s.numLightProbes=W,w.directionalLength=x,w.pointLength=f,w.spotLength=h,w.rectAreaLength=M,w.hemiLength=y,w.numDirectionalShadows=E,w.numPointShadows=P,w.numSpotShadows=C,w.numSpotMaps=A,w.numLightProbes=W,s.version=Kp++)}function c(u,d){let p=0,m=0,_=0,x=0,f=0;const h=d.matrixWorldInverse;for(let M=0,y=u.length;M<y;M++){const E=u[M];if(E.isDirectionalLight){const P=s.directional[p];P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(h),p++}else if(E.isSpotLight){const P=s.spot[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(h),P.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(h),_++}else if(E.isRectAreaLight){const P=s.rectArea[x];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(h),o.identity(),a.copy(E.matrixWorld),a.premultiply(h),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),x++}else if(E.isPointLight){const P=s.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(h),m++}else if(E.isHemisphereLight){const P=s.hemi[f];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(h),f++}}}return{setup:l,setupView:c,state:s}}function qa(i,e){const t=new Zp(i,e),n=[],s=[];function r(){n.length=0,s.length=0}function a(d){n.push(d)}function o(d){s.push(d)}function l(d){t.setup(n,d)}function c(d){t.setupView(n,d)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Jp(i,e){let t=new WeakMap;function n(r,a=0){const o=t.get(r);let l;return o===void 0?(l=new qa(i,e),t.set(r,[l])):a>=o.length?(l=new qa(i,e),o.push(l)):l=o[a],l}function s(){t=new WeakMap}return{get:n,dispose:s}}class Qp extends ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class em extends ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nm=`uniform sampler2D shadow_pass;
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
}`;function im(i,e,t){let n=new eo;const s=new Se,r=new Se,a=new nt,o=new Qp({depthPacking:Kc}),l=new em,c={},u=t.maxTextureSize,d={[Fn]:Nt,[Nt]:Fn,[on]:on},p=new Sn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Se},radius:{value:4}},vertexShader:tm,fragmentShader:nm}),m=p.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new je(_,p),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hl;let h=this.type;this.render=function(C,A,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||C.length===0)return;const W=i.getRenderTarget(),g=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),k=i.state;k.setBlending(Un),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=h!==vn&&this.type===vn,I=h===vn&&this.type!==vn;for(let H=0,F=C.length;H<F;H++){const K=C[H],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const j=X.getFrameExtents();if(s.multiply(j),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/j.x),s.x=r.x*j.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/j.y),s.y=r.y*j.y,X.mapSize.y=r.y)),X.map===null||q===!0||I===!0){const se=this.type!==vn?{minFilter:Ct,magFilter:Ct}:{};X.map!==null&&X.map.dispose(),X.map=new ti(s.x,s.y,se),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const Y=X.getViewportCount();for(let se=0;se<Y;se++){const oe=X.getViewport(se);a.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),k.viewport(a),X.updateMatrices(K,se),n=X.getFrustum(),E(A,N,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===vn&&M(X,N),X.needsUpdate=!1}h=this.type,f.needsUpdate=!1,i.setRenderTarget(W,g,w)};function M(C,A){const N=e.update(x);p.defines.VSM_SAMPLES!==C.blurSamples&&(p.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new ti(s.x,s.y)),p.uniforms.shadow_pass.value=C.map.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(A,null,N,p,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(A,null,N,m,x,null)}function y(C,A,N,W){let g=null;const w=N.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(w!==void 0)g=w;else if(g=N.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=g.uuid,q=A.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let H=I[q];H===void 0&&(H=g.clone(),I[q]=H,A.addEventListener("dispose",P)),g=H}if(g.visible=A.visible,g.wireframe=A.wireframe,W===vn?g.side=A.shadowSide!==null?A.shadowSide:A.side:g.side=A.shadowSide!==null?A.shadowSide:d[A.side],g.alphaMap=A.alphaMap,g.alphaTest=A.alphaTest,g.map=A.map,g.clipShadows=A.clipShadows,g.clippingPlanes=A.clippingPlanes,g.clipIntersection=A.clipIntersection,g.displacementMap=A.displacementMap,g.displacementScale=A.displacementScale,g.displacementBias=A.displacementBias,g.wireframeLinewidth=A.wireframeLinewidth,g.linewidth=A.linewidth,N.isPointLight===!0&&g.isMeshDistanceMaterial===!0){const k=i.properties.get(g);k.light=N}return g}function E(C,A,N,W,g){if(C.visible===!1)return;if(C.layers.test(A.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&g===vn)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,C.matrixWorld);const q=e.update(C),I=C.material;if(Array.isArray(I)){const H=q.groups;for(let F=0,K=H.length;F<K;F++){const X=H[F],j=I[X.materialIndex];if(j&&j.visible){const Y=y(C,j,W,g);C.onBeforeShadow(i,C,A,N,q,Y,X),i.renderBufferDirect(N,null,q,Y,C,X),C.onAfterShadow(i,C,A,N,q,Y,X)}}}else if(I.visible){const H=y(C,I,W,g);C.onBeforeShadow(i,C,A,N,q,H,null),i.renderBufferDirect(N,null,q,H,C,null),C.onAfterShadow(i,C,A,N,q,H,null)}}const k=C.children;for(let q=0,I=k.length;q<I;q++)E(k[q],A,N,W,g)}function P(C){C.target.removeEventListener("dispose",P);for(const N in c){const W=c[N],g=C.target.uuid;g in W&&(W[g].dispose(),delete W[g])}}}function sm(i,e,t){const n=t.isWebGL2;function s(){let T=!1;const te=new nt;let J=null;const me=new nt(0,0,0,0);return{setMask:function(Ee){J!==Ee&&!T&&(i.colorMask(Ee,Ee,Ee,Ee),J=Ee)},setLocked:function(Ee){T=Ee},setClear:function(Ee,Ye,Xe,Qe,xt){xt===!0&&(Ee*=Qe,Ye*=Qe,Xe*=Qe),te.set(Ee,Ye,Xe,Qe),me.equals(te)===!1&&(i.clearColor(Ee,Ye,Xe,Qe),me.copy(te))},reset:function(){T=!1,J=null,me.set(-1,0,0,0)}}}function r(){let T=!1,te=null,J=null,me=null;return{setTest:function(Ee){Ee?fe(i.DEPTH_TEST):qe(i.DEPTH_TEST)},setMask:function(Ee){te!==Ee&&!T&&(i.depthMask(Ee),te=Ee)},setFunc:function(Ee){if(J!==Ee){switch(Ee){case wc:i.depthFunc(i.NEVER);break;case Ac:i.depthFunc(i.ALWAYS);break;case Rc:i.depthFunc(i.LESS);break;case Ls:i.depthFunc(i.LEQUAL);break;case Cc:i.depthFunc(i.EQUAL);break;case Lc:i.depthFunc(i.GEQUAL);break;case Pc:i.depthFunc(i.GREATER);break;case Ic:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=Ee}},setLocked:function(Ee){T=Ee},setClear:function(Ee){me!==Ee&&(i.clearDepth(Ee),me=Ee)},reset:function(){T=!1,te=null,J=null,me=null}}}function a(){let T=!1,te=null,J=null,me=null,Ee=null,Ye=null,Xe=null,Qe=null,xt=null;return{setTest:function(Ke){T||(Ke?fe(i.STENCIL_TEST):qe(i.STENCIL_TEST))},setMask:function(Ke){te!==Ke&&!T&&(i.stencilMask(Ke),te=Ke)},setFunc:function(Ke,at,wt){(J!==Ke||me!==at||Ee!==wt)&&(i.stencilFunc(Ke,at,wt),J=Ke,me=at,Ee=wt)},setOp:function(Ke,at,wt){(Ye!==Ke||Xe!==at||Qe!==wt)&&(i.stencilOp(Ke,at,wt),Ye=Ke,Xe=at,Qe=wt)},setLocked:function(Ke){T=Ke},setClear:function(Ke){xt!==Ke&&(i.clearStencil(Ke),xt=Ke)},reset:function(){T=!1,te=null,J=null,me=null,Ee=null,Ye=null,Xe=null,Qe=null,xt=null}}}const o=new s,l=new r,c=new a,u=new WeakMap,d=new WeakMap;let p={},m={},_=new WeakMap,x=[],f=null,h=!1,M=null,y=null,E=null,P=null,C=null,A=null,N=null,W=new Be(0,0,0),g=0,w=!1,k=null,q=null,I=null,H=null,F=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,j=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),X=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),X=j>=2);let se=null,oe={};const Re=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),Q=new nt().fromArray(Re),he=new nt().fromArray(V);function be(T,te,J,me){const Ee=new Uint8Array(4),Ye=i.createTexture();i.bindTexture(T,Ye),i.texParameteri(T,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(T,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xe=0;Xe<J;Xe++)n&&(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)?i.texImage3D(te,0,i.RGBA,1,1,me,0,i.RGBA,i.UNSIGNED_BYTE,Ee):i.texImage2D(te+Xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ee);return Ye}const we={};we[i.TEXTURE_2D]=be(i.TEXTURE_2D,i.TEXTURE_2D,1),we[i.TEXTURE_CUBE_MAP]=be(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(we[i.TEXTURE_2D_ARRAY]=be(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),we[i.TEXTURE_3D]=be(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(i.DEPTH_TEST),l.setFunc(Ls),De(!1),b(wo),fe(i.CULL_FACE),ge(Un);function fe(T){p[T]!==!0&&(i.enable(T),p[T]=!0)}function qe(T){p[T]!==!1&&(i.disable(T),p[T]=!1)}function Ie(T,te){return m[T]!==te?(i.bindFramebuffer(T,te),m[T]=te,n&&(T===i.DRAW_FRAMEBUFFER&&(m[i.FRAMEBUFFER]=te),T===i.FRAMEBUFFER&&(m[i.DRAW_FRAMEBUFFER]=te)),!0):!1}function U(T,te){let J=x,me=!1;if(T)if(J=_.get(te),J===void 0&&(J=[],_.set(te,J)),T.isWebGLMultipleRenderTargets){const Ee=T.texture;if(J.length!==Ee.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Ye=0,Xe=Ee.length;Ye<Xe;Ye++)J[Ye]=i.COLOR_ATTACHMENT0+Ye;J.length=Ee.length,me=!0}}else J[0]!==i.COLOR_ATTACHMENT0&&(J[0]=i.COLOR_ATTACHMENT0,me=!0);else J[0]!==i.BACK&&(J[0]=i.BACK,me=!0);me&&(t.isWebGL2?i.drawBuffers(J):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function dt(T){return f!==T?(i.useProgram(T),f=T,!0):!1}const Me={[qn]:i.FUNC_ADD,[hc]:i.FUNC_SUBTRACT,[dc]:i.FUNC_REVERSE_SUBTRACT};if(n)Me[Co]=i.MIN,Me[Lo]=i.MAX;else{const T=e.get("EXT_blend_minmax");T!==null&&(Me[Co]=T.MIN_EXT,Me[Lo]=T.MAX_EXT)}const Ce={[fc]:i.ZERO,[pc]:i.ONE,[mc]:i.SRC_COLOR,[Dr]:i.SRC_ALPHA,[Mc]:i.SRC_ALPHA_SATURATE,[xc]:i.DST_COLOR,[_c]:i.DST_ALPHA,[gc]:i.ONE_MINUS_SRC_COLOR,[Ur]:i.ONE_MINUS_SRC_ALPHA,[yc]:i.ONE_MINUS_DST_COLOR,[vc]:i.ONE_MINUS_DST_ALPHA,[Sc]:i.CONSTANT_COLOR,[Ec]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[Tc]:i.ONE_MINUS_CONSTANT_ALPHA};function ge(T,te,J,me,Ee,Ye,Xe,Qe,xt,Ke){if(T===Un){h===!0&&(qe(i.BLEND),h=!1);return}if(h===!1&&(fe(i.BLEND),h=!0),T!==uc){if(T!==M||Ke!==w){if((y!==qn||C!==qn)&&(i.blendEquation(i.FUNC_ADD),y=qn,C=qn),Ke)switch(T){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ir:i.blendFunc(i.ONE,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ir:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ao:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}E=null,P=null,A=null,N=null,W.set(0,0,0),g=0,M=T,w=Ke}return}Ee=Ee||te,Ye=Ye||J,Xe=Xe||me,(te!==y||Ee!==C)&&(i.blendEquationSeparate(Me[te],Me[Ee]),y=te,C=Ee),(J!==E||me!==P||Ye!==A||Xe!==N)&&(i.blendFuncSeparate(Ce[J],Ce[me],Ce[Ye],Ce[Xe]),E=J,P=me,A=Ye,N=Xe),(Qe.equals(W)===!1||xt!==g)&&(i.blendColor(Qe.r,Qe.g,Qe.b,xt),W.copy(Qe),g=xt),M=T,w=!1}function et(T,te){T.side===on?qe(i.CULL_FACE):fe(i.CULL_FACE);let J=T.side===Nt;te&&(J=!J),De(J),T.blending===Ci&&T.transparent===!1?ge(Un):ge(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),l.setFunc(T.depthFunc),l.setTest(T.depthTest),l.setMask(T.depthWrite),o.setMask(T.colorWrite);const me=T.stencilWrite;c.setTest(me),me&&(c.setMask(T.stencilWriteMask),c.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),c.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),O(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):qe(i.SAMPLE_ALPHA_TO_COVERAGE)}function De(T){k!==T&&(T?i.frontFace(i.CW):i.frontFace(i.CCW),k=T)}function b(T){T!==lc?(fe(i.CULL_FACE),T!==q&&(T===wo?i.cullFace(i.BACK):T===cc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):qe(i.CULL_FACE),q=T}function v(T){T!==I&&(X&&i.lineWidth(T),I=T)}function O(T,te,J){T?(fe(i.POLYGON_OFFSET_FILL),(H!==te||F!==J)&&(i.polygonOffset(te,J),H=te,F=J)):qe(i.POLYGON_OFFSET_FILL)}function ne(T){T?fe(i.SCISSOR_TEST):qe(i.SCISSOR_TEST)}function $(T){T===void 0&&(T=i.TEXTURE0+K-1),se!==T&&(i.activeTexture(T),se=T)}function ee(T,te,J){J===void 0&&(se===null?J=i.TEXTURE0+K-1:J=se);let me=oe[J];me===void 0&&(me={type:void 0,texture:void 0},oe[J]=me),(me.type!==T||me.texture!==te)&&(se!==J&&(i.activeTexture(J),se=J),i.bindTexture(T,te||we[T]),me.type=T,me.texture=te)}function pe(){const T=oe[se];T!==void 0&&T.type!==void 0&&(i.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function ae(){try{i.compressedTexImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function de(){try{i.compressedTexImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{i.texSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ue(){try{i.texSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Z(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function $e(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Le(){try{i.texStorage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{i.texImage2D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Oe(T){Q.equals(T)===!1&&(i.scissor(T.x,T.y,T.z,T.w),Q.copy(T))}function R(T){he.equals(T)===!1&&(i.viewport(T.x,T.y,T.z,T.w),he.copy(T))}function ie(T,te){let J=d.get(te);J===void 0&&(J=new WeakMap,d.set(te,J));let me=J.get(T);me===void 0&&(me=i.getUniformBlockIndex(te,T.name),J.set(T,me))}function le(T,te){const me=d.get(te).get(T);u.get(te)!==me&&(i.uniformBlockBinding(te,me,T.__bindingPointIndex),u.set(te,me))}function xe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),p={},se=null,oe={},m={},_=new WeakMap,x=[],f=null,h=!1,M=null,y=null,E=null,P=null,C=null,A=null,N=null,W=new Be(0,0,0),g=0,w=!1,k=null,q=null,I=null,H=null,F=null,Q.set(0,0,i.canvas.width,i.canvas.height),he.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:qe,bindFramebuffer:Ie,drawBuffers:U,useProgram:dt,setBlending:ge,setMaterial:et,setFlipSided:De,setCullFace:b,setLineWidth:v,setPolygonOffset:O,setScissorTest:ne,activeTexture:$,bindTexture:ee,unbindTexture:pe,compressedTexImage2D:ae,compressedTexImage3D:de,texImage2D:ve,texImage3D:ce,updateUBOMapping:ie,uniformBlockBinding:le,texStorage2D:Ge,texStorage3D:Le,texSubImage2D:Te,texSubImage3D:Ue,compressedTexSubImage2D:Z,compressedTexSubImage3D:$e,scissor:Oe,viewport:R,reset:xe}}function rm(i,e,t,n,s,r,a){const o=s.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap;let d;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,v){return m?new OffscreenCanvas(b,v):Ns("canvas")}function x(b,v,O,ne){let $=1;if((b.width>ne||b.height>ne)&&($=ne/Math.max(b.width,b.height)),$<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ee=v?Gr:Math.floor,pe=ee($*b.width),ae=ee($*b.height);d===void 0&&(d=_(pe,ae));const de=O?_(pe,ae):d;return de.width=pe,de.height=ae,de.getContext("2d").drawImage(b,0,0,pe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+pe+"x"+ae+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function f(b){return oa(b.width)&&oa(b.height)}function h(b){return o?!1:b.wrapS!==en||b.wrapT!==en||b.minFilter!==Ct&&b.minFilter!==Dt}function M(b,v){return b.generateMipmaps&&v&&b.minFilter!==Ct&&b.minFilter!==Dt}function y(b){i.generateMipmap(b)}function E(b,v,O,ne,$=!1){if(o===!1)return v;if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ee=v;if(v===i.RED&&(O===i.FLOAT&&(ee=i.R32F),O===i.HALF_FLOAT&&(ee=i.R16F),O===i.UNSIGNED_BYTE&&(ee=i.R8)),v===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&(ee=i.R8UI),O===i.UNSIGNED_SHORT&&(ee=i.R16UI),O===i.UNSIGNED_INT&&(ee=i.R32UI),O===i.BYTE&&(ee=i.R8I),O===i.SHORT&&(ee=i.R16I),O===i.INT&&(ee=i.R32I)),v===i.RG&&(O===i.FLOAT&&(ee=i.RG32F),O===i.HALF_FLOAT&&(ee=i.RG16F),O===i.UNSIGNED_BYTE&&(ee=i.RG8)),v===i.RGBA){const pe=$?Ps:Je.getTransfer(ne);O===i.FLOAT&&(ee=i.RGBA32F),O===i.HALF_FLOAT&&(ee=i.RGBA16F),O===i.UNSIGNED_BYTE&&(ee=pe===tt?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&(ee=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&(ee=i.RGB5_A1)}return(ee===i.R16F||ee===i.R32F||ee===i.RG16F||ee===i.RG32F||ee===i.RGBA16F||ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ee}function P(b,v,O){return M(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==Ct&&b.minFilter!==Dt?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function C(b){return b===Ct||b===Po||b===ki?i.NEAREST:i.LINEAR}function A(b){const v=b.target;v.removeEventListener("dispose",A),W(v),v.isVideoTexture&&u.delete(v)}function N(b){const v=b.target;v.removeEventListener("dispose",N),w(v)}function W(b){const v=n.get(b);if(v.__webglInit===void 0)return;const O=b.source,ne=p.get(O);if(ne){const $=ne[v.__cacheKey];$.usedTimes--,$.usedTimes===0&&g(b),Object.keys(ne).length===0&&p.delete(O)}n.remove(b)}function g(b){const v=n.get(b);i.deleteTexture(v.__webglTexture);const O=b.source,ne=p.get(O);delete ne[v.__cacheKey],a.memory.textures--}function w(b){const v=b.texture,O=n.get(b),ne=n.get(v);if(ne.__webglTexture!==void 0&&(i.deleteTexture(ne.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(O.__webglFramebuffer[$]))for(let ee=0;ee<O.__webglFramebuffer[$].length;ee++)i.deleteFramebuffer(O.__webglFramebuffer[$][ee]);else i.deleteFramebuffer(O.__webglFramebuffer[$]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[$])}else{if(Array.isArray(O.__webglFramebuffer))for(let $=0;$<O.__webglFramebuffer.length;$++)i.deleteFramebuffer(O.__webglFramebuffer[$]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let $=0;$<O.__webglColorRenderbuffer.length;$++)O.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[$]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let $=0,ee=v.length;$<ee;$++){const pe=n.get(v[$]);pe.__webglTexture&&(i.deleteTexture(pe.__webglTexture),a.memory.textures--),n.remove(v[$])}n.remove(v),n.remove(b)}let k=0;function q(){k=0}function I(){const b=k;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),k+=1,b}function H(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function F(b,v){const O=n.get(b);if(b.isVideoTexture&&et(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(O,b,v);return}}t.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+v)}function K(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Q(O,b,v);return}t.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+v)}function X(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){Q(O,b,v);return}t.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+v)}function j(b,v){const O=n.get(b);if(b.version>0&&O.__version!==b.version){he(O,b,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+v)}const Y={[Fr]:i.REPEAT,[en]:i.CLAMP_TO_EDGE,[Br]:i.MIRRORED_REPEAT},se={[Ct]:i.NEAREST,[Po]:i.NEAREST_MIPMAP_NEAREST,[ki]:i.NEAREST_MIPMAP_LINEAR,[Dt]:i.LINEAR,[Js]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},oe={[Zc]:i.NEVER,[iu]:i.ALWAYS,[Jc]:i.LESS,[El]:i.LEQUAL,[Qc]:i.EQUAL,[nu]:i.GEQUAL,[eu]:i.GREATER,[tu]:i.NOTEQUAL};function Re(b,v,O){if(v.type===xn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===Dt||v.magFilter===Js||v.magFilter===ki||v.magFilter===Yn||v.minFilter===Dt||v.minFilter===Js||v.minFilter===ki||v.minFilter===Yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),O?(i.texParameteri(b,i.TEXTURE_WRAP_S,Y[v.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Y[v.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Y[v.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,se[v.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,se[v.minFilter])):(i.texParameteri(b,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(b,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(v.wrapS!==en||v.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(b,i.TEXTURE_MAG_FILTER,C(v.magFilter)),i.texParameteri(b,i.TEXTURE_MIN_FILTER,C(v.minFilter)),v.minFilter!==Ct&&v.minFilter!==Dt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,oe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===Ct||v.minFilter!==ki&&v.minFilter!==Yn||v.type===xn&&e.has("OES_texture_float_linear")===!1||o===!1&&v.type===Zi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(i.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function V(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",A));const ne=v.source;let $=p.get(ne);$===void 0&&($={},p.set(ne,$));const ee=H(v);if(ee!==b.__cacheKey){$[ee]===void 0&&($[ee]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,O=!0),$[ee].usedTimes++;const pe=$[b.__cacheKey];pe!==void 0&&($[b.__cacheKey].usedTimes--,pe.usedTimes===0&&g(v)),b.__cacheKey=ee,b.__webglTexture=$[ee].texture}return O}function Q(b,v,O){let ne=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ne=i.TEXTURE_3D);const $=V(b,v),ee=v.source;t.bindTexture(ne,b.__webglTexture,i.TEXTURE0+O);const pe=n.get(ee);if(ee.version!==pe.__version||$===!0){t.activeTexture(i.TEXTURE0+O);const ae=Je.getPrimaries(Je.workingColorSpace),de=v.colorSpace===qt?null:Je.getPrimaries(v.colorSpace),Te=v.colorSpace===qt||ae===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const Ue=h(v)&&f(v.image)===!1;let Z=x(v.image,Ue,!1,s.maxTextureSize);Z=De(v,Z);const $e=f(Z)||o,Ge=r.convert(v.format,v.colorSpace);let Le=r.convert(v.type),ve=E(v.internalFormat,Ge,Le,v.colorSpace,v.isVideoTexture);Re(ne,v,$e);let ce;const Oe=v.mipmaps,R=o&&v.isVideoTexture!==!0&&ve!==Ml,ie=pe.__version===void 0||$===!0,le=ee.dataReady,xe=P(v,Z,$e);if(v.isDepthTexture)ve=i.DEPTH_COMPONENT,o?v.type===xn?ve=i.DEPTH_COMPONENT32F:v.type===In?ve=i.DEPTH_COMPONENT24:v.type===$n?ve=i.DEPTH24_STENCIL8:ve=i.DEPTH_COMPONENT16:v.type===xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Zn&&ve===i.DEPTH_COMPONENT&&v.type!==$r&&v.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=In,Le=r.convert(v.type)),v.format===Ui&&ve===i.DEPTH_COMPONENT&&(ve=i.DEPTH_STENCIL,v.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=$n,Le=r.convert(v.type))),ie&&(R?t.texStorage2D(i.TEXTURE_2D,1,ve,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,Ge,Le,null));else if(v.isDataTexture)if(Oe.length>0&&$e){R&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Oe[0].width,Oe[0].height);for(let T=0,te=Oe.length;T<te;T++)ce=Oe[T],R?le&&t.texSubImage2D(i.TEXTURE_2D,T,0,0,ce.width,ce.height,Ge,Le,ce.data):t.texImage2D(i.TEXTURE_2D,T,ve,ce.width,ce.height,0,Ge,Le,ce.data);v.generateMipmaps=!1}else R?(ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Z.width,Z.height),le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z.width,Z.height,Ge,Le,Z.data)):t.texImage2D(i.TEXTURE_2D,0,ve,Z.width,Z.height,0,Ge,Le,Z.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){R&&ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ve,Oe[0].width,Oe[0].height,Z.depth);for(let T=0,te=Oe.length;T<te;T++)ce=Oe[T],v.format!==tn?Ge!==null?R?le&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ce.width,ce.height,Z.depth,Ge,ce.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,T,ve,ce.width,ce.height,Z.depth,0,ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,T,0,0,0,ce.width,ce.height,Z.depth,Ge,Le,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,T,ve,ce.width,ce.height,Z.depth,0,Ge,Le,ce.data)}else{R&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Oe[0].width,Oe[0].height);for(let T=0,te=Oe.length;T<te;T++)ce=Oe[T],v.format!==tn?Ge!==null?R?le&&t.compressedTexSubImage2D(i.TEXTURE_2D,T,0,0,ce.width,ce.height,Ge,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,T,ve,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?le&&t.texSubImage2D(i.TEXTURE_2D,T,0,0,ce.width,ce.height,Ge,Le,ce.data):t.texImage2D(i.TEXTURE_2D,T,ve,ce.width,ce.height,0,Ge,Le,ce.data)}else if(v.isDataArrayTexture)R?(ie&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ve,Z.width,Z.height,Z.depth),le&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,Ge,Le,Z.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,ve,Z.width,Z.height,Z.depth,0,Ge,Le,Z.data);else if(v.isData3DTexture)R?(ie&&t.texStorage3D(i.TEXTURE_3D,xe,ve,Z.width,Z.height,Z.depth),le&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,Ge,Le,Z.data)):t.texImage3D(i.TEXTURE_3D,0,ve,Z.width,Z.height,Z.depth,0,Ge,Le,Z.data);else if(v.isFramebufferTexture){if(ie)if(R)t.texStorage2D(i.TEXTURE_2D,xe,ve,Z.width,Z.height);else{let T=Z.width,te=Z.height;for(let J=0;J<xe;J++)t.texImage2D(i.TEXTURE_2D,J,ve,T,te,0,Ge,Le,null),T>>=1,te>>=1}}else if(Oe.length>0&&$e){R&&ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Oe[0].width,Oe[0].height);for(let T=0,te=Oe.length;T<te;T++)ce=Oe[T],R?le&&t.texSubImage2D(i.TEXTURE_2D,T,0,0,Ge,Le,ce):t.texImage2D(i.TEXTURE_2D,T,ve,Ge,Le,ce);v.generateMipmaps=!1}else R?(ie&&t.texStorage2D(i.TEXTURE_2D,xe,ve,Z.width,Z.height),le&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ge,Le,Z)):t.texImage2D(i.TEXTURE_2D,0,ve,Ge,Le,Z);M(v,$e)&&y(ne),pe.__version=ee.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function he(b,v,O){if(v.image.length!==6)return;const ne=V(b,v),$=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+O);const ee=n.get($);if($.version!==ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+O);const pe=Je.getPrimaries(Je.workingColorSpace),ae=v.colorSpace===qt?null:Je.getPrimaries(v.colorSpace),de=v.colorSpace===qt||pe===ae?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const Te=v.isCompressedTexture||v.image[0].isCompressedTexture,Ue=v.image[0]&&v.image[0].isDataTexture,Z=[];for(let T=0;T<6;T++)!Te&&!Ue?Z[T]=x(v.image[T],!1,!0,s.maxCubemapSize):Z[T]=Ue?v.image[T].image:v.image[T],Z[T]=De(v,Z[T]);const $e=Z[0],Ge=f($e)||o,Le=r.convert(v.format,v.colorSpace),ve=r.convert(v.type),ce=E(v.internalFormat,Le,ve,v.colorSpace),Oe=o&&v.isVideoTexture!==!0,R=ee.__version===void 0||ne===!0,ie=$.dataReady;let le=P(v,$e,Ge);Re(i.TEXTURE_CUBE_MAP,v,Ge);let xe;if(Te){Oe&&R&&t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ce,$e.width,$e.height);for(let T=0;T<6;T++){xe=Z[T].mipmaps;for(let te=0;te<xe.length;te++){const J=xe[te];v.format!==tn?Le!==null?Oe?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te,0,0,J.width,J.height,Le,J.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te,ce,J.width,J.height,0,J.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te,0,0,J.width,J.height,Le,ve,J.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te,ce,J.width,J.height,0,Le,ve,J.data)}}}else{xe=v.mipmaps,Oe&&R&&(xe.length>0&&le++,t.texStorage2D(i.TEXTURE_CUBE_MAP,le,ce,Z[0].width,Z[0].height));for(let T=0;T<6;T++)if(Ue){Oe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Z[T].width,Z[T].height,Le,ve,Z[T].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ce,Z[T].width,Z[T].height,0,Le,ve,Z[T].data);for(let te=0;te<xe.length;te++){const me=xe[te].image[T].image;Oe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te+1,0,0,me.width,me.height,Le,ve,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te+1,ce,me.width,me.height,0,Le,ve,me.data)}}else{Oe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,0,0,Le,ve,Z[T]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,0,ce,Le,ve,Z[T]);for(let te=0;te<xe.length;te++){const J=xe[te];Oe?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te+1,0,0,Le,ve,J.image[T]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+T,te+1,ce,Le,ve,J.image[T])}}}M(v,Ge)&&y(i.TEXTURE_CUBE_MAP),ee.__version=$.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function be(b,v,O,ne,$,ee){const pe=r.convert(O.format,O.colorSpace),ae=r.convert(O.type),de=E(O.internalFormat,pe,ae,O.colorSpace);if(!n.get(v).__hasExternalTextures){const Ue=Math.max(1,v.width>>ee),Z=Math.max(1,v.height>>ee);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,ee,de,Ue,Z,v.depth,0,pe,ae,null):t.texImage2D($,ee,de,Ue,Z,0,pe,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ge(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,$,n.get(O).__webglTexture,0,Ce(v)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,$,n.get(O).__webglTexture,ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function we(b,v,O){if(i.bindRenderbuffer(i.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let ne=o===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||ge(v)){const $=v.depthTexture;$&&$.isDepthTexture&&($.type===xn?ne=i.DEPTH_COMPONENT32F:$.type===In&&(ne=i.DEPTH_COMPONENT24));const ee=Ce(v);ge(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,ne,v.width,v.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,ne,v.width,v.height)}else i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const ne=Ce(v);O&&ge(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):ge(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,i.DEPTH24_STENCIL8,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,b)}else{const ne=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let $=0;$<ne.length;$++){const ee=ne[$],pe=r.convert(ee.format,ee.colorSpace),ae=r.convert(ee.type),de=E(ee.internalFormat,pe,ae,ee.colorSpace),Te=Ce(v);O&&ge(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,de,v.width,v.height):ge(v)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,de,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,de,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function fe(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F(v.depthTexture,0);const ne=n.get(v.depthTexture).__webglTexture,$=Ce(v);if(v.depthTexture.format===Zn)ge(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ne,0);else if(v.depthTexture.format===Ui)ge(v)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0,$):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function qe(b){const v=n.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");fe(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ne]),v.__webglDepthbuffer[ne]=i.createRenderbuffer(),we(v.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=i.createRenderbuffer(),we(v.__webglDepthbuffer,b,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ie(b,v,O){const ne=n.get(b);v!==void 0&&be(ne.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&qe(b)}function U(b){const v=b.texture,O=n.get(b),ne=n.get(v);b.addEventListener("dispose",N),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=v.version,a.memory.textures++);const $=b.isWebGLCubeRenderTarget===!0,ee=b.isWebGLMultipleRenderTargets===!0,pe=f(b)||o;if($){O.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[ae]=[];for(let de=0;de<v.mipmaps.length;de++)O.__webglFramebuffer[ae][de]=i.createFramebuffer()}else O.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)O.__webglFramebuffer[ae]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if(ee)if(s.drawBuffers){const ae=b.texture;for(let de=0,Te=ae.length;de<Te;de++){const Ue=n.get(ae[de]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&ge(b)===!1){const ae=ee?v:[v];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<ae.length;de++){const Te=ae[de];O.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const Ue=r.convert(Te.format,Te.colorSpace),Z=r.convert(Te.type),$e=E(Te.internalFormat,Ue,Z,Te.colorSpace,b.isXRRenderTarget===!0),Ge=Ce(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,$e,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,O.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),we(O.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),Re(i.TEXTURE_CUBE_MAP,v,pe);for(let ae=0;ae<6;ae++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)be(O.__webglFramebuffer[ae][de],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else be(O.__webglFramebuffer[ae],b,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);M(v,pe)&&y(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ee){const ae=b.texture;for(let de=0,Te=ae.length;de<Te;de++){const Ue=ae[de],Z=n.get(Ue);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture),Re(i.TEXTURE_2D,Ue,pe),be(O.__webglFramebuffer,b,Ue,i.COLOR_ATTACHMENT0+de,i.TEXTURE_2D,0),M(Ue,pe)&&y(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ae=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,ne.__webglTexture),Re(ae,v,pe),o&&v.mipmaps&&v.mipmaps.length>0)for(let de=0;de<v.mipmaps.length;de++)be(O.__webglFramebuffer[de],b,v,i.COLOR_ATTACHMENT0,ae,de);else be(O.__webglFramebuffer,b,v,i.COLOR_ATTACHMENT0,ae,0);M(v,pe)&&y(ae),t.unbindTexture()}b.depthBuffer&&qe(b)}function dt(b){const v=f(b)||o,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,$=O.length;ne<$;ne++){const ee=O[ne];if(M(ee,v)){const pe=b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(ee).__webglTexture;t.bindTexture(pe,ae),y(pe),t.unbindTexture()}}}function Me(b){if(o&&b.samples>0&&ge(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],O=b.width,ne=b.height;let $=i.COLOR_BUFFER_BIT;const ee=[],pe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let Te=0;Te<v.length;Te++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let Te=0;Te<v.length;Te++){ee.push(i.COLOR_ATTACHMENT0+Te),b.depthBuffer&&ee.push(pe);const Ue=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Ue===!1&&(b.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),de&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]),Ue===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[pe]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[pe])),de){const Z=n.get(v[Te]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Z,0)}i.blitFramebuffer(0,0,O,ne,0,0,O,ne,$,i.NEAREST),c&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ee)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let Te=0;Te<v.length;Te++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.RENDERBUFFER,ae.__webglColorRenderbuffer[Te]);const Ue=n.get(v[Te]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Te,i.TEXTURE_2D,Ue,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ce(b){return Math.min(s.maxSamples,b.samples)}function ge(b){const v=n.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function et(b){const v=a.render.frame;u.get(b)!==v&&(u.set(b,v),b.update())}function De(b,v){const O=b.colorSpace,ne=b.format,$=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===zr||O!==Mn&&O!==qt&&(Je.getTransfer(O)===tt?o===!1?e.has("EXT_sRGB")===!0&&ne===tn?(b.format=zr,b.minFilter=Dt,b.generateMipmaps=!1):v=Tl.sRGBToLinear(v):(ne!==tn||$!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=I,this.resetTextureUnits=q,this.setTexture2D=F,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=j,this.rebindTextures=Ie,this.setupRenderTarget=U,this.updateRenderTargetMipmap=dt,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=be,this.useMultisampledRTT=ge}function om(i,e,t){const n=t.isWebGL2;function s(r,a=qt){let o;const l=Je.getTransfer(a);if(r===On)return i.UNSIGNED_BYTE;if(r===gl)return i.UNSIGNED_SHORT_4_4_4_4;if(r===_l)return i.UNSIGNED_SHORT_5_5_5_1;if(r===kc)return i.BYTE;if(r===Gc)return i.SHORT;if(r===$r)return i.UNSIGNED_SHORT;if(r===ml)return i.INT;if(r===In)return i.UNSIGNED_INT;if(r===xn)return i.FLOAT;if(r===Zi)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Hc)return i.ALPHA;if(r===tn)return i.RGBA;if(r===Vc)return i.LUMINANCE;if(r===Wc)return i.LUMINANCE_ALPHA;if(r===Zn)return i.DEPTH_COMPONENT;if(r===Ui)return i.DEPTH_STENCIL;if(r===zr)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===Xc)return i.RED;if(r===vl)return i.RED_INTEGER;if(r===qc)return i.RG;if(r===xl)return i.RG_INTEGER;if(r===yl)return i.RGBA_INTEGER;if(r===Qs||r===er||r===tr||r===nr)if(l===tt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Qs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===er)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===tr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===nr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Qs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===er)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===tr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===nr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Io||r===Do||r===Uo||r===No)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===Io)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Do)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Uo)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===No)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ml)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Oo||r===Fo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===Oo)return l===tt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===Fo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Bo||r===zo||r===ko||r===Go||r===Ho||r===Vo||r===Wo||r===Xo||r===qo||r===jo||r===Yo||r===Ko||r===$o||r===Zo)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===Bo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===zo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ko)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Go)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Ho)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Vo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Xo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===qo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Yo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Ko)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===$o)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Zo)return l===tt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ir||r===Jo||r===Qo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===ir)return l===tt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Jo)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Qo)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===jc||r===ea||r===ta||r===na)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===ir)return o.COMPRESSED_RED_RGTC1_EXT;if(r===ea)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ta)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===na)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$n?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}class am extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ri extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lm={type:"move"};class Ar{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const f=t.getJointPose(x,n),h=this._getHandJoint(c,x);f!==null&&(h.matrix.fromArray(f.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=f.radius),h.visible=f!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],p=u.position.distanceTo(d.position),m=.02,_=.005;c.inputState.pinching&&p>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,um=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Ot,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new Sn({extensions:{fragDepth:!0},vertexShader:cm,fragmentShader:um,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new je(new Xs(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class dm extends oi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,p=null,m=null,_=null;const x=new hm,f=t.getContextAttributes();let h=null,M=null;const y=[],E=[],P=new Se;let C=null;const A=new Vt;A.layers.enable(1),A.viewport=new nt;const N=new Vt;N.layers.enable(2),N.viewport=new nt;const W=[A,N],g=new am;g.layers.enable(1),g.layers.enable(2);let w=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let Q=y[V];return Q===void 0&&(Q=new Ar,y[V]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(V){let Q=y[V];return Q===void 0&&(Q=new Ar,y[V]=Q),Q.getGripSpace()},this.getHand=function(V){let Q=y[V];return Q===void 0&&(Q=new Ar,y[V]=Q),Q.getHandSpace()};function q(V){const Q=E.indexOf(V.inputSource);if(Q===-1)return;const he=y[Q];he!==void 0&&(he.update(V.inputSource,V.frame,c||a),he.dispatchEvent({type:V.type,data:V.inputSource}))}function I(){s.removeEventListener("select",q),s.removeEventListener("selectstart",q),s.removeEventListener("selectend",q),s.removeEventListener("squeeze",q),s.removeEventListener("squeezestart",q),s.removeEventListener("squeezeend",q),s.removeEventListener("end",I),s.removeEventListener("inputsourceschange",H);for(let V=0;V<y.length;V++){const Q=E[V];Q!==null&&(E[V]=null,y[V].disconnect(Q))}w=null,k=null,x.reset(),e.setRenderTarget(h),m=null,p=null,d=null,s=null,M=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return p!==null?p:m},this.getBinding=function(){return d},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(V){if(s=V,s!==null){if(h=e.getRenderTarget(),s.addEventListener("select",q),s.addEventListener("selectstart",q),s.addEventListener("selectend",q),s.addEventListener("squeeze",q),s.addEventListener("squeezestart",q),s.addEventListener("squeezeend",q),s.addEventListener("end",I),s.addEventListener("inputsourceschange",H),f.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),s.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Q={antialias:s.renderState.layers===void 0?f.antialias:!0,alpha:!0,depth:f.depth,stencil:f.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new ti(m.framebufferWidth,m.framebufferHeight,{format:tn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:f.stencil})}else{let Q=null,he=null,be=null;f.depth&&(be=f.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=f.stencil?Ui:Zn,he=f.stencil?$n:In);const we={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:r};d=new XRWebGLBinding(s,t),p=d.createProjectionLayer(we),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),M=new ti(p.textureWidth,p.textureHeight,{format:tn,type:On,depthTexture:new Ol(p.textureWidth,p.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:f.stencil,colorSpace:e.outputColorSpace,samples:f.antialias?4:0});const fe=e.properties.get(M);fe.__ignoreDepthValues=p.ignoreDepthValues}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Re.setContext(s),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(V){for(let Q=0;Q<V.removed.length;Q++){const he=V.removed[Q],be=E.indexOf(he);be>=0&&(E[be]=null,y[be].disconnect(he))}for(let Q=0;Q<V.added.length;Q++){const he=V.added[Q];let be=E.indexOf(he);if(be===-1){for(let fe=0;fe<y.length;fe++)if(fe>=E.length){E.push(he),be=fe;break}else if(E[fe]===null){E[fe]=he,be=fe;break}if(be===-1)break}const we=y[be];we&&we.connect(he)}}const F=new L,K=new L;function X(V,Q,he){F.setFromMatrixPosition(Q.matrixWorld),K.setFromMatrixPosition(he.matrixWorld);const be=F.distanceTo(K),we=Q.projectionMatrix.elements,fe=he.projectionMatrix.elements,qe=we[14]/(we[10]-1),Ie=we[14]/(we[10]+1),U=(we[9]+1)/we[5],dt=(we[9]-1)/we[5],Me=(we[8]-1)/we[0],Ce=(fe[8]+1)/fe[0],ge=qe*Me,et=qe*Ce,De=be/(-Me+Ce),b=De*-Me;Q.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(b),V.translateZ(De),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const v=qe+De,O=Ie+De,ne=ge-b,$=et+(be-b),ee=U*Ie/O*v,pe=dt*Ie/O*v;V.projectionMatrix.makePerspective(ne,$,ee,pe,v,O),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function j(V,Q){Q===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(Q.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(s===null)return;x.texture!==null&&(V.near=x.depthNear,V.far=x.depthFar),g.near=N.near=A.near=V.near,g.far=N.far=A.far=V.far,(w!==g.near||k!==g.far)&&(s.updateRenderState({depthNear:g.near,depthFar:g.far}),w=g.near,k=g.far,A.near=w,A.far=k,N.near=w,N.far=k,A.updateProjectionMatrix(),N.updateProjectionMatrix(),V.updateProjectionMatrix());const Q=V.parent,he=g.cameras;j(g,Q);for(let be=0;be<he.length;be++)j(he[be],Q);he.length===2?X(g,A,N):g.projectionMatrix.copy(A.projectionMatrix),Y(V,g,Q)};function Y(V,Q,he){he===null?V.matrix.copy(Q.matrixWorld):(V.matrix.copy(he.matrixWorld),V.matrix.invert(),V.matrix.multiply(Q.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(Q.projectionMatrix),V.projectionMatrixInverse.copy(Q.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=kr*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return g},this.getFoveation=function(){if(!(p===null&&m===null))return l},this.setFoveation=function(V){l=V,p!==null&&(p.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.hasDepthSensing=function(){return x.texture!==null};let se=null;function oe(V,Q){if(u=Q.getViewerPose(c||a),_=Q,u!==null){const he=u.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let be=!1;he.length!==g.cameras.length&&(g.cameras.length=0,be=!0);for(let fe=0;fe<he.length;fe++){const qe=he[fe];let Ie=null;if(m!==null)Ie=m.getViewport(qe);else{const dt=d.getViewSubImage(p,qe);Ie=dt.viewport,fe===0&&(e.setRenderTargetTextures(M,dt.colorTexture,p.ignoreDepthValues?void 0:dt.depthStencilTexture),e.setRenderTarget(M))}let U=W[fe];U===void 0&&(U=new Vt,U.layers.enable(fe),U.viewport=new nt,W[fe]=U),U.matrix.fromArray(qe.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(qe.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Ie.x,Ie.y,Ie.width,Ie.height),fe===0&&(g.matrix.copy(U.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale)),be===!0&&g.cameras.push(U)}const we=s.enabledFeatures;if(we&&we.includes("depth-sensing")){const fe=d.getDepthInformation(he[0]);fe&&fe.isValid&&fe.texture&&x.init(e,fe,s.renderState)}}for(let he=0;he<y.length;he++){const be=E[he],we=y[he];be!==null&&we!==void 0&&we.update(be,Q,c||a)}x.render(e,g),se&&se(V,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}const Re=new Ul;Re.setAnimationLoop(oe),this.setAnimationLoop=function(V){se=V},this.dispose=function(){}}}function fm(i,e){function t(f,h){f.matrixAutoUpdate===!0&&f.updateMatrix(),h.value.copy(f.matrix)}function n(f,h){h.color.getRGB(f.fogColor.value,Pl(i)),h.isFog?(f.fogNear.value=h.near,f.fogFar.value=h.far):h.isFogExp2&&(f.fogDensity.value=h.density)}function s(f,h,M,y,E){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(f,h):h.isMeshToonMaterial?(r(f,h),d(f,h)):h.isMeshPhongMaterial?(r(f,h),u(f,h)):h.isMeshStandardMaterial?(r(f,h),p(f,h),h.isMeshPhysicalMaterial&&m(f,h,E)):h.isMeshMatcapMaterial?(r(f,h),_(f,h)):h.isMeshDepthMaterial?r(f,h):h.isMeshDistanceMaterial?(r(f,h),x(f,h)):h.isMeshNormalMaterial?r(f,h):h.isLineBasicMaterial?(a(f,h),h.isLineDashedMaterial&&o(f,h)):h.isPointsMaterial?l(f,h,M,y):h.isSpriteMaterial?c(f,h):h.isShadowMaterial?(f.color.value.copy(h.color),f.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(f,h){f.opacity.value=h.opacity,h.color&&f.diffuse.value.copy(h.color),h.emissive&&f.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.bumpMap&&(f.bumpMap.value=h.bumpMap,t(h.bumpMap,f.bumpMapTransform),f.bumpScale.value=h.bumpScale,h.side===Nt&&(f.bumpScale.value*=-1)),h.normalMap&&(f.normalMap.value=h.normalMap,t(h.normalMap,f.normalMapTransform),f.normalScale.value.copy(h.normalScale),h.side===Nt&&f.normalScale.value.negate()),h.displacementMap&&(f.displacementMap.value=h.displacementMap,t(h.displacementMap,f.displacementMapTransform),f.displacementScale.value=h.displacementScale,f.displacementBias.value=h.displacementBias),h.emissiveMap&&(f.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,f.emissiveMapTransform)),h.specularMap&&(f.specularMap.value=h.specularMap,t(h.specularMap,f.specularMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest);const M=e.get(h).envMap;if(M&&(f.envMap.value=M,f.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=h.reflectivity,f.ior.value=h.ior,f.refractionRatio.value=h.refractionRatio),h.lightMap){f.lightMap.value=h.lightMap;const y=i._useLegacyLights===!0?Math.PI:1;f.lightMapIntensity.value=h.lightMapIntensity*y,t(h.lightMap,f.lightMapTransform)}h.aoMap&&(f.aoMap.value=h.aoMap,f.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,f.aoMapTransform))}function a(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform))}function o(f,h){f.dashSize.value=h.dashSize,f.totalSize.value=h.dashSize+h.gapSize,f.scale.value=h.scale}function l(f,h,M,y){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.size.value=h.size*M,f.scale.value=y*.5,h.map&&(f.map.value=h.map,t(h.map,f.uvTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function c(f,h){f.diffuse.value.copy(h.color),f.opacity.value=h.opacity,f.rotation.value=h.rotation,h.map&&(f.map.value=h.map,t(h.map,f.mapTransform)),h.alphaMap&&(f.alphaMap.value=h.alphaMap,t(h.alphaMap,f.alphaMapTransform)),h.alphaTest>0&&(f.alphaTest.value=h.alphaTest)}function u(f,h){f.specular.value.copy(h.specular),f.shininess.value=Math.max(h.shininess,1e-4)}function d(f,h){h.gradientMap&&(f.gradientMap.value=h.gradientMap)}function p(f,h){f.metalness.value=h.metalness,h.metalnessMap&&(f.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,f.metalnessMapTransform)),f.roughness.value=h.roughness,h.roughnessMap&&(f.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,f.roughnessMapTransform)),e.get(h).envMap&&(f.envMapIntensity.value=h.envMapIntensity)}function m(f,h,M){f.ior.value=h.ior,h.sheen>0&&(f.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),f.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(f.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,f.sheenColorMapTransform)),h.sheenRoughnessMap&&(f.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,f.sheenRoughnessMapTransform))),h.clearcoat>0&&(f.clearcoat.value=h.clearcoat,f.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(f.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,f.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(f.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===Nt&&f.clearcoatNormalScale.value.negate())),h.iridescence>0&&(f.iridescence.value=h.iridescence,f.iridescenceIOR.value=h.iridescenceIOR,f.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(f.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,f.iridescenceMapTransform)),h.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),h.transmission>0&&(f.transmission.value=h.transmission,f.transmissionSamplerMap.value=M.texture,f.transmissionSamplerSize.value.set(M.width,M.height),h.transmissionMap&&(f.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,f.transmissionMapTransform)),f.thickness.value=h.thickness,h.thicknessMap&&(f.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=h.attenuationDistance,f.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(f.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(f.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=h.specularIntensity,f.specularColor.value.copy(h.specularColor),h.specularColorMap&&(f.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,f.specularColorMapTransform)),h.specularIntensityMap&&(f.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,f.specularIntensityMapTransform))}function _(f,h){h.matcap&&(f.matcap.value=h.matcap)}function x(f,h){const M=e.get(h).light;f.referencePosition.value.setFromMatrixPosition(M.matrixWorld),f.nearDistance.value=M.shadow.camera.near,f.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function pm(i,e,t,n){let s={},r={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,y){const E=y.program;n.uniformBlockBinding(M,E)}function c(M,y){let E=s[M.id];E===void 0&&(_(M),E=u(M),s[M.id]=E,M.addEventListener("dispose",f));const P=y.program;n.updateUBOMapping(M,P);const C=e.render.frame;r[M.id]!==C&&(p(M),r[M.id]=C)}function u(M){const y=d();M.__bindingPointIndex=y;const E=i.createBuffer(),P=M.__size,C=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,P,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,E),E}function d(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(M){const y=s[M.id],E=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let C=0,A=E.length;C<A;C++){const N=Array.isArray(E[C])?E[C]:[E[C]];for(let W=0,g=N.length;W<g;W++){const w=N[W];if(m(w,C,W,P)===!0){const k=w.__offset,q=Array.isArray(w.value)?w.value:[w.value];let I=0;for(let H=0;H<q.length;H++){const F=q[H],K=x(F);typeof F=="number"||typeof F=="boolean"?(w.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,k+I,w.__data)):F.isMatrix3?(w.__data[0]=F.elements[0],w.__data[1]=F.elements[1],w.__data[2]=F.elements[2],w.__data[3]=0,w.__data[4]=F.elements[3],w.__data[5]=F.elements[4],w.__data[6]=F.elements[5],w.__data[7]=0,w.__data[8]=F.elements[6],w.__data[9]=F.elements[7],w.__data[10]=F.elements[8],w.__data[11]=0):(F.toArray(w.__data,I),I+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,y,E,P){const C=M.value,A=y+"_"+E;if(P[A]===void 0)return typeof C=="number"||typeof C=="boolean"?P[A]=C:P[A]=C.clone(),!0;{const N=P[A];if(typeof C=="number"||typeof C=="boolean"){if(N!==C)return P[A]=C,!0}else if(N.equals(C)===!1)return N.copy(C),!0}return!1}function _(M){const y=M.uniforms;let E=0;const P=16;for(let A=0,N=y.length;A<N;A++){const W=Array.isArray(y[A])?y[A]:[y[A]];for(let g=0,w=W.length;g<w;g++){const k=W[g],q=Array.isArray(k.value)?k.value:[k.value];for(let I=0,H=q.length;I<H;I++){const F=q[I],K=x(F),X=E%P;X!==0&&P-X<K.boundary&&(E+=P-X),k.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=E,E+=K.storage}}}const C=E%P;return C>0&&(E+=P-C),M.__size=E,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function f(M){const y=M.target;y.removeEventListener("dispose",f);const E=a.indexOf(y.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function h(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:l,update:c,dispose:h}}class Hl{constructor(e={}){const{canvas:t=ou(),context:n=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let p;n!==null?p=n.getContextAttributes().alpha:p=a;const m=new Uint32Array(4),_=new Int32Array(4);let x=null,f=null;const h=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=Nn,this.toneMappingExposure=1;const y=this;let E=!1,P=0,C=0,A=null,N=-1,W=null;const g=new nt,w=new nt;let k=null;const q=new Be(0);let I=0,H=t.width,F=t.height,K=1,X=null,j=null;const Y=new nt(0,0,H,F),se=new nt(0,0,H,F);let oe=!1;const Re=new eo;let V=!1,Q=!1,he=null;const be=new ut,we=new Se,fe=new L,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ie(){return A===null?K:1}let U=n;function dt(S,D){for(let z=0;z<S.length;z++){const G=S[z],B=t.getContext(G,D);if(B!==null)return B}return null}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Yr}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",T,!1),t.addEventListener("webglcontextcreationerror",te,!1),U===null){const D=["webgl2","webgl","experimental-webgl"];if(y.isWebGL1Renderer===!0&&D.shift(),U=dt(D,S),U===null)throw dt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Me,Ce,ge,et,De,b,v,O,ne,$,ee,pe,ae,de,Te,Ue,Z,$e,Ge,Le,ve,ce,Oe,R;function ie(){Me=new Mf(U),Ce=new mf(U,Me,e),Me.init(Ce),ce=new om(U,Me,Ce),ge=new sm(U,Me,Ce),et=new bf(U),De=new Wp,b=new rm(U,Me,ge,De,Ce,ce,et),v=new _f(y),O=new yf(y),ne=new Pu(U,Ce),Oe=new ff(U,Me,ne,Ce),$=new Sf(U,ne,et,Oe),ee=new Rf(U,$,ne,et),Ge=new Af(U,Ce,b),Ue=new gf(De),pe=new Vp(y,v,O,Me,Ce,Oe,Ue),ae=new fm(y,De),de=new qp,Te=new Jp(Me,Ce),$e=new df(y,v,O,ge,ee,p,l),Z=new im(y,ee,Ce),R=new pm(U,et,Ce,ge),Le=new pf(U,Me,et,Ce),ve=new Ef(U,Me,et,Ce),et.programs=pe.programs,y.capabilities=Ce,y.extensions=Me,y.properties=De,y.renderLists=de,y.shadowMap=Z,y.state=ge,y.info=et}ie();const le=new dm(y,U);this.xr=le,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const S=Me.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Me.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(S){S!==void 0&&(K=S,this.setSize(H,F,!1))},this.getSize=function(S){return S.set(H,F)},this.setSize=function(S,D,z=!0){if(le.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=S,F=D,t.width=Math.floor(S*K),t.height=Math.floor(D*K),z===!0&&(t.style.width=S+"px",t.style.height=D+"px"),this.setViewport(0,0,S,D)},this.getDrawingBufferSize=function(S){return S.set(H*K,F*K).floor()},this.setDrawingBufferSize=function(S,D,z){H=S,F=D,K=z,t.width=Math.floor(S*z),t.height=Math.floor(D*z),this.setViewport(0,0,S,D)},this.getCurrentViewport=function(S){return S.copy(g)},this.getViewport=function(S){return S.copy(Y)},this.setViewport=function(S,D,z,G){S.isVector4?Y.set(S.x,S.y,S.z,S.w):Y.set(S,D,z,G),ge.viewport(g.copy(Y).multiplyScalar(K).floor())},this.getScissor=function(S){return S.copy(se)},this.setScissor=function(S,D,z,G){S.isVector4?se.set(S.x,S.y,S.z,S.w):se.set(S,D,z,G),ge.scissor(w.copy(se).multiplyScalar(K).floor())},this.getScissorTest=function(){return oe},this.setScissorTest=function(S){ge.setScissorTest(oe=S)},this.setOpaqueSort=function(S){X=S},this.setTransparentSort=function(S){j=S},this.getClearColor=function(S){return S.copy($e.getClearColor())},this.setClearColor=function(){$e.setClearColor.apply($e,arguments)},this.getClearAlpha=function(){return $e.getClearAlpha()},this.setClearAlpha=function(){$e.setClearAlpha.apply($e,arguments)},this.clear=function(S=!0,D=!0,z=!0){let G=0;if(S){let B=!1;if(A!==null){const ue=A.texture.format;B=ue===yl||ue===xl||ue===vl}if(B){const ue=A.texture.type,_e=ue===On||ue===In||ue===$r||ue===$n||ue===gl||ue===_l,Ae=$e.getClearColor(),Pe=$e.getClearAlpha(),He=Ae.r,Ne=Ae.g,Fe=Ae.b;_e?(m[0]=He,m[1]=Ne,m[2]=Fe,m[3]=Pe,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=He,_[1]=Ne,_[2]=Fe,_[3]=Pe,U.clearBufferiv(U.COLOR,0,_))}else G|=U.COLOR_BUFFER_BIT}D&&(G|=U.DEPTH_BUFFER_BIT),z&&(G|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",T,!1),t.removeEventListener("webglcontextcreationerror",te,!1),de.dispose(),Te.dispose(),De.dispose(),v.dispose(),O.dispose(),ee.dispose(),Oe.dispose(),R.dispose(),pe.dispose(),le.dispose(),le.removeEventListener("sessionstart",xt),le.removeEventListener("sessionend",Ke),he&&(he.dispose(),he=null),at.stop()};function xe(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function T(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const S=et.autoReset,D=Z.enabled,z=Z.autoUpdate,G=Z.needsUpdate,B=Z.type;ie(),et.autoReset=S,Z.enabled=D,Z.autoUpdate=z,Z.needsUpdate=G,Z.type=B}function te(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function J(S){const D=S.target;D.removeEventListener("dispose",J),me(D)}function me(S){Ee(S),De.remove(S)}function Ee(S){const D=De.get(S).programs;D!==void 0&&(D.forEach(function(z){pe.releaseProgram(z)}),S.isShaderMaterial&&pe.releaseShaderCache(S))}this.renderBufferDirect=function(S,D,z,G,B,ue){D===null&&(D=qe);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Ae=sc(S,D,z,G,B);ge.setMaterial(G,_e);let Pe=z.index,He=1;if(G.wireframe===!0){if(Pe=$.getWireframeAttribute(z),Pe===void 0)return;He=2}const Ne=z.drawRange,Fe=z.attributes.position;let lt=Ne.start*He,Bt=(Ne.start+Ne.count)*He;ue!==null&&(lt=Math.max(lt,ue.start*He),Bt=Math.min(Bt,(ue.start+ue.count)*He)),Pe!==null?(lt=Math.max(lt,0),Bt=Math.min(Bt,Pe.count)):Fe!=null&&(lt=Math.max(lt,0),Bt=Math.min(Bt,Fe.count));const gt=Bt-lt;if(gt<0||gt===1/0)return;Oe.setup(B,G,Ae,z,Pe);let dn,it=Le;if(Pe!==null&&(dn=ne.get(Pe),it=ve,it.setIndex(dn)),B.isMesh)G.wireframe===!0?(ge.setLineWidth(G.wireframeLinewidth*Ie()),it.setMode(U.LINES)):it.setMode(U.TRIANGLES);else if(B.isLine){let Ve=G.linewidth;Ve===void 0&&(Ve=1),ge.setLineWidth(Ve*Ie()),B.isLineSegments?it.setMode(U.LINES):B.isLineLoop?it.setMode(U.LINE_LOOP):it.setMode(U.LINE_STRIP)}else B.isPoints?it.setMode(U.POINTS):B.isSprite&&it.setMode(U.TRIANGLES);if(B.isBatchedMesh)it.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)it.renderInstances(lt,gt,B.count);else if(z.isInstancedBufferGeometry){const Ve=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,Ys=Math.min(z.instanceCount,Ve);it.renderInstances(lt,gt,Ys)}else it.render(lt,gt)};function Ye(S,D,z){S.transparent===!0&&S.side===on&&S.forceSinglePass===!1?(S.side=Nt,S.needsUpdate=!0,ts(S,D,z),S.side=Fn,S.needsUpdate=!0,ts(S,D,z),S.side=on):ts(S,D,z)}this.compile=function(S,D,z=null){z===null&&(z=S),f=Te.get(z),f.init(),M.push(f),z.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),S!==z&&S.traverseVisible(function(B){B.isLight&&B.layers.test(D.layers)&&(f.pushLight(B),B.castShadow&&f.pushShadow(B))}),f.setupLights(y._useLegacyLights);const G=new Set;return S.traverse(function(B){const ue=B.material;if(ue)if(Array.isArray(ue))for(let _e=0;_e<ue.length;_e++){const Ae=ue[_e];Ye(Ae,z,B),G.add(Ae)}else Ye(ue,z,B),G.add(ue)}),M.pop(),f=null,G},this.compileAsync=function(S,D,z=null){const G=this.compile(S,D,z);return new Promise(B=>{function ue(){if(G.forEach(function(_e){De.get(_e).currentProgram.isReady()&&G.delete(_e)}),G.size===0){B(S);return}setTimeout(ue,10)}Me.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Xe=null;function Qe(S){Xe&&Xe(S)}function xt(){at.stop()}function Ke(){at.start()}const at=new Ul;at.setAnimationLoop(Qe),typeof self<"u"&&at.setContext(self),this.setAnimationLoop=function(S){Xe=S,le.setAnimationLoop(S),S===null?at.stop():at.start()},le.addEventListener("sessionstart",xt),le.addEventListener("sessionend",Ke),this.render=function(S,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),le.enabled===!0&&le.isPresenting===!0&&(le.cameraAutoUpdate===!0&&le.updateCamera(D),D=le.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,D,A),f=Te.get(S,M.length),f.init(),M.push(f),be.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),Re.setFromProjectionMatrix(be),Q=this.localClippingEnabled,V=Ue.init(this.clippingPlanes,Q),x=de.get(S,h.length),x.init(),h.push(x),wt(S,D,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(X,j),this.info.render.frame++,V===!0&&Ue.beginShadows();const z=f.state.shadowsArray;if(Z.render(z,S,D),V===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(le.enabled===!1||le.isPresenting===!1||le.hasDepthSensing()===!1)&&$e.render(x,S),f.setupLights(y._useLegacyLights),D.isArrayCamera){const G=D.cameras;for(let B=0,ue=G.length;B<ue;B++){const _e=G[B];yo(x,S,_e,_e.viewport)}}else yo(x,S,D);A!==null&&(b.updateMultisampleRenderTarget(A),b.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,D),Oe.resetDefaultState(),N=-1,W=null,M.pop(),M.length>0?f=M[M.length-1]:f=null,h.pop(),h.length>0?x=h[h.length-1]:x=null};function wt(S,D,z,G){if(S.visible===!1)return;if(S.layers.test(D.layers)){if(S.isGroup)z=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(D);else if(S.isLight)f.pushLight(S),S.castShadow&&f.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Re.intersectsSprite(S)){G&&fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(be);const _e=ee.update(S),Ae=S.material;Ae.visible&&x.push(S,_e,Ae,z,fe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Re.intersectsObject(S))){const _e=ee.update(S),Ae=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),fe.copy(S.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),fe.copy(_e.boundingSphere.center)),fe.applyMatrix4(S.matrixWorld).applyMatrix4(be)),Array.isArray(Ae)){const Pe=_e.groups;for(let He=0,Ne=Pe.length;He<Ne;He++){const Fe=Pe[He],lt=Ae[Fe.materialIndex];lt&&lt.visible&&x.push(S,_e,lt,z,fe.z,Fe)}}else Ae.visible&&x.push(S,_e,Ae,z,fe.z,null)}}const ue=S.children;for(let _e=0,Ae=ue.length;_e<Ae;_e++)wt(ue[_e],D,z,G)}function yo(S,D,z,G){const B=S.opaque,ue=S.transmissive,_e=S.transparent;f.setupLightsView(z),V===!0&&Ue.setGlobalState(y.clippingPlanes,z),ue.length>0&&ic(B,ue,D,z),G&&ge.viewport(g.copy(G)),B.length>0&&es(B,D,z),ue.length>0&&es(ue,D,z),_e.length>0&&es(_e,D,z),ge.buffers.depth.setTest(!0),ge.buffers.depth.setMask(!0),ge.buffers.color.setMask(!0),ge.setPolygonOffset(!1)}function ic(S,D,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;const ue=Ce.isWebGL2;he===null&&(he=new ti(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Zi:On,minFilter:Yn,samples:ue?4:0})),y.getDrawingBufferSize(we),ue?he.setSize(we.x,we.y):he.setSize(Gr(we.x),Gr(we.y));const _e=y.getRenderTarget();y.setRenderTarget(he),y.getClearColor(q),I=y.getClearAlpha(),I<1&&y.setClearColor(16777215,.5),y.clear();const Ae=y.toneMapping;y.toneMapping=Nn,es(S,z,G),b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he);let Pe=!1;for(let He=0,Ne=D.length;He<Ne;He++){const Fe=D[He],lt=Fe.object,Bt=Fe.geometry,gt=Fe.material,dn=Fe.group;if(gt.side===on&&lt.layers.test(G.layers)){const it=gt.side;gt.side=Nt,gt.needsUpdate=!0,Mo(lt,z,G,Bt,gt,dn),gt.side=it,gt.needsUpdate=!0,Pe=!0}}Pe===!0&&(b.updateMultisampleRenderTarget(he),b.updateRenderTargetMipmap(he)),y.setRenderTarget(_e),y.setClearColor(q,I),y.toneMapping=Ae}function es(S,D,z){const G=D.isScene===!0?D.overrideMaterial:null;for(let B=0,ue=S.length;B<ue;B++){const _e=S[B],Ae=_e.object,Pe=_e.geometry,He=G===null?_e.material:G,Ne=_e.group;Ae.layers.test(z.layers)&&Mo(Ae,D,z,Pe,He,Ne)}}function Mo(S,D,z,G,B,ue){S.onBeforeRender(y,D,z,G,B,ue),S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),B.onBeforeRender(y,D,z,G,S,ue),B.transparent===!0&&B.side===on&&B.forceSinglePass===!1?(B.side=Nt,B.needsUpdate=!0,y.renderBufferDirect(z,D,G,B,S,ue),B.side=Fn,B.needsUpdate=!0,y.renderBufferDirect(z,D,G,B,S,ue),B.side=on):y.renderBufferDirect(z,D,G,B,S,ue),S.onAfterRender(y,D,z,G,B,ue)}function ts(S,D,z){D.isScene!==!0&&(D=qe);const G=De.get(S),B=f.state.lights,ue=f.state.shadowsArray,_e=B.state.version,Ae=pe.getParameters(S,B.state,ue,D,z),Pe=pe.getProgramCacheKey(Ae);let He=G.programs;G.environment=S.isMeshStandardMaterial?D.environment:null,G.fog=D.fog,G.envMap=(S.isMeshStandardMaterial?O:v).get(S.envMap||G.environment),He===void 0&&(S.addEventListener("dispose",J),He=new Map,G.programs=He);let Ne=He.get(Pe);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===_e)return Eo(S,Ae),Ne}else Ae.uniforms=pe.getUniforms(S),S.onBuild(z,Ae,y),S.onBeforeCompile(Ae,y),Ne=pe.acquireProgram(Ae,Pe),He.set(Pe,Ne),G.uniforms=Ae.uniforms;const Fe=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Fe.clippingPlanes=Ue.uniform),Eo(S,Ae),G.needsLights=oc(S),G.lightsStateVersion=_e,G.needsLights&&(Fe.ambientLightColor.value=B.state.ambient,Fe.lightProbe.value=B.state.probe,Fe.directionalLights.value=B.state.directional,Fe.directionalLightShadows.value=B.state.directionalShadow,Fe.spotLights.value=B.state.spot,Fe.spotLightShadows.value=B.state.spotShadow,Fe.rectAreaLights.value=B.state.rectArea,Fe.ltc_1.value=B.state.rectAreaLTC1,Fe.ltc_2.value=B.state.rectAreaLTC2,Fe.pointLights.value=B.state.point,Fe.pointLightShadows.value=B.state.pointShadow,Fe.hemisphereLights.value=B.state.hemi,Fe.directionalShadowMap.value=B.state.directionalShadowMap,Fe.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Fe.spotShadowMap.value=B.state.spotShadowMap,Fe.spotLightMatrix.value=B.state.spotLightMatrix,Fe.spotLightMap.value=B.state.spotLightMap,Fe.pointShadowMap.value=B.state.pointShadowMap,Fe.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function So(S){if(S.uniformsList===null){const D=S.currentProgram.getUniforms();S.uniformsList=As.seqWithValue(D.seq,S.uniforms)}return S.uniformsList}function Eo(S,D){const z=De.get(S);z.outputColorSpace=D.outputColorSpace,z.batching=D.batching,z.instancing=D.instancing,z.instancingColor=D.instancingColor,z.skinning=D.skinning,z.morphTargets=D.morphTargets,z.morphNormals=D.morphNormals,z.morphColors=D.morphColors,z.morphTargetsCount=D.morphTargetsCount,z.numClippingPlanes=D.numClippingPlanes,z.numIntersection=D.numClipIntersection,z.vertexAlphas=D.vertexAlphas,z.vertexTangents=D.vertexTangents,z.toneMapping=D.toneMapping}function sc(S,D,z,G,B){D.isScene!==!0&&(D=qe),b.resetTextureUnits();const ue=D.fog,_e=G.isMeshStandardMaterial?D.environment:null,Ae=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Mn,Pe=(G.isMeshStandardMaterial?O:v).get(G.envMap||_e),He=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ne=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Fe=!!z.morphAttributes.position,lt=!!z.morphAttributes.normal,Bt=!!z.morphAttributes.color;let gt=Nn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(gt=y.toneMapping);const dn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,it=dn!==void 0?dn.length:0,Ve=De.get(G),Ys=f.state.lights;if(V===!0&&(Q===!0||S!==W)){const Wt=S===W&&G.id===N;Ue.setState(G,S,Wt)}let rt=!1;G.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Ys.state.version||Ve.outputColorSpace!==Ae||B.isBatchedMesh&&Ve.batching===!1||!B.isBatchedMesh&&Ve.batching===!0||B.isInstancedMesh&&Ve.instancing===!1||!B.isInstancedMesh&&Ve.instancing===!0||B.isSkinnedMesh&&Ve.skinning===!1||!B.isSkinnedMesh&&Ve.skinning===!0||B.isInstancedMesh&&Ve.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ve.instancingColor===!1&&B.instanceColor!==null||Ve.envMap!==Pe||G.fog===!0&&Ve.fog!==ue||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Ue.numPlanes||Ve.numIntersection!==Ue.numIntersection)||Ve.vertexAlphas!==He||Ve.vertexTangents!==Ne||Ve.morphTargets!==Fe||Ve.morphNormals!==lt||Ve.morphColors!==Bt||Ve.toneMapping!==gt||Ce.isWebGL2===!0&&Ve.morphTargetsCount!==it)&&(rt=!0):(rt=!0,Ve.__version=G.version);let zn=Ve.currentProgram;rt===!0&&(zn=ts(G,D,B));let bo=!1,zi=!1,Ks=!1;const St=zn.getUniforms(),kn=Ve.uniforms;if(ge.useProgram(zn.program)&&(bo=!0,zi=!0,Ks=!0),G.id!==N&&(N=G.id,zi=!0),bo||W!==S){St.setValue(U,"projectionMatrix",S.projectionMatrix),St.setValue(U,"viewMatrix",S.matrixWorldInverse);const Wt=St.map.cameraPosition;Wt!==void 0&&Wt.setValue(U,fe.setFromMatrixPosition(S.matrixWorld)),Ce.logarithmicDepthBuffer&&St.setValue(U,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&St.setValue(U,"isOrthographic",S.isOrthographicCamera===!0),W!==S&&(W=S,zi=!0,Ks=!0)}if(B.isSkinnedMesh){St.setOptional(U,B,"bindMatrix"),St.setOptional(U,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Ce.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),St.setValue(U,"boneTexture",Wt.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(St.setOptional(U,B,"batchingTexture"),St.setValue(U,"batchingTexture",B._matricesTexture,b));const $s=z.morphAttributes;if(($s.position!==void 0||$s.normal!==void 0||$s.color!==void 0&&Ce.isWebGL2===!0)&&Ge.update(B,z,zn),(zi||Ve.receiveShadow!==B.receiveShadow)&&(Ve.receiveShadow=B.receiveShadow,St.setValue(U,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(kn.envMap.value=Pe,kn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),zi&&(St.setValue(U,"toneMappingExposure",y.toneMappingExposure),Ve.needsLights&&rc(kn,Ks),ue&&G.fog===!0&&ae.refreshFogUniforms(kn,ue),ae.refreshMaterialUniforms(kn,G,K,F,he),As.upload(U,So(Ve),kn,b)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(As.upload(U,So(Ve),kn,b),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&St.setValue(U,"center",B.center),St.setValue(U,"modelViewMatrix",B.modelViewMatrix),St.setValue(U,"normalMatrix",B.normalMatrix),St.setValue(U,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Wt=G.uniformsGroups;for(let Zs=0,ac=Wt.length;Zs<ac;Zs++)if(Ce.isWebGL2){const To=Wt[Zs];R.update(To,zn),R.bind(To,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function rc(S,D){S.ambientLightColor.needsUpdate=D,S.lightProbe.needsUpdate=D,S.directionalLights.needsUpdate=D,S.directionalLightShadows.needsUpdate=D,S.pointLights.needsUpdate=D,S.pointLightShadows.needsUpdate=D,S.spotLights.needsUpdate=D,S.spotLightShadows.needsUpdate=D,S.rectAreaLights.needsUpdate=D,S.hemisphereLights.needsUpdate=D}function oc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,D,z){De.get(S.texture).__webglTexture=D,De.get(S.depthTexture).__webglTexture=z;const G=De.get(S);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(S,D){const z=De.get(S);z.__webglFramebuffer=D,z.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(S,D=0,z=0){A=S,P=D,C=z;let G=!0,B=null,ue=!1,_e=!1;if(S){const Pe=De.get(S);Pe.__useDefaultFramebuffer!==void 0?(ge.bindFramebuffer(U.FRAMEBUFFER,null),G=!1):Pe.__webglFramebuffer===void 0?b.setupRenderTarget(S):Pe.__hasExternalTextures&&b.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);const He=S.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(_e=!0);const Ne=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[D])?B=Ne[D][z]:B=Ne[D],ue=!0):Ce.isWebGL2&&S.samples>0&&b.useMultisampledRTT(S)===!1?B=De.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?B=Ne[z]:B=Ne,g.copy(S.viewport),w.copy(S.scissor),k=S.scissorTest}else g.copy(Y).multiplyScalar(K).floor(),w.copy(se).multiplyScalar(K).floor(),k=oe;if(ge.bindFramebuffer(U.FRAMEBUFFER,B)&&Ce.drawBuffers&&G&&ge.drawBuffers(S,B),ge.viewport(g),ge.scissor(w),ge.setScissorTest(k),ue){const Pe=De.get(S.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+D,Pe.__webglTexture,z)}else if(_e){const Pe=De.get(S.texture),He=D||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pe.__webglTexture,z||0,He)}N=-1},this.readRenderTargetPixels=function(S,D,z,G,B,ue,_e){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&_e!==void 0&&(Ae=Ae[_e]),Ae){ge.bindFramebuffer(U.FRAMEBUFFER,Ae);try{const Pe=S.texture,He=Pe.format,Ne=Pe.type;if(He!==tn&&ce.convert(He)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Fe=Ne===Zi&&(Me.has("EXT_color_buffer_half_float")||Ce.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Ne!==On&&ce.convert(Ne)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===xn&&(Ce.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Fe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=S.width-G&&z>=0&&z<=S.height-B&&U.readPixels(D,z,G,B,ce.convert(He),ce.convert(Ne),ue)}finally{const Pe=A!==null?De.get(A).__webglFramebuffer:null;ge.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(S,D,z=0){const G=Math.pow(2,-z),B=Math.floor(D.image.width*G),ue=Math.floor(D.image.height*G);b.setTexture2D(D,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,S.x,S.y,B,ue),ge.unbindTexture()},this.copyTextureToTexture=function(S,D,z,G=0){const B=D.image.width,ue=D.image.height,_e=ce.convert(z.format),Ae=ce.convert(z.type);b.setTexture2D(z,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment),D.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,G,S.x,S.y,B,ue,_e,Ae,D.image.data):D.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,G,S.x,S.y,D.mipmaps[0].width,D.mipmaps[0].height,_e,D.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,G,S.x,S.y,_e,Ae,D.image),G===0&&z.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),ge.unbindTexture()},this.copyTextureToTexture3D=function(S,D,z,G,B=0){if(y.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ue=S.max.x-S.min.x+1,_e=S.max.y-S.min.y+1,Ae=S.max.z-S.min.z+1,Pe=ce.convert(G.format),He=ce.convert(G.type);let Ne;if(G.isData3DTexture)b.setTexture3D(G,0),Ne=U.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)b.setTexture2DArray(G,0),Ne=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,G.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,G.unpackAlignment);const Fe=U.getParameter(U.UNPACK_ROW_LENGTH),lt=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Bt=U.getParameter(U.UNPACK_SKIP_PIXELS),gt=U.getParameter(U.UNPACK_SKIP_ROWS),dn=U.getParameter(U.UNPACK_SKIP_IMAGES),it=z.isCompressedTexture?z.mipmaps[B]:z.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,it.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,S.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,S.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,S.min.z),z.isDataTexture||z.isData3DTexture?U.texSubImage3D(Ne,B,D.x,D.y,D.z,ue,_e,Ae,Pe,He,it.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Ne,B,D.x,D.y,D.z,ue,_e,Ae,Pe,it.data)):U.texSubImage3D(Ne,B,D.x,D.y,D.z,ue,_e,Ae,Pe,He,it),U.pixelStorei(U.UNPACK_ROW_LENGTH,Fe),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Bt),U.pixelStorei(U.UNPACK_SKIP_ROWS,gt),U.pixelStorei(U.UNPACK_SKIP_IMAGES,dn),B===0&&G.generateMipmaps&&U.generateMipmap(Ne),ge.unbindTexture()},this.initTexture=function(S){S.isCubeTexture?b.setTextureCube(S,0):S.isData3DTexture?b.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?b.setTexture2DArray(S,0):b.setTexture2D(S,0),ge.unbindTexture()},this.resetState=function(){P=0,C=0,A=null,ge.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Jr?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===ks?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Jn:Sl}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Jn?yt:Mn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class mm extends Hl{}mm.prototype.isWebGL1Renderer=!0;class no{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Be(e),this.near=t,this.far=n}clone(){return new no(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class gm extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class _m extends ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ja=new ut,Vr=new Hs,Es=new Gs,bs=new L;class vm extends Mt{constructor(e=new Ft,t=new _m){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Es.copy(n.boundingSphere),Es.applyMatrix4(s),Es.radius+=r,e.ray.intersectsSphere(Es)===!1)return;ja.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(ja);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=p,x=m;_<x;_++){const f=c.getX(_);bs.fromBufferAttribute(d,f),Ya(bs,f,l,s,e,t,this)}}else{const p=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=p,x=m;_<x;_++)bs.fromBufferAttribute(d,_),Ya(bs,_,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Ya(i,e,t,n,s,r,a){const o=Vr.distanceSqToPoint(i);if(o<t){const l=new L;Vr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class io extends Ft{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],d=[],p=[],m=[];let _=0;const x=[],f=n/2;let h=0;M(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new ot(d,3)),this.setAttribute("normal",new ot(p,3)),this.setAttribute("uv",new ot(m,2));function M(){const E=new L,P=new L;let C=0;const A=(t-e)/n;for(let N=0;N<=r;N++){const W=[],g=N/r,w=g*(t-e)+e;for(let k=0;k<=s;k++){const q=k/s,I=q*l+o,H=Math.sin(I),F=Math.cos(I);P.x=w*H,P.y=-g*n+f,P.z=w*F,d.push(P.x,P.y,P.z),E.set(H,A,F).normalize(),p.push(E.x,E.y,E.z),m.push(q,1-g),W.push(_++)}x.push(W)}for(let N=0;N<s;N++)for(let W=0;W<r;W++){const g=x[W][N],w=x[W+1][N],k=x[W+1][N+1],q=x[W][N+1];u.push(g,w,q),u.push(w,k,q),C+=6}c.addGroup(h,C,0),h+=C}function y(E){const P=_,C=new Se,A=new L;let N=0;const W=E===!0?e:t,g=E===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,f*g,0),p.push(0,g,0),m.push(.5,.5),_++;const w=_;for(let k=0;k<=s;k++){const I=k/s*l+o,H=Math.cos(I),F=Math.sin(I);A.x=W*F,A.y=f*g,A.z=W*H,d.push(A.x,A.y,A.z),p.push(0,g,0),C.x=H*.5+.5,C.y=F*.5*g+.5,m.push(C.x,C.y),_++}for(let k=0;k<s;k++){const q=P+k,I=w+k;E===!0?u.push(I,I+1,q):u.push(I+1,I,q),N+=3}c.addGroup(h,N,E===!0?1:2),h+=N}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class so extends Ft{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),c(n),u(),this.setAttribute("position",new ot(r,3)),this.setAttribute("normal",new ot(r.slice(),3)),this.setAttribute("uv",new ot(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const y=new L,E=new L,P=new L;for(let C=0;C<t.length;C+=3)m(t[C+0],y),m(t[C+1],E),m(t[C+2],P),l(y,E,P,M)}function l(M,y,E,P){const C=P+1,A=[];for(let N=0;N<=C;N++){A[N]=[];const W=M.clone().lerp(E,N/C),g=y.clone().lerp(E,N/C),w=C-N;for(let k=0;k<=w;k++)k===0&&N===C?A[N][k]=W:A[N][k]=W.clone().lerp(g,k/w)}for(let N=0;N<C;N++)for(let W=0;W<2*(C-N)-1;W++){const g=Math.floor(W/2);W%2===0?(p(A[N][g+1]),p(A[N+1][g]),p(A[N][g])):(p(A[N][g+1]),p(A[N+1][g+1]),p(A[N+1][g]))}}function c(M){const y=new L;for(let E=0;E<r.length;E+=3)y.x=r[E+0],y.y=r[E+1],y.z=r[E+2],y.normalize().multiplyScalar(M),r[E+0]=y.x,r[E+1]=y.y,r[E+2]=y.z}function u(){const M=new L;for(let y=0;y<r.length;y+=3){M.x=r[y+0],M.y=r[y+1],M.z=r[y+2];const E=f(M)/2/Math.PI+.5,P=h(M)/Math.PI+.5;a.push(E,1-P)}_(),d()}function d(){for(let M=0;M<a.length;M+=6){const y=a[M+0],E=a[M+2],P=a[M+4],C=Math.max(y,E,P),A=Math.min(y,E,P);C>.9&&A<.1&&(y<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),P<.2&&(a[M+4]+=1))}}function p(M){r.push(M.x,M.y,M.z)}function m(M,y){const E=M*3;y.x=e[E+0],y.y=e[E+1],y.z=e[E+2]}function _(){const M=new L,y=new L,E=new L,P=new L,C=new Se,A=new Se,N=new Se;for(let W=0,g=0;W<r.length;W+=9,g+=6){M.set(r[W+0],r[W+1],r[W+2]),y.set(r[W+3],r[W+4],r[W+5]),E.set(r[W+6],r[W+7],r[W+8]),C.set(a[g+0],a[g+1]),A.set(a[g+2],a[g+3]),N.set(a[g+4],a[g+5]),P.copy(M).add(y).add(E).divideScalar(3);const w=f(P);x(C,g+0,M,w),x(A,g+2,y,w),x(N,g+4,E,w)}}function x(M,y,E,P){P<0&&M.x===1&&(a[y]=M.x-1),E.x===0&&E.z===0&&(a[y]=P/2/Math.PI+.5)}function f(M){return Math.atan2(M.z,-M.x)}function h(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new so(e.vertices,e.indices,e.radius,e.details)}}class ro extends so{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new ro(e.radius,e.detail)}}class oo extends Ft{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);const o=[],l=[],c=[],u=[];let d=e;const p=(t-e)/s,m=new L,_=new Se;for(let x=0;x<=s;x++){for(let f=0;f<=n;f++){const h=r+f/n*a;m.x=d*Math.cos(h),m.y=d*Math.sin(h),l.push(m.x,m.y,m.z),c.push(0,0,1),_.x=(m.x/t+1)/2,_.y=(m.y/t+1)/2,u.push(_.x,_.y)}d+=p}for(let x=0;x<s;x++){const f=x*(n+1);for(let h=0;h<n;h++){const M=h+f,y=M,E=M+n+1,P=M+n+2,C=M+1;o.push(y,E,C),o.push(E,P,C)}}this.setIndex(o),this.setAttribute("position",new ot(l,3)),this.setAttribute("normal",new ot(c,3)),this.setAttribute("uv",new ot(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oo(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Rt extends Ft{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new L,p=new L,m=[],_=[],x=[],f=[];for(let h=0;h<=n;h++){const M=[],y=h/n;let E=0;h===0&&a===0?E=.5/t:h===n&&l===Math.PI&&(E=-.5/t);for(let P=0;P<=t;P++){const C=P/t;d.x=-e*Math.cos(s+C*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(s+C*r)*Math.sin(a+y*o),_.push(d.x,d.y,d.z),p.copy(d).normalize(),x.push(p.x,p.y,p.z),f.push(C+E,1-y),M.push(c++)}u.push(M)}for(let h=0;h<n;h++)for(let M=0;M<t;M++){const y=u[h][M+1],E=u[h][M],P=u[h+1][M],C=u[h+1][M+1];(h!==0||a>0)&&m.push(y,E,C),(h!==n-1||l<Math.PI)&&m.push(E,P,C)}this.setIndex(m),this.setAttribute("position",new ot(_,3)),this.setAttribute("normal",new ot(x,3)),this.setAttribute("uv",new ot(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rt(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ao extends Ft{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const a=[],o=[],l=[],c=[],u=new L,d=new L,p=new L;for(let m=0;m<=n;m++)for(let _=0;_<=s;_++){const x=_/s*r,f=m/n*Math.PI*2;d.x=(e+t*Math.cos(f))*Math.cos(x),d.y=(e+t*Math.cos(f))*Math.sin(x),d.z=t*Math.sin(f),o.push(d.x,d.y,d.z),u.x=e*Math.cos(x),u.y=e*Math.sin(x),p.subVectors(d,u).normalize(),l.push(p.x,p.y,p.z),c.push(_/s),c.push(m/n)}for(let m=1;m<=n;m++)for(let _=1;_<=s;_++){const x=(s+1)*m+_-1,f=(s+1)*(m-1)+_-1,h=(s+1)*(m-1)+_,M=(s+1)*m+_;a.push(x,f,M),a.push(f,h,M)}this.setIndex(a),this.setAttribute("position",new ot(o,3)),this.setAttribute("normal",new ot(l,3)),this.setAttribute("uv",new ot(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ao(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class En extends ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xm extends En{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Se(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class qi extends ai{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Be(16777215),this.specular=new Be(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zr,this.normalScale=new Se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lo extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rr=new ut,Ka=new L,$a=new L;class Vl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Se(512,512),this.map=null,this.mapPass=null,this.matrix=new ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new eo,this._frameExtents=new Se(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ka),$a.setFromMatrixPosition(e.target.matrixWorld),t.lookAt($a),t.updateMatrixWorld(),Rr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Rr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Za=new ut,ji=new L,Cr=new L;class ym extends Vl{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Se(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ji.setFromMatrixPosition(e.matrixWorld),n.position.copy(ji),Cr.copy(n.position),Cr.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Cr),n.updateMatrixWorld(),s.makeTranslation(-ji.x,-ji.y,-ji.z),Za.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Za)}}class Wl extends lo{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ym}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Mm extends Vl{constructor(){super(new Nl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xl extends lo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new Mm}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ql extends lo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Sm{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ja(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ja();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ja(){return(typeof performance>"u"?Date:performance).now()}class Em{constructor(e,t,n=0,s=1/0){this.ray=new Hs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Qr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return Wr(e,this,n,t),n.sort(Qa),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Wr(e[s],this,n,t);return n.sort(Qa),n}}function Qa(i,e){return i.distance-e.distance}function Wr(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,a=s.length;r<a;r++)Wr(s[r],e,t,!0)}}class el{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Yr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Yr);const tl={type:"change"},Lr={type:"start"},nl={type:"end"},Ts=new Hs,il=new Pn,bm=Math.cos(70*ru.DEG2RAD);class Tm extends oi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:li.ROTATE,MIDDLE:li.DOLLY,RIGHT:li.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Te),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(tl),n.update(),r=s.NONE},this.update=function(){const R=new L,ie=new ni().setFromUnitVectors(e.up,new L(0,1,0)),le=ie.clone().invert(),xe=new L,T=new ni,te=new L,J=2*Math.PI;return function(Ee=null){const Ye=n.object.position;R.copy(Ye).sub(n.target),R.applyQuaternion(ie),o.setFromVector3(R),n.autoRotate&&r===s.NONE&&k(g(Ee)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let Xe=n.minAzimuthAngle,Qe=n.maxAzimuthAngle;isFinite(Xe)&&isFinite(Qe)&&(Xe<-Math.PI?Xe+=J:Xe>Math.PI&&(Xe-=J),Qe<-Math.PI?Qe+=J:Qe>Math.PI&&(Qe-=J),Xe<=Qe?o.theta=Math.max(Xe,Math.min(Qe,o.theta)):o.theta=o.theta>(Xe+Qe)/2?Math.max(Xe,o.theta):Math.min(Qe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.target.sub(n.cursor),n.target.clampLength(n.minTargetRadius,n.maxTargetRadius),n.target.add(n.cursor),n.zoomToCursor&&C||n.object.isOrthographicCamera?o.radius=Y(o.radius):o.radius=Y(o.radius*c),R.setFromSpherical(o),R.applyQuaternion(le),Ye.copy(n.target).add(R),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let xt=!1;if(n.zoomToCursor&&C){let Ke=null;if(n.object.isPerspectiveCamera){const at=R.length();Ke=Y(at*c);const wt=at-Ke;n.object.position.addScaledVector(E,wt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const at=new L(P.x,P.y,0);at.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),xt=!0;const wt=new L(P.x,P.y,0);wt.unproject(n.object),n.object.position.sub(wt).add(at),n.object.updateMatrixWorld(),Ke=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ke!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ke).add(n.object.position):(Ts.origin.copy(n.object.position),Ts.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Ts.direction))<bm?e.lookAt(n.target):(il.setFromNormalAndCoplanarPoint(n.object.up,n.target),Ts.intersectPlane(il,n.target))))}else n.object.isOrthographicCamera&&(xt=c!==1,xt&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix()));return c=1,C=!1,xt||xe.distanceToSquared(n.object.position)>a||8*(1-T.dot(n.object.quaternion))>a||te.distanceToSquared(n.target)>0?(n.dispatchEvent(tl),xe.copy(n.object.position),T.copy(n.object.quaternion),te.copy(n.target),!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$e),n.domElement.removeEventListener("pointerdown",b),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",ee),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",O),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Te),n._domElementKeyEvents=null)};const n=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const a=1e-6,o=new el,l=new el;let c=1;const u=new L,d=new Se,p=new Se,m=new Se,_=new Se,x=new Se,f=new Se,h=new Se,M=new Se,y=new Se,E=new L,P=new Se;let C=!1;const A=[],N={};let W=!1;function g(R){return R!==null?2*Math.PI/60*n.autoRotateSpeed*R:2*Math.PI/60/60*n.autoRotateSpeed}function w(R){const ie=Math.abs(R*.01);return Math.pow(.95,n.zoomSpeed*ie)}function k(R){l.theta-=R}function q(R){l.phi-=R}const I=function(){const R=new L;return function(le,xe){R.setFromMatrixColumn(xe,0),R.multiplyScalar(-le),u.add(R)}}(),H=function(){const R=new L;return function(le,xe){n.screenSpacePanning===!0?R.setFromMatrixColumn(xe,1):(R.setFromMatrixColumn(xe,0),R.crossVectors(n.object.up,R)),R.multiplyScalar(le),u.add(R)}}(),F=function(){const R=new L;return function(le,xe){const T=n.domElement;if(n.object.isPerspectiveCamera){const te=n.object.position;R.copy(te).sub(n.target);let J=R.length();J*=Math.tan(n.object.fov/2*Math.PI/180),I(2*le*J/T.clientHeight,n.object.matrix),H(2*xe*J/T.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(le*(n.object.right-n.object.left)/n.object.zoom/T.clientWidth,n.object.matrix),H(xe*(n.object.top-n.object.bottom)/n.object.zoom/T.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function K(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function X(R){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(R,ie){if(!n.zoomToCursor)return;C=!0;const le=n.domElement.getBoundingClientRect(),xe=R-le.left,T=ie-le.top,te=le.width,J=le.height;P.x=xe/te*2-1,P.y=-(T/J)*2+1,E.set(P.x,P.y,1).unproject(n.object).sub(n.object.position).normalize()}function Y(R){return Math.max(n.minDistance,Math.min(n.maxDistance,R))}function se(R){d.set(R.clientX,R.clientY)}function oe(R){j(R.clientX,R.clientX),h.set(R.clientX,R.clientY)}function Re(R){_.set(R.clientX,R.clientY)}function V(R){p.set(R.clientX,R.clientY),m.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;k(2*Math.PI*m.x/ie.clientHeight),q(2*Math.PI*m.y/ie.clientHeight),d.copy(p),n.update()}function Q(R){M.set(R.clientX,R.clientY),y.subVectors(M,h),y.y>0?K(w(y.y)):y.y<0&&X(w(y.y)),h.copy(M),n.update()}function he(R){x.set(R.clientX,R.clientY),f.subVectors(x,_).multiplyScalar(n.panSpeed),F(f.x,f.y),_.copy(x),n.update()}function be(R){j(R.clientX,R.clientY),R.deltaY<0?X(w(R.deltaY)):R.deltaY>0&&K(w(R.deltaY)),n.update()}function we(R){let ie=!1;switch(R.code){case n.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),ie=!0;break;case n.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),ie=!0;break;case n.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),ie=!0;break;case n.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),ie=!0;break}ie&&(R.preventDefault(),n.update())}function fe(R){if(A.length===1)d.set(R.pageX,R.pageY);else{const ie=ce(R),le=.5*(R.pageX+ie.x),xe=.5*(R.pageY+ie.y);d.set(le,xe)}}function qe(R){if(A.length===1)_.set(R.pageX,R.pageY);else{const ie=ce(R),le=.5*(R.pageX+ie.x),xe=.5*(R.pageY+ie.y);_.set(le,xe)}}function Ie(R){const ie=ce(R),le=R.pageX-ie.x,xe=R.pageY-ie.y,T=Math.sqrt(le*le+xe*xe);h.set(0,T)}function U(R){n.enableZoom&&Ie(R),n.enablePan&&qe(R)}function dt(R){n.enableZoom&&Ie(R),n.enableRotate&&fe(R)}function Me(R){if(A.length==1)p.set(R.pageX,R.pageY);else{const le=ce(R),xe=.5*(R.pageX+le.x),T=.5*(R.pageY+le.y);p.set(xe,T)}m.subVectors(p,d).multiplyScalar(n.rotateSpeed);const ie=n.domElement;k(2*Math.PI*m.x/ie.clientHeight),q(2*Math.PI*m.y/ie.clientHeight),d.copy(p)}function Ce(R){if(A.length===1)x.set(R.pageX,R.pageY);else{const ie=ce(R),le=.5*(R.pageX+ie.x),xe=.5*(R.pageY+ie.y);x.set(le,xe)}f.subVectors(x,_).multiplyScalar(n.panSpeed),F(f.x,f.y),_.copy(x)}function ge(R){const ie=ce(R),le=R.pageX-ie.x,xe=R.pageY-ie.y,T=Math.sqrt(le*le+xe*xe);M.set(0,T),y.set(0,Math.pow(M.y/h.y,n.zoomSpeed)),K(y.y),h.copy(M);const te=(R.pageX+ie.x)*.5,J=(R.pageY+ie.y)*.5;j(te,J)}function et(R){n.enableZoom&&ge(R),n.enablePan&&Ce(R)}function De(R){n.enableZoom&&ge(R),n.enableRotate&&Me(R)}function b(R){n.enabled!==!1&&(A.length===0&&(n.domElement.setPointerCapture(R.pointerId),n.domElement.addEventListener("pointermove",v),n.domElement.addEventListener("pointerup",O)),Ge(R),R.pointerType==="touch"?Ue(R):ne(R))}function v(R){n.enabled!==!1&&(R.pointerType==="touch"?Z(R):$(R))}function O(R){switch(Le(R),A.length){case 0:n.domElement.releasePointerCapture(R.pointerId),n.domElement.removeEventListener("pointermove",v),n.domElement.removeEventListener("pointerup",O),n.dispatchEvent(nl),r=s.NONE;break;case 1:const ie=A[0],le=N[ie];Ue({pointerId:ie,pageX:le.x,pageY:le.y});break}}function ne(R){let ie;switch(R.button){case 0:ie=n.mouseButtons.LEFT;break;case 1:ie=n.mouseButtons.MIDDLE;break;case 2:ie=n.mouseButtons.RIGHT;break;default:ie=-1}switch(ie){case li.DOLLY:if(n.enableZoom===!1)return;oe(R),r=s.DOLLY;break;case li.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enablePan===!1)return;Re(R),r=s.PAN}else{if(n.enableRotate===!1)return;se(R),r=s.ROTATE}break;case li.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(n.enableRotate===!1)return;se(R),r=s.ROTATE}else{if(n.enablePan===!1)return;Re(R),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Lr)}function $(R){switch(r){case s.ROTATE:if(n.enableRotate===!1)return;V(R);break;case s.DOLLY:if(n.enableZoom===!1)return;Q(R);break;case s.PAN:if(n.enablePan===!1)return;he(R);break}}function ee(R){n.enabled===!1||n.enableZoom===!1||r!==s.NONE||(R.preventDefault(),n.dispatchEvent(Lr),be(pe(R)),n.dispatchEvent(nl))}function pe(R){const ie=R.deltaMode,le={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ie){case 1:le.deltaY*=16;break;case 2:le.deltaY*=100;break}return R.ctrlKey&&!W&&(le.deltaY*=10),le}function ae(R){R.key==="Control"&&(W=!0,n.domElement.getRootNode().addEventListener("keyup",de,{passive:!0,capture:!0}))}function de(R){R.key==="Control"&&(W=!1,n.domElement.getRootNode().removeEventListener("keyup",de,{passive:!0,capture:!0}))}function Te(R){n.enabled===!1||n.enablePan===!1||we(R)}function Ue(R){switch(ve(R),A.length){case 1:switch(n.touches.ONE){case ci.ROTATE:if(n.enableRotate===!1)return;fe(R),r=s.TOUCH_ROTATE;break;case ci.PAN:if(n.enablePan===!1)return;qe(R),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(n.touches.TWO){case ci.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;U(R),r=s.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;dt(R),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&n.dispatchEvent(Lr)}function Z(R){switch(ve(R),r){case s.TOUCH_ROTATE:if(n.enableRotate===!1)return;Me(R),n.update();break;case s.TOUCH_PAN:if(n.enablePan===!1)return;Ce(R),n.update();break;case s.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;et(R),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;De(R),n.update();break;default:r=s.NONE}}function $e(R){n.enabled!==!1&&R.preventDefault()}function Ge(R){A.push(R.pointerId)}function Le(R){delete N[R.pointerId];for(let ie=0;ie<A.length;ie++)if(A[ie]==R.pointerId){A.splice(ie,1);return}}function ve(R){let ie=N[R.pointerId];ie===void 0&&(ie=new Se,N[R.pointerId]=ie),ie.set(R.pageX,R.pageY)}function ce(R){const ie=R.pointerId===A[0]?A[1]:A[0];return N[ie]}n.domElement.addEventListener("contextmenu",$e),n.domElement.addEventListener("pointerdown",b),n.domElement.addEventListener("pointercancel",O),n.domElement.addEventListener("wheel",ee,{passive:!1}),n.domElement.getRootNode().addEventListener("keydown",ae,{passive:!0,capture:!0}),this.update()}}class wm{constructor(){this._listeners=new Map}on(e,t){return this._listeners.has(e)||this._listeners.set(e,new Set),this._listeners.get(e).add(t),()=>this.off(e,t)}once(e,t){const n=(...s)=>{this.off(e,n),t(...s)};return this.on(e,n)}off(e,t){const n=this._listeners.get(e);n&&(n.delete(t),n.size===0&&this._listeners.delete(e))}emit(e,t){const n=this._listeners.get(e);if(n)for(const s of[...n])try{s(t)}catch(r){console.error(`EventBus: Error in handler for '${e}':`,r)}}clear(e){e?this._listeners.delete(e):this._listeners.clear()}}const ye=new wm,sl=[{id:1,name:"Tutorial 1",gridSize:8,fruitTypes:4,mode:"score",objective:{type:"score",target:700},moves:30,timeLimit:null,stars:[700,1050,1400],obstacles:[],unlockRequirement:null},{id:2,name:"Tutorial 2",gridSize:8,fruitTypes:4,mode:"score",objective:{type:"score",target:900},moves:29,timeLimit:null,stars:[900,1350,1800],obstacles:[],unlockRequirement:1},{id:3,name:"Tutorial 3",gridSize:8,fruitTypes:4,mode:"score",objective:{type:"score",target:1100},moves:29,timeLimit:null,stars:[1100,1650,2200],obstacles:[],unlockRequirement:2},{id:4,name:"Tutorial 4",gridSize:8,fruitTypes:4,mode:"score",objective:{type:"score",target:1300},moves:28,timeLimit:null,stars:[1300,1950,2600],obstacles:[],unlockRequirement:3},{id:5,name:"Tutorial 5",gridSize:8,fruitTypes:4,mode:"score",objective:{type:"score",target:1500},moves:28,timeLimit:null,stars:[1500,2250,3e3],obstacles:[],unlockRequirement:4},{id:6,name:"Tutorial 6",gridSize:8,fruitTypes:5,mode:"score",objective:{type:"score",target:1700},moves:27,timeLimit:null,stars:[1700,2550,3400],obstacles:[],unlockRequirement:5},{id:7,name:"Tutorial 7",gridSize:8,fruitTypes:5,mode:"score",objective:{type:"score",target:1900},moves:27,timeLimit:null,stars:[1900,2850,3800],obstacles:[],unlockRequirement:6},{id:8,name:"Tutorial 8",gridSize:8,fruitTypes:5,mode:"score",objective:{type:"score",target:2100},moves:26,timeLimit:null,stars:[2100,3150,4200],obstacles:[],unlockRequirement:7},{id:9,name:"Tutorial 9",gridSize:8,fruitTypes:5,mode:"score",objective:{type:"score",target:2300},moves:26,timeLimit:null,stars:[2300,3450,4600],obstacles:[],unlockRequirement:8},{id:10,name:"Tutorial 10",gridSize:8,fruitTypes:5,mode:"score",objective:{type:"score",target:2500},moves:25,timeLimit:null,stars:[2500,3750,5e3],obstacles:[],unlockRequirement:9},{id:11,name:"Frosty Fields 1",gridSize:8,fruitTypes:5,mode:"clearIce",objective:{type:"clearIce",target:1},moves:25,timeLimit:null,stars:[3100,4650,6200],obstacles:[{type:"ICE",row:2,col:4}],unlockRequirement:10},{id:12,name:"Frosty Fields 2",gridSize:8,fruitTypes:5,mode:"collect",objective:{type:"collect",target:12,fruitType:"apple"},moves:24,timeLimit:null,stars:[3200,4800,6400],obstacles:[{type:"ICE",row:5,col:2},{type:"ICE",row:5,col:0}],unlockRequirement:11},{id:13,name:"Frosty Fields 3",gridSize:8,fruitTypes:5,mode:"clearIce",objective:{type:"clearIce",target:3},moves:24,timeLimit:null,stars:[3300,4950,6600],obstacles:[{type:"ICE",row:3,col:1},{type:"ICE",row:0,col:1},{type:"ICE",row:2,col:6}],unlockRequirement:12},{id:14,name:"Frosty Fields 4",gridSize:8,fruitTypes:5,mode:"collect",objective:{type:"collect",target:14,fruitType:"apple"},moves:23,timeLimit:null,stars:[3400,5100,6800],obstacles:[{type:"ICE",row:6,col:7},{type:"ICE",row:7,col:1},{type:"ICE",row:0,col:6},{type:"ICE",row:1,col:4}],unlockRequirement:13},{id:15,name:"Frosty Fields 5",gridSize:8,fruitTypes:5,mode:"clearIce",objective:{type:"clearIce",target:5},moves:23,timeLimit:null,stars:[3500,5250,7e3],obstacles:[{type:"ICE",row:4,col:5},{type:"ICE",row:4,col:0},{type:"ICE",row:1,col:5},{type:"ICE",row:3,col:6},{type:"ICE",row:2,col:0}],unlockRequirement:14},{id:16,name:"Frosty Fields 6",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:16,fruitType:"apple"},moves:22,timeLimit:null,stars:[3600,5400,7200],obstacles:[{type:"ICE",row:2,col:1},{type:"ICE",row:2,col:7},{type:"ICE",row:4,col:2},{type:"ICE",row:6,col:2},{type:"ICE",row:5,col:3},{type:"ICE",row:7,col:7}],unlockRequirement:15},{id:17,name:"Frosty Fields 7",gridSize:8,fruitTypes:6,mode:"clearIce",objective:{type:"clearIce",target:7},moves:22,timeLimit:null,stars:[3700,5550,7400],obstacles:[{type:"ICE",row:2,col:4},{type:"ICE",row:6,col:1},{type:"ICE",row:7,col:7},{type:"ICE",row:6,col:5},{type:"ICE",row:7,col:1},{type:"ICE",row:2,col:7}],unlockRequirement:16},{id:18,name:"Frosty Fields 8",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:18,fruitType:"apple"},moves:21,timeLimit:null,stars:[3800,5700,7600],obstacles:[{type:"ICE",row:0,col:4},{type:"ICE",row:3,col:4},{type:"ICE",row:2,col:0},{type:"ICE",row:6,col:2},{type:"ICE",row:2,col:1},{type:"ICE",row:7,col:4},{type:"ICE",row:2,col:6},{type:"ICE",row:0,col:5}],unlockRequirement:17},{id:19,name:"Frosty Fields 9",gridSize:8,fruitTypes:6,mode:"clearIce",objective:{type:"clearIce",target:9},moves:21,timeLimit:null,stars:[3900,5850,7800],obstacles:[{type:"ICE",row:1,col:6},{type:"ICE",row:0,col:4},{type:"ICE",row:3,col:7},{type:"ICE",row:0,col:1},{type:"ICE",row:4,col:0},{type:"ICE",row:6,col:6},{type:"ICE",row:2,col:7},{type:"ICE",row:2,col:2}],unlockRequirement:18},{id:20,name:"Frosty Fields 10",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:20,fruitType:"apple"},moves:20,timeLimit:null,stars:[4e3,6e3,8e3],obstacles:[{type:"ICE",row:1,col:4},{type:"ICE",row:5,col:4},{type:"ICE",row:2,col:1},{type:"ICE",row:3,col:5},{type:"ICE",row:3,col:0},{type:"ICE",row:2,col:7},{type:"ICE",row:5,col:0},{type:"ICE",row:7,col:6},{type:"ICE",row:7,col:4},{type:"ICE",row:6,col:0}],unlockRequirement:19},{id:21,name:"Locked Orchard 1",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:3500},moves:22,timeLimit:null,stars:[3500,5250,7e3],obstacles:[{type:"LOCKED",row:7,col:1},{type:"LOCKED",row:7,col:5},{type:"LOCKED",row:7,col:2},{type:"LOCKED",row:1,col:1},{type:"LOCKED",row:4,col:5}],unlockRequirement:20},{id:22,name:"Locked Orchard 2",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:4e3},moves:22,timeLimit:null,stars:[4e3,6e3,8e3],obstacles:[{type:"LOCKED",row:2,col:5},{type:"LOCKED",row:0,col:5},{type:"LOCKED",row:6,col:5},{type:"LOCKED",row:0,col:0},{type:"LOCKED",row:7,col:1}],unlockRequirement:21},{id:23,name:"Locked Orchard 3",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:4500},moves:21,timeLimit:null,stars:[4500,6750,9e3],obstacles:[{type:"LOCKED",row:3,col:3},{type:"LOCKED",row:4,col:5},{type:"LOCKED",row:3,col:5},{type:"LOCKED",row:7,col:0}],unlockRequirement:22},{id:24,name:"Locked Orchard 4",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:5e3},moves:21,timeLimit:null,stars:[5e3,7500,1e4],obstacles:[{type:"LOCKED",row:5,col:7},{type:"LOCKED",row:2,col:5},{type:"LOCKED",row:5,col:3},{type:"LOCKED",row:4,col:1},{type:"LOCKED",row:4,col:6}],unlockRequirement:23},{id:25,name:"Locked Orchard 5",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:5500},moves:21,timeLimit:null,stars:[5500,8250,11e3],obstacles:[{type:"LOCKED",row:5,col:7},{type:"LOCKED",row:5,col:1},{type:"LOCKED",row:7,col:7},{type:"LOCKED",row:0,col:5},{type:"LOCKED",row:1,col:2}],unlockRequirement:24},{id:26,name:"Locked Orchard 6",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:6e3},moves:20,timeLimit:null,stars:[6e3,9e3,12e3],obstacles:[{type:"LOCKED",row:0,col:1},{type:"LOCKED",row:0,col:7},{type:"LOCKED",row:7,col:1},{type:"LOCKED",row:5,col:3},{type:"LOCKED",row:3,col:0}],unlockRequirement:25},{id:27,name:"Locked Orchard 7",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:6500},moves:20,timeLimit:null,stars:[6500,9750,13e3],obstacles:[{type:"LOCKED",row:4,col:3},{type:"LOCKED",row:4,col:1},{type:"LOCKED",row:1,col:2},{type:"LOCKED",row:3,col:2},{type:"LOCKED",row:3,col:1}],unlockRequirement:26},{id:28,name:"Locked Orchard 8",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:7e3},moves:20,timeLimit:null,stars:[7e3,10500,14e3],obstacles:[{type:"LOCKED",row:2,col:6},{type:"LOCKED",row:2,col:0},{type:"LOCKED",row:1,col:1},{type:"LOCKED",row:2,col:4},{type:"LOCKED",row:6,col:0}],unlockRequirement:27},{id:29,name:"Locked Orchard 9",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:7500},moves:19,timeLimit:null,stars:[7500,11250,15e3],obstacles:[{type:"LOCKED",row:5,col:0},{type:"LOCKED",row:4,col:5},{type:"LOCKED",row:5,col:5},{type:"LOCKED",row:2,col:5},{type:"LOCKED",row:0,col:0}],unlockRequirement:28},{id:30,name:"Locked Orchard 10",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:8e3},moves:19,timeLimit:null,stars:[8e3,12e3,16e3],obstacles:[{type:"LOCKED",row:2,col:1},{type:"LOCKED",row:2,col:2},{type:"LOCKED",row:7,col:7},{type:"LOCKED",row:0,col:0},{type:"LOCKED",row:3,col:5}],unlockRequirement:29},{id:31,name:"Stone Garden 1",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:4500},moves:20,timeLimit:null,stars:[4500,6750,9e3],obstacles:[{type:"BARRIER",row:4,col:4},{type:"BARRIER",row:3,col:2},{type:"BARRIER",row:0,col:0},{type:"BARRIER",row:6,col:1}],unlockRequirement:30},{id:32,name:"Stone Garden 2",gridSize:8,fruitTypes:6,mode:"timed",objective:{type:"timed",target:5e3},moves:null,timeLimit:116,stars:[5e3,7500,1e4],obstacles:[{type:"BARRIER",row:5,col:7},{type:"BARRIER",row:1,col:1},{type:"BARRIER",row:3,col:4},{type:"BARRIER",row:4,col:7}],unlockRequirement:31},{id:33,name:"Stone Garden 3",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:4500},moves:19,timeLimit:null,stars:[4500,6750,9e3],obstacles:[{type:"BARRIER",row:7,col:1},{type:"BARRIER",row:5,col:3},{type:"BARRIER",row:6,col:2},{type:"BARRIER",row:2,col:2}],unlockRequirement:32},{id:34,name:"Stone Garden 4",gridSize:8,fruitTypes:6,mode:"timed",objective:{type:"timed",target:5e3},moves:null,timeLimit:112,stars:[5e3,7500,1e4],obstacles:[{type:"BARRIER",row:0,col:5},{type:"BARRIER",row:5,col:1},{type:"BARRIER",row:3,col:1},{type:"BARRIER",row:1,col:3}],unlockRequirement:33},{id:35,name:"Stone Garden 5",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:4500},moves:18,timeLimit:null,stars:[4500,6750,9e3],obstacles:[{type:"BARRIER",row:0,col:0},{type:"BARRIER",row:6,col:2},{type:"BARRIER",row:0,col:7},{type:"BARRIER",row:7,col:2}],unlockRequirement:34},{id:36,name:"Stone Garden 6",gridSize:8,fruitTypes:6,mode:"timed",objective:{type:"timed",target:5e3},moves:null,timeLimit:108,stars:[5e3,7500,1e4],obstacles:[{type:"BARRIER",row:6,col:3},{type:"BARRIER",row:6,col:4},{type:"BARRIER",row:7,col:1},{type:"BARRIER",row:3,col:3}],unlockRequirement:35},{id:37,name:"Stone Garden 7",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:4500},moves:17,timeLimit:null,stars:[4500,6750,9e3],obstacles:[{type:"BARRIER",row:0,col:7},{type:"BARRIER",row:4,col:4},{type:"BARRIER",row:5,col:5},{type:"BARRIER",row:6,col:1}],unlockRequirement:36},{id:38,name:"Stone Garden 8",gridSize:8,fruitTypes:6,mode:"timed",objective:{type:"timed",target:5e3},moves:null,timeLimit:104,stars:[5e3,7500,1e4],obstacles:[{type:"BARRIER",row:4,col:4},{type:"BARRIER",row:1,col:3},{type:"BARRIER",row:5,col:0},{type:"BARRIER",row:2,col:5}],unlockRequirement:37},{id:39,name:"Stone Garden 9",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:4500},moves:16,timeLimit:null,stars:[4500,6750,9e3],obstacles:[{type:"BARRIER",row:2,col:1},{type:"BARRIER",row:2,col:6},{type:"BARRIER",row:1,col:2},{type:"BARRIER",row:2,col:0}],unlockRequirement:38},{id:40,name:"Stone Garden 10",gridSize:8,fruitTypes:6,mode:"timed",objective:{type:"timed",target:5e3},moves:null,timeLimit:100,stars:[5e3,7500,1e4],obstacles:[{type:"BARRIER",row:1,col:3},{type:"BARRIER",row:3,col:6},{type:"BARRIER",row:4,col:3},{type:"BARRIER",row:3,col:4}],unlockRequirement:39},{id:41,name:"Boss Domain 1",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:18,timeLimit:null,stars:[6100,9150,12200],obstacles:[{type:"STONE",row:5,col:2},{type:"STONE",row:0,col:4},{type:"STONE",row:0,col:3},{type:"ICE",row:3,col:0},{type:"ICE",row:5,col:3},{type:"ICE",row:0,col:1},{type:"LOCKED",row:4,col:7}],unlockRequirement:40},{id:42,name:"Boss Domain 2",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:17,timeLimit:null,stars:[6200,9300,12400],obstacles:[{type:"STONE",row:7,col:5},{type:"STONE",row:4,col:1},{type:"STONE",row:2,col:3},{type:"ICE",row:7,col:1},{type:"ICE",row:5,col:2},{type:"ICE",row:5,col:7},{type:"LOCKED",row:4,col:4}],unlockRequirement:41},{id:43,name:"Boss Domain 3",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:17,timeLimit:null,stars:[6300,9450,12600],obstacles:[{type:"STONE",row:7,col:6},{type:"STONE",row:2,col:3},{type:"STONE",row:3,col:5},{type:"ICE",row:1,col:0},{type:"ICE",row:4,col:4},{type:"ICE",row:7,col:3},{type:"LOCKED",row:5,col:5},{type:"LOCKED",row:5,col:3}],unlockRequirement:42},{id:44,name:"Boss Domain 4",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:16,timeLimit:null,stars:[6400,9600,12800],obstacles:[{type:"STONE",row:7,col:6},{type:"STONE",row:0,col:3},{type:"STONE",row:0,col:2},{type:"ICE",row:0,col:7},{type:"ICE",row:1,col:5},{type:"ICE",row:2,col:1},{type:"LOCKED",row:3,col:3},{type:"LOCKED",row:1,col:4}],unlockRequirement:43},{id:45,name:"Boss Domain 5",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:16,timeLimit:null,stars:[6500,9750,13e3],obstacles:[{type:"STONE",row:2,col:2},{type:"STONE",row:6,col:6},{type:"STONE",row:7,col:5},{type:"ICE",row:7,col:6},{type:"ICE",row:3,col:3},{type:"ICE",row:7,col:7},{type:"LOCKED",row:1,col:1},{type:"LOCKED",row:0,col:3}],unlockRequirement:44},{id:46,name:"Boss Domain 6",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:15,timeLimit:null,stars:[6600,9900,13200],obstacles:[{type:"STONE",row:5,col:6},{type:"STONE",row:5,col:4},{type:"STONE",row:7,col:5},{type:"ICE",row:7,col:2},{type:"ICE",row:1,col:7},{type:"ICE",row:2,col:1},{type:"LOCKED",row:6,col:3},{type:"LOCKED",row:1,col:4}],unlockRequirement:45},{id:47,name:"Boss Domain 7",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:15,timeLimit:null,stars:[6700,10050,13400],obstacles:[{type:"STONE",row:5,col:2},{type:"STONE",row:7,col:3},{type:"STONE",row:5,col:4},{type:"ICE",row:1,col:3},{type:"ICE",row:1,col:6},{type:"ICE",row:3,col:1},{type:"LOCKED",row:6,col:3},{type:"LOCKED",row:6,col:6}],unlockRequirement:46},{id:48,name:"Boss Domain 8",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:14,timeLimit:null,stars:[6800,10200,13600],obstacles:[{type:"STONE",row:0,col:7},{type:"STONE",row:2,col:1},{type:"ICE",row:1,col:7},{type:"ICE",row:3,col:2},{type:"LOCKED",row:5,col:1},{type:"LOCKED",row:5,col:3}],unlockRequirement:47},{id:49,name:"Boss Domain 9",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:14,timeLimit:null,stars:[6900,10350,13800],obstacles:[{type:"STONE",row:4,col:0},{type:"STONE",row:0,col:4},{type:"STONE",row:1,col:6},{type:"ICE",row:1,col:3},{type:"ICE",row:1,col:0},{type:"ICE",row:4,col:3},{type:"LOCKED",row:2,col:2}],unlockRequirement:48},{id:50,name:"Boss Domain 10",gridSize:8,fruitTypes:6,mode:"collect",objective:{type:"collect",target:30,fruitType:"orange"},moves:13,timeLimit:null,stars:[7e3,10500,14e3],obstacles:[{type:"STONE",row:0,col:3},{type:"STONE",row:5,col:2},{type:"ICE",row:3,col:7},{type:"ICE",row:5,col:3},{type:"LOCKED",row:4,col:6},{type:"LOCKED",row:1,col:2}],unlockRequirement:49},{id:51,name:"Expert Challenge 1",gridSize:9,fruitTypes:6,mode:"score",objective:{type:"score",target:1e4},moves:15,timeLimit:null,stars:[1e4,15e3,2e4],obstacles:[],unlockRequirement:50},{id:52,name:"Expert Challenge 2",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:1e4},moves:15,timeLimit:null,stars:[1e4,15e3,2e4],obstacles:[],unlockRequirement:51},{id:53,name:"Expert Challenge 3",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:1e4},moves:15,timeLimit:null,stars:[1e4,15e3,2e4],obstacles:[],unlockRequirement:52},{id:54,name:"Expert Challenge 4",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:1e4},moves:15,timeLimit:null,stars:[1e4,15e3,2e4],obstacles:[],unlockRequirement:53},{id:55,name:"Expert Challenge 5",gridSize:8,fruitTypes:6,mode:"score",objective:{type:"score",target:1e4},moves:15,timeLimit:null,stars:[1e4,15e3,2e4],obstacles:[],unlockRequirement:54}];class Am{constructor(){this.currentUser=this.loadSession()}loadSession(){try{const e=localStorage.getItem("fc3d_active_session");return e?JSON.parse(e):null}catch(e){return console.warn("Could not read active auth session",e),null}}saveSession(e){try{localStorage.setItem("fc3d_active_session",JSON.stringify(e))}catch(t){console.warn("Could not save auth session",t)}}getAccountsDB(){try{const e=localStorage.getItem("fc3d_accounts_db");return e?JSON.parse(e):{}}catch{return{}}}saveAccountsDB(e){try{localStorage.setItem("fc3d_accounts_db",JSON.stringify(e))}catch(t){console.warn("Could not save accounts DB",t)}}hashPassword(e){let t=0;for(let n=0;n<e.length;n++){const s=e.charCodeAt(n);t=(t<<5)-t+s,t|=0}return"h_"+Math.abs(t).toString(16)+"_"+e.length}signUp(e,t){if(!e||!e.trim())return{success:!1,message:"Please enter a valid User ID / Username."};if(!t||t.length<4)return{success:!1,message:"Password must be at least 4 characters long."};const n=e.trim(),s=n.toLowerCase(),r=this.getAccountsDB();if(r[s])return{success:!1,message:`Username "${n}" is already registered. Please login or choose another ID.`};const a="usr_"+Date.now()+"_"+Math.random().toString(36).substring(2,7),o={uid:a,username:n,passwordHash:this.hashPassword(t),createdAt:Date.now()};r[s]=o,this.saveAccountsDB(r);const l={uid:a,username:n};this.currentUser=l,this.saveSession(l);const c={completedLevels:{},unlockedLevels:[1]};return this.saveUserProgress(c),ye.emit("auth:success",{user:l}),{success:!0,user:l}}signIn(e,t){if(!e||!e.trim())return{success:!1,message:"Please enter your User ID / Username."};if(!t)return{success:!1,message:"Please enter your password."};const n=e.trim(),s=n.toLowerCase(),a=this.getAccountsDB()[s];if(!a)return{success:!1,message:`User ID "${n}" not found. Please register first.`};if(a.passwordHash!==this.hashPassword(t))return{success:!1,message:"Incorrect password. Please try again."};const o={uid:a.uid,username:a.username};return this.currentUser=o,this.saveSession(o),ye.emit("auth:success",{user:o}),{success:!0,user:o}}signOut(){this.currentUser=null;try{localStorage.removeItem("fc3d_active_session")}catch(e){console.warn("Could not clear session",e)}ye.emit("auth:logout")}getCurrentUser(){return this.currentUser}saveUserProgress(e){if(this.currentUser)try{const n=`gameProgress_${this.currentUser.username.toLowerCase()}`;localStorage.setItem(n,JSON.stringify(e))}catch(t){console.warn("Could not save user progress to storage",t)}}loadUserProgress(){if(!this.currentUser)return{completedLevels:{},unlockedLevels:[1]};try{const n=`gameProgress_${this.currentUser.username.toLowerCase()}`,s=localStorage.getItem(n);if(s)return JSON.parse(s)}catch(t){console.warn("Could not load user progress",t)}const e={completedLevels:{},unlockedLevels:[1]};return this.saveUserProgress(e),e}}const ii=new Am;class Rm{constructor(){this.events={}}on(e,t){this.events[e]||(this.events[e]=[]),this.events[e].push(t)}off(e,t){this.events[e]&&(this.events[e]=this.events[e].filter(n=>n!==t))}emit(e,...t){this.events[e]&&this.events[e].forEach(n=>n(...t))}}class Cm extends Rm{constructor(){super(),this.levels=Array.isArray(sl)?sl:[],this.progress=this.loadProgress(),this.currentLevelId=null,this.currentLevelConfig=null,this.state=null}async loadLevels(){return this.levels}loadProgress(){return ii.loadUserProgress()}saveProgress(){ii.saveUserProgress(this.progress)}reloadUserProgress(){this.progress=this.loadProgress()}getCurrentLevel(){return this.currentLevelConfig}startLevel(e){const t=this.levels.find(n=>n.id===e);if(!t)throw new Error(`Level ${e} not found`);if(!this.isLevelUnlocked(e))throw new Error(`Level ${e} is not unlocked`);return this.currentLevelId=e,this.currentLevelConfig=t,this.state={score:0,movesUsed:0,timeUsed:0,collected:{},obstaclesCleared:0,startTime:Date.now()},this.emit("levelStart",t),t}completeLevel(e,t,n){if(!this.currentLevelConfig)return null;const s=this.currentLevelConfig;if(this.checkObjectiveCompletion(e,n)){const a=this.getStars(e,s),o=this.progress.completedLevels[s.id]||{stars:0,highscore:0},l=Math.max(o.highscore,e),c=e>o.highscore,u=Math.max(o.stars,a);this.progress.completedLevels[s.id]={stars:u,score:e,highscore:l},a>o.stars&&this.emit("starEarned",a);const d=this.levels.find(p=>p.id===s.id+1);return d&&!this.progress.unlockedLevels.includes(d.id)&&this.progress.unlockedLevels.push(d.id),this.saveProgress(),this.emit("levelComplete",{id:s.id,score:e,stars:a,highscore:l,movesUsed:t,timeUsed:n}),{success:!0,stars:a,highScore:l,newHighscore:l,isNewBest:c}}else return this.emit("levelFailed",{id:s.id,score:e,movesUsed:t,timeUsed:n}),{success:!1,stars:0}}checkObjectiveCompletion(e,t){const n=this.currentLevelConfig.objective;if(this.currentLevelConfig.timeLimit&&t>this.currentLevelConfig.timeLimit||this.currentLevelConfig.moves&&this.state.movesUsed>this.currentLevelConfig.moves)return!1;switch(n.type){case"score":return e>=n.target;case"collect":return(this.state.collected[n.fruitType]||0)>=n.target;case"clearIce":return this.state.obstaclesCleared>=n.target;case"timed":return e>=n.target&&t<=this.currentLevelConfig.timeLimit;default:return!0}}updateState(e){if(this.state){if(e.score&&(this.state.score+=e.score),e.moves&&(this.state.movesUsed+=e.moves),e.collected){const t=e.collected;this.state.collected[t]=(this.state.collected[t]||0)+1}e.obstacleCleared&&(this.state.obstaclesCleared+=1)}}getStars(e,t){let n=0;for(let s=0;s<t.stars.length;s++)e>=t.stars[s]&&(n=s+1);return Math.min(n,3)}getGroupStars(e){const t=(e-1)*5+1,n=e*5;let s=0;for(let r=t;r<=n;r++)this.progress&&this.progress.completedLevels&&this.progress.completedLevels[r]&&(s+=this.progress.completedLevels[r].stars||0);return s}isGroupUnlocked(e){if(e<=1)return!0;for(let t=1;t<e;t++)if(this.getGroupStars(t)<10)return!1;return!0}isLevelUnlocked(e){const t=Math.ceil(e/5);return this.isGroupUnlocked(t)?(e-1)%5===0?!0:this.progress&&this.progress.unlockedLevels?this.progress.unlockedLevels.includes(e):!1:!1}getProgress(){return this.progress}getTotalStars(){let e=0;for(const t in this.progress.completedLevels)e+=this.progress.completedLevels[t].stars;return e}}class js{constructor(e,t,n={}){this.row=e,this.col=t,this.hp=n.hp||1,this.maxHp=this.hp,this.mesh=null,this.type="BASE"}createMesh(){const e=new nn(.8,.8,.8),t=new Ws({color:16777215});return this.mesh=new je(e,t),this.mesh.position.set(this.col,this.row,.5),this.mesh}canSwap(){return!0}canMatch(){return!0}canFall(){return!0}onAdjacentMatch(){return this.hp--,this.updateAppearance(),this.isDestroyed()}onDirectMatch(){return this.hp--,this.updateAppearance(),this.isDestroyed()}isDestroyed(){return this.hp<=0}updateAppearance(){}dispose(){this.mesh&&(this.mesh.geometry&&this.mesh.geometry.dispose(),this.mesh.material&&(Array.isArray(this.mesh.material)?this.mesh.material.forEach(e=>e.dispose()):this.mesh.material.dispose()),this.mesh.parent&&this.mesh.parent.remove(this.mesh))}}class Lm extends js{constructor(e,t){super(e,t,{hp:2}),this.type="ICE"}createMesh(){const e=new nn(.9,.9,.9),t=new xm({color:8965375,transparent:!0,opacity:.6,transmission:.8,roughness:.2,metalness:.1,thickness:.5});return this.mesh=new je(e,t),this.mesh.position.set(this.col,this.row,0),this.mesh}canSwap(){return!0}updateAppearance(){this.mesh&&this.mesh.material&&this.hp===1&&(this.mesh.material.opacity=.3)}}class Pm extends js{constructor(e,t){super(e,t,{hp:1}),this.type="LOCKED"}createMesh(){const e=new ao(.4,.1,16,32),t=new En({color:8947848,metalness:.8,roughness:.2});return this.mesh=new je(e,t),this.mesh.position.set(this.col,this.row,.5),this.mesh}canSwap(){return!1}onAdjacentMatch(){return this.hp--,this.isDestroyed()}}class Im extends js{constructor(e,t){super(e,t,{hp:9999}),this.type="BARRIER"}createMesh(){const e=new nn(.95,.95,.95),t=new En({color:3355443,roughness:.9,metalness:.1});return this.mesh=new je(e,t),this.mesh.position.set(this.col,this.row,0),this.mesh}canSwap(){return!1}canMatch(){return!1}canFall(){return!1}onAdjacentMatch(){return!1}}class Dm extends js{constructor(e,t){super(e,t,{hp:2}),this.type="STONE"}createMesh(){const e=new ro(.45),t=new En({color:7829367,roughness:.8,metalness:.2});return this.mesh=new je(e,t),this.mesh.position.set(this.col,this.row,0),this.mesh}canSwap(){return!1}canMatch(){return!1}canFall(){return!0}updateAppearance(){this.mesh&&this.hp===1&&(this.mesh.scale.set(.8,.8,.8),this.mesh.material.color.setHex(5592405))}}const Um={ICE:Lm,LOCKED:Pm,BARRIER:Im,STONE:Dm};class Nm{constructor(e){this.scene=e,this.obstacles=[]}createObstacle(e,t,n){const s=Um[e];if(!s)return console.warn(`Unknown obstacle type: ${e}`),null;const r=new s(t,n),a=r.createMesh();return this.scene&&this.scene.add(a),this.obstacles.push(r),r}placeObstaclesFromConfig(e){!e||!e.obstacles||e.obstacles.forEach(t=>{this.createObstacle(t.type,t.row,t.col)})}getObstacleAt(e,t){return this.obstacles.find(n=>n.row===e&&n.col===t)}handleAdjacentMatch(e,t){const n=[{r:e-1,c:t},{r:e+1,c:t},{r:e,c:t-1},{r:e,c:t+1}];let s=0;return n.forEach(r=>{const a=this.getObstacleAt(r.r,r.c);a&&a.onAdjacentMatch()&&(this.removeObstacle(a),s++)}),s}removeObstacle(e){e.dispose(),this.obstacles=this.obstacles.filter(t=>t!==e)}clearAll(){this.obstacles.forEach(e=>e.dispose()),this.obstacles=[]}}class Om{constructor(e,t=500){this.scene=e,this.maxParticles=t,this.particles=[],this.geometry=new Ft,this.positions=new Float32Array(this.maxParticles*3),this.colors=new Float32Array(this.maxParticles*3),this.sizes=new Float32Array(this.maxParticles),this.alphas=new Float32Array(this.maxParticles),this.geometry.setAttribute("position",new Ut(this.positions,3)),this.geometry.setAttribute("color",new Ut(this.colors,3)),this.geometry.setAttribute("size",new Ut(this.sizes,1)),this.geometry.setAttribute("alpha",new Ut(this.alphas,1)),this.material=new Sn({uniforms:{time:{value:0}},vertexShader:`
        attribute float size;
        attribute float alpha;
        attribute vec3 color;
        varying vec4 vColor;
        void main() {
          vColor = vec4(color, alpha);
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = size * (300.0 / -mvPosition.z);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        varying vec4 vColor;
        void main() {
          // Circular particle shape
          vec2 xy = gl_PointCoord.xy - vec2(0.5);
          float ll = length(xy);
          if (ll > 0.5) discard;
          gl_FragColor = vColor;
        }
      `,transparent:!0,blending:Ir,depthWrite:!1}),this.points=new vm(this.geometry,this.material),this.scene.add(this.points)}_spawnParticle(e,t,n,s,r){this.particles.length>=this.maxParticles||this.particles.push({position:e.clone(),velocity:t.clone(),color:new Be(n),life:s,maxLife:s,size:r})}burst(e,t,n=20){for(let s=0;s<n;s++){const r=new L((Math.random()-.5)*5,(Math.random()-.5)*5,(Math.random()-.5)*5);this._spawnParticle(e,r,t,500+Math.random()*500,.1+Math.random()*.1)}}trail(e,t,n,s=500){const r=e.distanceTo(t),a=Math.min(20,Math.floor(r*5));for(let o=0;o<a;o++){const l=o/a,c=new L().lerpVectors(e,t,l),u=new L(Math.random()-.5,Math.random()-.5,Math.random()-.5);this._spawnParticle(c,u,n,s*l,.05)}}shower(e,t=2e3){for(let n=0;n<50;n++){const s=new L((Math.random()-.5)*10,5+Math.random()*5,(Math.random()-.5)*10),r=new L(Math.random()-.5,-Math.random()*3-1,Math.random()-.5);this._spawnParticle(s,r,e,t,.1)}}sparkle(e,t,n=1e3){for(let s=0;s<15;s++){const r=e.clone().add(new L((Math.random()-.5)*.8,(Math.random()-.5)*.8,(Math.random()-.5)*.8)),a=new L(0,Math.random()*.5,0);this._spawnParticle(r,a,t,n,.08)}}shockwave(e,t,n){for(let r=0;r<40;r++){const a=r/40*Math.PI*2,o=new L(Math.cos(a)*4,0,Math.sin(a)*4);this._spawnParticle(e,o,n,600,.15)}}update(e){let t=0;const n=e/1e3;for(let s=this.particles.length-1;s>=0;s--){const r=this.particles[s];if(r.life-=e,r.life<=0){this.particles.splice(s,1);continue}r.position.addScaledVector(r.velocity,n),r.velocity.y-=2*n,this.positions[t*3]=r.position.x,this.positions[t*3+1]=r.position.y,this.positions[t*3+2]=r.position.z,this.colors[t*3]=r.color.r,this.colors[t*3+1]=r.color.g,this.colors[t*3+2]=r.color.b,this.sizes[t]=r.size,this.alphas[t]=r.life/r.maxLife,t++}this.geometry.attributes.position.needsUpdate=!0,this.geometry.attributes.color.needsUpdate=!0,this.geometry.attributes.size.needsUpdate=!0,this.geometry.attributes.alpha.needsUpdate=!0,this.geometry.setDrawRange(0,t)}}function Fm(i,e=.3,t=300){const n=i.position.clone();let s=null;function r(a){s||(s=a);const o=a-s,l=Math.min(o/t,1);if(l<1){const c=e*(1-l);i.position.x=n.x+(Math.random()-.5)*c,i.position.y=n.y+(Math.random()-.5)*c,i.position.z=n.z+(Math.random()-.5)*c,requestAnimationFrame(r)}else i.position.copy(n)}requestAnimationFrame(r)}function Bm(i,e){let t=i.children.find(n=>n instanceof ql);if(t){const n=Math.min(2.5,1+e*.15);t.intensity=n,setTimeout(()=>{t&&(t.intensity=1)},2e3)}}function zm(i,e){const t=e.fov;let n=null;const s=1500,r=new Xl(16766720,2);r.position.set(0,10,5),i.add(r);function a(o){n||(n=o);const l=o-n,c=Math.min(l/s,1);if(c<.5){const u=c/.5;e.fov=t-6*Math.sin(u*Math.PI),e.updateProjectionMatrix(),requestAnimationFrame(a)}else if(c<1){const u=(c-.5)/.5;e.fov=t-6+6*u,e.updateProjectionMatrix(),requestAnimationFrame(a)}else e.fov=t,e.updateProjectionMatrix(),i.remove(r),r.dispose&&r.dispose()}requestAnimationFrame(a)}const Dn={ROW_BOMB:"row_bomb",COL_BOMB:"col_bomb",AREA_BOMB:"area_bomb",RAINBOW:"rainbow"};function km(i,e){if(!i||i.length<4)return null;const t=i.map(u=>u.row),n=i.map(u=>u.col),s=Math.min(...t),r=Math.max(...t),a=Math.min(...n),o=Math.max(...n),l=r-s+1,c=o-a+1;return i.length>=5&&(l>=5||c>=5)?Dn.RAINBOW:l>=3&&c>=3?Dn.AREA_BOMB:l===4?Dn.COL_BOMB:c===4?Dn.ROW_BOMB:null}function Gm(i,e){const t=new Rt(.4,32,32);let n;switch(i){case Dn.ROW_BOMB:n=new qi({color:16729156,emissive:11141120,shininess:100});break;case Dn.COL_BOMB:n=new qi({color:4521796,emissive:43520,shininess:100});break;case Dn.AREA_BOMB:n=new qi({color:4474111,emissive:170,shininess:100});break;case Dn.RAINBOW:n=new qi({color:16777215,emissive:11184810,transparent:!0,opacity:.9,shininess:150});break;default:n=new qi({color:13421772})}const s=new je(t,n);return s.userData.powerUpType=i,s.userData.fruitType=e,s}function Hm(i,e){const t=(a,o,l,c,u,d,p)=>{a.setValueAtTime(0,o),a.linearRampToValueAtTime(p,o+l),a.linearRampToValueAtTime(u*p,o+l+c),a.setValueAtTime(u*p,o+l+c),a.linearRampToValueAtTime(0,o+l+c+d)},n=a=>{const o=i.sampleRate*a,l=i.createBuffer(1,o,i.sampleRate),c=l.getChannelData(0);for(let d=0;d<o;d++)c[d]=Math.random()*2-1;const u=i.createBufferSource();return u.buffer=l,u},s=(a,o,l,c,u,d,p,m=1)=>{const _=i.currentTime,x=c+u+p,f=i.createOscillator();f.type=a,f.frequency.setValueAtTime(o,_),l!==o&&f.frequency.exponentialRampToValueAtTime(l,_+x);const h=i.createGain();t(h.gain,_,c,u,d,p,m),f.connect(h),h.connect(e),f.start(_),f.stop(_+x)},r={swap:()=>{const a=i.currentTime,o=n(.1),l=i.createBiquadFilter();l.type="bandpass",l.frequency.setValueAtTime(200,a),l.frequency.exponentialRampToValueAtTime(2e3,a+.1);const c=i.createGain();t(c.gain,a,.01,.05,.5,.04,.3),o.connect(l),l.connect(c),c.connect(e),o.start(a)},match3:()=>{s("sine",300,600,.01,.05,.5,.09,.5)},match4:()=>{i.currentTime,s("sine",400,800,.01,.1,.5,.09,.6),setTimeout(()=>{s("sine",400,800,.01,.1,.5,.09,.2)},100)},match5:()=>{s("sine",440,880,.02,.1,.6,.18,.4),s("sine",554.37,1108.73,.02,.1,.6,.18,.4),s("sine",659.25,1318.51,.02,.1,.6,.18,.4)},invalid:()=>{s("sine",80,60,.01,.05,.2,.04,.7)},select:()=>{const a=i.currentTime,o=n(.05),l=i.createBiquadFilter();l.type="highpass",l.frequency.value=1500;const c=i.createGain();t(c.gain,a,.005,.02,.2,.025,.2),o.connect(l),l.connect(c),c.connect(e),o.start(a)},powerup:()=>{const a=i.currentTime,o=.5,l=i.createOscillator();l.type="sawtooth",l.frequency.setValueAtTime(200,a),l.frequency.exponentialRampToValueAtTime(2e3,a+o);const c=i.createOscillator();c.type="sine",c.frequency.value=20;const u=i.createGain();u.gain.value=50,c.connect(u),u.connect(l.frequency);const d=i.createGain();t(d.gain,a,.1,.2,.8,.2,.3),l.connect(d),d.connect(e),l.start(a),c.start(a),l.stop(a+o),c.stop(a+o)},bomb:()=>{const a=i.currentTime,o=i.createOscillator();o.type="square",o.frequency.setValueAtTime(60,a),o.frequency.exponentialRampToValueAtTime(30,a+.4);const l=i.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(1e3,a),l.frequency.exponentialRampToValueAtTime(100,a+.4);const c=i.createWaveShaper(),u=40,d=new Float32Array(44100);for(let m=0;m<44100;++m){const _=m*2/44100-1;d[m]=(3+u)*_*20*(Math.PI/180)/(Math.PI+u*Math.abs(_))}c.curve=d,c.oversample="4x";const p=i.createGain();t(p.gain,a,.01,.1,.3,.29,.8),o.connect(l),l.connect(c),c.connect(p),p.connect(e),o.start(a),o.stop(a+.4)},levelComplete:()=>{const a=i.currentTime,o=[523.25,659.25,783.99,1046.5],l=.2;o.forEach((c,u)=>{const d=a+u*l,p=i.createOscillator();p.type="triangle",p.frequency.value=c;const m=i.createGain();t(m.gain,d,.05,.1,.5,.05,.4),p.connect(m),m.connect(e),p.start(d),p.stop(d+l)})},levelFailed:()=>{const a=i.currentTime,o=[659.25,554.37,493.88],l=.2;o.forEach((c,u)=>{const d=a+u*l,p=i.createOscillator();p.type="triangle",p.frequency.value=c;const m=i.createGain();t(m.gain,d,.05,.1,.5,.05,.4),p.connect(m),m.connect(e),p.start(d),p.stop(d+l)})},starEarned:()=>{s("sine",1200,1200,.01,.05,.2,.14,.4)},buttonClick:()=>{const a=i.currentTime,o=n(.03),l=i.createBiquadFilter();l.type="bandpass",l.frequency.value=1e3;const c=i.createGain();t(c.gain,a,.005,.01,.5,.015,.3),o.connect(l),l.connect(c),c.connect(e),o.start(a)}};for(let a=1;a<=8;a++)r[`combo${a}`]=()=>{const o=300+a*100;s("sine",o,o*2,.01,.05,.5,.09,.5)};return r}class Vm{constructor(){this.ctx=null,this.destination=null,this.isPlaying=!1,this.tempo=120,this.intensity=1,this.schedulerTimer=null,this.nextNoteTime=0,this.currentBeat=0,this.scale=[130.81,146.83,164.81,196,220,261.63,293.66,329.63,392,440],this.chordRoots=[130.81,174.61,196,130.81]}start(e,t){this.isPlaying||(this.ctx=e,this.destination=t,this.isPlaying=!0,this.currentBeat=0,this.nextNoteTime=this.ctx.currentTime+.1,this.schedule())}stop(){this.isPlaying=!1,this.schedulerTimer&&(clearTimeout(this.schedulerTimer),this.schedulerTimer=null)}setIntensity(e){this.intensity=Math.max(0,Math.min(3,e))}setTempo(e){this.tempo=e}schedule(){const e=60/this.tempo;for(;this.nextNoteTime<this.ctx.currentTime+.1;)this.playBeat(this.currentBeat,this.nextNoteTime,e),this.nextNoteTime+=e*.5,this.currentBeat=(this.currentBeat+1)%32;this.isPlaying&&(this.schedulerTimer=setTimeout(()=>this.schedule(),25))}playBeat(e,t,n){const s=Math.floor(e/8),r=this.chordRoots[s%this.chordRoots.length];if(this.intensity>=0&&e%8===0&&this.playPad(r,t,n*4),this.intensity>=1&&(e%2===0?this.playBass(r,t,n):Math.random()>.8&&this.playBass(r,t,n*.5)),this.intensity>=2&&(e%2===0&&this.playKick(t),e%2===1&&this.playHiHat(t)),this.intensity>=3&&Math.random()>.4){const a=this.scale[Math.floor(Math.random()*this.scale.length)];this.playMelody(a,t,n*.5)}}playPad(e,t,n){const s=this.ctx.createOscillator();s.type="sawtooth",s.frequency.value=e;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.setValueAtTime(200,t),r.frequency.exponentialRampToValueAtTime(600,t+n/2),r.frequency.exponentialRampToValueAtTime(200,t+n);const a=this.ctx.createGain();a.gain.setValueAtTime(0,t),a.gain.linearRampToValueAtTime(.1,t+n*.1),a.gain.linearRampToValueAtTime(.05,t+n*.8),a.gain.linearRampToValueAtTime(0,t+n),s.connect(r),r.connect(a),a.connect(this.destination),s.start(t),s.stop(t+n)}playBass(e,t,n){const s=this.ctx.createOscillator();s.type="sine",s.frequency.value=e/2;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.2,t+.05),r.gain.exponentialRampToValueAtTime(.01,t+n-.05),r.gain.linearRampToValueAtTime(0,t+n),s.connect(r),r.connect(this.destination),s.start(t),s.stop(t+n)}playMelody(e,t,n){const s=this.ctx.createOscillator();s.type="triangle",s.frequency.value=e;const r=this.ctx.createGain();r.gain.setValueAtTime(0,t),r.gain.linearRampToValueAtTime(.15,t+.02),r.gain.exponentialRampToValueAtTime(.01,t+n-.02),r.gain.linearRampToValueAtTime(0,t+n),s.connect(r),r.connect(this.destination),s.start(t),s.stop(t+n)}playKick(e){const t=this.ctx.createOscillator();t.type="sine",t.frequency.setValueAtTime(150,e),t.frequency.exponentialRampToValueAtTime(.01,e+.2);const n=this.ctx.createGain();n.gain.setValueAtTime(0,e),n.gain.linearRampToValueAtTime(.3,e+.01),n.gain.exponentialRampToValueAtTime(.01,e+.2),t.connect(n),n.connect(this.destination),t.start(e),t.stop(e+.2)}playHiHat(e){const t=this.ctx.sampleRate*.1,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),s=n.getChannelData(0);for(let l=0;l<t;l++)s[l]=Math.random()*2-1;const r=this.ctx.createBufferSource();r.buffer=n;const a=this.ctx.createBiquadFilter();a.type="highpass",a.frequency.value=7e3;const o=this.ctx.createGain();o.gain.setValueAtTime(0,e),o.gain.linearRampToValueAtTime(.1,e+.01),o.gain.exponentialRampToValueAtTime(.01,e+.1),r.connect(a),a.connect(o),o.connect(this.destination),r.start(e)}}class Wm{constructor(){this.context=null,this.masterGain=null,this.sfxGain=null,this.musicGain=null,this.sounds={},this.music=new Vm,this.settings={masterVolume:1,sfxVolume:1,musicVolume:.8,muted:!1},this.initialized=!1}init(){if(this.initialized)return;this._loadSettings();const e=window.AudioContext||window.webkitAudioContext;this.context=new e,this.masterGain=this.context.createGain(),this.masterGain.connect(this.context.destination),this.sfxGain=this.context.createGain(),this.sfxGain.connect(this.masterGain),this.musicGain=this.context.createGain(),this.musicGain.connect(this.masterGain),this.sounds=Hm(this.context,this.sfxGain),this._applySettings();const t=()=>{this.context.state==="suspended"&&this.context.resume(),document.removeEventListener("click",t),document.removeEventListener("touchstart",t),document.removeEventListener("keydown",t)};document.addEventListener("click",t),document.addEventListener("touchstart",t),document.addEventListener("keydown",t),this.initialized=!0}_loadSettings(){try{const e=localStorage.getItem("fruitCrush_audioSettings");e&&(this.settings={...this.settings,...JSON.parse(e)})}catch(e){console.warn("Failed to load audio settings",e)}}_saveSettings(){try{localStorage.setItem("fruitCrush_audioSettings",JSON.stringify(this.settings))}catch(e){console.warn("Failed to save audio settings",e)}}_applySettings(){if(!this.initialized)return;const e=this.settings.muted?0:1,t=this.context.currentTime;this.masterGain.gain.setValueAtTime(this.settings.masterVolume*e,t),this.sfxGain.gain.setValueAtTime(this.settings.sfxVolume,t),this.musicGain.gain.setValueAtTime(this.settings.musicVolume,t)}playSFX(e,t={}){this.initialized||this.init(),this.context&&this.context.state==="suspended"&&this.context.resume(),this.sounds[e]?this.sounds[e](t):console.warn(`Sound effect '${e}' not found`)}playMusic(e="bgm"){this.initialized||this.init(),this.context&&this.context.state==="suspended"&&this.context.resume(),this.music.start(this.context,this.musicGain)}stopMusic(){this.music&&this.music.stop()}setMasterVolume(e){this.settings.masterVolume=Math.max(0,Math.min(1,e)),this._applySettings(),this._saveSettings()}setSFXVolume(e){this.settings.sfxVolume=Math.max(0,Math.min(1,e)),this._applySettings(),this._saveSettings()}setMusicVolume(e){this.settings.musicVolume=Math.max(0,Math.min(1,e)),this._applySettings(),this._saveSettings()}toggleMute(){return this.settings.muted=!this.settings.muted,this._applySettings(),this._saveSettings(),this.settings.muted}isMuted(){return this.settings.muted}getSettings(){return{...this.settings}}}const st=new Wm;class Xm{constructor(){this.currentScreen="menu",this.previousScreen=null,this.screens={},this.overlays={},this._listeners={},this._container=null}init(){this._container=document.getElementById("ui-layer")||this._createContainer(),this._injectBaseStyles()}_createContainer(){const e=document.createElement("div");return e.id="ui-layer",document.body.appendChild(e),e}_injectBaseStyles(){if(document.getElementById("ui-manager-styles"))return;const e=document.createElement("style");e.id="ui-manager-styles",e.textContent=`
      #ui-layer {
        position: fixed; inset: 0; z-index: 50;
        pointer-events: none;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      #ui-layer > .ui-screen {
        position: absolute; inset: 0;
        display: none;
        pointer-events: auto;
        opacity: 0;
        transition: opacity 0.35s ease;
      }
      #ui-layer > .ui-screen.active {
        display: flex;
        opacity: 1;
      }
      #ui-layer > .ui-screen.fade-out {
        opacity: 0;
      }
      #ui-layer > .ui-overlay {
        position: absolute; inset: 0;
        display: none;
        pointer-events: auto;
        opacity: 0;
        transition: opacity 0.3s ease;
        z-index: 60;
      }
      #ui-layer > .ui-overlay.visible {
        display: flex;
        opacity: 1;
      }

      /* Shared button styles */
      .ui-btn {
        border: none; cursor: pointer;
        border-radius: 14px;
        padding: 12px 28px;
        font-size: 16px; font-weight: 700;
        letter-spacing: 0.5px;
        transition: transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease;
        position: relative; overflow: hidden;
        font-family: inherit;
      }
      .ui-btn:hover { transform: translateY(-2px); filter: brightness(1.1); }
      .ui-btn:active { transform: translateY(0); filter: brightness(0.95); }
      .ui-btn-primary {
        background: linear-gradient(135deg, #6effc7, #34d399);
        color: #063;
        box-shadow: 0 6px 18px rgba(52,211,153,0.4);
      }
      .ui-btn-secondary {
        background: linear-gradient(135deg, #ff5e87, #c026d3);
        color: #fff;
        box-shadow: 0 6px 18px rgba(192,38,211,0.4);
      }
      .ui-btn-ghost {
        background: rgba(255,255,255,0.1);
        color: #fff;
        border: 2px solid rgba(255,255,255,0.2);
        box-shadow: none;
      }
      .ui-btn-ghost:hover {
        background: rgba(255,255,255,0.2);
      }

      /* Shared panel/card styles */
      .ui-panel {
        background: rgba(40, 18, 78, 0.85);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
        border: 2px solid rgba(255, 255, 255, 0.15);
        border-radius: 20px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        color: #fff;
      }

      .ui-gradient-text {
        background: linear-gradient(90deg, #ff6ec7, #ffd166, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      /* Star display */
      .ui-stars { display: flex; gap: 4px; justify-content: center; }
      .ui-star {
        font-size: 28px; transition: transform 0.3s ease, filter 0.3s ease;
        filter: grayscale(1) brightness(0.4);
      }
      .ui-star.earned {
        filter: grayscale(0) brightness(1) drop-shadow(0 2px 6px rgba(255,209,102,0.6));
        animation: starPop 0.4s ease forwards;
      }

      @keyframes starPop {
        0% { transform: scale(0.3) rotate(-30deg); }
        50% { transform: scale(1.3) rotate(10deg); }
        100% { transform: scale(1) rotate(0); }
      }
      @keyframes slideUp {
        from { transform: translateY(30px); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
      }
    `,document.head.appendChild(e)}registerScreen(e,t){t.classList.add("ui-screen"),this._container.appendChild(t),this.screens[e]=t}registerOverlay(e,t){t.classList.add("ui-overlay"),this._container.appendChild(t),this.overlays[e]=t}showScreen(e,t){if(this.currentScreen&&this.screens[this.currentScreen]){const s=this.screens[this.currentScreen];s.classList.add("fade-out"),setTimeout(()=>{s.classList.remove("active","fade-out")},350)}e==="gameplay"&&Object.values(this.screens).forEach(s=>{s.classList.add("fade-out"),s.classList.remove("active")}),this.previousScreen=this.currentScreen,this.currentScreen=e;const n=this.screens[e];n&&requestAnimationFrame(()=>{n.classList.add("active"),requestAnimationFrame(()=>{n.classList.remove("fade-out")})}),this.emit("screenChange",{screen:e,data:t})}showOverlay(e,t){const n=this.overlays[e];n&&(requestAnimationFrame(()=>{n.classList.add("visible")}),this.emit("overlayShow",{overlay:e,data:t}))}hideOverlay(e){const t=this.overlays[e];t&&(t.classList.remove("visible"),this.emit("overlayHide",{overlay:e}))}hideAllOverlays(){Object.keys(this.overlays).forEach(e=>this.hideOverlay(e))}goBack(){this.previousScreen&&this.showScreen(this.previousScreen)}on(e,t){return this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t),()=>this.off(e,t)}off(e,t){this._listeners[e]&&(this._listeners[e]=this._listeners[e].filter(n=>n!==t))}emit(e,t){this._listeners[e]&&this._listeners[e].forEach(n=>n(t))}}const cn=new Xm;class qm{constructor(e){this.levelManager=e,this.element=null,this.scrollContainer=null,this._created=!1}create(){this._created||(this._created=!0,this._injectStyles(),this.element=document.createElement("div"),this.element.id="level-map-screen",this.element.className="ui-screen",this.element.innerHTML=this._buildHTML(),cn.registerScreen("levelMap",this.element),this._bindEvents())}refresh(){if(!this.scrollContainer)return;const e=this.levelManager.getProgress()||{completedLevels:{}},t=Array.isArray(this.levelManager.levels)?this.levelManager.levels:[],n=e.completedLevels||{};this.scrollContainer.innerHTML="";const s=document.createElement("div");s.className="lm-path",t.forEach((u,d)=>{const p=Math.ceil(u.id/5);if((u.id-1)%5===0){const N=this.levelManager.getGroupStars?this.levelManager.getGroupStars(p):0,W=this.levelManager.isGroupUnlocked?this.levelManager.isGroupUnlocked(p):!0,g=p>1&&this.levelManager.getGroupStars?this.levelManager.getGroupStars(p-1):0,w=(p-1)*5+1,k=Math.min(p*5,t.length),q=document.createElement("div");if(q.className=`lm-group-banner ${W?"unlocked":"locked"}`,p===1){const I=N>=10?" — Next Group Unlocked!":"";q.innerHTML=`⭐ Group 1 (Levels 1–5): ${N} / 15 Stars${I}`}else if(W){const I=N>=10?" — Next Group Unlocked!":"";q.innerHTML=`🔓 Group ${p} (Levels ${w}–${k}): ${N} / 15 Stars${I}`}else q.innerHTML=`🔒 Group ${p} (Levels ${w}–${k}) — Need 10 ⭐ in Group ${p-1}! (${g}/15 Stars)`;s.appendChild(q)}const m=this.levelManager.isLevelUnlocked(u.id),_=n[u.id],x=_?_.stars:0,f=!!_,h=m&&!f,M=document.createElement("div");M.className=`lm-node ${m?"unlocked":"locked"} ${h?"current":""} ${f?"completed":""}`,M.dataset.levelId=u.id;const y=Math.floor(d/4),E=d%4,C=y%2===1?3-E:E;M.style.setProperty("--col",C),M.style.setProperty("--row",y);const A=this._getObjectiveIcon(u.objective.type);M.innerHTML=`
        <div class="lm-node-circle">
          <span class="lm-node-num">${u.id}</span>
          ${m?"":'<span class="lm-lock">🔒</span>'}
          ${h?'<div class="lm-pulse-ring"></div>':""}
        </div>
        <div class="lm-node-stars">
          ${this._renderStars(x)}
        </div>
        <div class="lm-node-name">${u.name}</div>
        <div class="lm-node-objective">${A} ${this._getObjectiveText(u)}</div>
      `,m?M.addEventListener("click",()=>this._onLevelSelect(u.id)):M.addEventListener("click",()=>{ye.emit("audio:play",{sound:"invalid"});const N=Math.ceil(u.id/5);if(this.levelManager.isGroupUnlocked?this.levelManager.isGroupUnlocked(N):!0)alert(`🔒 Level ${u.id} is Locked!
Complete Level ${u.id-1} first to unlock this level.`);else{const g=N-1,w=this.levelManager.getGroupStars?this.levelManager.getGroupStars(g):0;alert(`🔒 Group ${N} is Locked!

You need at least 10 Stars in Group ${g} (Levels ${(g-1)*5+1}–${g*5}) to unlock this level group.

Currently earned in Group ${g}: ${w} / 15 Stars.`)}}),s.appendChild(M)}),this.scrollContainer.appendChild(s);const r=this.levelManager.getTotalStars?this.levelManager.getTotalStars():0,a=e.completedLevels?Object.keys(e.completedLevels).length:0,o=ii.getCurrentUser(),l=o?o.username:"Player",c=this.element.querySelector(".lm-stats");c&&(c.innerHTML=`
        <div class="lm-user-badge">
          <span class="lm-user-icon">👤</span>
          <span class="lm-user-name">${l}</span>
        </div>
        <div class="lm-stat">
          <span class="lm-stat-icon">⭐</span>
          <span class="lm-stat-value">${r}</span>
        </div>
        <div class="lm-stat">
          <span class="lm-stat-icon">✅</span>
          <span class="lm-stat-value">${a}/${t.length}</span>
        </div>
        <button id="lm-logout-btn" class="lm-logout-btn" title="Log Out">
          🚪 Logout
        </button>
      `),requestAnimationFrame(()=>{const u=this.scrollContainer.querySelector(".lm-node.current");u&&u.scrollIntoView({behavior:"smooth",block:"center"})})}_getObjectiveIcon(e){return{score:"🎯",collect:"🧺",clearIce:"🧊",timed:"⏱️"}[e]||"🎯"}_getObjectiveText(e){const t=e.objective,n=e.timeLimit?`${e.timeLimit}s`:`${e.moves||30} moves`;switch(t.type){case"score":return`Score ${t.target.toLocaleString()} • ${n}`;case"collect":return`Collect ${t.target} ${t.fruitType||"fruits"} • ${n}`;case"clearIce":return`Clear all ice • ${n}`;case"timed":return`Score ${t.target.toLocaleString()} • ${n}`;default:return`Score ${t.target||0} • ${n}`}}_renderStars(e){let t="";for(let n=0;n<3;n++)t+=`<span class="lm-star ${n<e?"earned":""}">${n<e?"⭐":"☆"}</span>`;return t}_onLevelSelect(e){ye.emit("audio:play",{sound:"buttonClick"}),ye.emit("level:select",{levelId:e})}_bindEvents(){this.scrollContainer=this.element.querySelector(".lm-scroll"),this.element.querySelectorAll(".lm-mode-btn").forEach(t=>{t.addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"});const n=t.dataset.mode;n==="endless"?ye.emit("game:startEndless"):n==="timeAttack"&&ye.emit("game:startTimeAttack")})}),this.element.addEventListener("click",t=>{t.target.closest("#lm-logout-btn")&&(ye.emit("audio:play",{sound:"buttonClick"}),ii.signOut())}),ye.on("level:complete",()=>this.refresh())}_buildHTML(){return`
      <div class="lm-container">
        <div class="lm-header">
          <div class="lm-title-row">
            <h1 class="lm-title ui-gradient-text">FRUIT CRUSH 3D</h1>
            <button class="lm-settings-btn" aria-label="Settings">⚙️</button>
          </div>
          <div class="lm-stats"></div>
          <div class="lm-modes">
            <button class="lm-mode-btn" data-mode="endless">
              <span class="lm-mode-icon">♾️</span>
              <span class="lm-mode-label">Endless</span>
            </button>
            <button class="lm-mode-btn" data-mode="timeAttack">
              <span class="lm-mode-icon">⏱️</span>
              <span class="lm-mode-label">Time Attack</span>
            </button>
          </div>
        </div>
        <div class="lm-scroll"></div>
      </div>
    `}_injectStyles(){if(document.getElementById("level-map-styles"))return;const e=document.createElement("style");e.id="level-map-styles",e.textContent=`
      .lm-container {
        width: 100%; height: 100%;
        display: flex; flex-direction: column;
        background: linear-gradient(180deg, #1a0b2e 0%, #0d0620 100%);
        overflow: hidden;
      }
      .lm-header {
        flex-shrink: 0;
        padding: 20px 24px 12px;
        padding-top: calc(20px + env(safe-area-inset-top, 0px));
        text-align: center;
      }
      .lm-title-row {
        display: flex; align-items: center; justify-content: center;
        gap: 12px; margin-bottom: 10px;
      }
      .lm-title {
        font-size: 28px; font-weight: 900;
        letter-spacing: 2px; margin: 0;
      }
      .lm-settings-btn {
        background: rgba(255,255,255,0.1); border: 2px solid rgba(255,255,255,0.15);
        border-radius: 12px; width: 42px; height: 42px;
        font-size: 20px; cursor: pointer;
        transition: transform 0.15s ease, background 0.15s ease;
        display: flex; align-items: center; justify-content: center;
      }
      .lm-settings-btn:hover { transform: scale(1.1); background: rgba(255,255,255,0.2); }
      
      .lm-stats {
        display: flex; gap: 10px; justify-content: center; align-items: center; margin-bottom: 12px;
        flex-wrap: wrap;
      }
      .lm-user-badge {
        display: flex; align-items: center; gap: 6px;
        background: linear-gradient(135deg, rgba(192,38,211,0.4), rgba(74,29,122,0.6));
        padding: 5px 14px; border-radius: 20px;
        border: 1.5px solid rgba(255,110,199,0.3);
        color: #fff; font-size: 13px; font-weight: 800;
      }
      .lm-user-icon { font-size: 14px; }
      .lm-user-name { color: #ffd166; max-width: 100px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }

      .lm-logout-btn {
        background: rgba(255, 94, 135, 0.15); border: 1px solid rgba(255, 94, 135, 0.35);
        color: #ff8ca3; border-radius: 20px; padding: 5px 12px;
        font-size: 12px; font-weight: 700; cursor: pointer;
        transition: all 0.2s ease; font-family: inherit; outline: none;
      }
      .lm-logout-btn:hover {
        background: rgba(255, 94, 135, 0.35); color: #fff; border-color: #ff5e87;
        transform: translateY(-1px);
      }

      .lm-stat {
        display: flex; align-items: center; gap: 6px;
        background: rgba(40, 18, 78, 0.6);
        padding: 6px 14px; border-radius: 20px;
        border: 1px solid rgba(255,255,255,0.1);
      }
      .lm-stat-icon { font-size: 16px; }
      .lm-stat-value { color: #fff; font-weight: 700; font-size: 15px; }

      .lm-modes {
        display: flex; gap: 10px; justify-content: center; margin-bottom: 6px;
      }
      .lm-mode-btn {
        display: flex; align-items: center; gap: 6px;
        background: rgba(255,255,255,0.08); border: 1.5px solid rgba(255,255,255,0.15);
        border-radius: 12px; padding: 8px 16px;
        color: #d9c7ff; font-size: 13px; font-weight: 600;
        cursor: pointer; transition: all 0.2s ease;
        font-family: inherit;
      }
      .lm-mode-btn:hover {
        background: rgba(255,255,255,0.15); color: #fff;
        transform: translateY(-1px);
      }
      .lm-mode-icon { font-size: 16px; }

      .lm-scroll {
        flex: 1; overflow-y: auto; overflow-x: hidden;
        padding: 20px 16px 100px;
        -webkit-overflow-scrolling: touch;
      }
      .lm-scroll::-webkit-scrollbar { width: 4px; }
      .lm-scroll::-webkit-scrollbar-track { background: transparent; }
      .lm-scroll::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 2px; }

      .lm-path {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 14px 10px;
        max-width: 420px; margin: 0 auto;
        padding: 0 8px;
      }

      .lm-group-banner {
        grid-column: 1 / -1;
        padding: 10px 14px;
        border-radius: 14px;
        margin: 12px 0 4px;
        text-align: center;
        font-size: 13px; font-weight: 800;
        box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        letter-spacing: 0.5px;
      }
      .lm-group-banner.unlocked {
        background: linear-gradient(135deg, rgba(74, 29, 122, 0.85), rgba(40, 18, 78, 0.95));
        border: 1.5px solid rgba(255, 209, 102, 0.45);
        color: #ffd166;
      }
      .lm-group-banner.locked {
        background: linear-gradient(135deg, rgba(60, 20, 35, 0.85), rgba(30, 10, 20, 0.95));
        border: 1.5px solid rgba(255, 94, 135, 0.45);
        color: #ff8ca3;
      }

      .lm-node {
        display: flex; flex-direction: column; align-items: center;
        cursor: pointer; transition: transform 0.2s ease;
        grid-column: calc(var(--col) + 1);
        animation: fadeIn 0.3s ease forwards;
      }
      .lm-node:hover { transform: scale(1.08); }
      .lm-node.locked { opacity: 0.45; cursor: not-allowed; pointer-events: none; }
      .lm-node.locked:hover { transform: none; }

      .lm-node-circle {
        width: 56px; height: 56px;
        border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        font-size: 18px; font-weight: 800;
        position: relative;
        background: linear-gradient(145deg, #4a1d7a, #6b35a3);
        border: 3px solid rgba(255,255,255,0.2);
        box-shadow: 0 4px 16px rgba(106, 53, 163, 0.5);
        transition: all 0.3s ease;
      }
      .lm-node.completed .lm-node-circle {
        background: linear-gradient(145deg, #1a7a4a, #2ea368);
        border-color: rgba(110, 255, 199, 0.4);
        box-shadow: 0 4px 16px rgba(52, 211, 153, 0.4);
      }
      .lm-node.current .lm-node-circle {
        background: linear-gradient(145deg, #c026d3, #e855a0);
        border-color: rgba(255, 94, 135, 0.5);
        box-shadow: 0 4px 20px rgba(192, 38, 211, 0.6);
        animation: pulse 2s ease infinite;
      }

      .lm-node-num { color: #fff; z-index: 1; }
      .lm-lock {
        position: absolute; font-size: 20px;
        top: 50%; left: 50%;
        transform: translate(-50%, -50%);
      }
      .lm-node.locked .lm-node-num { display: none; }

      .lm-pulse-ring {
        position: absolute; inset: -6px;
        border-radius: 50%;
        border: 2px solid rgba(255, 94, 135, 0.4);
        animation: pulse 2s ease infinite;
      }

      .lm-node-stars {
        display: flex; gap: 2px; margin-top: 4px;
      }
      .lm-star { font-size: 14px; transition: all 0.3s ease; }
      .lm-star.earned { filter: drop-shadow(0 1px 3px rgba(255,209,102,0.5)); }

      .lm-node-name {
        font-size: 10px; color: #c9a6ff;
        font-weight: 600; margin-top: 2px;
        text-align: center; max-width: 80px;
        white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
      }
      .lm-node-objective {
        font-size: 9px; color: rgba(255,255,255,0.5);
        margin-top: 1px;
      }

      .lm-connector { display: none; /* connectors are visual only, handled by grid layout */ }

      @media (max-width: 480px) {
        .lm-path { grid-template-columns: repeat(3, 1fr); gap: 12px 8px; }
        .lm-node { grid-column: auto; }
        .lm-title { font-size: 22px; }
        .lm-node-circle { width: 48px; height: 48px; font-size: 16px; }
        .lm-header { padding: 14px 16px 10px; }
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(8px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.06); }
      }
    `,document.head.appendChild(e)}}class jm{constructor(){this.element=null,this._created=!1,this._comboTimeout=null,this._scorePopups=[]}create(){this._created||(this._created=!0,this._injectStyles(),this.element=document.createElement("div"),this.element.id="level-hud",this.element.innerHTML=`
      <div class="hud-top">
        <div class="hud-panel hud-score-panel">
          <div class="hud-label">SCORE</div>
          <div class="hud-value" id="hud-score">0</div>
          <div class="hud-target" id="hud-target"></div>
        </div>
        <div class="hud-center">
          <div class="hud-level-name" id="hud-level-name"></div>
          <div class="hud-objective" id="hud-objective"></div>
        </div>
        <div class="hud-panel hud-moves-panel">
          <div class="hud-label" id="hud-moves-label">MOVES</div>
          <div class="hud-value" id="hud-moves">30</div>
        </div>
      </div>
      <div class="hud-combo" id="hud-combo"></div>
      <div class="hud-progress-bar" id="hud-progress-container">
        <div class="hud-progress-fill" id="hud-progress-fill"></div>
        <div class="hud-progress-stars" id="hud-progress-stars"></div>
      </div>
      <button class="hud-pause-btn" id="hud-pause-btn">⏸</button>
      <div class="hud-score-popups" id="hud-score-popups"></div>

      <!-- Pause Menu Overlay -->
      <div class="hud-pause-overlay" id="hud-pause-overlay">
        <div class="hud-pause-modal ui-panel">
          <h2>Paused</h2>
          <button class="ui-btn ui-btn-primary hud-pause-action" data-action="resume">▶ Resume</button>
          <button class="ui-btn ui-btn-ghost hud-pause-action" data-action="restart">↻ Restart</button>
          <button class="ui-btn ui-btn-ghost hud-pause-action" data-action="quit">✕ Quit to Map</button>
        </div>
      </div>
    `,document.body.appendChild(this.element),this._bindEvents())}show(e){this.element||this.create(),this.element.classList.add("visible"),this._updateForLevel(e)}showEndless(){this.element||this.create(),this.element.classList.add("visible"),this._setLevelName("Endless Mode"),this._setObjective("Get the highest score!"),this._setMoves("∞","MOVES"),this._setScore(0),this._hideProgressBar()}hide(){this.element&&(this.element.classList.remove("visible"),this._hidePauseMenu())}updateScore(e,t){const n=document.getElementById("hud-score");n&&(n.textContent=e.toLocaleString(),n.classList.add("score-bump"),setTimeout(()=>n.classList.remove("score-bump"),200)),t&&t>0&&this._showScorePopup(t)}updateMoves(e){const t=document.getElementById("hud-moves");t&&(t.textContent=e,typeof e=="number"&&e<=5?t.classList.add("low"):t.classList.remove("low"))}updateTime(e){const t=document.getElementById("hud-moves"),n=document.getElementById("hud-moves-label");if(n&&(n.textContent="TIME"),t){const s=Math.floor(e/60),r=Math.floor(e%60);t.textContent=`${s}:${r.toString().padStart(2,"0")}`,e<=10?t.classList.add("low"):t.classList.remove("low")}}showCombo(e){const t=document.getElementById("hud-combo");if(!t)return;this._comboTimeout&&clearTimeout(this._comboTimeout);const n=["","","Nice!","Great!","Awesome!","Amazing!","Incredible!","LEGENDARY!"],s=e>=n.length?"GODLIKE!! 🔥":n[e],r=Math.min(e,5);t.innerHTML=`
      <span class="combo-text">${s}</span>
      <span class="combo-multi">x${r}</span>
    `,t.classList.add("visible"),this._comboTimeout=setTimeout(()=>{t.classList.remove("visible")},1500)}updateProgress(e,t,n){const s=document.getElementById("hud-progress-fill"),r=document.getElementById("hud-progress-stars"),a=document.getElementById("hud-progress-container");if(!s||!a)return;a.style.display="flex";const o=n?n[2]:t,l=Math.min(100,e/o*100);s.style.width=`${l}%`,n&&r&&(r.innerHTML=n.map((c,u)=>{const d=c/o*100;return`<div class="hud-star-marker ${e>=c?"earned":""}" style="left:${d}%">⭐</div>`}).join(""))}_updateForLevel(e){this._setLevelName(`Level ${e.id}: ${e.name}`),this._setObjective(this._formatObjective(e.objective)),e.timeLimit?this._setMoves(e.timeLimit,"TIME"):e.moves?this._setMoves(e.moves,"MOVES"):this._setMoves("∞","MOVES"),this._setScore(0),this._setTarget(e.objective.target),e.stars?this.updateProgress(0,e.objective.target,e.stars):this._hideProgressBar()}_formatObjective(e){switch(e.type){case"score":return`🎯 Score ${e.target.toLocaleString()} points`;case"collect":return`🧺 Collect ${e.target} ${e.fruitType||"fruits"}`;case"clearIce":return"🧊 Clear all ice blocks";case"timed":return`⏱️ Score ${e.target.toLocaleString()} in time`;default:return`🎯 Score ${e.target||0}`}}_setLevelName(e){const t=document.getElementById("hud-level-name");t&&(t.textContent=e)}_setObjective(e){const t=document.getElementById("hud-objective");t&&(t.textContent=e)}_setMoves(e,t){const n=document.getElementById("hud-moves"),s=document.getElementById("hud-moves-label");n&&(n.textContent=e),s&&(s.textContent=t)}_setScore(e){const t=document.getElementById("hud-score");t&&(t.textContent=e.toLocaleString())}_setTarget(e){const t=document.getElementById("hud-target");t&&(t.textContent=e?`/ ${e.toLocaleString()}`:"")}_hideProgressBar(){const e=document.getElementById("hud-progress-container");e&&(e.style.display="none")}_showScorePopup(e){const t=document.getElementById("hud-score-popups");if(!t)return;const n=document.createElement("div");n.className="score-popup",n.textContent=`+${e}`,n.style.left=`${40+Math.random()*20}%`,t.appendChild(n),setTimeout(()=>n.remove(),900)}_showPauseMenu(){const e=document.getElementById("hud-pause-overlay");e&&e.classList.add("visible"),ye.emit("game:pause")}_hidePauseMenu(){const e=document.getElementById("hud-pause-overlay");e&&e.classList.remove("visible")}_bindEvents(){const e=document.getElementById("hud-pause-btn");e&&e.addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"}),this._showPauseMenu()}),this.element.querySelectorAll(".hud-pause-action").forEach(n=>{n.addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"});const s=n.dataset.action;this._hidePauseMenu(),s==="resume"?ye.emit("game:resume"):s==="restart"?ye.emit("game:restart"):s==="quit"&&ye.emit("game:quit")})}),ye.on("score:update",({score:n,delta:s})=>this.updateScore(n,s)),ye.on("moves:update",({remaining:n})=>this.updateMoves(n)),ye.on("time:update",({remaining:n})=>this.updateTime(n)),ye.on("game:combo",({level:n})=>this.showCombo(n))}_injectStyles(){if(document.getElementById("level-hud-styles"))return;const e=document.createElement("style");e.id="level-hud-styles",e.textContent=`
      #level-hud {
        position: fixed; inset: 0; z-index: 15;
        pointer-events: none;
        display: none;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      #level-hud.visible { display: block; }

      .hud-top {
        position: absolute; top: 0; left: 0; right: 0;
        display: flex; justify-content: space-between; align-items: flex-start;
        padding: 14px 16px;
        padding-top: calc(14px + env(safe-area-inset-top, 0px));
        pointer-events: auto;
      }

      .hud-panel {
        background: rgba(40, 18, 78, 0.7);
        backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        border: 1.5px solid rgba(255, 255, 255, 0.12);
        border-radius: 14px;
        padding: 8px 16px;
        text-align: center;
        min-width: 80px;
      }
      .hud-label {
        font-size: 10px; letter-spacing: 2px; text-transform: uppercase;
        color: #c9a6ff; font-weight: 700;
      }
      .hud-value {
        font-size: 24px; font-weight: 800;
        background: linear-gradient(180deg, #fff, #ffd6f5);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
        transition: transform 0.15s ease;
      }
      .hud-value.score-bump { transform: scale(1.2); }
      .hud-value.low {
        background: linear-gradient(180deg, #ff5e87, #ff2d2d);
        -webkit-background-clip: text; background-clip: text;
        animation: pulse 0.8s ease infinite;
      }
      .hud-target {
        font-size: 11px; color: rgba(255,255,255,0.4); font-weight: 600;
      }

      .hud-center {
        text-align: center; flex: 1; padding: 4px 8px;
      }
      .hud-level-name {
        font-size: 13px; font-weight: 700; color: #ffd166;
        text-shadow: 0 1px 4px rgba(0,0,0,0.5);
      }
      .hud-objective {
        font-size: 11px; color: rgba(255,255,255,0.7); margin-top: 2px;
      }

      /* Combo indicator */
      .hud-combo {
        position: fixed; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        text-align: center; pointer-events: none;
        opacity: 0; transition: opacity 0.2s ease;
        z-index: 25;
      }
      .hud-combo.visible {
        opacity: 1;
        animation: comboAppear 0.4s ease;
      }
      .combo-text {
        display: block;
        font-size: 36px; font-weight: 900;
        background: linear-gradient(90deg, #ff6ec7, #ffd166, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
        text-shadow: none;
        filter: drop-shadow(0 2px 8px rgba(0,0,0,0.5));
      }
      .combo-multi {
        display: block;
        font-size: 22px; font-weight: 800; color: #ffd166;
        text-shadow: 0 2px 6px rgba(255,209,102,0.5);
      }

      @keyframes comboAppear {
        0% { transform: translate(-50%, -50%) scale(0.5); opacity: 0; }
        60% { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        100% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
      }

      /* Progress bar */
      .hud-progress-bar {
        position: fixed; bottom: 60px; left: 16px; right: 16px;
        height: 8px;
        background: rgba(40, 18, 78, 0.6);
        border-radius: 4px; overflow: visible;
        pointer-events: none;
        bottom: calc(60px + env(safe-area-inset-bottom, 0px));
      }
      .hud-progress-fill {
        height: 100%; width: 0%;
        background: linear-gradient(90deg, #6effc7, #34d399);
        border-radius: 4px;
        transition: width 0.5s ease;
        box-shadow: 0 0 8px rgba(52,211,153,0.5);
      }
      .hud-progress-stars {
        position: absolute; top: -10px; left: 0; right: 0;
        height: 24px;
      }
      .hud-star-marker {
        position: absolute; transform: translateX(-50%);
        font-size: 14px; filter: grayscale(1) brightness(0.5);
        transition: filter 0.3s ease, transform 0.3s ease;
      }
      .hud-star-marker.earned {
        filter: none;
        transform: translateX(-50%) scale(1.3);
      }

      /* Pause button */
      .hud-pause-btn {
        position: fixed; bottom: 16px; right: 16px;
        width: 44px; height: 44px;
        border-radius: 50%;
        background: rgba(40, 18, 78, 0.7);
        backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
        border: 1.5px solid rgba(255,255,255,0.15);
        color: #fff; font-size: 18px;
        cursor: pointer; pointer-events: auto;
        transition: transform 0.15s ease;
        bottom: calc(16px + env(safe-area-inset-bottom, 0px));
        display: flex; align-items: center; justify-content: center;
      }
      .hud-pause-btn:hover { transform: scale(1.1); }

      /* Pause menu */
      .hud-pause-overlay {
        position: fixed; inset: 0;
        background: rgba(10, 4, 20, 0.7);
        backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        display: none; align-items: center; justify-content: center;
        z-index: 30; pointer-events: auto;
      }
      .hud-pause-overlay.visible { display: flex; }
      .hud-pause-modal {
        padding: 32px 40px; text-align: center;
        display: flex; flex-direction: column; gap: 12px;
      }
      .hud-pause-modal h2 {
        font-size: 28px; font-weight: 800; color: #fff;
        margin-bottom: 8px;
      }

      /* Score popups */
      .hud-score-popups {
        position: fixed; inset: 0; pointer-events: none; z-index: 20;
      }
      .score-popup {
        position: absolute; top: 40%;
        font-size: 22px; font-weight: 800; color: #ffd166;
        text-shadow: 0 2px 6px rgba(255,209,102,0.5);
        animation: scorePopup 0.9s ease forwards;
        pointer-events: none;
      }
      @keyframes scorePopup {
        0% { transform: translateY(0) scale(0.5); opacity: 0; }
        20% { transform: translateY(-10px) scale(1.2); opacity: 1; }
        100% { transform: translateY(-60px) scale(0.8); opacity: 0; }
      }

      @media (max-width: 640px) {
        .hud-panel { padding: 6px 10px; min-width: 65px; border-radius: 10px; }
        .hud-label { font-size: 9px; letter-spacing: 1px; }
        .hud-value { font-size: 20px; }
        .hud-level-name { font-size: 11px; }
        .hud-objective { font-size: 10px; }
        .combo-text { font-size: 28px; }
        .combo-multi { font-size: 18px; }
      }
    `,document.head.appendChild(e)}}class Ym{constructor(){this.element=null,this._created=!1}create(){this._created||(this._created=!0,this._injectStyles(),this.element=document.createElement("div"),this.element.id="level-complete-overlay",this.element.className="lc-overlay",this.element.innerHTML=`
      <div class="lc-backdrop"></div>
      <div class="lc-modal ui-panel">
        <div class="lc-confetti" id="lc-confetti"></div>
        <div class="lc-badge">🎉 GREAT JOB!</div>
        <h2 class="lc-title" id="lc-title">You're Done!</h2>
        <div class="lc-subtitle" id="lc-subtitle">Level Completed</div>
        <div class="lc-stars" id="lc-stars"></div>
        <div class="lc-score-section">
          <div class="lc-score-row">
            <span class="lc-score-label">Score</span>
            <span class="lc-score-value" id="lc-score">0</span>
          </div>
          <div class="lc-score-row">
            <span class="lc-score-label">Best Combo</span>
            <span class="lc-score-value" id="lc-combo">x1</span>
          </div>
          <div class="lc-score-row highlight">
            <span class="lc-score-label">High Score</span>
            <span class="lc-score-value" id="lc-highscore">0</span>
          </div>
        </div>
        <div class="lc-new-best" id="lc-new-best">🏆 New Best Score!</div>
        <div class="lc-buttons">
          <button class="ui-btn ui-btn-ghost lc-btn" id="lc-replay-btn">↻ Replay</button>
          <button class="ui-btn ui-btn-primary lc-btn" id="lc-next-btn">Next Level ▶</button>
        </div>
        <button class="lc-map-btn" id="lc-map-btn">Back to Map</button>
      </div>
    `,document.body.appendChild(this.element),this._bindEvents())}show({levelId:e,score:t=0,stars:n=3,highScore:s=0,isNewBest:r=!1,bestCombo:a=1,hasNextLevel:o=!0}){this.element||this.create();const l=(t??0).toLocaleString(),c=(s||t||0).toLocaleString();document.getElementById("lc-subtitle").textContent=`Level ${e||1} Completed!`,document.getElementById("lc-score").textContent=l,document.getElementById("lc-combo").textContent=`x${a||1}`,document.getElementById("lc-highscore").textContent=c;const u=document.getElementById("lc-new-best");u.style.display=r?"block":"none";const d=document.getElementById("lc-next-btn");o?(d.style.display="inline-flex",d.dataset.nextLevel=e+1,d.innerHTML=`Next Level ${e+1} ▶`):d.style.display="none";const p=document.getElementById("lc-replay-btn");p&&(p.dataset.levelId=e,p.innerHTML="↻ Replay"),this.element.classList.add("visible"),this._animateStars(n),this._generateConfetti(),ye.emit("audio:play",{sound:"levelComplete"})}hide(){if(!this.element)return;this.element.classList.remove("visible");const e=document.getElementById("lc-confetti");e&&(e.innerHTML="")}_animateStars(e){const t=document.getElementById("lc-stars");if(t){t.innerHTML="";for(let n=0;n<3;n++){const s=document.createElement("div");s.className="lc-star",s.textContent="⭐",n<e&&(s.classList.add("earned"),s.style.animationDelay=`${.3+n*.3}s`,setTimeout(()=>{ye.emit("audio:play",{sound:"starEarned"})},300+n*300)),t.appendChild(s)}}}_generateConfetti(){const e=document.getElementById("lc-confetti");if(!e)return;e.innerHTML="";const t=["#ff6ec7","#ffd166","#6effc7","#ff5e87","#c026d3","#34d399"],n=["●","■","▲","★","◆"];for(let s=0;s<40;s++){const r=document.createElement("div");r.className="lc-confetti-piece",r.textContent=n[Math.floor(Math.random()*n.length)],r.style.color=t[Math.floor(Math.random()*t.length)],r.style.left=`${Math.random()*100}%`,r.style.animationDelay=`${Math.random()*1.5}s`,r.style.animationDuration=`${1.5+Math.random()*2}s`,r.style.fontSize=`${10+Math.random()*14}px`,e.appendChild(r)}}_bindEvents(){document.getElementById("lc-replay-btn").addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"});const e=parseInt(document.getElementById("lc-replay-btn").dataset.levelId);this.hide(),ye.emit("level:restart",{levelId:e})}),document.getElementById("lc-next-btn").addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"});const e=parseInt(document.getElementById("lc-next-btn").dataset.nextLevel);this.hide(),ye.emit("level:select",{levelId:e})}),document.getElementById("lc-map-btn").addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"}),this.hide(),ye.emit("game:quit")})}_injectStyles(){if(document.getElementById("level-complete-styles"))return;const e=document.createElement("style");e.id="level-complete-styles",e.textContent=`
      .lc-overlay {
        position: fixed; inset: 0; z-index: 1000;
        display: none; align-items: center; justify-content: center;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      .lc-overlay.visible { display: flex; }

      .lc-backdrop {
        position: absolute; inset: 0;
        background: rgba(10, 4, 20, 0.75);
        backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        animation: fadeIn 0.3s ease;
      }

      .lc-modal {
        position: relative; z-index: 1;
        padding: 36px 44px; text-align: center;
        max-width: 380px; width: 90%;
        animation: slideUp 0.5s ease;
        overflow: hidden;
      }

      .lc-confetti {
        position: absolute; inset: 0;
        pointer-events: none; overflow: hidden;
      }
      .lc-confetti-piece {
        position: absolute; top: -20px;
        animation: confettiFall linear forwards;
        pointer-events: none; opacity: 0.8;
      }
      @keyframes confettiFall {
        0% { transform: translateY(-20px) rotate(0deg); opacity: 0; }
        10% { opacity: 0.8; }
        100% { transform: translateY(400px) rotate(720deg); opacity: 0; }
      }

      .lc-badge {
        font-size: 14px; font-weight: 800; text-transform: uppercase;
        color: #6effc7; letter-spacing: 1.5px; margin-bottom: 4px;
        text-shadow: 0 0 12px rgba(110, 255, 199, 0.6);
        animation: pulse 1.5s ease infinite;
      }

      .lc-title {
        font-size: 32px; font-weight: 900; margin-bottom: 2px;
        background: linear-gradient(90deg, #ffd166, #ff6ec7, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .lc-subtitle {
        font-size: 14px; color: #c9a6ff; font-weight: 600;
        margin-bottom: 16px;
      }

      .lc-stars {
        display: flex; gap: 8px; justify-content: center;
        margin-bottom: 20px; height: 48px;
      }
      .lc-star {
        font-size: 40px;
        filter: grayscale(1) brightness(0.3);
        transition: filter 0.3s ease;
        transform: scale(0.5);
      }
      .lc-star.earned {
        filter: none;
        animation: starBounce 0.6s ease forwards;
      }
      @keyframes starBounce {
        0% { transform: scale(0.2) rotate(-45deg); filter: brightness(2); }
        50% { transform: scale(1.4) rotate(10deg); }
        70% { transform: scale(0.9) rotate(-5deg); }
        100% { transform: scale(1) rotate(0deg); filter: none; }
      }

      .lc-score-section {
        margin-bottom: 16px;
      }
      .lc-score-row {
        display: flex; justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .lc-score-row.highlight {
        border-bottom: none;
        margin-top: 4px; padding-top: 8px;
        border-top: 2px solid rgba(255,209,102,0.3);
      }
      .lc-score-label { color: #c9a6ff; font-size: 14px; font-weight: 600; }
      .lc-score-value { color: #fff; font-size: 14px; font-weight: 800; }
      .lc-score-row.highlight .lc-score-value { color: #ffd166; font-size: 16px; }

      .lc-new-best {
        display: none;
        font-size: 18px; font-weight: 800; color: #ffd166;
        margin-bottom: 12px;
        animation: pulse 1s ease infinite;
        text-shadow: 0 2px 8px rgba(255,209,102,0.5);
      }

      .lc-buttons {
        display: flex; gap: 12px; justify-content: center;
        margin-top: 18px; margin-bottom: 12px; width: 100%;
      }
      .lc-btn {
        flex: 1; padding: 14px 18px; font-size: 15px; font-weight: 800;
        border-radius: 14px; display: flex; align-items: center; justify-content: center;
        gap: 6px; box-shadow: 0 6px 20px rgba(0,0,0,0.3);
      }

      .lc-map-btn {
        background: none; border: none; color: rgba(255,255,255,0.6);
        font-size: 13px; font-weight: 600; cursor: pointer;
        transition: color 0.2s ease; margin-top: 4px;
        font-family: inherit;
      }
      .lc-map-btn:hover { color: #fff; text-decoration: underline; }

      @media (max-width: 480px) {
        .lc-modal { padding: 28px 20px; }
        .lc-title { font-size: 26px; }
        .lc-star { font-size: 34px; }
        .lc-buttons { flex-direction: column; gap: 10px; }
        .lc-btn { width: 100%; padding: 14px; }
      }
    `,document.head.appendChild(e)}}class Km{constructor(){this.element=null,this._created=!1}create(){this._created||(this._created=!0,this._injectStyles(),this.element=document.createElement("div"),this.element.id="level-failed-overlay",this.element.className="lf-overlay",this.element.innerHTML=`
      <div class="lf-backdrop"></div>
      <div class="lf-modal ui-panel">
        <div class="lf-emoji">😔</div>
        <h2 class="lf-title" id="lf-title">Out of Moves!</h2>
        <p class="lf-subtitle" id="lf-subtitle">You were so close!</p>
        <div class="lf-score-section">
          <div class="lf-score-row">
            <span class="lf-label">Your Score</span>
            <span class="lf-value" id="lf-score">0</span>
          </div>
          <div class="lf-score-row">
            <span class="lf-label">Target</span>
            <span class="lf-value" id="lf-target">0</span>
          </div>
        </div>
        <div class="lf-extra-moves" id="lf-extra-moves">
          <button class="ui-btn lf-ad-btn" id="lf-ad-btn">
            <span class="lf-ad-icon">🎬</span>
            <span class="lf-ad-text">Watch Ad for +5 Moves</span>
          </button>
        </div>
        <div class="lf-buttons">
          <button class="ui-btn ui-btn-secondary lf-btn" id="lf-retry-btn">↻ Try Again</button>
          <button class="ui-btn ui-btn-ghost lf-btn" id="lf-quit-btn">Back to Map</button>
        </div>
      </div>
    `,document.body.appendChild(this.element),this._bindEvents())}show({levelId:e,score:t,target:n,reason:s}){this.element||this.create();const r={moves:"Out of Moves!",time:"Time's Up!",objective:"Objective Failed!"},a={moves:"You were so close!",time:"Better luck next time!",objective:"Try a different strategy!"};document.getElementById("lf-title").textContent=r[s]||"Level Failed!",document.getElementById("lf-subtitle").textContent=a[s]||"Keep trying!",document.getElementById("lf-score").textContent=t.toLocaleString(),document.getElementById("lf-target").textContent=n.toLocaleString(),document.getElementById("lf-retry-btn").dataset.levelId=e;const o=document.getElementById("lf-extra-moves");o.style.display=s==="moves"?"block":"none",this.element.classList.add("visible"),ye.emit("audio:play",{sound:"levelFailed"})}hide(){this.element&&this.element.classList.remove("visible")}_bindEvents(){document.getElementById("lf-retry-btn").addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"});const e=parseInt(document.getElementById("lf-retry-btn").dataset.levelId);this.hide(),ye.emit("level:restart",{levelId:e})}),document.getElementById("lf-quit-btn").addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"}),this.hide(),ye.emit("game:quit")}),document.getElementById("lf-ad-btn").addEventListener("click",()=>{ye.emit("audio:play",{sound:"buttonClick"}),this.hide(),ye.emit("game:extraMoves",{count:5})})}_injectStyles(){if(document.getElementById("level-failed-styles"))return;const e=document.createElement("style");e.id="level-failed-styles",e.textContent=`
      .lf-overlay {
        position: fixed; inset: 0; z-index: 1000;
        display: none; align-items: center; justify-content: center;
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      .lf-overlay.visible { display: flex; }

      .lf-backdrop {
        position: absolute; inset: 0;
        background: rgba(10, 4, 20, 0.8);
        backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px);
        animation: fadeIn 0.3s ease;
      }

      .lf-modal {
        position: relative; z-index: 1;
        padding: 32px 40px; text-align: center;
        max-width: 360px; width: 90%;
        animation: slideUp 0.5s ease;
      }

      .lf-emoji {
        font-size: 48px; margin-bottom: 8px;
        animation: lf-shake 0.5s ease 0.3s;
      }
      @keyframes lf-shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-8px); }
        75% { transform: translateX(8px); }
      }

      .lf-title {
        font-size: 26px; font-weight: 900;
        color: #ff5e87; margin-bottom: 4px;
      }
      .lf-subtitle {
        font-size: 14px; color: #c9a6ff; margin-bottom: 20px;
      }

      .lf-score-section { margin-bottom: 20px; }
      .lf-score-row {
        display: flex; justify-content: space-between;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255,255,255,0.08);
      }
      .lf-label { color: #c9a6ff; font-size: 14px; font-weight: 600; }
      .lf-value { color: #fff; font-size: 14px; font-weight: 800; }

      .lf-extra-moves { margin-bottom: 16px; }
      .lf-ad-btn {
        width: 100%;
        background: linear-gradient(135deg, #ffd166, #ff9800);
        color: #4a2800;
        display: flex; align-items: center; justify-content: center; gap: 8px;
        box-shadow: 0 6px 18px rgba(255,152,0,0.4);
        padding: 14px 20px;
      }
      .lf-ad-icon { font-size: 20px; }
      .lf-ad-text { font-weight: 700; }

      .lf-buttons {
        display: flex; flex-direction: column; gap: 10px;
      }
      .lf-btn { width: 100%; }

      @media (max-width: 480px) {
        .lf-modal { padding: 24px 20px; }
        .lf-title { font-size: 22px; }
        .lf-emoji { font-size: 40px; }
      }
    `,document.head.appendChild(e)}}class $m{constructor(){this.container=null,this.isVisible=!1,this.changeCallback=null}create(){if(this.container)return;this.container=document.createElement("div"),this.container.className="audio-settings-container",this.container.style.cssText=`
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -40%);
      width: 320px;
      background: rgba(40, 18, 78, 0.85);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 2px solid rgba(255, 255, 255, 0.15);
      border-radius: 20px;
      padding: 24px;
      color: white;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 1000;
    `;const e=document.createElement("h2");e.textContent="Audio Settings",e.style.cssText=`
      margin: 0 0 20px 0;
      text-align: center;
      font-size: 24px;
      text-transform: uppercase;
      letter-spacing: 2px;
      background: linear-gradient(90deg, #ff6ec7, #ffd166);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `,this.container.appendChild(e);const t=st.getSettings();this._createSlider("Master Volume","master",t.masterVolume*100,r=>{st.setMasterVolume(r/100),this._notifyChange()}),this._createSlider("Music Volume","music",t.musicVolume*100,r=>{st.setMusicVolume(r/100),this._notifyChange()}),this._createSlider("SFX Volume","sfx",t.sfxVolume*100,r=>{st.setSFXVolume(r/100),this._notifyChange()});const n=document.createElement("button");n.textContent=t.muted?"Unmute All":"Mute All",n.style.cssText=`
      width: 100%;
      padding: 12px;
      margin-top: 20px;
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: all 0.2s;
    `,n.onmouseover=()=>n.style.background="rgba(255, 255, 255, 0.2)",n.onmouseout=()=>n.style.background="rgba(255, 255, 255, 0.1)",n.onclick=()=>{const r=st.toggleMute();n.textContent=r?"Unmute All":"Mute All",this._notifyChange(),st.playSFX("buttonClick")},this.container.appendChild(n);const s=document.createElement("button");if(s.textContent="Close",s.style.cssText=`
      width: 100%;
      padding: 12px;
      margin-top: 10px;
      background: linear-gradient(90deg, #ff6ec7, #ffd166);
      border: none;
      border-radius: 10px;
      color: #1a0b2e;
      font-weight: bold;
      cursor: pointer;
      transition: opacity 0.2s;
    `,s.onmouseover=()=>s.style.opacity="0.9",s.onmouseout=()=>s.style.opacity="1",s.onclick=()=>{this.hide(),st.playSFX("buttonClick")},this.container.appendChild(s),document.body.appendChild(this.container),!document.getElementById("audio-settings-styles")){const r=document.createElement("style");r.id="audio-settings-styles",r.textContent=`
        .audio-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.2);
          outline: none;
        }
        .audio-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6effc7;
          cursor: pointer;
          box-shadow: 0 0 10px rgba(110, 255, 199, 0.5);
        }
        .audio-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #6effc7;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(110, 255, 199, 0.5);
        }
      `,document.head.appendChild(r)}}_createSlider(e,t,n,s){const r=document.createElement("div");r.style.cssText="margin-bottom: 15px;";const a=document.createElement("div");a.textContent=e,a.style.cssText="margin-bottom: 8px; font-size: 14px; color: #e0e0e0;",r.appendChild(a);const o=document.createElement("input");o.type="range",o.min="0",o.max="100",o.value=n,o.className="audio-slider",o.oninput=l=>{s(l.target.value)},o.onchange=()=>{st.playSFX("select")},r.appendChild(o),this.container.appendChild(r)}show(){this.container||this.create(),this.container.style.visibility="visible",this.container.style.opacity="1",this.container.style.transform="translate(-50%, -50%)",this.isVisible=!0}hide(){this.container&&(this.container.style.opacity="0",this.container.style.transform="translate(-50%, -40%)",setTimeout(()=>{this.isVisible||(this.container.style.visibility="hidden")},300),this.isVisible=!1)}toggle(){this.isVisible?this.hide():this.show()}onSettingsChange(e){this.changeCallback=e}_notifyChange(){this.changeCallback&&this.changeCallback(st.getSettings())}}class Zm{constructor(){this.element=null,this._created=!1,this.mode="signin"}create(){this._created||(this._created=!0,this._injectStyles(),this.element=document.createElement("div"),this.element.id="auth-modal-screen",this.element.className="ui-screen",this.element.innerHTML=this._buildHTML(),cn.registerScreen("auth",this.element),this._bindEvents())}show(e="signin"){this.element||this.create(),this.setMode(e),this._clearAlert(),cn.showScreen("auth")}setMode(e){this.mode=e;const t=this.element.querySelector("#auth-tab-signin"),n=this.element.querySelector("#auth-tab-signup"),s=this.element.querySelector("#auth-card-title"),r=this.element.querySelector("#auth-submit-btn");e==="signin"?(t==null||t.classList.add("active"),n==null||n.classList.remove("active"),s&&(s.textContent="Welcome Back!"),r&&(r.innerHTML="🔑 Sign In ▶")):(n==null||n.classList.add("active"),t==null||t.classList.remove("active"),s&&(s.textContent="Create Player Account"),r&&(r.innerHTML="✨ Register Account ▶"))}_showAlert(e,t="error"){const n=this.element.querySelector("#auth-alert-banner");n&&(n.textContent=e,n.className=`auth-alert ${t}`,n.style.display="block")}_clearAlert(){const e=this.element.querySelector("#auth-alert-banner");e&&(e.style.display="none",e.textContent="")}_buildHTML(){return`
      <div class="auth-modal-backdrop">
        <div class="auth-modal-card ui-panel">
          <div class="auth-brand">
            <span class="auth-brand-icon">🍎🍊🍇</span>
            <h1 class="auth-brand-title">Fruit Crush 3D</h1>
          </div>

          <div class="auth-tabs">
            <button type="button" class="auth-tab active" id="auth-tab-signin">🔑 Sign In</button>
            <button type="button" class="auth-tab" id="auth-tab-signup">✨ Register</button>
          </div>

          <h2 class="auth-card-title" id="auth-card-title">Welcome Back!</h2>
          <div id="auth-alert-banner" class="auth-alert" style="display:none;"></div>

          <form id="auth-form" class="auth-form-body">
            <div class="auth-field">
              <label for="auth-username-input">User ID / Username</label>
              <input 
                type="text" 
                id="auth-username-input" 
                class="auth-input" 
                placeholder="e.g. Alex123" 
                maxlength="20" 
                required 
                autocomplete="username" 
              />
            </div>

            <div class="auth-field">
              <label for="auth-password-input">Password</label>
              <div class="auth-password-wrapper">
                <input 
                  type="password" 
                  id="auth-password-input" 
                  class="auth-input" 
                  placeholder="At least 4 characters" 
                  minlength="4" 
                  required 
                  autocomplete="current-password" 
                />
                <button type="button" id="auth-toggle-pwd" class="auth-pwd-toggle" title="Toggle password visibility">👁️</button>
              </div>
            </div>

            <button type="submit" id="auth-submit-btn" class="ui-btn ui-btn-primary auth-btn">
              🔑 Sign In ▶
            </button>
          </form>
        </div>
      </div>
    `}_bindEvents(){const e=this.element.querySelector("#auth-tab-signin"),t=this.element.querySelector("#auth-tab-signup"),n=this.element.querySelector("#auth-form"),s=this.element.querySelector("#auth-password-input"),r=this.element.querySelector("#auth-toggle-pwd");e==null||e.addEventListener("click",()=>this.setMode("signin")),t==null||t.addEventListener("click",()=>this.setMode("signup")),r==null||r.addEventListener("click",()=>{s.type==="password"?(s.type="text",r.textContent="🔒"):(s.type="password",r.textContent="👁️")}),n==null||n.addEventListener("submit",a=>{a.preventDefault();const o=this.element.querySelector("#auth-username-input").value,l=s.value;this._clearAlert();let c;this.mode==="signin"?c=ii.signIn(o,l):c=ii.signUp(o,l),c.success?this._showAlert(`Welcome, ${c.user.username}! Loading your game...`,"success"):this._showAlert(c.message,"error")})}_injectStyles(){if(document.getElementById("auth-modal-styles"))return;const e=document.createElement("style");e.id="auth-modal-styles",e.textContent=`
      #auth-modal-screen {
        position: fixed; inset: 0; z-index: 2000;
        display: none; align-items: center; justify-content: center;
        background: radial-gradient(circle at center, #2e1052 0%, #0d0418 100%);
        font-family: 'Nunito', 'Segoe UI', sans-serif;
      }
      #auth-modal-screen.active {
        display: flex !important;
        opacity: 1 !important;
      }

      .auth-modal-backdrop {
        width: 100%; height: 100%;
        display: flex; align-items: center; justify-content: center;
        padding: 20px; box-sizing: border-box;
      }

      .auth-modal-card {
        width: 100%; max-width: 400px;
        padding: 32px 28px; text-align: center;
        position: relative; border-radius: 24px;
        box-shadow: 0 20px 60px rgba(0,0,0,0.7);
        animation: slideUp 0.4s ease;
      }

      .auth-brand { margin-bottom: 16px; }
      .auth-brand-icon { font-size: 36px; display: block; margin-bottom: 4px; }
      .auth-brand-title {
        font-size: 26px; font-weight: 900; letter-spacing: 1px;
        background: linear-gradient(90deg, #ff6ec7, #ffd166, #6effc7);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .auth-tabs {
        display: flex; gap: 8px; background: rgba(255,255,255,0.06);
        padding: 4px; border-radius: 14px; margin-bottom: 20px;
      }
      .auth-tab {
        flex: 1; padding: 10px; border: none; background: none;
        color: rgba(255,255,255,0.6); font-size: 14px; font-weight: 700;
        border-radius: 10px; cursor: pointer; transition: all 0.2s ease;
        font-family: inherit;
      }
      .auth-tab:hover { color: #fff; }
      .auth-tab.active {
        background: linear-gradient(135deg, #c026d3, #ff5e87);
        color: #fff; box-shadow: 0 4px 12px rgba(192,38,211,0.4);
      }

      .auth-card-title {
        font-size: 18px; font-weight: 800; color: #fff; margin-bottom: 16px;
      }

      .auth-alert {
        padding: 10px 14px; border-radius: 12px; font-size: 13px; font-weight: 700;
        margin-bottom: 16px; text-align: left; line-height: 1.4;
      }
      .auth-alert.error {
        background: rgba(255, 94, 135, 0.2); border: 1px solid rgba(255, 94, 135, 0.4);
        color: #ff8ca3;
      }
      .auth-alert.success {
        background: rgba(110, 255, 199, 0.2); border: 1px solid rgba(110, 255, 199, 0.4);
        color: #6effc7;
      }

      .auth-form-body {
        display: flex; flex-direction: column; gap: 14px; text-align: left;
      }
      .auth-field label {
        display: block; font-size: 12px; font-weight: 700; color: #ffd166;
        margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.5px;
      }
      .auth-input {
        width: 100%; padding: 12px 14px;
        border-radius: 12px; border: 1.5px solid rgba(255,255,255,0.2);
        background: rgba(255,255,255,0.08); color: #fff;
        font-size: 15px; font-weight: 700; outline: none;
        transition: border-color 0.2s ease, background 0.2s ease;
        font-family: inherit; box-sizing: border-box;
      }
      .auth-input:focus {
        border-color: #6effc7; background: rgba(255,255,255,0.15);
      }

      .auth-password-wrapper {
        position: relative; display: flex; align-items: center;
      }
      .auth-pwd-toggle {
        position: absolute; right: 10px; background: none; border: none;
        font-size: 16px; cursor: pointer; opacity: 0.7; transition: opacity 0.2s ease;
      }
      .auth-pwd-toggle:hover { opacity: 1; }

      .auth-btn {
        width: 100%; padding: 14px; font-size: 16px; font-weight: 800;
        margin-top: 8px; border-radius: 14px;
      }
    `,document.head.appendChild(e)}}const Ze=8,Oi=1,Jm=10,co=[{fruit:"apple",body:15022389,accent:3046706},{fruit:"orange",body:16485376,accent:3046706},{fruit:"lemon",body:16635957,accent:5606191},{fruit:"pear",body:10275941,accent:3369246},{fruit:"blueberry",body:6056896,accent:1713022},{fruit:"grapes",body:9315498,accent:3369246}],Qm=[15022389,16485376,16635957,10275941,6056896,9315498],eg=document.getElementById("app"),vt=new gm;vt.background=new Be(1706798);vt.fog=new no(1706798,14,26);const jt=new Vt(50,window.innerWidth/window.innerHeight,.1,100);jt.position.set(0,11,9);jt.lookAt(0,0,0);const Lt=new Hl({antialias:!0});Lt.setSize(window.innerWidth,window.innerHeight);Lt.setPixelRatio(Math.min(window.devicePixelRatio,2));Lt.shadowMap.enabled=!0;Lt.shadowMap.type=dl;Lt.toneMapping=fl;Lt.toneMappingExposure=1.15;eg.appendChild(Lt.domElement);const tg=new ql(11771355,.65);vt.add(tg);const sn=new Xl(16777215,1.4);sn.position.set(6,14,8);sn.castShadow=!0;sn.shadow.mapSize.set(2048,2048);sn.shadow.camera.left=-8;sn.shadow.camera.right=8;sn.shadow.camera.top=8;sn.shadow.camera.bottom=-8;sn.shadow.camera.near=1;sn.shadow.camera.far=40;sn.shadow.bias=-4e-4;vt.add(sn);const uo=new Wl(16740039,.8,30);uo.position.set(-6,5,-5);vt.add(uo);const ho=new Wl(7274439,.5,30);ho.position.set(6,4,-4);vt.add(ho);const rl=Ze*Oi,ng=new nn(rl+1.2,.6,rl+1.2),ig=new En({color:2757972,roughness:.4,metalness:.3}),fo=new je(ng,ig);fo.position.y=-.85;fo.receiveShadow=!0;vt.add(fo);const jl=new Ri,sg=new nn(Oi*.94,.12,Oi*.94);for(let i=0;i<Ze;i++)for(let e=0;e<Ze;e++){const t=(i+e)%2===0,n=new En({color:t?3809131:4662402,roughness:.6,metalness:.1}),s=new je(sg,n);s.position.copy(Bn(i,e)),s.position.y=-.45,s.receiveShadow=!0,jl.add(s)}vt.add(jl);const hn=new Tm(jt,Lt.domElement);hn.enableDamping=!0;hn.dampingFactor=.08;hn.minDistance=8;hn.maxDistance=24;hn.minPolarAngle=.2;hn.maxPolarAngle=Math.PI/2.15;hn.target.set(0,0,0);hn.enablePan=!1;const rg=new L(0,11,9).normalize(),og=Math.sqrt(11*11+9*9);function po(){const i=window.innerWidth,e=window.innerHeight,t=i<640;let n=1;t?n=i<e?1.55:1.25:i<900&&(n=1.15);const s=og*n;jt.position.copy(rg).multiplyScalar(s),jt.lookAt(0,0,0),jt.fov=t?58:50,jt.aspect=i/e,jt.updateProjectionMatrix(),hn.update()}const si=new Cm,Qn=new Nm(vt),Os=new Om(vt),Yl=new $m,Fs=new qm(si),un=new jm,mo=new Ym,go=new Km,Rs=new Zm;function Bn(i,e){const t=(Ze-1)/2;return new L((e-t)*Oi,0,(i-t)*Oi)}function Gt(i,e=0){return new En({color:i,emissive:e,emissiveIntensity:.12,roughness:.28,metalness:.08})}const ag=i=>new En({color:i,roughness:.55,metalness:.05}),lg=new En({color:7162945,roughness:.9});function Pr(i=.22){const e=new io(.035,.045,i,8),t=new je(e,lg);return t.castShadow=!0,t}function Yi(i,e=1){const t=new Rt(.13*e,10,8),n=new je(t,ag(i));return n.scale.set(1,.32,.6),n.castShadow=!0,n}function cg(i){const e=co[i],t=new Ri;switch(t.userData.fruit=e.fruit,e.fruit){case"apple":{const n=new je(new Rt(.42,28,22),Gt(15022389,4849664));n.scale.set(1,.95,1),t.add(n);const s=Pr(.2);s.position.set(0,.42,0),s.rotation.z=.2,t.add(s);const r=Yi(e.accent,1.15);r.position.set(.16,.46,0),r.rotation.z=-.6,t.add(r);break}case"orange":{const n=new je(new Rt(.4,30,24),Gt(16485376,4860928));t.add(n);const s=new je(new Rt(.08,12,10),Gt(12544512));s.position.y=.38,t.add(s);const r=Yi(e.accent,1);r.position.set(.13,.42,0),r.rotation.z=-.7,t.add(r);break}case"lemon":{const n=new je(new Rt(.34,24,20),Gt(16635957,4866304));n.scale.set(1,1,1.5),t.add(n);const s=new Rt(.07,10,8),r=new je(s,Gt(16361509));r.position.z=.5,t.add(r);const a=new je(s,Gt(16361509));a.position.z=-.5,t.add(a);const o=Yi(e.accent,.9);o.position.set(.12,.28,0),o.rotation.z=-.7,t.add(o);break}case"pear":{const n=new je(new Rt(.36,24,20),Gt(10275941,1782566));n.scale.set(1,1.25,1),t.add(n);const s=new je(new Rt(.22,18,16),Gt(11457921,1782566));s.position.y=.42,t.add(s);const r=Pr(.18);r.position.set(0,.66,0),t.add(r);const a=Yi(e.accent,1);a.position.set(.14,.66,0),a.rotation.z=-.6,t.add(a);break}case"blueberry":{const n=new je(new Rt(.4,26,20),Gt(6056896,856880));t.add(n);const s=new je(new Rt(.32,18,14,0,Math.PI*2,0,Math.PI/2.4),Gt(7964363));s.position.y=.12,t.add(s);const r=Gt(3754411);for(let a=0;a<5;a++){const o=new je(new nn(.06,.03,.16),r);o.position.y=.39,o.rotation.y=a/5*Math.PI*2,t.add(o)}break}case"grapes":{const n=new Rt(.16,14,12),s=Gt(9315498,2752563);[[0,0,0],[-.18,.08,.05],[.18,.08,.05],[-.1,.16,-.1],[.1,.16,-.1],[0,.26,.02]].forEach(([l,c,u])=>{const d=new je(n,s);d.position.set(l,c-.05,u),t.add(d)});const a=Pr(.26);a.position.set(0,.48,0),t.add(a);const o=Yi(e.accent,1.1);o.position.set(.16,.52,0),o.rotation.z=-.5,t.add(o);break}default:{const n=new je(new Rt(.4,24,20),Gt(e.body));t.add(n)}}return t.scale.setScalar(1),t.traverse(n=>{n.isMesh&&(n.castShadow=!0,n.receiveShadow=!0)}),t}const ke=[];let Qt=null,ei=!1,bn=!1,Ht=0,Kt=30,Yt=null,Cs=null,ln="level",ct=null,Xr=6,It=0,Fi=1,Bs={};const ol=new Em,qr=new Se,$i=ug();vt.add($i);function ug(){const i=new oo(.42,.5,32),e=new Ws({color:16777215,side:on,transparent:!0,opacity:0}),t=new je(i,e);return t.rotation.x=-Math.PI/2,t.position.y=.05,t}function _o(i=null){for(let e=0;e<ke.length;e++)if(ke[e])for(let t=0;t<ke[e].length;t++){const n=ke[e][t];n&&n.mesh&&vt.remove(n.mesh)}ke.length=0,Qn.clearAll(),Xr=(i==null?void 0:i.fruitTypes)||6,i&&Qn.placeObstaclesFromConfig(i);for(let e=0;e<Ze;e++){ke[e]=[];for(let t=0;t<Ze;t++){const n=Qn.getObstacleAt(e,t);if(n&&!n.canSwap()){ke[e][t]=null;continue}let s;do s=Math.floor(Math.random()*Xr);while(hg(e,t,s));ke[e][t]=vo(s,e,t)}}}function hg(i,e,t){var n,s,r,a,o,l;return e>=2&&((n=ke[i][e-1])==null?void 0:n.type)===t&&((s=ke[i][e-2])==null?void 0:s.type)===t||i>=2&&((a=(r=ke[i-1])==null?void 0:r[e])==null?void 0:a.type)===t&&((l=(o=ke[i-2])==null?void 0:o[e])==null?void 0:l.type)===t}function vo(i,e,t,n=null){let s;n?s=Gm(n,co[i].fruit):s=cg(i);const r=Bn(e,t);return s.position.set(r.x,0,r.z),vt.add(s),{type:i,mesh:s,row:e,col:t,powerUp:n}}function jr(){const i=new Set;for(let e=0;e<Ze;e++){let t=0;for(let n=1;n<=Ze;n++){const s=ke[e][n-1],r=n<Ze?ke[e][n]:null;if(!r||!s||r.type!==s.type){if(n-t>=3&&ke[e][t])for(let o=t;o<n;o++)i.add(`${e},${o}`);t=n}}}for(let e=0;e<Ze;e++){let t=0;for(let n=1;n<=Ze;n++){const s=ke[n-1][e],r=n<Ze?ke[n][e]:null;if(!r||!s||r.type!==s.type){if(n-t>=3&&ke[t][e])for(let o=t;o<n;o++)i.add(`${o},${e}`);t=n}}}return i}const al=10,ft={active:!1,pointerId:-1,startX:0,startY:0,moved:!1};function dg(i){i.preventDefault(),st.init(),!(ei||bn)&&(ln!=="endless"&&Kt<=0||Yt!==null&&Yt<=0||ft.active||(ft.active=!0,ft.pointerId=i.pointerId,ft.startX=i.clientX,ft.startY=i.clientY,ft.moved=!1))}function fg(i){if(ft.active&&i.pointerId===ft.pointerId){const t=i.clientX-ft.startX,n=i.clientY-ft.startY;if(t*t+n*n>al*al){ft.moved=!0,$i.material.opacity=0;return}}if(i.pointerType!=="mouse"||i.buttons!==0||ei||bn)return;Kl(i);const e=$l();if(e){const t=Bn(e.row,e.col);$i.position.set(t.x,.05,t.z),$i.material.opacity=.5}else $i.material.opacity=0}function pg(i){if(!ft.active||i.pointerId!==ft.pointerId)return;const e=!ft.moved;if(ft.active=!1,ft.pointerId=-1,!e||ei||bn||ln!=="endless"&&Kt<=0)return;Kl(i);const t=$l();t&&_g(t)}function mg(i){ft.pointerId===i.pointerId&&(ft.active=!1,ft.pointerId=-1)}function Kl(i){const e=Lt.domElement.getBoundingClientRect();qr.x=(i.clientX-e.left)/e.width*2-1,qr.y=-((i.clientY-e.top)/e.height)*2+1}function $l(){ol.setFromCamera(qr,jt);const i=[];for(let n=0;n<Ze;n++)for(let s=0;s<Ze;s++)ke[n][s]&&i.push(ke[n][s].mesh);const e=ol.intersectObjects(i,!0);if(e.length===0)return null;let t=e[0].object;for(;t&&!gg(t);)t=t.parent;if(!t)return null;for(let n=0;n<Ze;n++)for(let s=0;s<Ze;s++)if(ke[n][s]&&ke[n][s].mesh===t)return ke[n][s];return null}function gg(i){for(let e=0;e<Ze;e++)for(let t=0;t<Ze;t++)if(ke[e][t]&&ke[e][t].mesh===i)return!0;return!1}function _g(i){const e=Qn.getObstacleAt(i.row,i.col);if(e&&!e.canSwap()){st.playSFX("invalid");return}if(!Qt){Qt=i,Ki(i,!0),st.playSFX("select");return}if(Qt===i){Ki(Qt,!1),Qt=null,st.playSFX("select");return}const t=Math.abs(Qt.row-i.row),n=Math.abs(Qt.col-i.col);if(t===1&&n===0||t===0&&n===1){const r=Qt;Ki(r,!1),Qt=null,vg(r,i)}else Ki(Qt,!1),Qt=i,Ki(i,!0),st.playSFX("select")}function Ki(i,e){if(!i)return;const t=e?.55:0;Kn(i.mesh,{y:t},160)}async function vg(i,e){ei=!0,st.playSFX("swap"),await cl(i,e),ll(i,e);const t=jr(),n=i.powerUp||e.powerUp;if(t.size===0&&!n){st.playSFX("invalid"),await cl(i,e),ll(i,e),ei=!1;return}ln!=="endless"&&Kt>0&&(Kt--,ye.emit("moves:update",{remaining:Kt})),It=0,await xg(t,i,e),ei=!1,tc()}function ll(i,e){ke[i.row][i.col]=e,ke[e.row][e.col]=i;const t=i.row,n=i.col;i.row=e.row,i.col=e.col,e.row=t,e.col=n}async function cl(i,e){const t=Bn(i.row,i.col),n=Bn(e.row,e.col),s=.7;await Promise.all([Kn(i.mesh,{x:t.x,z:t.z,y:s},150),Kn(e.mesh,{x:n.x,z:n.z,y:s},150)]),await Promise.all([Kn(i.mesh,{x:n.x,z:n.z,y:0},180),Kn(e.mesh,{x:t.x,z:t.z,y:0},180)])}async function xg(i,e=null,t=null){let n=i||jr();for(;n.size>0;){if(It++,It>Fi&&(Fi=It),It>=2)ye.emit("game:combo",{level:It}),st.playSFX(`combo${Math.min(It,8)}`),Bm(vt,It),It>=3&&Fm(jt,.2+It*.05,250);else{const o=n.size,l=o>=5?"match5":o>=4?"match4":"match3";st.playSFX(l)}const s=Array.from(n).map(o=>{const[l,c]=o.split(",").map(Number);return{row:l,col:c}}),r=km(s);let a=null;r&&e&&(a=s.find(o=>o.row===e.row&&o.col===e.col)||s.find(o=>o.row===t.row&&o.col===t.col)||s[0]),await yg(n,a,r),Sg(),await Eg(),await bg(),await Tg(),n=jr(),e=null,t=null}}async function yg(i,e=null,t=null){const n=i.size,s=Math.min(It,5),r=n*Jm*s;Ht+=r,ye.emit("score:update",{score:Ht,delta:r}),ct!=null&&ct.stars&&un.updateProgress(Ht,ct.objective.target,ct.stars);const a=[];i.forEach(o=>{const[l,c]=o.split(",").map(Number),u=ke[l][c];if(u){const d=co[u.type].fruit;Bs[d]=(Bs[d]||0)+1,Qn.handleAdjacentMatch(l,c);const p=Bn(l,c),m=Qm[u.type];Os.burst(p,m,18),e&&l===e.row&&c===e.col&&t?(vt.remove(u.mesh),ke[l][c]=vo(u.type,l,c,t),Os.sparkle(p,16765286,25),st.playSFX("powerup")):(a.push(Mg(u)),ke[l][c]=null)}}),await Promise.all(a)}function Mg(i){const e=i.mesh,t=e.scale.x;return Zl(240,n=>{const s=1-n;e.scale.setScalar(t*s),e.rotation.y+=.3,e.position.y=.55*n}).then(()=>{vt.remove(e),e.traverse(n=>{n.isMesh&&(n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(s=>s.dispose()):n.material.dispose())})})}function Sg(){for(let i=0;i<Ze;i++){let e=Ze-1;for(let t=Ze-1;t>=0;t--)if(ke[t][i]){if(t!==e){const n=ke[t][i];ke[e][i]=n,ke[t][i]=null,n.row=e}e--}}}async function Eg(){const i=[];for(let e=0;e<Ze;e++)for(let t=0;t<Ze;t++){const n=ke[e][t];if(!n)continue;const s=Bn(e,t);(Math.abs(n.mesh.position.z-s.z)>.001||Math.abs(n.mesh.position.x-s.x)>.001)&&i.push(Kn(n.mesh,{x:s.x,z:s.z},200))}i.length&&await Promise.all(i)}function bg(){for(let i=0;i<Ze;i++){let e=0;for(let n=0;n<Ze&&!ke[n][i];n++)e++;let t=0;for(let n=0;n<Ze;n++)if(!ke[n][i]){const s=Qn.getObstacleAt(n,i);if(s&&!s.canSwap())continue;const r=Math.floor(Math.random()*Xr),a=vo(r,n,i),o=(Ze-1)/2+1.5+e+t;a.mesh.position.z=o*-Oi,ke[n][i]=a,t++}}}async function Tg(){const i=[];for(let e=0;e<Ze;e++)for(let t=0;t<Ze;t++){const n=ke[e][t];if(!n)continue;const s=Bn(e,t);i.push(Kn(n.mesh,{x:s.x,z:s.z},220))}i.length&&await Promise.all(i)}function Kn(i,e,t){const n={x:i.position.x,y:i.position.y,z:i.position.z};return Zl(t,s=>{const r=wg(s);e.x!==void 0&&(i.position.x=n.x+(e.x-n.x)*r),e.y!==void 0&&(i.position.y=n.y+(e.y-n.y)*r),e.z!==void 0&&(i.position.z=n.z+(e.z-n.z)*r)})}function Zl(i,e){return new Promise(t=>{const n=performance.now();function s(r){const a=Math.min(1,(r-n)/i);e(a),a<1?requestAnimationFrame(s):t()}requestAnimationFrame(s)})}function wg(i){return 1-Math.pow(1-i,3)}function xo(i){ln="level";const e=si.startLevel(i);ct=e,Ht=0,Kt=e.moves||30,Yt=e.timeLimit||null,It=0,Fi=1,Bs={},bn=!1,_o(e),po(),un.show(e),cn.showScreen("gameplay"),Yt?ec():ri(),st.playMusic("game")}function Jl(){ln="endless",ct=null,Ht=0,Kt=1/0,Yt=null,ri(),It=0,Fi=1,bn=!1,_o(),un.showEndless(),cn.showScreen("gameplay"),st.playMusic("game")}function Ql(){ln="timeAttack",ct={id:0,name:"Time Attack",objective:{type:"score",target:5e3},stars:[2e3,3500,5e3]},Ht=0,Kt=1/0,Yt=60,It=0,Fi=1,bn=!1,_o(),un.show(ct),un.updateTime(60),cn.showScreen("gameplay"),ec(),st.playMusic("game")}function ec(){ri(),Cs=setInterval(()=>{bn||ei||Yt>0&&(Yt--,ye.emit("time:update",{remaining:Yt}),Yt===0&&(ri(),tc()))},1e3)}function ri(){Cs&&(clearInterval(Cs),Cs=null)}function tc(){if(ln==="endless")return;const i=ct==null?void 0:ct.objective;let e=!1;if(i)switch(i.type){case"score":e=Ht>=i.target;break;case"collect":e=(Bs[i.fruitType]||0)>=i.target;break;case"clearIce":e=Qn.obstacles.filter(s=>s.type==="ICE").length===0;break;case"timed":e=Ht>=i.target;break}if(e){ri();const s=si.completeLevel(Ht,ct.moves?ct.moves-Kt:0,0);zm(vt,jt),Os.shower(16765286,2500),setTimeout(()=>{un.hide(),mo.show({levelId:ct.id,score:Ht||0,stars:s?s.stars:3,highScore:s&&(s.highScore||s.newHighscore)||Ht,isNewBest:s?s.isNewBest??!0:!0,bestCombo:Fi||1,hasNextLevel:ct.id<si.levels.length})},600);return}const t=Kt<=0,n=Yt!==null&&Yt<=0;(t||n)&&(ri(),setTimeout(()=>{un.hide(),go.show({levelId:ct?ct.id:1,score:Ht,target:i?i.target:1e3,reason:n?"time":"moves"})},600))}ye.on("auth:success",()=>{si.reloadUserProgress(),Fs.refresh(),cn.showScreen("levelMap")});ye.on("auth:logout",()=>{Rs.show("signin")});ye.on("level:select",({levelId:i})=>xo(i));ye.on("game:startEndless",()=>Jl());ye.on("game:startTimeAttack",()=>Ql());ye.on("level:restart",({levelId:i})=>xo(i));ye.on("game:restart",()=>{ln==="level"&&ct?xo(ct.id):ln==="endless"?Jl():ln==="timeAttack"&&Ql()});ye.on("game:quit",()=>{ri(),un.hide(),mo.hide(),go.hide(),Fs.refresh(),cn.showScreen("levelMap")});ye.on("game:pause",()=>{bn=!0});ye.on("game:resume",()=>{bn=!1});ye.on("game:extraMoves",({count:i})=>{Kt+=i,ye.emit("moves:update",{remaining:Kt}),un.show(ct)});ye.on("ui:showSettings",()=>Yl.show());ye.on("audio:play",({sound:i})=>st.playSFX(i));const ul=new Sm;function nc(){var t;requestAnimationFrame(nc);const i=ul.getDelta(),e=ul.elapsedTime;for(let n=0;n<Ze;n++)for(let s=0;s<Ze;s++){const r=(t=ke[n])==null?void 0:t[s];r&&r.mesh&&(r.mesh.rotation.y+=i*.4)}Os.update(i),uo.intensity=.7+Math.sin(e*1.5)*.2,ho.intensity=.45+Math.cos(e*1.2)*.15,hn.update(),Lt.render(vt,jt)}window.addEventListener("resize",()=>{po(),Lt.setSize(window.innerWidth,window.innerHeight)});async function Ag(){try{cn.init(),Yl.create(),mo.create(),go.create(),un.create(),Rs.create(),Fs.create(),await si.loadLevels(),ii.getCurrentUser()?(si.reloadUserProgress(),Fs.refresh(),cn.showScreen("levelMap")):Rs.show("signin"),Lt.domElement.addEventListener("pointerdown",dg),Lt.domElement.addEventListener("pointermove",fg),Lt.domElement.addEventListener("pointerup",pg),Lt.domElement.addEventListener("pointercancel",mg),po(),nc()}catch(i){console.error("App init error",i),Rs.show("signin")}}Ag();
