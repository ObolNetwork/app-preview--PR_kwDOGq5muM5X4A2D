(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[655],{74348:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bia-claim",function(){return n(64581)}])},98064:function(e,t,n){"use strict";n.d(t,{I:function(){return l}});var s=n(85893),a=n(39618),r=n(63029),i=n(62971);let l=e=>{let{recipients:t}=e,n=(0,r.Z)(t.map(e=>e.address));return(0,s.jsx)(a.iA,{columns:[{accessorKey:"operator",header:"Address"},{accessorKey:"split",header:"Split",css:{width:"70px"}}],rows:t.map((e,t)=>({operator:(0,s.jsx)(i.M,{ensName:n[t],address:e.address}),split:"".concat(e.split||e.percentAllocation," %")}))})}},887:function(e,t,n){"use strict";n.d(t,{I:function(){return o}});var s=n(85893),a=n(98064),r=n(39618),i=n(9324),l=n(71866);let o=e=>{let{splitId:t,recipients:n,withdrawalAddresses:o,account:d}=e;return(0,s.jsxs)(r.W2,{className:"withdrawal-section",css:{gap:"$xl"},alignItems:"start",children:[(0,s.jsx)(r.xv,{variant:"h4",children:"Split Details"}),(0,s.jsx)(a.I,{recipients:n}),o&&(0,s.jsx)(l.VL,{operators:o,currentAccount:d,header:"Validator Withdrawal Contract Addresses"}),(0,s.jsxs)(r.W2,{variant:"card",className:"enr-section",alignItems:"start",css:{gap:"$sm",p:"$sm"},children:[(0,s.jsx)(r.xv,{color:"body",variant:"subline",css:{lineHeight:"$lg",textTransform:"uppercase",letterSpacing:"1px"},children:"Splitter Address"}),(0,s.jsx)(r.IK,{readOnly:!0,value:t}),(0,s.jsxs)(r.rU,{href:"https://".concat(i.pn,".etherscan.io/address/").concat(t,"#code"),target:"_blank",children:["View on Etherscan ",(0,s.jsx)(r.ZJ,{})]})]})]})}},64581:function(e,t,n){"use strict";n.r(t);var s=n(85893),a=n(67294),r=n(59734),i=n(30120),l=n(39618),o=n(71866),d=n(11163),c=n(77136),u=n(2504),p=n(80050),h=n(4579),x=n(19485),m=n(9324),g=n(61279),v=n(887),y=n(37005);let j=(0,l.zo)(l.kC,{flexDirection:"column",width:"auto",gap:"$2xl",px:"10%",py:"$5xl","@sm":{px:"10%",py:"$5xl"}}),f=e=>{let{heading:t,linkTitle:n,link:a}=e;return(0,s.jsxs)(l.mh,{children:[(0,s.jsx)(l.xu,{children:(0,s.jsx)(l.nQ,{})}),(0,s.jsxs)(l.xu,{css:{display:"flex",fd:"column",gap:"$sm"},children:[(0,s.jsx)(l.xu,{css:{display:"flex",fd:"column",gap:"$xs"},children:(0,s.jsx)(l.xv,{variant:"body",css:{color:"white"},children:t})}),a&&(0,s.jsxs)(l.rU,{css:{fontSize:"$4",fontWeight:"$normal"},target:"_blank",href:a,children:[n,(0,s.jsx)(l._j,{size:"sm"})]})]})]})},w=()=>(0,s.jsxs)(l.W2,{css:{gap:"$lg",alignItems:"flex-start",gridColumn:"1/3"},children:[(0,s.jsx)(l.xv,{variant:"h4",children:"Exit Validator"}),(0,s.jsx)(l.xv,{css:{width:"50%"},variant:"body",children:"In order to exit your validators, action the following step. A threshold of the cluster’s operators will need to execute this command."}),(0,s.jsxs)(l.rU,{href:"https://docs.obol.tech/docs/next/int/quickstart/quickstart-exit",target:"_blank",children:["Guide in docs ",(0,s.jsx)(l.ZJ,{})]}),(0,s.jsx)(c.DM,{heading:"Exit command",content:'docker exec -ti charon-distributed-validator-node-teku-1 /opt/teku/bin/teku voluntary-exit --beacon-node-api-endpoint="http://charon:3600"\n--confirmation-enabled=false\n--validator-keys="/opt/charon/validator_keys:/opt/charon/validator_keys"\n--epoch=${EXIT_EPOCH:-162304}'})]}),b=()=>{var e,t,n,c,b;let C=(0,d.useRouter)(),{account:T,provider:k,chainId:_}=(0,u.kR)(),[E,$]=(0,a.useState)(),[I,S]=(0,a.useState)(),A=(0,g.xs)(C,"configHash"),{data:F,error:H,isLoading:M}=(0,r.ZP)("/dv/".concat(A),p.FU);console.log(F);let L=(null==F?void 0:F.fee_recipient_address)||((null==F?void 0:F.validators)?null===(e=null==F?void 0:F.validators[0])||void 0===e?void 0:e.fee_recipient_address:null),D=(0,u.DS)(L),N=(0,u.F0)(L),R=(0,u.F0)(T,null==I?void 0:I.completed),O=async()=>{console.log("handleOnDistributeETH"),S(e=>({...e,loading:!0})),(0,h.Np)({chainId:_,splitId:L,provider:k}).then(e=>{console.log("distribute tx",e),S(t=>({...t,loading:!1,txHash:e,completed:!0}))}).catch(e=>{S(t=>({...t,loading:!1,errorMessage:e.message})),console.log("error",e)})},W=async()=>{console.log("handleOnWithdrawFunds"),$(e=>({...e,loading:!0})),(0,h.h_)({chainId:_,provider:k,address:T}).then(e=>{console.log("withdraw tx",e),$(t=>({...t,loading:!1,txHash:e,completed:!0}))}).catch(e=>{$(t=>({...t,loading:!1,errorMessage:e.message})),console.log("error",e)})},V=(null==I?void 0:I.loading)?{variant:"tx"}:{},z=(null==E?void 0:E.loading)?{variant:"tx"}:{};return A||F?H&&!F?(0,s.jsx)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:(0,s.jsx)(l.xv,{size:"5",children:null==H?void 0:null===(c=H.response)||void 0===c?void 0:null===(b=c.data)||void 0===b?void 0:b.message})}):!F||M?(0,s.jsxs)(j,{children:[(0,s.jsx)(l.xv,{variant:"subline",children:"Loading cluster data..."}),";"]}):L?(0,y.c)("biaClaimPage")?(0,s.jsxs)(j,{children:[(0,s.jsxs)(l.kC,{direction:"column",css:{gap:"$xxs"},children:[(0,s.jsx)(l.xv,{variant:"h3",children:null==F?void 0:F.name}),(0,s.jsx)(l.xv,{variant:"metadata",color:"body",children:"Created ".concat(i.ou.fromISO(null==F?void 0:F.timestamp).toRelativeCalendar()," on ").concat(i.ou.fromISO(null==F?void 0:F.timestamp).toFormat("yyyy LLL dd"))})]}),(0,s.jsx)(l.xu,{css:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:"$xl","& .card-heading":{textAlign:"center"},"@md":{gridTemplateColumns:"repeat(2, 1fr)"},"@sm":{gridTemplateColumns:"1fr"},"& button:disabled:hover":{background:"$bg03"},"& button:disabled":{"& .card-heading":{color:"$muted"}}},children:(0,s.jsx)(l.Zb,{image:(0,s.jsx)(l.xv,{variant:"h4",color:"obolGreen",glow:!0,children:(null==F?void 0:F.operators.length)||"N/A"}),heading:"Operators"})}),(null==D?void 0:D.recipients.length)>0&&T?(0,s.jsx)(v.I,{recipients:null==D?void 0:D.recipients,splitId:L}):T&&(0,s.jsx)(l.xv,{variant:"subline",children:"Loading cluster health information..."}),T?(0,s.jsxs)(l.xu,{css:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"$xl"},children:[(0,s.jsx)(w,{}),(0,s.jsxs)(l.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,s.jsxs)(l.kC,{css:{justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)(l.xv,{variant:"h4",children:"Distribute ETH"}),(0,s.jsx)(l.xv,{variant:"metadata",children:"Balance: ".concat(N," ETH")||0})]}),(null==I?void 0:I.completed)?(0,s.jsx)(f,{heading:"ETH successfully distributed",linkTitle:"View on Etherscan",link:"https://".concat(m.pn,".etherscan.io/tx/").concat(null==I?void 0:I.txHash)}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.xv,{variant:"body",children:"In order to claim rewards you must first activate the splitter contract."}),(0,s.jsx)(l.sQ,{heading:"There is an exit queue (minimum 27 hours). Check the status of your validator on Beaconcha.in before continuing. "}),(0,s.jsxs)(l.rU,{href:"https://app.0xsplits.xyz/accounts/".concat(L,"/?chainId=").concat(_),target:"_blank",children:["V1 0xsplits ",(0,s.jsx)(l._j,{})]}),(0,s.jsx)(o.fl,{...V,color:"primary",type:"button",disabled:!(0,x.isAddress)(L)||"0"===N||!(null==D?void 0:D.recipients.some(e=>e.address.toLowerCase()===(null==T?void 0:T.toLowerCase()))),onClick:()=>O(),children:(null==I?void 0:I.loading)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.yC,{}),"Transaction in progress"]}):(0,s.jsx)(s.Fragment,{children:"Distribute"})}),!(null==D?void 0:D.recipients.some(e=>e.address.toLowerCase()===(null==T?void 0:T.toLowerCase())))&&(0,s.jsx)(l.xv,{variant:"metadata",color:"test",children:"You are not a recipient of this split and cannot distribute"})]})]}),(0,s.jsxs)(l.W2,{css:{gap:"$lg",alignItems:"flex-start",justifyContent:"flex-start",gridColumn:"span 1"},children:[(0,s.jsxs)(l.kC,{css:{justifyContent:"space-between",alignItems:"center"},children:[(0,s.jsx)(l.xv,{variant:"h4",children:"Claim ETH"}),(0,s.jsx)(l.xv,{variant:"metadata",children:"Rewards: ".concat(R," ETH")})]}),(null==E?void 0:E.completed)?(0,s.jsx)(f,{heading:"Rewards successfully claimed ".concat(R," ETH"),linkTitle:"View on Etherscan",link:"https://".concat(m.pn,".etherscan.io/tx/").concat(null==E?void 0:E.txHash)}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.fl,{...z,color:"primary",type:"button",disabled:!(0,x.isAddress)(T)||"0"===R||!(null==D?void 0:D.recipients.some(e=>e.address.toLowerCase()===(null==T?void 0:T.toLowerCase()))),onClick:()=>W(),fullWidth:!0,children:(null==E?void 0:E.loading)?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l.yC,{}),"Transaction in progress"]}):(0,s.jsx)(s.Fragment,{children:"Claim Rewards"})}),!(null==D?void 0:D.recipients.some(e=>e.address.toLowerCase()===(null==T?void 0:T.toLowerCase())))&&(0,s.jsx)(l.xv,{variant:"metadata",color:"test",children:"You are not a recipient of this split and cannot claim"})]})]})]}):(0,s.jsx)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:(0,s.jsx)(l.xv,{size:"5",children:"To load the split metadata, please connect your wallet"})})]}):(0,s.jsxs)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:[(0,s.jsx)(l.xv,{variant:"h4",children:"This page is not available on this env \uD83D\uDE25"}),";"]}):(0,s.jsxs)(l.W2,{css:{borderRadius:0,marginTop:"$7xl"},children:[(0,s.jsx)(l.xv,{variant:"h4",children:"Error \uD83D\uDE25"}),(0,s.jsx)(l.xv,{variant:"body",children:"The fee recipient address is not set. Please contact the operator of the cluster."})]}):(0,s.jsx)(l.kC,{direction:"column",css:{alignItems:"center",gap:"$md",py:"$7xl"},children:(0,s.jsx)(l.xv,{size:"5",children:(null==H?void 0:null===(t=H.response)||void 0===t?void 0:null===(n=t.data)||void 0===n?void 0:n.message)||"Error: No config-hash information provided, please double check the\n          link you followed or return to the home page."})})};t.default=b},4579:function(e,t,n){"use strict";n.d(t,{Kv:function(){return u},u_:function(){return c},Np:function(){return p},h_:function(){return h}});var s=n(9279),a=n(64146),r=n(34858),i={abi:[{inputs:[{internalType:"address",name:"_waterfallFactoryModule",type:"address"},{internalType:"address",name:"_splitMain",type:"address"},{internalType:"string",name:"_ensName",type:"string"},{internalType:"address",name:"_ensReverseRegistrar",type:"address"},{internalType:"address",name:"_ensOwner",type:"address"}],stateMutability:"nonpayable",type:"constructor"},{inputs:[{components:[{internalType:"address[]",name:"accounts",type:"address[]"},{internalType:"uint32[]",name:"percentAllocations",type:"uint32[]"},{internalType:"uint32",name:"distributorFee",type:"uint32"},{internalType:"address",name:"controller",type:"address"}],internalType:"struct SplitConfiguration",name:"_split",type:"tuple"},{internalType:"address payable",name:"_principal",type:"address"},{internalType:"uint256",name:"_numberOfValidators",type:"uint256"}],name:"createETHRewardSplit",outputs:[{internalType:"address[]",name:"withdrawalAddresses",type:"address[]"},{internalType:"address",name:"rewardSplitContract",type:"address"}],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"splitMain",outputs:[{internalType:"contract ISplitMain",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"waterfallFactoryModule",outputs:[{internalType:"contract IWaterfallFactoryModule",name:"",type:"address"}],stateMutability:"view",type:"function"}]},l=n(9324),o=n(80050);let d=s.d;async function c(e,t,n,s){try{let r=new a.Contract(l.AB,i.abi,s),o=await r.callStatic.createETHRewardSplit({accounts:e.accounts,percentAllocations:e.percentAllocations,distributorFee:l.Uu,controller:d},t,n),c=await r.createETHRewardSplit({accounts:e.accounts,percentAllocations:e.percentAllocations,distributorFee:l.Uu,controller:d},t,n);return await c.wait(),o}catch(e){throw Error(e)}}async function u(e,t){try{let n=await (0,o.er)({chainId:t,splitId:e});if(console.log(n,"splitMetadata"),n)return!0;return!1}catch(e){return Error(e)}}let p=async e=>{let{chainId:t,splitId:n,provider:a}=e,i=new r.SplitsClient({chainId:t,provider:a,signer:a.getSigner(0)});try{let e=await i.distributeToken({splitId:n,token:s.d}),{transactionHash:t}=e.event;return t}catch(e){throw Error(e)}},h=async e=>{let{chainId:t,provider:n,address:a}=e,i=new r.SplitsClient({chainId:t,provider:n,signer:n.getSigner(0)});try{let e=await i.withdrawFunds({address:a,tokens:[s.d]}),{transactionHash:t}=e.event;return t}catch(e){throw Error(e)}}}},function(e){e.O(0,[120,774,888,179],function(){return e(e.s=74348)}),_N_E=e.O()}]);