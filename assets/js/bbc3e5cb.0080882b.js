"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),c=o,m=h["".concat(l,".").concat(c)]||h[c]||d[c]||r;return n?a.createElement(m,s(s({ref:t},u),{},{components:n})):a.createElement(m,s({ref:t},u))}));function c(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<r;p++)s[p]=n[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7016:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={},s="Evolution and governance",i={unversionedId:"docs/project/evolution",id:"docs/project/evolution",title:"Evolution and governance",description:"\x3c!--",source:"@site/../docs/project/evolution.md",sourceDirName:"docs/project",slug:"/docs/project/evolution",permalink:"/docs/project/evolution",draft:!1,editUrl:"https://github.com/carbon-language/carbon-lang/blob/trunk/docs/../docs/project/evolution.md",tags:[],version:"current",frontMatter:{},sidebar:"project",previous:{title:"Difficulties improving C++",permalink:"/docs/project/difficulties_improving_cpp"},next:{title:"Project FAQ",permalink:"/docs/project/faq"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Proposals",id:"proposals",level:2},{value:"Life of a proposal",id:"life-of-a-proposal",level:3},{value:"Proposal roles",id:"proposal-roles",level:3},{value:"Proposal authors",id:"proposal-authors",level:4},{value:"Community",id:"community",level:4},{value:"Active contributors",id:"active-contributors",level:4},{value:"Carbon leads",id:"carbon-leads",level:4},{value:"When to write a proposal",id:"when-to-write-a-proposal",level:3},{value:"Proposal PRs",id:"proposal-prs",level:3},{value:"What goes in the proposal document",id:"what-goes-in-the-proposal-document",level:4},{value:"Open questions",id:"open-questions",level:4},{value:"Review and RFC on proposal PRs",id:"review-and-rfc-on-proposal-prs",level:3},{value:"Blocking issues",id:"blocking-issues",level:3},{value:"Discussion on blocking issues",id:"discussion-on-blocking-issues",level:4},{value:"Governance structure",id:"governance-structure",level:2},{value:"Carbon leads",id:"carbon-leads-1",level:3},{value:"Subteams",id:"subteams",level:4},{value:"Painter",id:"painter",level:3},{value:"Adding and removing governance members",id:"adding-and-removing-governance-members",level:3},{value:"Acknowledgements",id:"acknowledgements",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evolution-and-governance"},"Evolution and governance"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Carbon's evolution process uses ",(0,o.kt)("a",{parentName:"p",href:"#proposals"},"proposals")," to evaluate and approve\n",(0,o.kt)("a",{parentName:"p",href:"#when-to-write-a-proposal"},"significant changes")," to the project or language.\nThis process is designed to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Ensure these kinds of changes can receive feedback from the entire\ncommunity."),(0,o.kt)("li",{parentName:"ul"},"Resolve questions and decide direction efficiently."),(0,o.kt)("li",{parentName:"ul"},"Create a clear log of rationale for why the project and language have\nevolved in particular directions.")),(0,o.kt)("p",null,"When there are questions, concerns, or issues with a proposal that need to be\nresolved, Carbon uses its ",(0,o.kt)("a",{parentName:"p",href:"#governance-structure"},"governance")," system of\n",(0,o.kt)("a",{parentName:"p",href:"#carbon-leads-1"},"Carbon leads")," to decide how to move forward. Leads are\nfundamentally responsible for encouraging Carbon's ongoing and healthy evolution\nand so also take on the critical steps of the evolution process for proposals."),(0,o.kt)("h2",{id:"proposals"},"Proposals"),(0,o.kt)("p",null,"These are primarily structured as GitHub pull requests that use a somewhat more\nformal document structure and process to ensure changes to the project or\nlanguage are well explained, justified, and reviewed by the community."),(0,o.kt)("h3",{id:"life-of-a-proposal"},"Life of a proposal"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Proposals consist of a PR (pull request) in GitHub that adds a document to\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/"},(0,o.kt)("inlineCode",{parentName:"a"},"proposals/")," directory")," following\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/scripts/template.md"},"the template"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Proposal PRs start out in draft mode. When proposal PRs are ready, click on\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review"},'"Ready for review"'),",\nand change the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/projects/1"},"Proposals project column"),'\nto "RFC". The project column should be available as a dropdown under\n"Projects" on the PR.'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This will result in a Carbon lead being assigned to review the PR.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This also signifies an RFC (request for comment) from the entire\ncommunity.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Contributors are encouraged to react with a ",(0,o.kt)("em",{parentName:"p"},"thumbs-up")," to proposal PRs if\nthey are generally interested and supportive of the high level direction\nbased on title and summary. Similarly, other reactions are encouraged to\nhelp surface contributor's sentiment.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We use GitHub issues to discuss and track ",(0,o.kt)("em",{parentName:"p"},"blocking issues")," with proposals,\nsuch as open questions or alternative approaches that may need further\nconsideration. These are assigned to carbon-leads to decide.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"A ",(0,o.kt)("a",{parentName:"p",href:"#carbon-leads-1"},"Carbon lead")," will be assigned to a proposal PR. They are\nresponsible for the basic review (or delegating that) as well as ultimately\napproving the PR.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The assigned lead should ensure that there is a reasonable degree of\nconsensus among the contributors outside of the identified blocking issues.\nContributors should have a reasonable chance to raise concerns, and where\nneeded they should become blocking issues. Community consensus isn't\nintended to be perfect though, and is ultimately a judgement call by the\nlead. When things are missed or mistakes are made here, we should just\nrevert or fix-forward as usual.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once a reasonable degree of community consensus is reached and the assigned\nlead finishes code review, the lead should\n",(0,o.kt)("a",{parentName:"p",href:"/docs/project/code_review#approving-the-change"},"approve")," the PR. Any\noutstanding high-level concerns should be handled with blocking issues.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Optionally, the assigned lead can file a blocking issue for a one week final\ncomment period when they approve. This is rarely needed, and only when it is\nboth useful and important for the proposal to give extra time for community\ncomments.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The leads are responsible for resolving any blocking issues for a proposal\nPR, including the one week comment period where resolving it indicates\ncomments arrived which require the proposal to undergo further review.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The proposal PR can be merged once the assigned lead approves, all blocking\nissues have been decided, and any related decisions are incorporated.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the leads choose to defer or reject the proposal, the reviewing lead\nshould explain why and close the PR."))),(0,o.kt)("h3",{id:"proposal-roles"},"Proposal roles"),(0,o.kt)("p",null,"It is also useful to see what the process looks like for different roles within\nthe community. These perspectives are also the most critical to keep simple and\neasily understood."),(0,o.kt)("h4",{id:"proposal-authors"},"Proposal authors"),(0,o.kt)("p",null,"For proposal authors, this should feel like a code review, with some broken out\nissues for longer discussion:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Create a proposal document and draft PR following\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/scripts/template.md"},"the template"),"."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/scripts/new_proposal.py"},"new_proposal.py")," helps create\ntemplated PRs.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you have open questions, filing ",(0,o.kt)("a",{parentName:"p",href:"#blocking-issues"},"blocking issues"),"\nwhile preparing the PR can help resolve them quickly.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When ready, click on\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/changing-the-stage-of-a-pull-request#marking-a-pull-request-as-ready-for-review"},'"Ready for review"'),"\nin GitHub, and change the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/projects/1"},"Proposals project column"),'\nto "RFC". The project column should be available as a dropdown under\n"Projects" on the PR.'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This will result in the PR being assigned to an individual for review.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"This will also send the proposal as a broad RFC to the community.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'While setting the "RFC" project column will also add the "RFC" label,\nthe reverse is not true. Unfortunately, this is currently a limit of\nGitHub automation. Similarly, Adding the "RFC" project column currently\ndoes not set "Ready for review".')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Address comments where you can and they make sense.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you don't see an obvious way to address comments, that's OK."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's great to engage a bit with the commenter to clarify their comment\nor why you don't see an obvious way to address it, just like you would\n",(0,o.kt)("a",{parentName:"p",href:"/docs/project/code_review#responding-to-review-comments"},"in code review"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If the commenter feels this is important, they can move it to a blocking\nissue for a longer discussion and resolution from the leads.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"You don't need to try to resolve everything yourself.")))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Incorporate any changes needed based on the resolution of blocking issues.\nOnce the leads have provided a resolution, it's important to make progress\nwith that direction.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When you both have\n",(0,o.kt)("a",{parentName:"p",href:"/docs/project/code_review#approving-the-change"},"approval")," from the\nassigned lead and the last blocking issue is addressed, merge!"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you end up making significant changes when incorporating resolved\nissues after the approval from the assigned lead, circle back for a\nfresh approval before merging, just like you would with code review.")))),(0,o.kt)("h4",{id:"community"},"Community"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"We use the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/projects/1"},"Proposals dashboard"),"\nto track proposals that are in RFC."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Anyone that is interested can participate once a proposal is ready for\nreview and in RFC.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It's OK to only comment when particularly interested in a proposal, or\nwhen asked by one of the leads to help ensure thorough review. Not\neveryone needs to participate heavily in every RFC.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'PRs that are in "draft" status in GitHub are considered\nworks-in-progress. Check with the author before spending time reviewing\nthese, and generally avoid distracting the author with comments unless\nthey ask for them. The proposal may be actively undergoing edits.')))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Read the proposal and leave comments to try to help make the proposal an\nimprovement for Carbon."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Note that progress and improvement are more important than perfection\nhere!"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Try to make comments on proposals\n",(0,o.kt)("a",{parentName:"p",href:"/docs/project/code_review#writing-review-comments"},"constructive"),".\nSuggest how the proposal could be better if at all possible.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If there is an open question or a critical blocking issue that needs to get\nresolved, move it to its own issue that the PR depends on, and focus the\ndiscussion there."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The issue should focus on surfacing the important aspects of the\ntradeoff represented by the issue or open question, not on advocacy.")))),(0,o.kt)("h4",{id:"active-contributors"},"Active contributors"),(0,o.kt)("p",null,"Everyone actively contributing to the evolution of Carbon should try to\nregularly:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Give a thumbs-up or other reaction on any interesting PRs out for RFC to\nhelp surface the community's sentiment around the high level idea or\ndirection. Don't worry about \"approving\" or the detailed text of the\nproposal here.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If interested and time permitting, dive into some RFCs and provide\n",(0,o.kt)("a",{parentName:"p",href:"#community"},"community feedback"),"."))),(0,o.kt)("h4",{id:"carbon-leads"},"Carbon leads"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"#carbon-leads-1"},"Carbon leads")," are responsible for making decisions rapidly and\nensuring proposal PRs land:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rapidly resolve all blocking issues raised across any proposals.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"When assigned a specific proposal PR:"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure it gets both constructive general comments and good code\nreview.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Ideally, you should directly participate in the code review, but it's\nfine to ask others to help. However, ultimately you have to review and\napprove the PR.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Escalate any blocking issues without a resolution that are slowing down\nthe proposal to the other leads.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Evaluate whether the community has had a reasonable chance to raise\nconcerns and there is sufficient consensus to move forward given the\ndecisions on the blocking issues. This doesn't need to be perfect\nthough. Here too, we prioritize progress over perfection. We can revert\nor fix-forward mistakes whenever necessary, especially for low-risk\nchanges. In rare cases, an extended final comment period can be used\nwhen warranted for a proposal.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Once ready, approve and help the author merge the proposal."))))),(0,o.kt)("h3",{id:"when-to-write-a-proposal"},"When to write a proposal"),(0,o.kt)("p",null,'Any substantive change to Carbon -- whether the language, project,\ninfrastructure, or otherwise -- should be done through an evolution proposal.\nThe meaning of "substantive" is subjective, but will generally include:'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Any semantic or syntactic language change that isn't fixing a bug."),(0,o.kt)("li",{parentName:"ul"},"Major changes to project infrastructure, including additions and removals."),(0,o.kt)("li",{parentName:"ul"},"Rolling back an accepted proposal, even if never executed.")),(0,o.kt)("p",null,"Changes which generally will not require a proposal are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Fixing typos or bugs that don't change the meaning or intent."),(0,o.kt)("li",{parentName:"ul"},"Rephrasing or refactoring documentation for easier reading."),(0,o.kt)("li",{parentName:"ul"},"Minor infrastructure updates, improvements, setting changes, tweaks.")),(0,o.kt)("p",null,"If you're not sure whether to write a proposal, please err on the side of\nwriting a proposal. A team can always ask for a change to be made directly if\nthey believe it doesn't need review. Conversely, a reviewer might also ask that\na pull request instead go through the full evolution process."),(0,o.kt)("h3",{id:"proposal-prs"},"Proposal PRs"),(0,o.kt)("p",null,"A proposal PR should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"proposal")," label, have a descriptive title, and\neasily understood initial summary comment. Authors and leads are encouraged to\nedit both as necessary to ensure they give the best high-level understanding of\nthe proposal possible."),(0,o.kt)("p",null,'A proposal PR will include a "P-numbered" ',(0,o.kt)("em",{parentName:"p"},"proposal document"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"proposals/pNNNN.md"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"NNNN")," is the pull request number. This file should\nbe based on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/blob/trunk/proposals/scripts/template.md"},"proposal template file"),"."),(0,o.kt)("p",null,"When writing a proposal, try to keep it brief and focused to maximize the\ncommunity's engagement in it. Beyond the above structure, try to use\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Inverted_pyramid_(journalism)"},"Inverted Pyramid"),"\nor ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLUF_(communication)"},"BLUF")," writing style to\nhelp readers rapidly skim the material."),(0,o.kt)("h4",{id:"what-goes-in-the-proposal-document"},"What goes in the proposal document"),(0,o.kt)("p",null,"The purpose of the proposal document is to present the case for deciding to\nadopt the proposal. Any information that feeds into making that decision, and\nthat should not be maintained as part of our living design documentation,\nbelongs in the proposal document. This includes background material to introduce\nthe problem, comparisons to any alternative designs that were considered and any\nother current proposals in the same area, records of informal polls taken to\ndetermine community preferences, and rationale for the decision based on the\nproject's goals."),(0,o.kt)("p",null,'The proposal PR can contain related changes to the Carbon project, such as\nupdates to the design documentation. Those changes form part of the proposal,\nand need not be additionally described in the proposal document beyond a mention\nin the "Proposal" section that such changes exist. For example:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"## Proposal\n\nSee the proposed changes to the design documents.\n")),(0,o.kt)("p",null,"Readers of proposals are expected to consult the PR or the git commit that\nmerged the PR in order to understand the proposed changes."),(0,o.kt)("p",null,"The author of a proposal is not required to include changes to the design\ndocumentation as part of a proposal, and it may in some cases be preferable to\ndecouple the proposal process from updating the design. When accepted, the\nproposal would then be implemented through a series of future PRs to the rest of\nthe project, and the proposal document should describe what is being proposed in\nenough detail to validate that those future PRs properly implement the proposed\ndirection."),(0,o.kt)("h4",{id:"open-questions"},"Open questions"),(0,o.kt)("p",null,"Feel free to factor out open questions in a proposal to issues that you assign\nto the leads to resolve. You can even do this before sending the proposal for\nreview. Even after it's resolved, an open question issue can be reopened if new\ninformation comes up during the RFC."),(0,o.kt)("p",null,"When opening issues, add them to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/projects/2"},'"Issues for leads" project'),'\nunder "Questions". Carbon leads use this to locate and prioritize the issue for\nresolution.'),(0,o.kt)("h3",{id:"review-and-rfc-on-proposal-prs"},"Review and RFC on proposal PRs"),(0,o.kt)("p",null,"When a proposal PR is assigned to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/orgs/carbon-language/teams/carbon-leads"},"carbon-leads GitHub group"),",\none of them will be assigned the PR. They are responsible for helping land that\nproposal, or explaining why the project won't move forward in that direction.\nThe assigned lead is also ultimately responsible for the code review on the PR.\nProposals sent for review are also sent as an RFC to the entire community."),(0,o.kt)("p",null,"All active Carbon contributors are strongly encouraged to regularly skim the\ntitle and summary comment of proposals under RFC that are interesting to them.\nThey should use GitHub reactions, including at least a thumbs-up, to show their\ninterest and enthusiasm about the proposal, and help encourage the author.\nWriting proposals is ",(0,o.kt)("em",{parentName:"p"},"extremely hard work"),", and we need to clearly show both\ninterest in the proposed direction of Carbon and appreciation for the work put\ninto the proposal. This is not about ",(0,o.kt)("em",{parentName:"p"},"approving")," the proposal, or any of its\ndetails. It is completely fine and coherent to both give a thumbs-up to a\nproposal ",(0,o.kt)("em",{parentName:"p"},"and")," provide a serious, blocking issue that needs to be resolved."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Anyone")," in the community is welcome to participate in the RFC in detail if\ninterested. However, not everyone needs to participate in every RFC. If a\nproposal is already getting actively and thoroughly reviewed, feel free to focus\nyour time on other proposals with fewer commenters. Even if there are issues or\nproblems discovered later, we can always fix them with follow-up proposals."),(0,o.kt)("p",null,"Both code review and high-level design comments are welcome. If an open question\ncomes up or a high-level blocking issue is uncovered, feel free to move it to\nits own GitHub issue and assign it to the leads to resolve. That issue is also a\ngood place to focus discussion on that specific topic rather than the main PR."),(0,o.kt)("p",null,"The assigned lead should approve proposals once the following criteria are met:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"It looks good from a code review perspective.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"At least three thumbs-up reactions showing general community interest.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The community has had a sufficient opportunity to review the proposed\nchange, given its scope and complexity.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Any remaining blocking issues are reasonably likely to resolve in a way that\nallows the proposal to move forward. It is fine if some are not fully\ndecided, but a lead shouldn't approve a proposal that's unlikely to move\nforward."))),(0,o.kt)("p",null,"The last two criteria are fundamentally judgement calls for the lead to make,\nand we don't try to formulate a rigid or fixed bar for them. If resolving the\nblocking issues requires significant changes, the author should also get a fresh\napproval from the assigned lead after those changes, just like they would with\ncode review."),(0,o.kt)("p",null,"The assigned lead may also request a final comment period for the community when\napproving. This signals to the community that the proposal is likely to be\nmerged once the blocking issues are resolved, and any remaining concerns need to\nbe surfaced. The goal is to help uncover concerns that were hidden until it was\nclear that the proposal is likely to move forward. However, requesting a final\ncomment period is not the default; the assigned lead should only do this when\nthere is some reason to expect further community comment is especially important\nto solicit. Common cases to consider are contentious, complex, or dramatic\nchanges to the language or project. Ultimately, whether this is important is a\njudgement call for the lead. This will be modeled by filing a blocking issue\nthat resolves in one week when approving. This issue will also explain the\nmotivation for requesting a final comment period."),(0,o.kt)("h3",{id:"blocking-issues"},"Blocking issues"),(0,o.kt)("p",null,"We use blocking GitHub issues to track open questions or other discussions that\nthe leads are asked to resolve. Any time a blocking issue is filed, that issue\nforms both the primary discussion thread and where the leads signal how it is\nresolved. We use issues both to track that there is a specific resolution\nexpected and that there may be dependencies."),(0,o.kt)("p",null,"We add blocking issues to the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-language/carbon-lang/projects/2"},'"Issues for leads" project'),'\nunder "Blocking issues". Carbon leads use this to locate and prioritize the\nissue for resolution.'),(0,o.kt)("p",null,"These issues can be created at any time and by any one. Issues can be created\nwhile the proposal is being drafted in order to help inform specific content\nthat should go into the proposal. It is even fine to create an issue first, even\nbefore a proposal exists, as an open question about whether to produce a\nparticular proposal, or what a proposal that is being planned should say. For\nissues which don't (yet) have a specific proposal PR associated with them, at\nsome point the leads may ask that a proposal be created to help collect in a\nmore cohesive place a written overview of the issue and related information, but\nthis process need not be strictly or rigidly bound to having proposal text."),(0,o.kt)("p",null,"Avoid using issues for things that are just requests or suggestions on a\nproposal PR. If in doubt, start off with a simple comment on the PR and see if\nthere is any disagreement -- everyone may already be aligned and agree. When a\ncomment does seem worth turning into an issue, don't worry about that as the\nauthor or the commenter. Getting the leads to resolve disagreement isn't a bad\nthing for anyone involved. This should be seen as a friendly way to move the\ndiscussion out to its own forum where it'll get resolved, and focus the PR on\nimproving the proposal and getting it ready to merge."),(0,o.kt)("p",null,"When an issue is created from a discussion on a PR, and after the discussion on\nthe ",(0,o.kt)("em",{parentName:"p"},"issue")," all the original parties come to a happy agreement, it's totally OK\nto close the issue and move back to the code review in the PR. Anyone who would\nprefer the leads to still chime in can re-open the issue and the leads will\nfollow up, even if it's only to get confirmation that everyone ",(0,o.kt)("em",{parentName:"p"},"did")," end up\nhappy with the resolution. At the end of the day, while it's fine to resolve an\nissue that ",(0,o.kt)("em",{parentName:"p"},"everyone")," actually ended up agreeing about (maybe once some\nconfusion is addressed), ultimately the leads are responsible for resolving\nthese issues and there is no pressure on anyone else to do so."),(0,o.kt)("h4",{id:"discussion-on-blocking-issues"},"Discussion on blocking issues"),(0,o.kt)("p",null,"Discussion on these issues, especially contentious ones, should endeavor to\nfocus on surfacing information and highlighting the nature of the tradeoff\nimplied by the decisions available. This is in contrast to focusing on advocacy\nor persuasion. The goal of the issues shouldn't be to persuade or convince the\nleads to make a specific decision, but to give the leads the information they\nneed to make the best decision for Carbon."),(0,o.kt)("p",null,"It's fine that some people have a specific belief of which decision would be\nbest; however, framing their contributions to the discussion as surfacing the\ninformation that underpins that belief will make the discussion more\nconstructive, welcoming, and effective. Overall, everyone should strive to focus\non data-based arguments to the extent they can, minimizing their use of appeals\nto emotion or excessive rhetoric."),(0,o.kt)("p",null,"None of this should preclude gathering information like polls of opinion among\ngroups, or signaling agreement. Where community members stand and how many agree\nwith that stance on any issue ",(0,o.kt)("em",{parentName:"p"},"is")," information, and useful to surface."),(0,o.kt)("h2",{id:"governance-structure"},"Governance structure"),(0,o.kt)("h3",{id:"carbon-leads-1"},"Carbon leads"),(0,o.kt)("p",null,"Carbon leads are responsible for reviewing proposals and\n",(0,o.kt)("a",{parentName:"p",href:"/docs/project/roadmap_process"},"setting Carbon's roadmap")," and managing evolution. This team\nshould broadly understand both the users of Carbon and the project itself in\norder to factor different needs, concerns, and pressures into a\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consensus_decision-making"},"consensus decision-making process"),"."),(0,o.kt)("p",null,"While leads may approve proposals individually, they should decide on issues\nraised to them using\n",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Consensus_decision-making#Blocking"},"blocking consensus"),"\nwith a quorum of two."),(0,o.kt)("p",null,"Carbon's current leads are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chandlerc"},"chandlerc")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/KateGregory"},"KateGregory")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/zygoloid"},"zygoloid"))),(0,o.kt)("h4",{id:"subteams"},"Subteams"),(0,o.kt)("p",null,"As Carbon grows, the leads may decide to form subteams that provide leadership\nfor specific areas. These subteams are expected to largely organize in a similar\nfashion to the Carbon leads, with a more narrow focus and scope. Subteam\ndecisions may be escalated to the Carbon leads."),(0,o.kt)("h3",{id:"painter"},"Painter"),(0,o.kt)("p",null,"Whenever possible, we want Carbon to make syntax and other decisions based on\nunderstanding its users, data, and the underlying goals of the language.\nHowever, there will be times when those don't provide a clear cut rationale for\nany particular decision -- all of the options are fine/good and someone simply\nneeds to choose which color to paint the bikeshed. The goal of the painter role\nis to have a simple way to quickly decide these points."),(0,o.kt)("p",null,"Leads and teams may defer a decision to the painter if there is a consensus that\nit is merely a bikeshed in need of paint. They may also open an issue to revisit\nthe color with data and/or user studies of some kind. This allows progress to be\nunblocked while also ensuring we return to issues later and attempt to find more\ndefinite rationale."),(0,o.kt)("p",null,"The painter is a single person in order to keep decisions around taste or\naesthetics reasonably consistent."),(0,o.kt)("p",null,"The current painter is:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/chandlerc"},"chandlerc"))),(0,o.kt)("h3",{id:"adding-and-removing-governance-members"},"Adding and removing governance members"),(0,o.kt)("p",null,"Any member of Carbon governance may step down or be replaced when they are no\nlonger able to contribute effectively. The Carbon leads can nominate and decide\non adding, removing, or replacing members using the usual evolution processes."),(0,o.kt)("h2",{id:"acknowledgements"},"Acknowledgements"),(0,o.kt)("p",null,"Our governance and evolution process is influenced by the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rfcs"},"Rust"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://swift.org/contributing/"},"Swift"),", and C++ processes. Many thanks to\nthese communities for providing a basis."))}d.isMDXComponent=!0}}]);