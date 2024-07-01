"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[16],{19:function(e,t,a){a.d(t,{ET:function(){return pf},ad:function(){return Ph},hJ:function(){return _h}});var l,u,h=a(5816),c=a(8463),d=a(3333),f=a(4444),m=a(6640);a(3454);let g="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let V=class V{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}};V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let p="9.23.0",y=new d.Yd("@firebase/firestore");function C(){return y.logLevel}function N(e,...t){if(y.logLevel<=d.in.DEBUG){let a=t.map($);y.debug(`Firestore (${p}): ${e}`,...a)}}function k(e,...t){if(y.logLevel<=d.in.ERROR){let a=t.map($);y.error(`Firestore (${p}): ${e}`,...a)}}function M(e,...t){if(y.logLevel<=d.in.WARN){let a=t.map($);y.warn(`Firestore (${p}): ${e}`,...a)}}function $(e){if("string"==typeof e)return e;try{return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e="Unexpected state"){let t=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+e;throw k(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let U=class U extends f.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let K=class K{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let G=class G{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}};let Q=class Q{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(V.UNAUTHENTICATED))}shutdown(){}};let j=class j{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}};let z=class z{constructor(e){this.t=e,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let a=this.i,s=e=>this.i!==a?(a=this.i,t(e)):Promise.resolve(),l=new K;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new K,e.enqueueRetryable(()=>s(this.currentUser))};let r=()=>{let t=l;e.enqueueRetryable(async()=>{await t.promise,await s(this.currentUser)})},o=e=>{N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?o(e):(N("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new K)}},0),r()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||O(),new G(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||O(),new V(e)}};let W=class W{constructor(e,t,a){this.h=e,this.l=t,this.m=a,this.type="FirstParty",this.user=V.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};let H=class H{constructor(e,t,a){this.h=e,this.l=t,this.m=a}getToken(){return Promise.resolve(new W(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}};let J=class J{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};let Y=class Y{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){let n=e=>{null!=e.error&&N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);let a=e.token!==this.T;return this.T=e.token,N("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let s=e=>{N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit(e=>s(e)),setTimeout(()=>{if(!this.appCheck){let e=this.I.getImmediate({optional:!0});e?s(e):N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||O(),this.T=e.token,new J(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class tt{static A(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,a="";for(;a.length<20;){let l=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),a=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(a);else for(let t=0;t<e;t++)a[t]=Math.floor(256*Math.random());return a}(40);for(let u=0;u<l.length;++u)a.length<20&&l[u]<t&&(a+=e.charAt(l[u]%e.length))}return a}};function et(e,t){return e<t?-1:e>t?1:0}function nt(e,t,a){return e.length===t.length&&e.every((e,l)=>a(e,t[l]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=class it{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new U(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new U(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return it.fromMillis(Date.now())}static fromDate(e){return it.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3),a=Math.floor(1e6*(e-1e3*t));return new it(t,a)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?et(this.nanoseconds,e.nanoseconds):et(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){let e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt=class rt{constructor(e){this.timestamp=e}static fromTimestamp(e){return new rt(e)}static min(){return new rt(new it(0,0))}static max(){return new rt(new it(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=class ot{constructor(e,t,a){void 0===t?t=0:t>e.length&&O(),void 0===a?a=e.length-t:a>e.length-t&&O(),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return 0===ot.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof ot?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let a=Math.min(e.length,t.length);for(let l=0;l<a;l++){let a=e.get(l),u=t.get(l);if(a<u)return -1;if(a>u)return 1}return e.length<t.length?-1:e.length>t.length?1:0}};let ut=class ut extends ot{construct(e,t,a){return new ut(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){let t=[];for(let a of e){if(a.indexOf("//")>=0)throw new U(v.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter(e=>e.length>0))}return new ut(t)}static emptyPath(){return new ut([])}};let E=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let at=class at extends ot{construct(e,t,a){return new at(e,t,a)}static isValidIdentifier(e){return E.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new at(["__name__"])}static fromServerFormat(e){let t=[],a="",l=0,i=()=>{if(0===a.length)throw new U(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""},u=!1;for(;l<e.length;){let t=e[l];if("\\"===t){if(l+1===e.length)throw new U(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[l+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new U(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=t,l+=2}else"`"===t?u=!u:"."!==t||u?a+=t:i(),l++}if(i(),u)throw new U(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class ht{constructor(e){this.path=e}static fromPath(e){return new ht(ut.fromString(e))}static fromName(e){return new ht(ut.fromString(e).popFirst(5))}static empty(){return new ht(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ut.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ut.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ht(new ut(e.slice()))}};let It=class It{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new It(rt.min(),ht.empty(),-1)}static max(){return new It(rt.max(),ht.empty(),-1)}};let At=class At{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(e){if(e.code!==v.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;N("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rt=class Rt{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&O(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Rt((a,l)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(a,l)},this.catchCallback=e=>{this.wrapFailure(t,e).next(a,l)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof Rt?t:Rt.resolve(t)}catch(e){return Rt.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Rt.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Rt.reject(t)}static resolve(e){return new Rt((t,a)=>{t(e)})}static reject(e){return new Rt((t,a)=>{a(e)})}static waitFor(e){return new Rt((t,a)=>{let l=0,u=0,h=!1;e.forEach(e=>{++l,e.next(()=>{++u,h&&u===l&&t()},e=>a(e))}),h=!0,u===l&&t()})}static or(e){let t=Rt.resolve(!1);for(let a of e)t=t.next(e=>e?Rt.resolve(e):a());return t}static forEach(e,t){let a=[];return e.forEach((e,l)=>{a.push(t.call(this,e,l))}),this.waitFor(a)}static mapArray(e,t){return new Rt((a,l)=>{let u=e.length,h=Array(u),c=0;for(let d=0;d<u;d++){let f=d;t(e[f]).next(e=>{h[f]=e,++c===u&&a(h)},e=>l(e))}})}static doWhile(e,t){return new Rt((a,l)=>{let i=()=>{!0===e()?t().next(()=>{i()},l):a()};i()})}};function Dt(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ot=class Ot{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this.ut&&this.ut(e),e}};function Bt(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function me(e){let t=0;for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&t++;return t}function ge(e,t){for(let a in e)Object.prototype.hasOwnProperty.call(e,a)&&t(a,e[a])}function ye(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}Ot.ct=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pe=class pe{constructor(e,t){this.comparator=e,this.root=t||Te.EMPTY}insert(e,t){return new pe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(e){return new pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Te.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let a=this.comparator(e,t.key);if(0===a)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){let l=this.comparator(e,a.key);if(0===l)return t+a.left.size;l<0?a=a.left:(t+=a.left.size+1,a=a.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,a)=>(e(t,a),!1))}toString(){let e=[];return this.inorderTraversal((t,a)=>(e.push(`${t}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ie(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ie(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ie(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ie(this.root,e,this.comparator,!0)}};let Ie=class Ie{constructor(e,t,a,l){this.isReverse=l,this.nodeStack=[];let u=1;for(;!e.isEmpty();)if(u=t?a(e.key,t):1,t&&l&&(u*=-1),u<0)e=this.isReverse?e.left:e.right;else{if(0===u){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}};let Te=class Te{constructor(e,t,a,l,u){this.key=e,this.value=t,this.color=null!=a?a:Te.RED,this.left=null!=l?l:Te.EMPTY,this.right=null!=u?u:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,l,u){return new Te(null!=e?e:this.key,null!=t?t:this.value,null!=a?a:this.color,null!=l?l:this.left,null!=u?u:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let l=this,u=a(e,l.key);return(l=u<0?l.copy(null,null,null,l.left.insert(e,t,a),null):0===u?l.copy(null,t,null,null,null):l.copy(null,null,null,null,l.right.insert(e,t,a))).fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let a,l=this;if(0>t(e,l.key))l.left.isEmpty()||l.left.isRed()||l.left.left.isRed()||(l=l.moveRedLeft()),l=l.copy(null,null,null,l.left.remove(e,t),null);else{if(l.left.isRed()&&(l=l.rotateRight()),l.right.isEmpty()||l.right.isRed()||l.right.left.isRed()||(l=l.moveRedRight()),0===t(e,l.key)){if(l.right.isEmpty())return Te.EMPTY;a=l.right.min(),l=l.copy(a.key,a.value,null,null,l.right.removeMin())}l=l.copy(null,null,null,null,l.right.remove(e,t))}return l.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){let e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw O();let e=this.left.check();if(e!==this.right.check())throw O();return e+(this.isRed()?0:1)}};Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new class{constructor(){this.size=0}get key(){throw O()}get value(){throw O()}get color(){throw O()}get left(){throw O()}get right(){throw O()}copy(e,t,a,l,u){return this}insert(e,t,a){return new Te(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee=class Ee{constructor(e){this.comparator=e,this.data=new pe(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,a)=>(e(t),!1))}forEachInRange(e,t){let a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){let l=a.getNext();if(this.comparator(l.key,e[1])>=0)return;t(l.key)}}forEachWhile(e,t){let a;for(a=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ae(this.data.getIterator())}getIteratorFrom(e){return new Ae(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof Ee)||this.size!==e.size)return!1;let t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,l=a.getNext().key;if(0!==this.comparator(e,l))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new Ee(this.comparator);return t.data=e,t}};let Ae=class Ae{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Re=class Re{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new Re([])}unionWith(e){let t=new Ee(at.comparator);for(let e of this.fields)t=t.add(e);for(let a of e)t=t.add(a);return new Re(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nt(this.fields,e.fields,(e,t)=>e.isEqual(t))}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe=class Pe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve=class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){let t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Pe("Invalid base64 string: "+e):e}}(e);return new Ve(t)}static fromUint8Array(e){let t=function(e){let t="";for(let a=0;a<e.length;++a)t+=String.fromCharCode(e[a]);return t}(e);return new Ve(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let a=0;a<e.length;a++)t[a]=e.charCodeAt(a);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return et(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}};Ve.EMPTY_BYTE_STRING=new Ve("");let T=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function De(e){if(e||O(),"string"==typeof e){let t=0,a=T.exec(e);if(a||O(),a[1]){let e=a[1];t=Number(e=(e+"000000000").substr(0,9))}let l=new Date(e);return{seconds:Math.floor(l.getTime()/1e3),nanos:t}}return{seconds:Ce(e.seconds),nanos:Ce(e.nanos)}}function Ce(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function xe(e){return"string"==typeof e?Ve.fromBase64String(e):Ve.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(e){var t,a;return"server_timestamp"===(null===(a=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===a?void 0:a.stringValue)}function Me(e){let t=De(e.mapValue.fields.__local_write_time__.timestampValue);return new it(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e=class $e{constructor(e,t,a,l,u,h,c,d,f){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=l,this.ssl=u,this.forceLongPolling=h,this.autoDetectLongPolling=c,this.longPollingOptions=d,this.useFetchStreams=f}};let Oe=class Oe{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Oe("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Oe&&e.projectId===this.projectId&&e.database===this.database}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let I={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Le(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ne(e)?4:en(e)?9007199254740991:10:O()}function qe(e,t){if(e===t)return!0;let a=Le(e);if(a!==Le(t))return!1;switch(a){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Me(e).isEqual(Me(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let a=De(e.timestampValue),l=De(t.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return xe(e.bytesValue).isEqual(xe(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return Ce(e.geoPointValue.latitude)===Ce(t.geoPointValue.latitude)&&Ce(e.geoPointValue.longitude)===Ce(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ce(e.integerValue)===Ce(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let a=Ce(e.doubleValue),l=Ce(t.doubleValue);return a===l?Bt(a)===Bt(l):isNaN(a)&&isNaN(l)}return!1}(e,t);case 9:return nt(e.arrayValue.values||[],t.arrayValue.values||[],qe);case 10:return function(e,t){let a=e.mapValue.fields||{},l=t.mapValue.fields||{};if(me(a)!==me(l))return!1;for(let e in a)if(a.hasOwnProperty(e)&&(void 0===l[e]||!qe(a[e],l[e])))return!1;return!0}(e,t);default:return O()}}function Ue(e,t){return void 0!==(e.values||[]).find(e=>qe(e,t))}function Ke(e,t){if(e===t)return 0;let a=Le(e),l=Le(t);if(a!==l)return et(a,l);switch(a){case 0:case 9007199254740991:return 0;case 1:return et(e.booleanValue,t.booleanValue);case 2:return function(e,t){let a=Ce(e.integerValue||e.doubleValue),l=Ce(t.integerValue||t.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(e,t);case 3:return Ge(e.timestampValue,t.timestampValue);case 4:return Ge(Me(e),Me(t));case 5:return et(e.stringValue,t.stringValue);case 6:return function(e,t){let a=xe(e),l=xe(t);return a.compareTo(l)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let a=e.split("/"),l=t.split("/");for(let e=0;e<a.length&&e<l.length;e++){let t=et(a[e],l[e]);if(0!==t)return t}return et(a.length,l.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let a=et(Ce(e.latitude),Ce(t.latitude));return 0!==a?a:et(Ce(e.longitude),Ce(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let a=e.values||[],l=t.values||[];for(let e=0;e<a.length&&e<l.length;++e){let t=Ke(a[e],l[e]);if(t)return t}return et(a.length,l.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===I.mapValue&&t===I.mapValue)return 0;if(e===I.mapValue)return 1;if(t===I.mapValue)return -1;let a=e.fields||{},l=Object.keys(a),u=t.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let e=0;e<l.length&&e<h.length;++e){let t=et(l[e],h[e]);if(0!==t)return t;let c=Ke(a[l[e]],u[h[e]]);if(0!==c)return c}return et(l.length,h.length)}(e.mapValue,t.mapValue);default:throw O()}}function Ge(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return et(e,t);let a=De(e),l=De(t),u=et(a.seconds,l.seconds);return 0!==u?u:et(a.nanos,l.nanos)}function je(e){var t,a;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=De(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?xe(e.bytesValue).toBase64():"referenceValue"in e?(a=e.referenceValue,ht.fromName(a).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",a=!0;for(let l of e.values||[])a?a=!1:t+=",",t+=je(l);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),a="{",l=!0;for(let u of t)l?l=!1:a+=",",a+=`${u}:${je(e.fields[u])}`;return a+"}"}(e.mapValue):O()}function He(e){return!!e&&"integerValue"in e}function Je(e){return!!e&&"arrayValue"in e}function Ze(e){return!!e&&"mapValue"in e}function tn(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return ge(e.mapValue.fields,(e,a)=>t.mapValue.fields[e]=tn(a)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let a=0;a<(e.arrayValue.values||[]).length;++a)t.arrayValue.values[a]=tn(e.arrayValue.values[a]);return t}return Object.assign({},e)}function en(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let un=class un{constructor(e){this.value=e}static empty(){return new un({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(!Ze(t=(t.mapValue.fields||{})[e.get(a)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=tn(t)}setAll(e){let t=at.emptyPath(),a={},l=[];e.forEach((e,u)=>{if(!t.isImmediateParentOf(u)){let e=this.getFieldsMap(t);this.applyChanges(e,a,l),a={},l=[],t=u.popLast()}e?a[u.lastSegment()]=tn(e):l.push(u.lastSegment())});let u=this.getFieldsMap(t);this.applyChanges(u,a,l)}delete(e){let t=this.field(e.popLast());Ze(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return qe(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let l=t.mapValue.fields[e.get(a)];Ze(l)&&l.mapValue.fields||(l={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=l),t=l}return t.mapValue.fields}applyChanges(e,t,a){for(let l of(ge(t,(t,a)=>e[t]=a),a))delete e[l]}clone(){return new un(tn(this.value))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let an=class an{constructor(e,t,a,l,u,h,c){this.key=e,this.documentType=t,this.version=a,this.readTime=l,this.createTime=u,this.data=h,this.documentState=c}static newInvalidDocument(e){return new an(e,0,rt.min(),rt.min(),rt.min(),un.empty(),0)}static newFoundDocument(e,t,a,l){return new an(e,1,t,rt.min(),a,l,0)}static newNoDocument(e,t){return new an(e,2,t,rt.min(),rt.min(),un.empty(),0)}static newUnknownDocument(e,t){return new an(e,3,t,rt.min(),rt.min(),un.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(rt.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=un.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=rt.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof an&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new an(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hn=class hn{constructor(e,t){this.position=e,this.inclusive=t}};function ln(e,t,a){let l=0;for(let u=0;u<e.position.length;u++){let h=t[u],c=e.position[u];if(l=h.field.isKeyField()?ht.comparator(ht.fromName(c.referenceValue),a.key):Ke(c,a.data.field(h.field)),"desc"===h.dir&&(l*=-1),0!==l)break}return l}function fn(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let a=0;a<e.position.length;a++)if(!qe(e.position[a],t.position[a]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dn=class dn{constructor(e,t="asc"){this.field=e,this.dir=t}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _n=class _n{};let mn=class mn extends _n{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,a):new Pn(e,t,a):"array-contains"===t?new Dn(e,a):"in"===t?new Cn(e,a):"not-in"===t?new xn(e,a):"array-contains-any"===t?new Nn(e,a):new mn(e,t,a)}static createKeyFieldInFilter(e,t,a){return"in"===t?new bn(e,a):new Vn(e,a)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Ke(t,this.value)):null!==t&&Le(this.value)===Le(t)&&this.matchesComparison(Ke(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return O()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}};let gn=class gn extends _n{constructor(e,t){super(),this.filters=e,this.op=t,this.lt=null}static create(e,t){return new gn(e,t)}matches(e){return yn(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.lt||(this.lt=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.ft(e=>e.isInequality());return null!==e?e.field:null}ft(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}};function yn(e){return"and"===e.op}function Tn(e){for(let t of e.filters)if(t instanceof gn)return!1;return!0}let Pn=class Pn extends mn{constructor(e,t,a){super(e,t,a),this.key=ht.fromName(a.referenceValue)}matches(e){let t=ht.comparator(e.key,this.key);return this.matchesComparison(t)}};let bn=class bn extends mn{constructor(e,t){super(e,"in",t),this.keys=Sn("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}};let Vn=class Vn extends mn{constructor(e,t){super(e,"not-in",t),this.keys=Sn("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}};function Sn(e,t){var a;return((null===(a=t.arrayValue)||void 0===a?void 0:a.values)||[]).map(e=>ht.fromName(e.referenceValue))}let Dn=class Dn extends mn{constructor(e,t){super(e,"array-contains",t)}matches(e){let t=e.data.field(this.field);return Je(t)&&Ue(t.arrayValue,this.value)}};let Cn=class Cn extends mn{constructor(e,t){super(e,"in",t)}matches(e){let t=e.data.field(this.field);return null!==t&&Ue(this.value.arrayValue,t)}};let xn=class xn extends mn{constructor(e,t){super(e,"not-in",t)}matches(e){if(Ue(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!Ue(this.value.arrayValue,t)}};let Nn=class Nn extends mn{constructor(e,t){super(e,"array-contains-any",t)}matches(e){let t=e.data.field(this.field);return!(!Je(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>Ue(this.value.arrayValue,e))}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kn=class kn{constructor(e,t=null,a=[],l=[],u=null,h=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=l,this.limit=u,this.startAt=h,this.endAt=c,this.dt=null}};function Mn(e,t=null,a=[],l=[],u=null,h=null,c=null){return new kn(e,t,a,l,u,h,c)}function $n(e){if(null===e.dt){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function En(e){if(e instanceof mn)return e.field.canonicalString()+e.op.toString()+je(e.value);if(Tn(e)&&yn(e))return e.filters.map(e=>En(e)).join(",");{let t=e.filters.map(e=>En(e)).join(",");return`${e.op}(${t})`}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>je(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>je(e)).join(",")),e.dt=t}return e.dt}function On(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let u=0;u<e.orderBy.length;u++){var a,l;if(a=e.orderBy[u],l=t.orderBy[u],!(a.dir===l.dir&&a.field.isEqual(l.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let a=0;a<e.filters.length;a++)if(!function An(e,t){return e instanceof mn?t instanceof mn&&e.op===t.op&&e.field.isEqual(t.field)&&qe(e.value,t.value):e instanceof gn?t instanceof gn&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,a,l)=>e&&An(a,t.filters[l]),!0):void O()}(e.filters[a],t.filters[a]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!fn(e.startAt,t.startAt)&&fn(e.endAt,t.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Un=class Un{constructor(e,t=null,a=[],l=[],u=null,h="F",c=null,d=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=l,this.limit=u,this.limitType=h,this.startAt=c,this.endAt=d,this.wt=null,this._t=null,this.startAt,this.endAt}};function Qn(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Hn(e){if(null===e.wt){e.wt=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),a=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===a)t.isKeyField()||e.wt.push(new dn(t)),e.wt.push(new dn(at.keyField(),"asc"));else{let t=!1;for(let a of e.explicitOrderBy)e.wt.push(a),a.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new dn(at.keyField(),t))}}}return e.wt}function Jn(e){if(!e._t){if("F"===e.limitType)e._t=Mn(e.path,e.collectionGroup,Hn(e),e.filters,e.limit,e.startAt,e.endAt);else{let t=[];for(let a of Hn(e)){let e="desc"===a.dir?"asc":"desc";t.push(new dn(a.field,e))}let a=e.endAt?new hn(e.endAt.position,e.endAt.inclusive):null,l=e.startAt?new hn(e.startAt.position,e.startAt.inclusive):null;e._t=Mn(e.path,e.collectionGroup,t,e.filters,e.limit,a,l)}}return e._t}function Xn(e,t,a){return new Un(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,a,e.startAt,e.endAt)}function Zn(e,t){return On(Jn(e),Jn(t))&&e.limitType===t.limitType}function ts(e){return`${$n(Jn(e))}|lt:${e.limitType}`}function es(e){var t;let a;return`Query(target=${a=(t=Jn(e)).path.canonicalString(),null!==t.collectionGroup&&(a+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(a+=`, filters: [${t.filters.map(e=>(function Rn(e){return e instanceof mn?`${e.field.canonicalString()} ${e.op} ${je(e.value)}`:e instanceof gn?e.op.toString()+" {"+e.getFilters().map(Rn).join(" ,")+"}":"Filter"})(e)).join(", ")}]`),null==t.limit||(a+=", limit: "+t.limit),t.orderBy.length>0&&(a+=`, orderBy: [${t.orderBy.map(e=>`${e.field.canonicalString()} (${e.dir})`).join(", ")}]`),t.startAt&&(a+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>je(e)).join(",")),t.endAt&&(a+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>je(e)).join(",")),`Target(${a})`}; limitType=${e.limitType})`}function ns(e,t){return t.isFoundDocument()&&function(e,t){let a=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(a):ht.isDocumentKey(e.path)?e.path.isEqual(a):e.path.isImmediateParentOf(a)}(e,t)&&function(e,t){for(let a of Hn(e))if(!a.field.isKeyField()&&null===t.data.field(a.field))return!1;return!0}(e,t)&&function(e,t){for(let a of e.filters)if(!a.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,a){let l=ln(e,t,a);return e.inclusive?l<=0:l<0}(e.startAt,Hn(e),t))&&(!e.endAt||!!function(e,t,a){let l=ln(e,t,a);return e.inclusive?l>=0:l>0}(e.endAt,Hn(e),t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let os=class os{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){let t=this.mapKeyFn(e),a=this.inner[t];if(void 0!==a){for(let[t,l]of a)if(this.equalsFn(t,e))return l}}has(e){return void 0!==this.get(e)}set(e,t){let a=this.mapKeyFn(e),l=this.inner[a];if(void 0===l)return this.inner[a]=[[e,t]],void this.innerSize++;for(let a=0;a<l.length;a++)if(this.equalsFn(l[a][0],e))return void(l[a]=[e,t]);l.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),a=this.inner[t];if(void 0===a)return!1;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return 1===a.length?delete this.inner[t]:a.splice(l,1),this.innerSize--,!0;return!1}forEach(e){ge(this.inner,(t,a)=>{for(let[t,l]of a)e(t,l)})}isEmpty(){return ye(this.inner)}size(){return this.innerSize}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let A=new pe(ht.comparator),S=new pe(ht.comparator);function hs(...e){let t=S;for(let a of e)t=t.insert(a.key,a);return t}function ls(e){let t=S;return e.forEach((e,a)=>t=t.insert(e,a.overlayedDocument)),t}function ws(){return new os(e=>e.toString(),(e,t)=>e.isEqual(t))}let R=new pe(ht.comparator),D=new Ee(ht.comparator);function gs(...e){let t=D;for(let a of e)t=t.add(a);return t}let _=new Ee(et);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Is(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Bt(t)?"-0":t}}function Ts(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let As=class As{constructor(){this._=void 0}};function Ps(e,t){return e instanceof xs?He(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}let bs=class bs extends As{};let Vs=class Vs extends As{constructor(e){super(),this.elements=e}};function Ss(e,t){let a=ks(t);for(let t of e.elements)a.some(e=>qe(e,t))||a.push(t);return{arrayValue:{values:a}}}let Ds=class Ds extends As{constructor(e){super(),this.elements=e}};function Cs(e,t){let a=ks(t);for(let t of e.elements)a=a.filter(e=>!qe(e,t));return{arrayValue:{values:a}}}let xs=class xs extends As{constructor(e,t){super(),this.serializer=e,this.gt=t}};function Ns(e){return Ce(e.integerValue||e.doubleValue)}function ks(e){return Je(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}let Os=class Os{constructor(e,t){this.version=e,this.transformResults=t}};let Fs=class Fs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Fs}static exists(e){return new Fs(void 0,e)}static updateTime(e){return new Fs(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}};function Bs(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}let Ls=class Ls{};function qs(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ys(e.key,Fs.none()):new js(e.key,e.data,Fs.none());{let a=e.data,l=un.empty(),u=new Ee(at.comparator);for(let e of t.fields)if(!u.has(e)){let t=a.field(e);null===t&&e.length>1&&(e=e.popLast(),t=a.field(e)),null===t?l.delete(e):l.set(e,t),u=u.add(e)}return new zs(e.key,l,new Re(u.toArray()),Fs.none())}}function Ks(e,t,a,l){return e instanceof js?function(e,t,a,l){if(!Bs(e.precondition,t))return a;let u=e.value.clone(),h=Js(e.fieldTransforms,l,t);return u.setAll(h),t.convertToFoundDocument(t.version,u).setHasLocalMutations(),null}(e,t,a,l):e instanceof zs?function(e,t,a,l){if(!Bs(e.precondition,t))return a;let u=Js(e.fieldTransforms,l,t),h=t.data;return(h.setAll(Ws(e)),h.setAll(u),t.convertToFoundDocument(t.version,h).setHasLocalMutations(),null===a)?null:a.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,a,l):Bs(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):a}function Qs(e,t){var a,l;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(a=e.fieldTransforms,l=t.fieldTransforms,!!(void 0===a&&void 0===l||!(!a||!l)&&nt(a,l,(e,t)=>{var a,l;return e.field.isEqual(t.field)&&(a=e.transform,l=t.transform,a instanceof Vs&&l instanceof Vs||a instanceof Ds&&l instanceof Ds?nt(a.elements,l.elements,qe):a instanceof xs&&l instanceof xs?qe(a.gt,l.gt):a instanceof bs&&l instanceof bs)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}let js=class js extends Ls{constructor(e,t,a,l=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=l,this.type=0}getFieldMask(){return null}};let zs=class zs extends Ls{constructor(e,t,a,l,u=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=l,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}};function Ws(e){let t=new Map;return e.fieldMask.fields.forEach(a=>{if(!a.isEmpty()){let l=e.data.field(a);t.set(a,l)}}),t}function Hs(e,t,a){var l;let u=new Map;e.length===a.length||O();for(let h=0;h<a.length;h++){let c=e[h],d=c.transform,f=t.data.field(c.field);u.set(c.field,(l=a[h],d instanceof Vs?Ss(d,f):d instanceof Ds?Cs(d,f):l))}return u}function Js(e,t,a){let l=new Map;for(let u of e){let e=u.transform,h=a.data.field(u.field);l.set(u.field,e instanceof bs?function(e,t){let a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&Ne(t)&&(t=function ke(e){let t=e.mapValue.fields.__previous_value__;return Ne(t)?ke(t):t}(t)),t&&(a.fields.__previous_value__=t),{mapValue:a}}(t,h):e instanceof Vs?Ss(e,h):e instanceof Ds?Cs(e,h):function(e,t){let a=Ps(e,t),l=Ns(a)+Ns(e.gt);return He(a)&&He(e.gt)?Ts(l):Is(e.serializer,l)}(e,h))}return l}let Ys=class Ys extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}};let Xs=class Xs extends Ls{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs=class Zs{constructor(e,t,a,l){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=l}applyToRemoteDocument(e,t){let a=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let u=this.mutations[t];if(u.key.isEqual(e.key)){var l;l=a[t],u instanceof js?function(e,t,a){let l=e.value.clone(),u=Hs(e.fieldTransforms,t,a.transformResults);l.setAll(u),t.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(u,e,l):u instanceof zs?function(e,t,a){if(!Bs(e.precondition,t))return void t.convertToUnknownDocument(a.version);let l=Hs(e.fieldTransforms,t,a.transformResults),u=t.data;u.setAll(Ws(e)),u.setAll(l),t.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(u,e,l):function(e,t,a){t.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,l)}}}applyToLocalView(e,t){for(let a of this.baseMutations)a.key.isEqual(e.key)&&(t=Ks(a,e,t,this.localWriteTime));for(let a of this.mutations)a.key.isEqual(e.key)&&(t=Ks(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let a=ws();return this.mutations.forEach(l=>{let u=e.get(l.key),h=u.overlayedDocument,c=this.applyToLocalView(h,u.mutatedFields);c=t.has(l.key)?null:c;let d=qs(h,c);null!==d&&a.set(l.key,d),h.isValidDocument()||h.convertToNoDocument(rt.min())}),a}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),gs())}isEqual(e){return this.batchId===e.batchId&&nt(this.mutations,e.mutations,(e,t)=>Qs(e,t))&&nt(this.baseMutations,e.baseMutations,(e,t)=>Qs(e,t))}};let ti=class ti{constructor(e,t,a,l){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=l}static from(e,t,a){e.mutations.length===a.length||O();let l=R,u=e.mutations;for(let e=0;e<u.length;e++)l=l.insert(u[e].key,a[e].version);return new ti(e,t,a,l)}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei=class ei{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}};(u=l||(l={}))[u.OK=0]="OK",u[u.CANCELLED=1]="CANCELLED",u[u.UNKNOWN=2]="UNKNOWN",u[u.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",u[u.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",u[u.NOT_FOUND=5]="NOT_FOUND",u[u.ALREADY_EXISTS=6]="ALREADY_EXISTS",u[u.PERMISSION_DENIED=7]="PERMISSION_DENIED",u[u.UNAUTHENTICATED=16]="UNAUTHENTICATED",u[u.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",u[u.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",u[u.ABORTED=10]="ABORTED",u[u.OUT_OF_RANGE=11]="OUT_OF_RANGE",u[u.UNIMPLEMENTED=12]="UNIMPLEMENTED",u[u.INTERNAL=13]="INTERNAL",u[u.UNAVAILABLE=14]="UNAVAILABLE",u[u.DATA_LOSS=15]="DATA_LOSS",new m.z8([4294967295,4294967295],0);let Vi=class Vi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}};function Di(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ni(e){return e||O(),rt.fromTimestamp(function(e){let t=De(e);return new it(t.seconds,t.nanos)}(e))}function ki(e,t){return new ut(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function $i(e,t){return ki(e.databaseId,t.path)}function Ui(e,t,a){return{name:$i(e,t),fields:a.value.mapValue.fields}}function ir(e){return at.fromServerFormat(e.fieldPath)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ar=class ar{constructor(e){this.fe=e}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br=class br{constructor(){}_e(e,t){this.me(e,t),t.ge()}me(e,t){if("nullValue"in e)this.ye(t,5);else if("booleanValue"in e)this.ye(t,10),t.pe(e.booleanValue?1:0);else if("integerValue"in e)this.ye(t,15),t.pe(Ce(e.integerValue));else if("doubleValue"in e){let a=Ce(e.doubleValue);isNaN(a)?this.ye(t,13):(this.ye(t,15),Bt(a)?t.pe(0):t.pe(a))}else if("timestampValue"in e){let a=e.timestampValue;this.ye(t,20),"string"==typeof a?t.Ie(a):(t.Ie(`${a.seconds||""}`),t.pe(a.nanos||0))}else if("stringValue"in e)this.Te(e.stringValue,t),this.Ee(t);else if("bytesValue"in e)this.ye(t,30),t.Ae(xe(e.bytesValue)),this.Ee(t);else if("referenceValue"in e)this.ve(e.referenceValue,t);else if("geoPointValue"in e){let a=e.geoPointValue;this.ye(t,45),t.pe(a.latitude||0),t.pe(a.longitude||0)}else"mapValue"in e?en(e)?this.ye(t,Number.MAX_SAFE_INTEGER):(this.Re(e.mapValue,t),this.Ee(t)):"arrayValue"in e?(this.Pe(e.arrayValue,t),this.Ee(t)):O()}Te(e,t){this.ye(t,25),this.be(e,t)}be(e,t){t.Ie(e)}Re(e,t){let a=e.fields||{};for(let e of(this.ye(t,55),Object.keys(a)))this.Te(e,t),this.me(a[e],t)}Pe(e,t){let a=e.values||[];for(let e of(this.ye(t,50),a))this.me(e,t)}ve(e,t){this.ye(t,37),ht.fromName(e).path.forEach(e=>{this.ye(t,60),this.be(e,t)})}ye(e,t){e.pe(t)}Ee(e){e.pe(2)}};br.Ve=new br;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr=class zr{constructor(){this.rn=new Wr}addToCollectionParentIndex(e,t){return this.rn.add(t),Rt.resolve()}getCollectionParents(e,t){return Rt.resolve(this.rn.getEntries(t))}addFieldIndex(e,t){return Rt.resolve()}deleteFieldIndex(e,t){return Rt.resolve()}getDocumentsMatchingTarget(e,t){return Rt.resolve(null)}getIndexType(e,t){return Rt.resolve(0)}getFieldIndexes(e,t){return Rt.resolve([])}getNextCollectionGroupToUpdate(e){return Rt.resolve(null)}getMinOffset(e,t){return Rt.resolve(It.min())}getMinOffsetFromCollectionGroup(e,t){return Rt.resolve(It.min())}updateCollectionGroup(e,t,a){return Rt.resolve()}updateIndexEntries(e,t){return Rt.resolve()}};let Wr=class Wr{constructor(){this.index={}}add(e){let t=e.lastSegment(),a=e.popLast(),l=this.index[t]||new Ee(ut.comparator),u=!l.has(a);return this.index[t]=l.add(a),u}has(e){let t=e.lastSegment(),a=e.popLast(),l=this.index[t];return l&&l.has(a)}getEntries(e){return(this.index[e]||new Ee(ut.comparator)).toArray()}};new Uint8Array(0);let so=class so{constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}static withCacheSize(e){return new so(e,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */so.DEFAULT_COLLECTION_PERCENTILE=10,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,so.DEFAULT=new so(41943040,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),so.DISABLED=new so(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo=class lo{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new lo(0)}static Mn(){return new lo(-1)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vo=class vo{constructor(){this.changes=new os(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,an.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let a=this.changes.get(t);return void 0!==a?Rt.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let No=class No{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ko=class ko{constructor(e,t,a,l){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=l}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next(l=>(a=l,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==a&&Ks(a.mutation,e,Re.empty(),it.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,gs()).next(()=>t))}getLocalViewOfDocuments(e,t,a=gs()){let l=ws();return this.populateOverlays(e,l,t).next(()=>this.computeViews(e,t,l,a).next(e=>{let t=hs();return e.forEach((e,a)=>{t=t.insert(e,a.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let a=ws();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,gs()))}populateOverlays(e,t,a){let l=[];return a.forEach(e=>{t.has(e)||l.push(e)}),this.documentOverlayCache.getOverlays(e,l).next(e=>{e.forEach((e,a)=>{t.set(e,a)})})}computeViews(e,t,a,l){let u=A,h=ws(),c=ws();return t.forEach((e,t)=>{let c=a.get(t.key);l.has(t.key)&&(void 0===c||c.mutation instanceof zs)?u=u.insert(t.key,t):void 0!==c?(h.set(t.key,c.mutation.getFieldMask()),Ks(c.mutation,t,c.mutation.getFieldMask(),it.now())):h.set(t.key,Re.empty())}),this.recalculateAndSaveOverlays(e,u).next(e=>(e.forEach((e,t)=>h.set(e,t)),t.forEach((e,t)=>{var a;return c.set(e,new No(t,null!==(a=h.get(e))&&void 0!==a?a:null))}),c))}recalculateAndSaveOverlays(e,t){let a=ws(),l=new pe((e,t)=>e-t),u=gs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let u of e)u.keys().forEach(e=>{let h=t.get(e);if(null===h)return;let c=a.get(e)||Re.empty();c=u.applyToLocalView(h,c),a.set(e,c);let d=(l.get(u.batchId)||gs()).add(e);l=l.insert(u.batchId,d)})}).next(()=>{let h=[],c=l.getReverseIterator();for(;c.hasNext();){let l=c.getNext(),d=l.key,f=l.value,m=ws();f.forEach(e=>{if(!u.has(e)){let l=qs(t.get(e),a.get(e));null!==l&&m.set(e,l),u=u.add(e)}}),h.push(this.documentOverlayCache.saveOverlays(e,d,m))}return Rt.waitFor(h)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,a){return ht.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,a):this.getDocumentsMatchingCollectionQuery(e,t,a)}getNextDocuments(e,t,a,l){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,l).next(u=>{let h=l-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,l-u.size):Rt.resolve(ws()),c=-1,d=u;return h.next(t=>Rt.forEach(t,(t,a)=>(c<a.largestBatchId&&(c=a.largestBatchId),u.get(t)?Rt.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{d=d.insert(t,e)}))).next(()=>this.populateOverlays(e,t,u)).next(()=>this.computeViews(e,d,t,gs())).next(e=>({batchId:c,changes:ls(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ht(t)).next(e=>{let t=hs();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,a){let l=t.collectionGroup,u=hs();return this.indexManager.getCollectionParents(e,l).next(h=>Rt.forEach(h,h=>{var c;let d=(c=h.child(l),new Un(c,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt));return this.getDocumentsMatchingCollectionQuery(e,d,a).next(e=>{e.forEach((e,t)=>{u=u.insert(e,t)})})}).next(()=>u))}getDocumentsMatchingCollectionQuery(e,t,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next(u=>(l=u,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,l))).next(e=>{l.forEach((t,a)=>{let l=a.getKey();null===e.get(l)&&(e=e.insert(l,an.newInvalidDocument(l)))});let a=hs();return e.forEach((e,u)=>{let h=l.get(e);void 0!==h&&Ks(h.mutation,u,Re.empty(),it.now()),ns(t,u)&&(a=a.insert(e,u))}),a})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mo=class Mo{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,t){return Rt.resolve(this.cs.get(t))}saveBundleMetadata(e,t){return this.cs.set(t.id,{id:t.id,version:t.version,createTime:Ni(t.createTime)}),Rt.resolve()}getNamedQuery(e,t){return Rt.resolve(this.hs.get(t))}saveNamedQuery(e,t){return this.hs.set(t.name,{name:t.name,query:function(e){let t=function(e){var t,a,l,u,h,c,d,f;let m,g=function(e){let t=function(e){let t=ut.fromString(e);return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)||O(),t}(e);return 4===t.length?ut.emptyPath():(t.length>4&&"documents"===t.get(4)||O(),t.popFirst(5))}(e.parent),p=e.structuredQuery,y=p.from?p.from.length:0,v=null;if(y>0){1===y||O();let e=p.from[0];e.allDescendants?v=e.collectionId:g=g.child(e.collectionId)}let E=[];p.where&&(E=function(e){var t;let a=function Zi(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=ir(e.unaryFilter.field);return mn.create(t,"==",{doubleValue:NaN});case"IS_NULL":let a=ir(e.unaryFilter.field);return mn.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let l=ir(e.unaryFilter.field);return mn.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let u=ir(e.unaryFilter.field);return mn.create(u,"!=",{nullValue:"NULL_VALUE"});default:return O()}}(e):void 0!==e.fieldFilter?mn.create(ir(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return O()}}(e.fieldFilter.op),e.fieldFilter.value):void 0!==e.compositeFilter?gn.create(e.compositeFilter.filters.map(e=>Zi(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return O()}}(e.compositeFilter.op)):O()}(e);return a instanceof gn&&Tn(t=a)&&yn(t)?a.getFilters():[a]}(p.where));let T=[];p.orderBy&&(T=p.orderBy.map(e=>new dn(ir(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let I=null;p.limit&&(I=null==(m="object"==typeof(t=p.limit)?t.value:t)?null:m);let A=null;p.startAt&&(A=function(e){let t=!!e.before,a=e.values||[];return new hn(a,t)}(p.startAt));let S=null;return p.endAt&&(S=function(e){let t=!e.before,a=e.values||[];return new hn(a,t)}(p.endAt)),a=g,l=v,u=T,h=E,c=I,d=A,f=S,new Un(a,l,u,h,c,"F",d,f)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Xn(t,t.limit,"L"):t}(t.bundledQuery),readTime:Ni(t.readTime)}),Rt.resolve()}};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $o=class $o{constructor(){this.overlays=new pe(ht.comparator),this.ls=new Map}getOverlay(e,t){return Rt.resolve(this.overlays.get(t))}getOverlays(e,t){let a=ws();return Rt.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&a.set(t,e)})).next(()=>a)}saveOverlays(e,t,a){return a.forEach((a,l)=>{this.we(e,t,l)}),Rt.resolve()}removeOverlaysForBatchId(e,t,a){let l=this.ls.get(a);return void 0!==l&&(l.forEach(e=>this.overlays=this.overlays.remove(e)),this.ls.delete(a)),Rt.resolve()}getOverlaysForCollection(e,t,a){let l=ws(),u=t.length+1,h=new ht(t.child("")),c=this.overlays.getIteratorFrom(h);for(;c.hasNext();){let e=c.getNext().value,h=e.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===u&&e.largestBatchId>a&&l.set(e.getKey(),e)}return Rt.resolve(l)}getOverlaysForCollectionGroup(e,t,a,l){let u=new pe((e,t)=>e-t),h=this.overlays.getIterator();for(;h.hasNext();){let e=h.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>a){let t=u.get(e.largestBatchId);null===t&&(t=ws(),u=u.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let c=ws(),d=u.getIterator();for(;d.hasNext()&&(d.getNext().value.forEach((e,t)=>c.set(e,t)),!(c.size()>=l)););return Rt.resolve(c)}we(e,t,a){let l=this.overlays.get(a.key);if(null!==l){let e=this.ls.get(l.largestBatchId).delete(a.key);this.ls.set(l.largestBatchId,e)}this.overlays=this.overlays.insert(a.key,new ei(t,a));let u=this.ls.get(t);void 0===u&&(u=gs(),this.ls.set(t,u)),this.ls.set(t,u.add(a.key))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo=class Oo{constructor(){this.fs=new Ee(Fo.ds),this.ws=new Ee(Fo._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,t){let a=new Fo(e,t);this.fs=this.fs.add(a),this.ws=this.ws.add(a)}gs(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.ys(new Fo(e,t))}ps(e,t){e.forEach(e=>this.removeReference(e,t))}Is(e){let t=new ht(new ut([])),a=new Fo(t,e),l=new Fo(t,e+1),u=[];return this.ws.forEachInRange([a,l],e=>{this.ys(e),u.push(e.key)}),u}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){let t=new ht(new ut([])),a=new Fo(t,e),l=new Fo(t,e+1),u=gs();return this.ws.forEachInRange([a,l],e=>{u=u.add(e.key)}),u}containsKey(e){let t=new Fo(e,0),a=this.fs.firstAfterOrEqual(t);return null!==a&&e.isEqual(a.key)}};let Fo=class Fo{constructor(e,t){this.key=e,this.As=t}static ds(e,t){return ht.comparator(e.key,t.key)||et(e.As,t.As)}static _s(e,t){return et(e.As,t.As)||ht.comparator(e.key,t.key)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bo=class Bo{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.vs=1,this.Rs=new Ee(Fo.ds)}checkEmpty(e){return Rt.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,a,l){let u=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let h=new Zs(u,t,a,l);for(let t of(this.mutationQueue.push(h),l))this.Rs=this.Rs.add(new Fo(t.key,u)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return Rt.resolve(h)}lookupMutationBatch(e,t){return Rt.resolve(this.Ps(t))}getNextMutationBatchAfterBatchId(e,t){let a=this.bs(t+1),l=a<0?0:a;return Rt.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return Rt.resolve(0===this.mutationQueue.length?-1:this.vs-1)}getAllMutationBatches(e){return Rt.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let a=new Fo(t,0),l=new Fo(t,Number.POSITIVE_INFINITY),u=[];return this.Rs.forEachInRange([a,l],e=>{let t=this.Ps(e.As);u.push(t)}),Rt.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new Ee(et);return t.forEach(e=>{let t=new Fo(e,0),l=new Fo(e,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([t,l],e=>{a=a.add(e.As)})}),Rt.resolve(this.Vs(a))}getAllMutationBatchesAffectingQuery(e,t){let a=t.path,l=a.length+1,u=a;ht.isDocumentKey(u)||(u=u.child(""));let h=new Fo(new ht(u),0),c=new Ee(et);return this.Rs.forEachWhile(e=>{let t=e.key.path;return!!a.isPrefixOf(t)&&(t.length===l&&(c=c.add(e.As)),!0)},h),Rt.resolve(this.Vs(c))}Vs(e){let t=[];return e.forEach(e=>{let a=this.Ps(e);null!==a&&t.push(a)}),t}removeMutationBatch(e,t){0===this.Ss(t.batchId,"removed")||O(),this.mutationQueue.shift();let a=this.Rs;return Rt.forEach(t.mutations,l=>{let u=new Fo(l.key,t.batchId);return a=a.delete(u),this.referenceDelegate.markPotentiallyOrphaned(e,l.key)}).next(()=>{this.Rs=a})}Cn(e){}containsKey(e,t){let a=new Fo(t,0),l=this.Rs.firstAfterOrEqual(a);return Rt.resolve(t.isEqual(l&&l.key))}performConsistencyCheck(e){return this.mutationQueue.length,Rt.resolve()}Ss(e,t){return this.bs(e)}bs(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Ps(e){let t=this.bs(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lo=class Lo{constructor(e){this.Ds=e,this.docs=new pe(ht.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){let a=t.key,l=this.docs.get(a),u=l?l.size:0,h=this.Ds(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:h}),this.size+=h-u,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let a=this.docs.get(t);return Rt.resolve(a?a.document.mutableCopy():an.newInvalidDocument(t))}getEntries(e,t){let a=A;return t.forEach(e=>{let t=this.docs.get(e);a=a.insert(e,t?t.document.mutableCopy():an.newInvalidDocument(e))}),Rt.resolve(a)}getDocumentsMatchingQuery(e,t,a,l){let u=A,h=t.path,c=new ht(h.child("")),d=this.docs.getIteratorFrom(c);for(;d.hasNext();){let{key:e,value:{document:c}}=d.getNext();if(!h.isPrefixOf(e.path))break;e.path.length>h.length+1||0>=function(e,t){let a=e.readTime.compareTo(t.readTime);return 0!==a?a:0!==(a=ht.comparator(e.documentKey,t.documentKey))?a:et(e.largestBatchId,t.largestBatchId)}(new It(c.readTime,c.key,-1),a)||(l.has(c.key)||ns(t,c))&&(u=u.insert(c.key,c.mutableCopy()))}return Rt.resolve(u)}getAllFromCollectionGroup(e,t,a,l){O()}Cs(e,t){return Rt.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new qo(this)}getSize(e){return Rt.resolve(this.size)}};let qo=class qo extends vo{constructor(e){super(),this.os=e}applyChanges(e){let t=[];return this.changes.forEach((a,l)=>{l.isValidDocument()?t.push(this.os.addEntry(e,l)):this.os.removeEntry(a)}),Rt.waitFor(t)}getFromCache(e,t){return this.os.getEntry(e,t)}getAllFromCache(e,t){return this.os.getEntries(e,t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uo=class Uo{constructor(e){this.persistence=e,this.xs=new os(e=>$n(e),On),this.lastRemoteSnapshotVersion=rt.min(),this.highestTargetId=0,this.Ns=0,this.ks=new Oo,this.targetCount=0,this.Ms=lo.kn()}forEachTarget(e,t){return this.xs.forEach((e,a)=>t(a)),Rt.resolve()}getLastRemoteSnapshotVersion(e){return Rt.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Rt.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),Rt.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.Ns&&(this.Ns=t),Rt.resolve()}Fn(e){this.xs.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Ms=new lo(t),this.highestTargetId=t),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,t){return this.Fn(t),this.targetCount+=1,Rt.resolve()}updateTargetData(e,t){return this.Fn(t),Rt.resolve()}removeTargetData(e,t){return this.xs.delete(t.target),this.ks.Is(t.targetId),this.targetCount-=1,Rt.resolve()}removeTargets(e,t,a){let l=0,u=[];return this.xs.forEach((h,c)=>{c.sequenceNumber<=t&&null===a.get(c.targetId)&&(this.xs.delete(h),u.push(this.removeMatchingKeysForTargetId(e,c.targetId)),l++)}),Rt.waitFor(u).next(()=>l)}getTargetCount(e){return Rt.resolve(this.targetCount)}getTargetData(e,t){let a=this.xs.get(t)||null;return Rt.resolve(a)}addMatchingKeys(e,t,a){return this.ks.gs(t,a),Rt.resolve()}removeMatchingKeys(e,t,a){this.ks.ps(t,a);let l=this.persistence.referenceDelegate,u=[];return l&&t.forEach(t=>{u.push(l.markPotentiallyOrphaned(e,t))}),Rt.waitFor(u)}removeMatchingKeysForTargetId(e,t){return this.ks.Is(t),Rt.resolve()}getMatchingKeysForTargetId(e,t){let a=this.ks.Es(t);return Rt.resolve(a)}containsKey(e,t){return Rt.resolve(this.ks.containsKey(t))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ko=class Ko{constructor(e,t){this.$s={},this.overlays={},this.Os=new Ot(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Uo(this),this.indexManager=new zr,this.remoteDocumentCache=new Lo(e=>this.referenceDelegate.Ls(e)),this.serializer=new ar(t),this.qs=new Mo(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $o,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.$s[e.toKey()];return a||(a=new Bo(t,this.referenceDelegate),this.$s[e.toKey()]=a),a}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,t,a){N("MemoryPersistence","Starting transaction:",e);let l=new Go(this.Os.next());return this.referenceDelegate.Us(),a(l).next(e=>this.referenceDelegate.Ks(l).next(()=>e)).toPromise().then(e=>(l.raiseOnCommittedEvent(),e))}Gs(e,t){return Rt.or(Object.values(this.$s).map(a=>()=>a.containsKey(e,t)))}};let Go=class Go extends At{constructor(e){super(),this.currentSequenceNumber=e}};let Qo=class Qo{constructor(e){this.persistence=e,this.Qs=new Oo,this.js=null}static zs(e){return new Qo(e)}get Ws(){if(this.js)return this.js;throw O()}addReference(e,t,a){return this.Qs.addReference(a,t),this.Ws.delete(a.toString()),Rt.resolve()}removeReference(e,t,a){return this.Qs.removeReference(a,t),this.Ws.add(a.toString()),Rt.resolve()}markPotentiallyOrphaned(e,t){return this.Ws.add(t.toString()),Rt.resolve()}removeTarget(e,t){this.Qs.Is(t.targetId).forEach(e=>this.Ws.add(e.toString()));let a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Ws.add(e.toString()))}).next(()=>a.removeTargetData(e,t))}Us(){this.js=new Set}Ks(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Rt.forEach(this.Ws,a=>{let l=ht.fromPath(a);return this.Hs(e,l).next(e=>{e||t.removeEntry(l,rt.min())})}).next(()=>(this.js=null,t.apply(e)))}updateLimboDocument(e,t){return this.Hs(e,t).next(e=>{e?this.Ws.delete(t.toString()):this.Ws.add(t.toString())})}Ls(e){return 0}Hs(e,t){return Rt.or([()=>Rt.resolve(this.Qs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gs(e,t)])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tu=class tu{constructor(e,t,a,l){this.targetId=e,this.fromCache=t,this.Fi=a,this.Bi=l}static Li(e,t){let a=gs(),l=gs();for(let e of t.docChanges)switch(e.type){case 0:a=a.add(e.doc.key);break;case 1:l=l.add(e.doc.key)}return new tu(e,t.fromCache,a,l)}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=class eu{constructor(){this.qi=!1}initialize(e,t){this.Ui=e,this.indexManager=t,this.qi=!0}getDocumentsMatchingQuery(e,t,a,l){return this.Ki(e,t).next(u=>u||this.Gi(e,t,l,a)).next(a=>a||this.Qi(e,t))}Ki(e,t){if(Qn(t))return Rt.resolve(null);let a=Jn(t);return this.indexManager.getIndexType(e,a).next(l=>0===l?null:(null!==t.limit&&1===l&&(a=Jn(t=Xn(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,a).next(l=>{let u=gs(...l);return this.Ui.getDocuments(e,u).next(l=>this.indexManager.getMinOffset(e,a).next(a=>{let h=this.ji(t,l);return this.zi(t,h,u,a.readTime)?this.Ki(e,Xn(t,null,"F")):this.Wi(e,h,t,a)}))})))}Gi(e,t,a,l){return Qn(t)||l.isEqual(rt.min())?this.Qi(e,t):this.Ui.getDocuments(e,a).next(u=>{let h=this.ji(t,u);return this.zi(t,h,a,l)?this.Qi(e,t):(C()<=d.in.DEBUG&&N("QueryEngine","Re-using previous result from %s to execute query: %s",l.toString(),es(t)),this.Wi(e,h,t,function(e,t){let a=e.toTimestamp().seconds,l=e.toTimestamp().nanoseconds+1,u=rt.fromTimestamp(1e9===l?new it(a+1,0):new it(a,l));return new It(u,ht.empty(),-1)}(l,0)))})}ji(e,t){let a=new Ee((t,a)=>{let l=!1;for(let u of Hn(e)){let e=function(e,t,a){let l=e.field.isKeyField()?ht.comparator(t.key,a.key):function(e,t,a){let l=t.data.field(e),u=a.data.field(e);return null!==l&&null!==u?Ke(l,u):O()}(e.field,t,a);switch(e.dir){case"asc":return l;case"desc":return -1*l;default:return O()}}(u,t,a);if(0!==e)return e;l=l||u.field.isKeyField()}return 0});return t.forEach((t,l)=>{ns(e,l)&&(a=a.add(l))}),a}zi(e,t,a,l){if(null===e.limit)return!1;if(a.size!==t.size)return!0;let u="F"===e.limitType?t.last():t.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(l)>0)}Qi(e,t){return C()<=d.in.DEBUG&&N("QueryEngine","Using full collection scan to execute query:",es(t)),this.Ui.getDocumentsMatchingQuery(e,t,It.min())}Wi(e,t,a,l){return this.Ui.getDocumentsMatchingQuery(e,a,l).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nu=class nu{constructor(e,t,a,l){this.persistence=e,this.Hi=t,this.serializer=l,this.Ji=new pe(et),this.Yi=new os(e=>$n(e),On),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(a)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ko(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ji))}};async function iu(e,t){return await e.persistence.runTransaction("Handle user change","readonly",a=>{let l;return e.mutationQueue.getAllMutationBatches(a).next(u=>(l=u,e.tr(t),e.mutationQueue.getAllMutationBatches(a))).next(t=>{let u=[],h=[],c=gs();for(let e of l)for(let t of(u.push(e.batchId),e.mutations))c=c.add(t.key);for(let e of t)for(let t of(h.push(e.batchId),e.mutations))c=c.add(t.key);return e.localDocuments.getDocuments(a,c).next(e=>({er:e,removedBatchIds:u,addedBatchIds:h}))})})}let Ru=class Ru{constructor(){this.activeTargetIds=_}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){let e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}};let bu=class bu{constructor(){this.Hr=new Ru,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,t,a){this.Jr[e]=t}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new Ru,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vu=class Vu{Yr(e){}shutdown(){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Su=class Su{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){for(let e of(N("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.so))e(0)}no(){for(let e of(N("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.so))e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let b=null;function Cu(){return null===b?b=268435456+Math.round(2147483648*Math.random()):b++,"0x"+b.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Nu=class Nu{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let x="WebChannelConnection";let Mu=class Mu extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http";this.mo=t+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,t,a,l,u){let h=Cu(),c=this.To(e,t);N("RestConnection",`Sending RPC '${e}' ${h}:`,c,a);let d={};return this.Eo(d,l,u),this.Ao(e,c,d,a).then(t=>(N("RestConnection",`Received RPC '${e}' ${h}: `,t),t),t=>{throw M("RestConnection",`RPC '${e}' ${h} failed with error: `,t,"url: ",c,"request:",a),t})}vo(e,t,a,l,u,h){return this.Io(e,t,a,l,u)}Eo(e,t,a){e["X-Goog-Api-Client"]="gl-js/ fire/"+p,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,a)=>e[a]=t),a&&a.headers.forEach((t,a)=>e[a]=t)}To(e,t){let a=L[e];return`${this.mo}/v1/${t}:${a}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,t,a,l){let u=Cu();return new Promise((h,c)=>{let d=new m.JJ;d.setWithCredentials(!0),d.listenOnce(m.tw.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case m.jK.NO_ERROR:let t=d.getResponseJson();N(x,`XHR for RPC '${e}' ${u} received:`,JSON.stringify(t)),h(t);break;case m.jK.TIMEOUT:N(x,`RPC '${e}' ${u} timed out`),c(new U(v.DEADLINE_EXCEEDED,"Request time out"));break;case m.jK.HTTP_ERROR:let a=d.getStatus();if(N(x,`RPC '${e}' ${u} failed with status:`,a,"response text:",d.getResponseText()),a>0){let e=d.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(t)>=0?t:v.UNKNOWN}(t.status);c(new U(e,t.message))}else c(new U(v.UNKNOWN,"Server responded with status "+d.getStatus()))}else c(new U(v.UNAVAILABLE,"Connection failed."));break;default:O()}}finally{N(x,`RPC '${e}' ${u} completed.`)}});let f=JSON.stringify(l);N(x,`RPC '${e}' ${u} sending request:`,l),d.send(t,"POST",f,a,15)})}Ro(e,t,a){let u=Cu(),h=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=(0,m.UE)(),d=(0,m.FJ)(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;void 0!==g&&(f.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(f.xmlHttpFactory=new m.zI({})),this.Eo(f.initMessageHeaders,t,a),f.encodeInitMessageHeaders=!0;let p=h.join("");N(x,`Creating RPC '${e}' stream ${u}: ${p}`,f);let y=c.createWebChannel(p,f),E=!1,T=!1,I=new Nu({ro:t=>{T?N(x,`Not sending because RPC '${e}' stream ${u} is closed:`,t):(E||(N(x,`Opening RPC '${e}' stream ${u} transport.`),y.open(),E=!0),N(x,`RPC '${e}' stream ${u} sending:`,t),y.send(t))},oo:()=>y.close()}),w=(e,t,a)=>{e.listen(t,e=>{try{a(e)}catch(e){setTimeout(()=>{throw e},0)}})};return w(y,m.ii.EventType.OPEN,()=>{T||N(x,`RPC '${e}' stream ${u} transport opened.`)}),w(y,m.ii.EventType.CLOSE,()=>{T||(T=!0,N(x,`RPC '${e}' stream ${u} transport closed`),I.wo())}),w(y,m.ii.EventType.ERROR,t=>{T||(T=!0,M(x,`RPC '${e}' stream ${u} transport errored:`,t),I.wo(new U(v.UNAVAILABLE,"The operation could not be completed")))}),w(y,m.ii.EventType.MESSAGE,t=>{var a;if(!T){let h=t.data[0];h||O();let c=h.error||(null===(a=h[0])||void 0===a?void 0:a.error);if(c){N(x,`RPC '${e}' stream ${u} received error:`,c);let t=c.status,a=function(e){let t=l[e];if(void 0!==t)return function(e){if(void 0===e)return k("GRPC error has no .code"),v.UNKNOWN;switch(e){case l.OK:return v.OK;case l.CANCELLED:return v.CANCELLED;case l.UNKNOWN:return v.UNKNOWN;case l.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case l.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case l.INTERNAL:return v.INTERNAL;case l.UNAVAILABLE:return v.UNAVAILABLE;case l.UNAUTHENTICATED:return v.UNAUTHENTICATED;case l.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case l.NOT_FOUND:return v.NOT_FOUND;case l.ALREADY_EXISTS:return v.ALREADY_EXISTS;case l.PERMISSION_DENIED:return v.PERMISSION_DENIED;case l.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case l.ABORTED:return v.ABORTED;case l.OUT_OF_RANGE:return v.OUT_OF_RANGE;case l.UNIMPLEMENTED:return v.UNIMPLEMENTED;case l.DATA_LOSS:return v.DATA_LOSS;default:return O()}}(t)}(t),h=c.message;void 0===a&&(a=v.INTERNAL,h="Unknown error status: "+t+" with message "+c.message),T=!0,I.wo(new U(a,h)),y.close()}else N(x,`RPC '${e}' stream ${u} received:`,h),I._o(h)}}),w(d,m.ju.STAT_EVENT,t=>{t.stat===m.kN.PROXY?N(x,`RPC '${e}' stream ${u} detected buffering proxy`):t.stat===m.kN.NOPROXY&&N(x,`RPC '${e}' stream ${u} detected no buffering proxy`)}),setTimeout(()=>{I.fo()},0),I}};function Ou(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(e){return new Vi(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=class Bu{constructor(e,t,a=1e3,l=1.5,u=6e4){this.ii=e,this.timerId=t,this.Po=a,this.bo=l,this.Vo=u,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();let t=Math.floor(this.So+this.ko()),a=Math.max(0,Date.now()-this.Co),l=Math.max(0,t-a);l>0&&N("ExponentialBackoff",`Backing off for ${l} ms (base delay: ${this.So} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,l,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lu=class Lu{constructor(e,t,a,l,u,h,c,d){this.ii=e,this.$o=a,this.Oo=l,this.connection=u,this.authCredentialsProvider=h,this.appCheckCredentialsProvider=c,this.listener=d,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Bu(e,t)}Uo(){return 1===this.state||5===this.state||this.Ko()}Ko(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&null===this.Bo&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,t){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,4!==e?this.qo.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(k(t.toString()),k("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):t&&t.code===v.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(t)}Yo(){}auth(){this.state=1;let e=this.Xo(this.Fo),t=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,a])=>{this.Fo===t&&this.Zo(e,a)},t=>{e(()=>{let e=new U(v.UNKNOWN,"Fetching auth token failed: "+t.message);return this.tu(e)})})}Zo(e,t){let a=this.Xo(this.Fo);this.stream=this.eu(e,t),this.stream.uo(()=>{a(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(e=>{a(()=>this.tu(e))}),this.stream.onMessage(e=>{a(()=>this.onMessage(e))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return N("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return t=>{this.ii.enqueueAndForget(()=>this.Fo===e?t():(N("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}};let Uu=class Uu extends Lu{constructor(e,t,a,l,u,h){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,l,h),this.serializer=u,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,t){return this.connection.Ro("Write",e,t)}onMessage(e){var t,a;if(e.streamToken||O(),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();let l=(t=e.writeResults,a=e.commitTime,t&&t.length>0?(void 0!==a||O(),t.map(e=>{let t;return(t=e.updateTime?Ni(e.updateTime):Ni(a)).isEqual(rt.min())&&(t=Ni(a)),new Os(t,e.transformResults||[])})):[]),u=Ni(e.commitTime);return this.listener.cu(u,l)}return e.writeResults&&0!==e.writeResults.length&&O(),this.ru=!0,this.listener.au()}hu(){var e;let t={};t.database=(e=this.serializer,new ut(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()),this.Wo(t)}uu(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var a;let l;if(t instanceof js)l={update:Ui(e,t.key,t.value)};else if(t instanceof Ys)l={delete:$i(e,t.key)};else if(t instanceof zs)l={update:Ui(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof Xs))return O();l={verify:$i(e,t.key)}}return t.fieldTransforms.length>0&&(l.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let a=t.transform;if(a instanceof bs)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Vs)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ds)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xs)return{fieldPath:t.field.canonicalString(),increment:a.gt};throw O()})(0,e))),t.precondition.isNone||(l.currentDocument=void 0!==(a=t.precondition).updateTime?{updateTime:Di(e,a.updateTime.toTimestamp())}:void 0!==a.exists?{exists:a.exists}:O()),l})(this.serializer,e))};this.Wo(t)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ku=class Ku extends class{}{constructor(e,t,a,l){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=l,this.lu=!1}fu(){if(this.lu)throw new U(v.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,t,a){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,u])=>this.connection.Io(e,t,a,l,u)).catch(e=>{throw"FirebaseError"===e.name?(e.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new U(v.UNKNOWN,e.toString())})}vo(e,t,a,l){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([u,h])=>this.connection.vo(e,t,a,u,h,l)).catch(e=>{throw"FirebaseError"===e.name?(e.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new U(v.UNKNOWN,e.toString())})}terminate(){this.lu=!0}};let Qu=class Qu{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){0===this.wu&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){"Online"===this.state?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,"Online"===e&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){let t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(k(t),this.mu=!1):N("OnlineStateTracker",t)}Tu(){null!==this._u&&(this._u.cancel(),this._u=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ju=class ju{constructor(e,t,a,l,u){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=u,this.Pu.Yr(e=>{a.enqueueAndForget(async()=>{ec(this)&&(N("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.vu.add(4),await Wu(e),e.bu.set("Unknown"),e.vu.delete(4),await zu(e)}(this))})}),this.bu=new Qu(a,l)}};async function zu(e){if(ec(e))for(let t of e.Ru)await t(!0)}async function Wu(e){for(let t of e.Ru)await t(!1)}function ec(e){return 0===e.vu.size}async function oc(e,t,a){if(!Dt(t))throw t;e.vu.add(1),await Wu(e),e.bu.set("Offline"),a||(a=()=>{var t;return(t=e.localStore).persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.Bs.getLastRemoteSnapshotVersion(e))}),e.asyncQueue.enqueueRetryable(async()=>{N("RemoteStore","Retrying IndexedDB access"),await a(),e.vu.delete(1),await zu(e)})}function uc(e,t){return t().catch(a=>oc(e,a,t))}async function cc(e){let t=Ic(e),a=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;ec(e)&&e.Eu.length<10;)try{let l=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",a=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(a,t)))}(e.localStore,a);if(null===l){0===e.Eu.length&&t.jo();break}a=l.batchId,function(e,t){e.Eu.push(t);let a=Ic(e);a.Ko()&&a.ou&&a.uu(t.mutations)}(e,l)}catch(t){await oc(e,t)}lc(e)&&fc(e)}function lc(e){return ec(e)&&!Ic(e).Uo()&&e.Eu.length>0}function fc(e){Ic(e).start()}async function dc(e){Ic(e).hu()}async function wc(e){let t=Ic(e);for(let a of e.Eu)t.uu(a.mutations)}async function _c(e,t,a){let l=e.Eu.shift(),u=ti.from(l,t,a);await uc(e,()=>e.remoteSyncer.applySuccessfulWrite(u)),await cc(e)}async function mc(e,t){t&&Ic(e).ou&&await async function(e,t){var a;if(function(e){switch(e){default:return O();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}(a=t.code)&&a!==v.ABORTED){let a=e.Eu.shift();Ic(e).Qo(),await uc(e,()=>e.remoteSyncer.rejectFailedWrite(a.batchId,t)),await cc(e)}}(e,t),lc(e)&&fc(e)}async function gc(e,t){e.asyncQueue.verifyOperationInProgress(),N("RemoteStore","RemoteStore received new credentials");let a=ec(e);e.vu.add(3),await Wu(e),a&&e.bu.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.vu.delete(3),await zu(e)}async function yc(e,t){t?(e.vu.delete(2),await zu(e)):t||(e.vu.add(2),await Wu(e),e.bu.set("Unknown"))}function Ic(e){var t,a,l;return e.Du||(e.Du=(t=e.datastore,a=e.asyncQueue,l={uo:dc.bind(null,e),ao:mc.bind(null,e),au:wc.bind(null,e),cu:_c.bind(null,e)},t.fu(),new Uu(a,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,l)),e.Ru.push(async t=>{t?(e.Du.Qo(),await cc(e)):(await e.Du.stop(),e.Eu.length>0&&(N("RemoteStore",`Stopping write stream with ${e.Eu.length} pending writes`),e.Eu=[]))})),e.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tc=class Tc{constructor(e,t,a,l,u){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=l,this.removalCallback=u,this.deferred=new K,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}static createAndSchedule(e,t,a,l,u){let h=Date.now()+a,c=new Tc(e,t,h,l,u);return c.start(a),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new U(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};function Ec(e,t){if(k("AsyncQueue",`${t}: ${e}`),Dt(e))return new U(v.UNAVAILABLE,`${t}: ${e}`);throw e}let bc=class bc{constructor(){this.queries=new os(e=>ts(e),Zn),this.onlineState="Unknown",this.ku=new Set}};let Kc=class Kc{constructor(e,t,a,l,u,h){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=l,this.currentUser=u,this.maxConcurrentLimboResolutions=h,this.dc={},this.wc=new os(e=>ts(e),Zn),this._c=new Map,this.mc=new Set,this.gc=new pe(ht.comparator),this.yc=new Map,this.Ic=new Oo,this.Tc={},this.Ec=new Map,this.Ac=lo.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return!0===this.vc}};async function zc(e,t,a){var l;let u=(e.remoteStore.remoteSyncer.applySuccessfulWrite=Yc.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Xc.bind(null,e),e);try{let e;let h=await function(e,t){let a,l;let u=it.now(),h=t.reduce((e,t)=>e.add(t.key),gs());return e.persistence.runTransaction("Locally write mutations","readwrite",c=>{let d=A,f=gs();return e.Zi.getEntries(c,h).next(e=>{(d=e).forEach((e,t)=>{t.isValidDocument()||(f=f.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(c,d)).next(l=>{a=l;let h=[];for(let e of t){let t=function(e,t){let a=null;for(let l of e.fieldTransforms){let e=t.data.field(l.field),u=Ps(l.transform,e||null);null!=u&&(null===a&&(a=un.empty()),a.set(l.field,u))}return a||null}(e,a.get(e.key).overlayedDocument);null!=t&&h.push(new zs(e.key,t,function cn(e){let t=[];return ge(e.fields,(e,a)=>{let l=new at([e]);if(Ze(a)){let e=cn(a.mapValue).fields;if(0===e.length)t.push(l);else for(let a of e)t.push(l.child(a))}else t.push(l)}),new Re(t)}(t.value.mapValue),Fs.exists(!0)))}return e.mutationQueue.addMutationBatch(c,u,h,t)}).next(t=>{l=t;let u=t.applyToLocalDocumentSet(a,f);return e.documentOverlayCache.saveOverlays(c,t.batchId,u)})}).then(()=>({batchId:l.batchId,changes:ls(a)}))}(u.localStore,t);u.sharedClientState.addPendingMutation(h.batchId),l=h.batchId,(e=u.Tc[u.currentUser.toKey()])||(e=new pe(et)),e=e.insert(l,a),u.Tc[u.currentUser.toKey()]=e,await ua(u,h.changes),await cc(u.remoteStore)}catch(t){let e=Ec(t,"Failed to persist write");a.reject(e)}}function Hc(e,t,a){var l;if(e.isPrimaryClient&&0===a||!e.isPrimaryClient&&1===a){let a;let u=[];e.wc.forEach((e,a)=>{let l=a.view.Mu(t);l.snapshot&&u.push(l.snapshot)}),(l=e.eventManager).onlineState=t,a=!1,l.queries.forEach((e,l)=>{for(let e of l.listeners)e.Mu(t)&&(a=!0)}),a&&function(e){e.ku.forEach(e=>{e.next()})}(l),u.length&&e.dc.nu(u),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function Yc(e,t){var a;let l=t.batch.batchId;try{let u=await (a=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let l=t.batch.keys(),u=a.Zi.newChangeBuffer({trackRemovals:!0});return(function(e,t,a,l){let u=a.batch,h=u.keys(),c=Rt.resolve();return h.forEach(e=>{c=c.next(()=>l.getEntry(t,e)).next(t=>{let h=a.docVersions.get(e);null!==h||O(),0>t.version.compareTo(h)&&(u.applyToRemoteDocument(t,a),t.isValidDocument()&&(t.setReadTime(a.commitVersion),l.addEntry(t)))})}),c.next(()=>e.mutationQueue.removeMutationBatch(t,u))})(a,e,t,u).next(()=>u.apply(e)).next(()=>a.mutationQueue.performConsistencyCheck(e)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(e,l,t.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=gs();for(let a=0;a<e.mutationResults.length;++a)e.mutationResults[a].transformResults.length>0&&(t=t.add(e.batch.mutations[a].key));return t}(t))).next(()=>a.localDocuments.getDocuments(e,l))});ea(e,l,null),ta(e,l),e.sharedClientState.updateMutationState(l,"acknowledged"),await ua(e,u)}catch(e){await vt(e)}}async function Xc(e,t,a){var l;try{let u=await (l=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let a;return l.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||O(),a=t.keys(),l.mutationQueue.removeMutationBatch(e,t))).next(()=>l.mutationQueue.performConsistencyCheck(e)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(e,a,t)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,a)).next(()=>l.localDocuments.getDocuments(e,a))});ea(e,t,a),ta(e,t),e.sharedClientState.updateMutationState(t,"rejected",a),await ua(e,u)}catch(e){await vt(e)}}function ta(e,t){(e.Ec.get(t)||[]).forEach(e=>{e.resolve()}),e.Ec.delete(t)}function ea(e,t,a){let l=e.Tc[e.currentUser.toKey()];if(l){let u=l.get(t);u&&(a?u.reject(a):u.resolve(),l=l.remove(t)),e.Tc[e.currentUser.toKey()]=l}}async function ua(e,t,a){let l=[],u=[],h=[];e.wc.isEmpty()||(e.wc.forEach((c,d)=>{h.push(e.Rc(d,t,a).then(t=>{if((t||a)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(d.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){l.push(t);let e=tu.Li(d.targetId,t);u.push(e)}}))}),await Promise.all(h),e.dc.nu(l),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",a=>Rt.forEach(t,t=>Rt.forEach(t.Fi,l=>e.persistence.referenceDelegate.addReference(a,t.targetId,l)).next(()=>Rt.forEach(t.Bi,l=>e.persistence.referenceDelegate.removeReference(a,t.targetId,l)))))}catch(e){if(!Dt(e))throw e;N("LocalStore","Failed to update sequence numbers: "+e)}for(let a of t){let t=a.targetId;if(!a.fromCache){let a=e.Ji.get(t),l=a.snapshotVersion,u=a.withLastLimboFreeSnapshotVersion(l);e.Ji=e.Ji.insert(t,u)}}}(e.localStore,u))}async function ca(e,t){if(!e.currentUser.isEqual(t)){N("SyncEngine","User change. New user:",t.toKey());let a=await iu(e.localStore,t);e.currentUser=t,e.Ec.forEach(e=>{e.forEach(e=>{e.reject(new U(v.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ec.clear(),e.sharedClientState.handleUserChange(t,a.removedBatchIds,a.addedBatchIds),await ua(e,a.er)}}let Ea=class Ea{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Fu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t,a,l,u;return t=this.persistence,a=new eu,l=e.initialUser,u=this.serializer,new nu(t,a,l,u)}createPersistence(e){return new Ko(Qo.zs,this.serializer)}createSharedClientState(e){return new bu}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}};let Pa=class Pa{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Hc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=ca.bind(null,this.syncEngine),await yc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bc}createDatastore(e){var t,a,l;let u=Fu(e.databaseInfo.databaseId),h=(t=e.databaseInfo,new Mu(t));return a=e.authCredentials,l=e.appCheckCredentials,new Ku(a,l,h,u)}createRemoteStore(e){var t,a,l,u;return t=this.localStore,a=this.datastore,l=e.asyncQueue,u=Su.D()?new Su:new Vu,new ju(t,a,l,e=>Hc(this.syncEngine,e,0),u)}createSyncEngine(e,t){return function(e,t,a,l,u,h,c){let d=new Kc(e,t,a,l,u,h);return c&&(d.vc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){N("RemoteStore","RemoteStore shutting down."),e.vu.add(5),await Wu(e),e.Pu.shutdown(),e.bu.set("Unknown")}(this.remoteStore)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xa=class xa{constructor(e,t,a,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=l,this.user=V.UNAUTHENTICATED,this.clientId=tt.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(a,async e=>{N("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(a,e=>(N("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new K;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(a){let t=Ec(a,"Failed to shutdown persistence");e.reject(t)}}),e.promise}};async function Na(e,t){e.asyncQueue.verifyOperationInProgress(),N("FirestoreClient","Initializing OfflineComponentProvider");let a=await e.getConfiguration();await t.initialize(a);let l=a.initialUser;e.setCredentialChangeListener(async e=>{l.isEqual(e)||(await iu(t.localStore,e),l=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function ka(e,t){e.asyncQueue.verifyOperationInProgress();let a=await $a(e);N("FirestoreClient","Initializing OnlineComponentProvider");let l=await e.getConfiguration();await t.initialize(a,l),e.setCredentialChangeListener(e=>gc(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,a)=>gc(t.remoteStore,a)),e._onlineComponents=t}async function $a(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){N("FirestoreClient","Using user provided OfflineComponentProvider");try{await Na(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===v.FAILED_PRECONDITION||t.code===v.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;M("Error using user provided cache. Falling back to memory cache: "+t),await Na(e,new Ea)}}else N("FirestoreClient","Using default OfflineComponentProvider"),await Na(e,new Ea)}return e._offlineComponents}async function Oa(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(N("FirestoreClient","Using user provided OnlineComponentProvider"),await ka(e,e._uninitializedComponentsProvider._online)):(N("FirestoreClient","Using default OnlineComponentProvider"),await ka(e,new Pa))),e._onlineComponents}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let F=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(e,t,a){if(!a)throw new U(v.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function ih(e){if(!ht.isDocumentKey(e))throw new U(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function rh(e){if(ht.isDocumentKey(e))throw new U(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function oh(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let a=(t=e).constructor?t.constructor.name:null;return a?`a custom ${a} object`:"an object"}}return"function"==typeof e?"a function":O()}function uh(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new U(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let a=oh(e);throw new U(v.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${a}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah=class ah{constructor(e){var t,a;if(void 0===e.host){if(void 0!==e.ssl)throw new U(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new U(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,a,l){if(!0===t&&!0===l)throw new U(v.INVALID_ARGUMENT,`${e} and ${a} cannot be used together.`)})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th(null!==(a=e.experimentalLongPollingOptions)&&void 0!==a?a:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new U(v.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new U(v.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new U(v.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){var t,a;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,a=e.experimentalLongPollingOptions,t.timeoutSeconds===a.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}};let hh=class hh{constructor(e,t,a,l){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=l,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new U(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Q;switch(e.type){case"firstParty":return new H(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new U(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=F.get(e);t&&(N("ComponentProvider","Removing Datastore"),F.delete(e),t.terminate())}(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let fh=class fh{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wh(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fh(this.firestore,e,this._key)}};let dh=class dh{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new dh(this.firestore,e,this._query)}};let wh=class wh extends dh{constructor(e,t,a){super(e,t,new Un(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new fh(this.firestore,null,new ht(e))}withConverter(e){return new wh(this.firestore,e,this._path)}};function _h(e,t,...a){if(e=(0,f.m9)(e),nh("collection","path",t),e instanceof hh){let l=ut.fromString(t,...a);return rh(l),new wh(e,null,l)}{if(!(e instanceof fh||e instanceof wh))throw new U(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let l=e._path.child(ut.fromString(t,...a));return rh(l),new wh(e.firestore,null,l)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih=class Ih{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Bu(this,"async_queue_retry"),this.Xc=()=>{let e=Ou();e&&N("AsyncQueue","Visibility state changed to "+e.visibilityState),this.qo.Mo()};let e=Ou();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;let t=Ou();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});let t=new K;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Dt(e))throw e;N("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){let t=this.Gc.then(()=>(this.Hc=!0,e().catch(e=>{let t;this.Wc=e,this.Hc=!1;let a=(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t);throw k("INTERNAL UNHANDLED ERROR: ",a),e}).then(e=>(this.Hc=!1,e))));return this.Gc=t,t}enqueueAfterDelay(e,t,a){this.Zc(),this.Yc.indexOf(e)>-1&&(t=0);let l=Tc.createAndSchedule(this,e,t,a,e=>this.na(e));return this.zc.push(l),l}Zc(){this.Wc&&O()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(let t of this.zc)if(t.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{for(let t of(this.zc.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.zc))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){let t=this.zc.indexOf(e);this.zc.splice(t,1)}};let vh=class vh extends hh{constructor(e,t,a,l){super(e,t,a,l),this.type="firestore",this._queue=new Ih,this._persistenceKey=(null==l?void 0:l.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vh(this),this._firestoreClient.terminate()}};function Ph(e,t){let a="object"==typeof e?e:(0,h.Mq)(),l=(0,h.qX)(a,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!l._initialized){let e=(0,f.P0)("firestore");e&&function(e,t,a,l={}){var u;let h=(e=uh(e,hh))._getSettings(),c=`${t}:${a}`;if("firestore.googleapis.com"!==h.host&&h.host!==c&&M("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},h),{host:c,ssl:!1})),l.mockUserToken){let t,a;if("string"==typeof l.mockUserToken)t=l.mockUserToken,a=V.MOCK_USER;else{t=(0,f.Sg)(l.mockUserToken,null===(u=e._app)||void 0===u?void 0:u.options.projectId);let h=l.mockUserToken.sub||l.mockUserToken.user_id;if(!h)throw new U(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new V(h)}e._authCredentials=new j(new G(t,a))}}(l,...e)}return l}function Vh(e){var t,a,l,u,h,c;let d=e._freezeSettings(),f=(u=e._databaseId,h=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",c=e._persistenceKey,new $e(u,h,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,th(d.experimentalLongPollingOptions),d.useFetchStreams));e._firestoreClient=new xa(e._authCredentials,e._appCheckCredentials,e._queue,f),(null===(a=d.cache)||void 0===a?void 0:a._offlineComponentProvider)&&(null===(l=d.cache)||void 0===l?void 0:l._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:d.cache.kind,_offline:d.cache._offlineComponentProvider,_online:d.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uh=class Uh{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Uh(Ve.fromBase64String(e))}catch(e){throw new U(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Uh(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh=class Kh{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new U(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qh=class Qh{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let jh=class jh{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new U(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new U(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return et(this._lat,e._lat)||et(this._long,e._long)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let P=/^__.*__$/;let Wh=class Wh{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return null!==this.fieldMask?new zs(e,this.data,this.fieldMask,t,this.fieldTransforms):new js(e,this.data,t,this.fieldTransforms)}};function Jh(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw O()}}let Yh=class Yh{constructor(e,t,a,l,u,h){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=l,void 0===u&&this.ua(),this.fieldTransforms=u||[],this.fieldMask=h||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new Yh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var t;let a=null===(t=this.path)||void 0===t?void 0:t.child(e),l=this.aa({path:a,la:!1});return l.fa(e),l}da(e){var t;let a=null===(t=this.path)||void 0===t?void 0:t.child(e),l=this.aa({path:a,la:!1});return l.ua(),l}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return gl(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(0===e.length)throw this._a("Document fields must not be empty");if(Jh(this.ca)&&P.test(e))throw this._a('Document fields cannot begin and end with "__"')}};let Xh=class Xh{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||Fu(e)}ya(e,t,a,l=!1){return new Yh({ca:e,methodName:t,ga:a,path:at.emptyPath(),la:!1,ma:l},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}};function fl(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof it||e instanceof jh||e instanceof Uh||e instanceof fh||e instanceof Qh)}function dl(e,t,a){if(!fl(a)||!("object"==typeof a&&null!==a&&(Object.getPrototypeOf(a)===Object.prototype||null===Object.getPrototypeOf(a)))){let l=oh(a);throw"an object"===l?t._a(e+" a custom object"):t._a(e+" "+l)}}let B=RegExp("[~\\*/\\[\\]]");function gl(e,t,a,l,u){let h=l&&!l.isEmpty(),c=void 0!==u,d=`Function ${t}() called with invalid data`;a&&(d+=" (via `toFirestore()`)"),d+=". ";let f="";return(h||c)&&(f+=" (found",h&&(f+=` in field ${l}`),c&&(f+=` in document ${u}`),f+=")"),new U(v.INVALID_ARGUMENT,d+e+f)}function pf(e,t){var a,l,u,h;let c=uh(e.firestore,vh),d=function(e,t,...a){if(e=(0,f.m9)(e),1==arguments.length&&(t=tt.A()),nh("doc","path",t),e instanceof hh){let l=ut.fromString(t,...a);return ih(l),new fh(e,null,new ht(l))}{if(!(e instanceof fh||e instanceof wh))throw new U(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let l=e._path.child(ut.fromString(t,...a));return ih(l),new fh(e.firestore,e instanceof wh?e.converter:null,new ht(l))}}(e),m=(a=e.converter)?l&&(l.merge||l.mergeFields)?a.toFirestore(t,l):a.toFirestore(t):t;return(u=c,h=[(function(e,t,a,l,u,h={}){let c,d;let m=e.ya(h.merge||h.mergeFields?2:0,t,a,u);dl("Data must be an object, but it was:",m,l);let g=function ll(e,t){let a={};return ye(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ge(e,(e,l)=>{let u=function hl(e,t){if(fl(e=(0,f.m9)(e)))return dl("Unsupported field value:",t,e),ll(e,t);if(e instanceof Qh)return function(e,t){if(!Jh(t.ca))throw t._a(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t._a(`${e._methodName}() is not currently supported inside arrays`);let a=e._toFieldTransform(t);a&&t.fieldTransforms.push(a)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.la&&4!==t.ca)throw t._a("Nested arrays are not supported");return function(e,t){let a=[],l=0;for(let u of e){let e=hl(u,t.wa(l));null==e&&(e={nullValue:"NULL_VALUE"}),a.push(e),l++}return{arrayValue:{values:a}}}(e,t)}return function(e,t){var a,l,u,h,c;if(null===(e=(0,f.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return a=t.serializer,"number"==typeof(u=l=e)&&Number.isInteger(u)&&!Bt(u)&&u<=Number.MAX_SAFE_INTEGER&&u>=Number.MIN_SAFE_INTEGER?Ts(l):Is(a,l);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let a=it.fromDate(e);return{timestampValue:Di(t.serializer,a)}}if(e instanceof it){let a=new it(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Di(t.serializer,a)}}if(e instanceof jh)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Uh)return{bytesValue:(h=t.serializer,c=e._byteString,h.useProto3Json?c.toBase64():c.toUint8Array())};if(e instanceof fh){let a=t.databaseId,l=e.firestore._databaseId;if(!l.isEqual(a))throw t._a(`Document reference is for database ${l.projectId}/${l.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:ki(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t._a(`Unsupported field value: ${oh(e)}`)}(e,t)}(l,t.ha(e));null!=u&&(a[e]=u)}),{mapValue:{fields:a}}}(l,m);if(h.merge)c=new Re(m.fieldMask),d=m.fieldTransforms;else if(h.mergeFields){let e=[];for(let l of h.mergeFields){let u=function(e,t,a){if((t=(0,f.m9)(t))instanceof Kh)return t._internalPath;if("string"==typeof t)return function(e,t,a){if(t.search(B)>=0)throw gl(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,a);try{return new Kh(...t.split("."))._internalPath}catch(l){throw gl(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,a)}}(e,t);throw gl("Field path arguments must be of type string or ",e,!1,void 0,a)}(t,l,a);if(!m.contains(u))throw new U(v.INVALID_ARGUMENT,`Field '${u}' is specified in your field mask but missing from your input data.`);(function(e,t){return e.some(e=>e.isEqual(t))})(e,u)||e.push(u)}c=new Re(e),d=m.fieldTransforms.filter(e=>c.covers(e.field))}else c=null,d=m.fieldTransforms;return new Wh(new un(g),c,d)})(function(e){let t=e._freezeSettings(),a=Fu(e._databaseId);return new Xh(e._databaseId,!!t.ignoreUndefinedProperties,a)}(e.firestore),"addDoc",d._key,m,null!==e.converter,{}).toMutation(d._key,Fs.exists(!1))],function(e,t){let a=new K;return e.asyncQueue.enqueueAndForget(async()=>zc(await Oa(e).then(e=>e.syncEngine),t,a)),a.promise}((u._firestoreClient||Vh(u),u._firestoreClient.verifyNotTerminated(),u._firestoreClient),h)).then(()=>d)}!function(e,t=!0){p=h.Jn,(0,h.Xd)(new c.wA("firestore",(e,{instanceIdentifier:a,options:l})=>{let u=e.getProvider("app").getImmediate(),h=new vh(new z(e.getProvider("auth-internal")),new Y(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new U(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(e.options.projectId,t)}(u,a),u);return l=Object.assign({useFetchStreams:t},l),h._setSettings(l),h},"PUBLIC").setMultipleInstances(!0)),(0,h.KN)(g,"3.13.0",void 0),(0,h.KN)(g,"3.13.0","esm2017")}()}}]);