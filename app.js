"use strict";

/* ================= DOMAINS ================= */
const DOMAINS = {
  core:{name:"Core", color:"var(--d-core)", hex:"#6B675C"},
  life:{name:"Everyday Life", color:"var(--d-life)", hex:"#4E7C4E"},
  build:{name:"Problem-Solving", color:"var(--d-build)", hex:"#2F6B93"},
  mkt:{name:"Marketing", color:"var(--d-mkt)", hex:"#B65E2E"},
  psy:{name:"Psychology", color:"var(--d-psy)", hex:"#7A5CA3"},
  com:{name:"Communication", color:"var(--d-com)", hex:"#22786B"},
  dec:{name:"Decision-Making", color:"var(--d-dec)", hex:"#A17E23"}
};

/* ================= MODELS ================= */
const MODELS = [
/* ---------- CORE ---------- */
{id:"fp", d:"core", code:"CORE·01", name:"First-Principles Thinking", short:"First Principles",
 essence:"Decompose to irreducible truths; rebuild from there.",
 mech:"Most reasoning is analogy: we copy what exists with small tweaks. First principles asks instead: what do I know to be fundamentally true here — physics, human needs, hard constraints? Strip away every inherited assumption, then reconstruct the solution from only what survived.",
 ex:"Batteries were 'too expensive' by analogy to past prices. Priced by first principles — the raw commodity cost of lithium, nickel, cobalt — the floor was far lower, which meant the gap was manufacturing, not materials. That reframing built an industry.",
 mis:"Overuse. Reasoning everything from scratch is exhausting and arrogant — conventions often encode invisible wisdom. Reserve it for problems where the conventional answer is failing or the stakes justify the cost.",
 hook:"A chef versus a cook: the cook follows recipes; the chef understands why ingredients work and can invent the dish.",
 links:["decomp","inv","map"],
 drill:{q:"What is first-principles thinking, and when should you NOT use it?",
 a:"Strip a problem to its irreducible truths (hard constraints, fundamentals) and rebuild from there instead of reasoning by analogy. <b>Don't</b> use it everywhere — conventions encode hidden wisdom and scratch-reasoning is expensive. Reserve it for when the conventional answer is failing or stakes are high."}},

{id:"inv", d:"core", code:"CORE·02", name:"Inversion", short:"Inversion",
 essence:"Solve backward: avoid failure instead of chasing success.",
 mech:"Many problems are clearer in reverse. Instead of 'how do I achieve X?', ask 'what would guarantee I fail at X?' — then systematically avoid those things. Avoiding stupidity is more reliable than seeking brilliance, because failure modes are usually fewer and more knowable than success paths.",
 ex:"'How do I build a great long-distance relationship?' is vague. Inverted: 'What would guarantee Marie and I drift apart?' — irregular contact, unvoiced resentment, no shared future date, all logistics and no play. Now you have a concrete checklist to defend against.",
 mis:"Pure inversion breeds timidity. A life spent only avoiding mistakes never initiates anything — fatal for a Manifestor. Use it as a filter on plans, not a substitute for making them.",
 hook:"The mathematician Jacobi: 'Invert, always invert.' Picture reading the maze backward — from exit to entrance, the path is obvious.",
 links:["prem","fp","mos"],
 drill:{q:"Explain inversion and give one live example from your own life.",
 a:"Instead of asking how to succeed, ask <b>what would guarantee failure</b> — then block those causes. Failure modes are fewer and more knowable than success paths. (Your example should be concrete: a project, the long-distance relationship, a job search.)"}},

{id:"so", d:"core", code:"CORE·03", name:"Second-Order Thinking", short:"2nd-Order",
 essence:"Ask 'and then what?' of every consequence.",
 mech:"First-order effects are immediate and obvious; second-order effects are what those effects cause. Most bad decisions look good at first order. The discipline is to trace each consequence one more step — and to notice that anything obviously good at first order is already priced in; edge lives in the second order.",
 ex:"Cutting prices lifts sales (first order) — but trains customers to wait for discounts, degrades the brand, and triggers a competitor price war (second order). The 'win' contained its own tax.",
 mis:"Infinite regress. Chasing fifth-order effects is paralysis dressed as rigor — uncertainty compounds each step out. Two orders deep, held honestly, beats five orders of speculation.",
 hook:"Chess: the amateur sees the capture; the master sees what the capture opens up. 'And then what?' — twice.",
 links:["fb","comp","reg"],
 drill:{q:"What is second-order thinking, and why does 'obviously good' usually mean 'no edge'?",
 a:"Trace consequences of consequences — ask <b>and then what?</b> First-order benefits everyone can see are already priced in / competed away; advantage and danger both live in the effects of the effects."}},

{id:"fb", d:"core", code:"CORE·04", name:"Feedback Loops", short:"Feedback Loops",
 essence:"Reinforcing loops compound; balancing loops stabilize.",
 mech:"A reinforcing loop feeds itself: output increases input (viral growth, debt spirals, confidence). A balancing loop resists change and seeks equilibrium (thermostats, market saturation, fatigue). Diagnosing which loop you are inside — and where its delays are — explains most 'mysterious' dynamics, because delayed feedback is what causes overshoot and oscillation.",
 ex:"Skill and confidence form a reinforcing loop: small wins → confidence → more attempts → more wins. So does the inverse spiral. Same structure, opposite direction — which is why early wins matter disproportionately when learning anything.",
 mis:"Forgetting limits. Every reinforcing loop eventually hits a balancing loop (nothing compounds forever). Extrapolating exponential curves straight off the chart is the classic failure.",
 hook:"A microphone next to its own speaker: whisper becomes shriek. That is a reinforcing loop with no balancer.",
 links:["comp","funnel","so"],
 drill:{q:"Name the two loop types and what delayed feedback causes.",
 a:"<b>Reinforcing</b> loops amplify (output feeds input — compounding, spirals); <b>balancing</b> loops stabilize toward equilibrium. Delays in feedback cause overshoot and oscillation — you keep pushing because the signal hasn't arrived yet."}},

{id:"ttc", d:"core", code:"CORE·05", name:"Bottleneck Thinking", short:"Bottleneck",
 essence:"The system's output is set by its single tightest constraint.",
 mech:"From the Theory of Constraints: in any connected system, one constraint governs total throughput. Improving anything other than the bottleneck is invisible in the output — often it just piles up inventory in front of the constraint. The loop: find the constraint, exploit it fully, subordinate everything else to it, elevate it, then find the new one.",
 ex:"A content pipeline that researches fast, drafts fast, but waits four days on review produces exactly what review allows. Hiring another writer changes nothing; fixing review changes everything.",
 mis:"Optimizing what is easy or visible instead of what is binding. Also: forgetting the bottleneck moves — yesterday's fix creates today's new constraint elsewhere.",
 hook:"An hourglass: the neck sets the flow. Polishing the glass bulbs changes nothing.",
 links:["funnel","pareto","decomp"],
 drill:{q:"State the Theory of Constraints in one sentence, and its implication for effort.",
 a:"A system's throughput is governed by its <b>single tightest constraint</b> — so effort spent anywhere other than the bottleneck is wasted (or worse, creates pileups). Find it, exploit it, elevate it, repeat."}},

{id:"map", d:"core", code:"CORE·06", name:"The Map Is Not the Territory", short:"Map ≠ Territory",
 essence:"Every model is a simplification; hold all of them loosely.",
 mech:"Maps (models, beliefs, plans, spreadsheets, this manual) are useful precisely because they omit detail. The danger is mistaking the map for reality: defending a model against contradicting evidence, or navigating by a map drawn for a different territory. The skill is meta: knowing which map you are using, what it omits, and when reality is telling you to redraw it.",
 ex:"A CV is a map of a person; an interview samples the territory. A financial model is a map; the first customer conversation is territory. When map and territory disagree, territory wins — always.",
 mis:"Nihilism ('all models are wrong, so why model?'). The point is Box's full sentence: all models are wrong, <b>some are useful</b>. Usefulness is the criterion, not truth.",
 hook:"Borges' cartographers built a map the size of the empire — perfectly accurate, perfectly useless.",
 links:["bayes","cok","base"],
 drill:{q:"What does 'the map is not the territory' demand of you when evidence contradicts your model?",
 a:"Redraw the map. Models are useful <b>because</b> they simplify, but reality always outranks the model — defending a map against the territory is the root failure. Ask: which map am I using, what does it omit, is it still fit for this terrain?"}},

/* ---------- LIFE ---------- */
{id:"pareto", d:"life", code:"LIFE·01", name:"Pareto Principle (80/20)", short:"Pareto 80/20",
 essence:"A minority of causes produce a majority of effects.",
 mech:"Outcomes in most human systems are power-law distributed, not uniform: a few clients produce most revenue, a few habits most wellbeing, a few bugs most crashes. The practice: before allocating effort, rank causes by contribution and ask which small subset carries the weight — then treat the rest as candidates for elimination, not optimization.",
 ex:"Of your freelance clients, likely two generate most income per hour of effort — and one or two generate most of the friction. The 80/20 review asks: what would doubling down on the first and firing the second look like?",
 mis:"Using it as an excuse for permanent sloppiness on the 80%. Some domains (safety, trust, craft) are integrity-constrained: the last 20% is the whole point. Know which game you are playing.",
 hook:"A vineyard where one vine in five bears nearly all the grapes. Tend those vines first.",
 links:["ttc","oc"],
 drill:{q:"What is the 80/20 principle operationally — what do you actually DO with it?",
 a:"Rank causes by contribution before allocating effort; identify the <b>vital few</b> that drive most of the outcome, double down there, and question whether the trivial many deserve optimization or elimination. Caveat: some domains are integrity-constrained and need the full 100%."}},

{id:"oc", d:"life", code:"LIFE·02", name:"Opportunity Cost", short:"Opportunity Cost",
 essence:"The true price of anything is the best alternative you give up.",
 mech:"Every yes is a hidden no to everything else that time, money, or attention could have bought. Costs should therefore be measured against the best foregone alternative, not against zero. The discipline: before committing, name the alternative explicitly — 'this instead of what?'",
 ex:"A $400 retainer client who consumes twenty hours a month does not cost 'nothing because it's income' — it costs the higher-rate work, the GTM course progress, or the poetry those twenty hours could have held.",
 mis:"Applying it to everything corrodes life — leisure and relationships audited against 'productive alternatives' is how you optimize yourself into misery. Some hours are not fungible and should not be priced.",
 hook:"Every ticket you buy is printed on the back of a ticket to somewhere else.",
 links:["ev","sunk"],
 drill:{q:"Define opportunity cost and the one question that operationalizes it.",
 a:"The real cost of any choice is the <b>best alternative foregone</b>, not zero. The question: <b>'this instead of what?'</b> — name the alternative explicitly before committing time, money, or attention."}},

{id:"coc", d:"life", code:"LIFE·03", name:"Circle of Control", short:"Circle of Control",
 essence:"Spend energy only where your actions change outcomes.",
 mech:"Sort every concern into: things you control (your actions, responses, standards), things you influence (other people, some outcomes), and things you merely worry about (news, others' opinions, the past). Energy spent in the outer ring is pure loss — and attention placed on the inner ring, paradoxically, tends to expand the middle one.",
 ex:"Immigration paperwork timelines: the processing speed is outside the circle; the completeness of your file, the follow-ups you send, and how you spend the waiting months are inside it. The Stoics and your Manifestor strategy agree here: initiate where you govern, release where you don't.",
 mis:"Fatalism — shrinking the circle prematurely. Many things feel uncontrollable that are actually just hard or slow to influence. Test the boundary before accepting it.",
 hook:"Epictetus, a literal slave, cataloguing what no master could touch: his judgments, his responses. The inner citadel.",
 links:["fae","sunk","reg"],
 drill:{q:"What are the three rings of the circle-of-control sort, and the paradox at its center?",
 a:"Control (your actions/responses) / influence (people, some outcomes) / mere concern (everything else). Energy in the outer ring is waste; the paradox: focusing on the inner ring <b>expands</b> the influence ring. Test boundaries before accepting them — don't shrink the circle out of fatalism."}},

{id:"comp", d:"life", code:"LIFE·04", name:"Compounding", short:"Compounding",
 essence:"Small consistent gains, reinvested, grow non-linearly.",
 mech:"When gains generate further gains — interest on interest, skill enabling harder skills, trust enabling bigger asks — growth curves bend upward. The counterintuitive parts: the early curve looks flat (which is where most people quit), the later curve looks miraculous, and the exponent matters more than the starting amount. Consistency is the mechanism; interruption is the killer, because breaks don't pause the curve, they reset parts of it.",
 ex:"Twenty minutes of drill a day feels trivial for weeks — that is the flat part. The same mechanism runs your bilingual advantage: two decades of daily French-English switching compounded into an asset competitors cannot buy quickly at any price.",
 mis:"Waiting for compounding in systems that don't compound (linear or decaying ones), or ignoring that negatives compound too — debt, resentment, technical debt, small daily frictions.",
 hook:"The chessboard and the rice grains: one grain doubled per square bankrupts the emperor by square 64.",
 links:["fb","so"],
 drill:{q:"Why do most people quit compounding systems, and what compounds negatively?",
 a:"Because the early curve is <b>flat</b> — visible payoff lags effort by a long time. Negatives compound too: debt, resentment, technical debt, skipped maintenance. Interruption doesn't pause the curve; it resets parts of it."}},

/* ---------- BUILD ---------- */
{id:"decomp", d:"build", code:"BLD·01", name:"Decomposition & Abstraction", short:"Decompose",
 essence:"Split problems into independent parts; hide complexity behind clean interfaces.",
 mech:"Decomposition breaks a problem into sub-problems that can be solved (and verified) separately. Abstraction then wraps each solved part behind a simple interface so you can think about WHAT it does, not HOW. Together they are how finite minds handle unbounded complexity — and the quality test of a decomposition is how little the parts need to know about each other.",
 ex:"Your skill-file system is exactly this: each brand skill is a module with a defined interface (topic in, validated DOCX out). You never re-derive the EEAT rules per article — they are abstracted away. The same move works on life problems: 'settle in Ottawa' decomposes into housing, credentials, network, income — each attackable separately.",
 mis:"Wrong cut lines. Decomposing along the wrong seams creates parts that constantly need to coordinate — worse than no decomposition. If every sub-solution keeps breaking another, recut.",
 hook:"You don't think about voltage when flipping a light switch. That's abstraction: an interface hiding a power grid.",
 links:["fp","ttc","pyr"],
 drill:{q:"Define decomposition and abstraction, and the quality test for a good decomposition.",
 a:"Decomposition: split a problem into independently solvable parts. Abstraction: hide each part's complexity behind a simple interface (what, not how). Quality test: <b>how little the parts need to know about each other</b> — constant coordination means you cut along the wrong seams."}},

{id:"duck", d:"build", code:"BLD·02", name:"Rubber-Duck Reasoning", short:"Rubber Duck",
 essence:"Articulating a problem precisely often solves it.",
 mech:"Explaining a problem out loud — even to a rubber duck — forces serialization: vague parallel intuitions must become one precise sequence of claims. Bugs, in code and in thinking, hide inside vagueness; the act of stating each assumption explicitly is what exposes the false one. The duck works because it cannot nod along.",
 ex:"'The email isn't converting' resists solving. Forced into precise speech: 'people open it, click, reach the page, and leave within seconds' — and suddenly the problem has relocated from the email to the landing page. The articulation was the diagnosis.",
 mis:"Explaining to a person who helpfully interrupts with guesses before you finish. The value is in YOUR complete serialization, not their answer. Finish the explanation first.",
 hook:"A programmer, a plastic duck on the desk, and the sentence: 'so it takes the input and— oh. Oh, I see it.'",
 links:["cok","whys"],
 drill:{q:"Why does explaining a problem to an inert object work?",
 a:"It forces <b>serialization</b>: vague, parallel intuitions must become one precise ordered sequence of explicit claims — and bugs hide in vagueness. Stating each assumption aloud exposes the false one. The duck can't nod along, so you can't skip steps."}},

{id:"whys", d:"build", code:"BLD·03", name:"The Five Whys", short:"Five Whys",
 essence:"Ask 'why' repeatedly to reach the root cause, not the symptom.",
 mech:"Each 'why' peels one causal layer: symptom → immediate cause → enabling condition → systemic cause. Around the fourth or fifth iteration you typically cross from events into process and structure — which is where durable fixes live. Fixing at the symptom level guarantees recurrence; fixing at the system level prevents the whole class.",
 ex:"Missed a deadline. Why? Draft was late. Why? Started late. Why? The brief sat unread for four days. Why? No intake ritual for new briefs. Root fix: a same-day brief triage habit — which prevents every future version of this, not just this one.",
 mis:"Stopping at a 'why' that conveniently blames a person ('because I was lazy') rather than continuing to the system that made the failure easy. Also: forcing exactly five when three suffice or seven are needed.",
 hook:"Peeling an onion: the outer layers are events, the core is a process. Cry a little; keep peeling.",
 links:["duck","prem","hyp"],
 drill:{q:"What do the five whys move you FROM and TO, and where should the chain never conveniently stop?",
 a:"From <b>symptom to root cause</b> — from events to the process/system layer where durable fixes live. Never stop at the 'why' that blames a person; keep going to the system that made the failure easy."}},

{id:"hyp", d:"build", code:"BLD·04", name:"Hypothesis-Driven Debugging", short:"Hypothesis Debug",
 essence:"Treat every problem as an experiment: guess, predict, test cheapest first.",
 mech:"Instead of randomly poking, form an explicit falsifiable hypothesis ('the failure is in X because Y'), derive a prediction, and run the cheapest test that could kill it. Binary-search the space: each test should eliminate half the possibilities. This converts debugging from luck into logarithmic-time search — and it works identically on non-code problems.",
 ex:"Traffic dropped on a client site. Hypotheses: indexing issue / algorithm update / seasonality / broken page. Cheapest discriminating test first: check Search Console coverage (two minutes) before rewriting content (two weeks). Each result halves the suspect list.",
 mis:"Falling in love with the first hypothesis and running tests designed to confirm it rather than kill it. A test that cannot fail teaches nothing.",
 hook:"Twenty questions beats twenty guesses: 'is it bigger than a breadbox?' halves the universe each turn.",
 links:["bayes","whys"],
 drill:{q:"Describe the hypothesis-driven debugging loop and its search principle.",
 a:"Form a falsifiable hypothesis → derive a prediction → run the <b>cheapest test that could kill it</b> → update. Order tests to binary-search the space (each one eliminates ~half the possibilities). Design tests to refute, not confirm."}},

{id:"yagni", d:"build", code:"BLD·05", name:"YAGNI & Premature Optimization", short:"YAGNI",
 essence:"Solve the problem you have, not the one you imagine.",
 mech:"'You Aren't Gonna Need It': speculative features and premature polish are bets on an imagined future, paid in present complexity — and complexity charges compound interest (more to maintain, more to understand, more to break). Build for today's actual requirement; add generality only when a second real case appears and shows you the true shape of the abstraction.",
 ex:"Building a course platform with multi-user auth, payments, and forums before a single student exists — versus shipping module one as a plain HTML file to five real people. The second teaches you what the platform should even be.",
 mis:"Using YAGNI to excuse ignoring known, certain future requirements or basic craft (tests, backups, structure). It targets speculation, not foresight.",
 hook:"Packing for a trip you might take someday: the suitcase you drag everywhere, full of clothes for a country you never visit.",
 links:["so","oc"],
 drill:{q:"What does YAGNI target, and what does it NOT excuse?",
 a:"Targets <b>speculative</b> features and premature optimization — bets on imagined futures paid in present complexity (which compounds). It does not excuse ignoring certain, known requirements or basic craft. Generalize when the second real case arrives."}},

/* ---------- MARKETING ---------- */
{id:"jtbd", d:"mkt", code:"MKT·01", name:"Jobs to Be Done", short:"Jobs to Be Done",
 essence:"People hire products to make progress in a circumstance.",
 mech:"Nobody wants a product; they want the progress it creates in their specific situation — functional, emotional, and social progress at once. Define the job and your real competitors appear (often from other categories), your marketing language appears (describe the struggle, not the features), and your roadmap appears (serve the job better, not the spec sheet).",
 ex:"The famous milkshake study: morning commuters hired milkshakes to make a boring drive bearable one-handed — so the competition was bagels and bananas, not other milkshakes. Thicker shake, faster purchase lane: sales rose without touching flavor.",
 mis:"Defining the job at a uselessly abstract level ('the job is happiness'). A good job statement is situated: circumstance + struggle + desired progress.",
 hook:"'People don't want a quarter-inch drill; they want a quarter-inch hole' — and really, they want the shelf up and their partner impressed.",
 links:["pos","aud"],
 drill:{q:"State the JTBD lens and what it reveals about competition.",
 a:"Customers <b>hire</b> products to make functional, emotional, and social progress in a specific circumstance. Define the job and your true competitors appear — often from entirely different categories (the milkshake competes with the bagel)."}},

{id:"funnel", d:"mkt", code:"MKT·02", name:"Funnel & Flywheel", short:"Funnel/Flywheel",
 essence:"See customer movement as a system of stages with rates.",
 mech:"The funnel models progression — aware → interested → evaluating → buying → retained — where each stage has a conversion rate and total output is the product of all rates. That makes it a bottleneck problem: fix the leakiest stage, not the loudest one. The flywheel extends it into a loop: happy customers feed the top (referrals, reviews, content), converting a funnel into a reinforcing feedback loop.",
 ex:"1000 visitors × 2% signup × 40% activation × 50% retention = 4 lasting customers. Doubling traffic gives 8; fixing activation to 80% gives 8 for free — and improves everything downstream of it forever.",
 mis:"Treating stage rates as independent. Aggressive top-of-funnel tactics often poison downstream rates (wrong people, wrong expectations). The system view exists precisely to catch this.",
 hook:"A leaky bucket brigade: pouring faster into a bucket with a hole is a choice. Patch the hole.",
 links:["fb","ttc"],
 drill:{q:"Why is a funnel a bottleneck problem, and what turns it into a flywheel?",
 a:"Total output = the <b>product</b> of all stage conversion rates, so the leakiest stage governs everything — fix that, not the loudest stage. It becomes a flywheel when retained customers feed the top (referrals, reviews), i.e., a reinforcing feedback loop."}},

{id:"pos", d:"mkt", code:"MKT·03", name:"Positioning", short:"Positioning",
 essence:"You compete for a slot in the mind, not space on a shelf.",
 mech:"Minds are crowded and defensive: they file things into existing categories and remember roughly one thing per brand. Positioning is choosing — deliberately — the single slot you want to own in the prospect's mind, relative to what already occupies it. The strongest moves own a word, invert the leader's strength, or create a new category rather than fighting in an occupied one.",
 ex:"'Bilingual content strategist' enters a crowded shelf. 'The strategist who makes English-Canadian brands legible in Francophone markets — both directions, natively' occupies a slot almost nobody in an Ottawa hiring pipeline contests.",
 mis:"Positioning by internal pride ('we're the best quality') rather than by the prospect's existing mental furniture. If the claim doesn't attach to something already in their head, it slides off.",
 mis2:"",
 hook:"A cloakroom of the mind: one hook per concept, most hooks taken. You don't fight for an occupied hook; you find the empty one.",
 links:["jtbd","cok"],
 drill:{q:"What is positioning fought over, and what are the three classic strong moves?",
 a:"A <b>slot in the prospect's mind</b> — minds file into existing categories and hold ~one idea per brand. Strong moves: own a single word, invert the leader's strength against them, or create a new category instead of contesting an occupied one."}},

{id:"signal", d:"mkt", code:"MKT·04", name:"Costly Signaling", short:"Costly Signaling",
 essence:"Hard-to-fake gestures communicate more than claims.",
 mech:"Anyone can say anything, so words are cheap and discounted. A signal carries information in proportion to how costly it would be to fake: guarantees (cost falls on the dishonest), craftsmanship visible in details, expensive commitments, skin in the game. Audiences read the cost structure unconsciously and trust accordingly.",
 ex:"Your proactive blog audit before the Amanah interview was textbook costly signaling: hours of unpaid, specific work that a bluffer would never invest. It said 'I am serious and competent' in a way no cover letter sentence could.",
 mis:"Confusing expensive with credible. The cost must be one that a low-quality actor specifically could not bear (a fake would be exposed, a defector would lose the deposit) — burning money alone signals only that you burned money.",
 hook:"The peacock's tail: a survival handicap so heavy that only a genuinely fit bird can afford it. The waste IS the message.",
 links:["inc","proof"],
 drill:{q:"What makes a signal credible rather than just expensive?",
 a:"The cost must fall <b>asymmetrically on fakers</b> — a low-quality actor couldn't bear it (guarantee they'd have to pay out, unpaid work a bluffer wouldn't do, skin in the game). Cost without that asymmetry is just waste."}},

{id:"proof", d:"mkt", code:"MKT·05", name:"Social Proof & Defaults", short:"Social Proof",
 essence:"People follow the herd and the path of least resistance.",
 mech:"Under uncertainty, humans outsource judgment to two heuristics: what similar others do (social proof) and whatever requires no decision (defaults). Most 'persuasion' is really the engineering of these two: show believable evidence of people-like-me choosing this, and remove every gram of friction and choice from the desired path.",
 ex:"'Join 12,000 subscribers' outperforms any adjective. Organ donation rates swing from ~15% to ~90% between countries based on whether donation is the checkbox default — same populations, same values, different form design.",
 mis:"Fabricated or mismatched proof (testimonials from people unlike the audience) reads as manipulation and backfires. And negative social proof — 'so many people do this bad thing' — accidentally normalizes the bad thing.",
 hook:"An empty restaurant next to a full one: identical menus, and you already know where you're eating.",
 links:["signal","base"],
 drill:{q:"What two heuristics do people use under uncertainty, and what is the practical craft of each?",
 a:"<b>Social proof</b> (what do people like me do?) — craft: believable, similar-other evidence. <b>Defaults</b> (what requires no decision?) — craft: make the desired path the frictionless, pre-selected one. Beware negative social proof: publicizing a common bad behavior normalizes it."}},

/* ---------- PSYCHOLOGY ---------- */
{id:"inc", d:"psy", code:"PSY·01", name:"Incentives Explain Behavior", short:"Incentives",
 essence:"Before diagnosing character, map what is rewarded and punished.",
 mech:"Sustained behavior tracks incentive structures far more reliably than personality. When someone (or an organization) keeps doing something baffling, ask: what are they actually rewarded for, measured on, punished for, or protected from? Include status, safety, and identity — the strongest incentives are rarely monetary. 'Never attribute to malice what incentives explain' resolves most organizational mysteries.",
 ex:"A client's team 'inexplicably' ships bloated articles despite the style guide — until you learn they are bonused on word count delivered, not performance. The behavior was never mysterious; the metric wrote it.",
 mis:"Total cynicism — treating everyone as pure incentive-machines. People do act against incentives for values; the model says start with incentives, not end there. Also beware Goodhart: any measure made a target stops measuring.",
 hook:"'Show me the incentive and I'll show you the outcome.' — Munger. The maze doesn't need to persuade the mouse; it just places the cheese.",
 links:["fae","signal"],
 drill:{q:"When behavior seems irrational, what should you map before judging character — and what is Goodhart's trap?",
 a:"Map what the person is actually <b>rewarded, measured, punished, and protected</b> for — including status and safety, not just money. Goodhart: when a measure becomes a target, it ceases to be a good measure — people optimize the metric, not the goal."}},

{id:"fae", d:"psy", code:"PSY·02", name:"Fundamental Attribution Error", short:"Attribution Error",
 essence:"We explain others by character, ourselves by circumstance.",
 mech:"When others fail, we see disposition ('careless, rude'); when we fail, we see situation ('traffic, bad week'). This asymmetry corrupts nearly every interpersonal judgment, and the correction is mechanical: for others' behavior, generate the situational story first and treat the character story as the hypothesis of last resort. For your own repeated failures, dare the reverse.",
 ex:"An editor sends a curt two-line reply. Character story: dismissive. Situational story: 40 emails deep on deadline day. The situational story is more probable, costs nothing to assume, and keeps the relationship intact while you gather actual evidence.",
 mis:"Excusing genuinely consistent harmful behavior forever as 'circumstances'. Patterns across many situations ARE evidence of disposition — the model corrects the default, it doesn't abolish judgment.",
 hook:"The driver who cuts you off is a maniac; when you cut someone off, you had a good reason. Same lane, two physics.",
 links:["inc","coc","steel"],
 drill:{q:"State the fundamental attribution error and its mechanical correction.",
 a:"We explain others' behavior by <b>character</b> and our own by <b>circumstance</b>. Correction: for others, generate the situational explanation first (character is the last hypothesis); for your own repeated failures, try the dispositional one. Patterns across situations still count as evidence."}},

{id:"diss", d:"psy", code:"PSY·03", name:"Cognitive Dissonance", short:"Dissonance",
 essence:"People revise beliefs to protect actions and identity — not the reverse.",
 mech:"Holding contradictory cognitions ('I am smart' + 'I chose badly') is painful, and the mind resolves the pain along the path of least resistance: usually by rewriting the belief, discounting the evidence, or upgrading the commitment — rarely by admitting the error. This is why facts alone don't change minds, and why attacks on identity-fused beliefs strengthen them.",
 ex:"After buying the expensive course, reviews pointing out its flaws suddenly seem 'nitpicky'. Nothing about the course changed — the sunk commitment is now editing perception to protect the buyer's self-image.",
 mis:"Diagnosing it only in others. Dissonance is quietest from the inside; the practical use is self-directed — 'which of my beliefs exist to protect a past decision?' — and rhetorical: never make someone choose between your facts and their identity.",
 hook:"Aesop's fox, failing to reach the grapes, walks away certain they were sour. The grapes never changed; the story did.",
 links:["sunk","shadow"],
 drill:{q:"Why don't facts change minds, according to dissonance theory — and what is the persuasion implication?",
 a:"Because people resolve belief-action-identity conflict by <b>rewriting the belief</b>, not the self-image; identity-threatening facts get discounted or inverted. Implication: never force a choice between your evidence and their identity — give them a face-saving path to update."}},

{id:"shadow", d:"psy", code:"PSY·04", name:"Projection & Shadow", short:"Shadow",
 essence:"What we refuse to see in ourselves, we perceive vividly in others.",
 mech:"Jung's frame: traits incompatible with our self-image get exiled to the shadow — but exiled material doesn't vanish, it gets projected, perceived 'out there' with special emotional charge. The diagnostic: disproportionate irritation at someone is often a flag that the trait lives, disowned, in you. Integration (owning the trait consciously) recovers both self-knowledge and the energy spent repressing it.",
 ex:"The colleague whose self-promotion makes your skin crawl — while your own work stays chronically under-announced. The charge in the irritation is the tell: the shadow holds your own disowned wish to be seen. You already work this terrain; the model earns its place here because it is functional, not just symbolic.",
 mis:"Weaponizing it ('you're just projecting!') to dismiss all criticism — sometimes the colleague really is obnoxious. The test is the disproportion of YOUR charge, not the existence of their flaw.",
 hook:"A movie projector: the monster on the screen is stored on the reel inside the machine.",
 links:["diss","fae"],
 drill:{q:"What is the diagnostic signal of projection, and what does integration recover?",
 a:"<b>Disproportionate emotional charge</b> — irritation at someone that exceeds what their behavior warrants flags a disowned trait of your own. Integration (consciously owning it) recovers self-knowledge plus the energy spent on repression. Test the disproportion of your charge, not just their flaw."}},

{id:"loss", d:"psy", code:"PSY·05", name:"Loss Aversion & Prospect Theory", short:"Loss Aversion",
 essence:"Losses hurt roughly twice as much as equal gains please.",
 mech:"Kahneman and Tversky: people evaluate outcomes as gains and losses from a reference point, not as final states — and the loss side of the curve is about twice as steep. Consequences: we overpay to avoid losses, cling to the status quo, take reckless risks to escape a sure loss, and can be flipped by pure framing ('90% survive' vs '10% die').",
 ex:"Why leaving a mediocre-but-stable arrangement feels harder than the numbers say it should: the certain loss (known income, known routine) is weighted double against the probable gain. Naming the asymmetry is often enough to correct the math.",
 mis:"Treating all loss aversion as bias to be overridden. Aversion to ruin is rational — the asymmetry is only a bug when losses are recoverable and you still refuse positive-EV moves.",
 hook:"Losing a $50 note stings all afternoon; finding one is forgotten by lunch. Same fifty, different gravity.",
 links:["ev","sunk","mos"],
 drill:{q:"State prospect theory's two key claims and one behavioral consequence of each.",
 a:"(1) People evaluate from a <b>reference point</b> (gains/losses, not final states) — hence framing effects flip choices. (2) Losses weigh ~<b>2×</b> gains — hence status-quo clinging, overpaying to avoid loss, and reckless gambles to escape a sure loss."}},

/* ---------- COMMUNICATION ---------- */
{id:"aud", d:"com", code:"COM·01", name:"Audience-First Framing", short:"Audience-First",
 essence:"The meaning of a message is the response it gets.",
 mech:"Communication is measured at the receiver, not the transmitter. Intent is irrelevant to outcome: if they misunderstood, the message failed — regardless of how clear it felt to write. The operational flip: before composing anything, define the audience's current state (what they know, believe, feel, fear) and the single change you want in it. Write backward from that change.",
 ex:"A translator lives this daily: fidelity to the source is worthless if the target reader stumbles. The same discipline applied to an email — 'what do I want the reader to DO, and what do they need to feel safe doing it?' — transforms the draft before a word is written.",
 mis:"Pandering — audience-first means calibrating the delivery, not surrendering the substance. You adjust the door, not the house.",
 hook:"A radio broadcast judged only by what the receiver plays — static at their end is failure at yours.",
 links:["jtbd","nvc","pyr"],
 drill:{q:"Where is communication measured, and what two things must you define before composing?",
 a:"At the <b>receiver</b> — the meaning of a message is the response it gets; intent doesn't count. Before writing: (1) the audience's current state (knowledge, beliefs, fears) and (2) the <b>single change</b> you want in that state. Write backward from the change."}},

{id:"cok", d:"com", code:"COM·02", name:"Curse of Knowledge", short:"Curse of Knowledge",
 essence:"Once you know something, you cannot simulate not knowing it.",
 mech:"Expertise compresses knowledge into chunks and jargon that feel self-evident from the inside. The expert genuinely cannot hear how their explanation sounds to a novice — the famous tapping experiment: tappers of well-known songs predicted 50% recognition; listeners got 2.5%. The antidotes are structural, not effortful: concrete examples before abstractions, test on a real novice, and treat every term of art as a toll gate.",
 ex:"'We optimize for AEO and GEO surfaces' is a melody only the tapper hears. 'We write so that AI assistants quote you when people ask them questions' — same idea, audible.",
 mis:"Overcorrecting into condescension. The fix is concreteness and testing, not slowness and baby talk — respect the audience's intelligence while assuming zero shared vocabulary.",
 hook:"Tapping 'Happy Birthday' on a table: a symphony in your head, Morse code in theirs.",
 links:["duck","pyr","map"],
 drill:{q:"What is the curse of knowledge and its two structural antidotes?",
 a:"Experts <b>cannot simulate not-knowing</b> — compressed chunks and jargon feel self-evident from inside (tappers/listeners: 50% predicted, 2.5% actual). Antidotes: <b>concrete examples before abstractions</b>, and <b>testing on an actual novice</b> rather than trusting your own read."}},

{id:"pyr", d:"com", code:"COM·03", name:"The Pyramid Principle", short:"Pyramid Principle",
 essence:"Lead with the conclusion; support it beneath.",
 mech:"Minto's rule from McKinsey: state the answer first, then the grouped arguments for it, then the evidence under each — a pyramid with the point at the top. It works because attention is front-loaded and because a stated conclusion gives readers a slot to file every subsequent detail into. The inverse — narrating your process toward a conclusion — forces the reader to hold unfiled details in working memory.",
 ex:"'I recommend we drop the retainer. Three reasons: margin, opportunity cost, strategic fit. On margin: …' — the busy reader can stop after sentence one and still act correctly.",
 mis:"Wrong genre. Suspense, poetry, and difficult-news conversations sometimes need the buildup; the pyramid is for transactional and analytical writing where the reader's job is to decide, not to feel.",
 hook:"A newspaper lede: cut the article anywhere and what remains still informs. Bottom-up writing cut anywhere is noise.",
 links:["decomp","aud","cok"],
 drill:{q:"State the pyramid principle and WHY it works cognitively.",
 a:"Answer first → grouped supporting arguments → evidence under each. It works because attention is front-loaded and a stated conclusion gives readers a <b>filing slot</b> for every detail; process-narration forces them to hold unfiled facts in working memory."}},

{id:"steel", d:"com", code:"COM·04", name:"Steelmanning", short:"Steelmanning",
 essence:"Engage the strongest version of the opposing view.",
 mech:"The opposite of strawmanning: before disagreeing, articulate the other position so well that its holder says 'yes — exactly'. This is epistemically honest (if you can only beat the weak version, you haven't won), rhetorically disarming (people cannot hear you until they feel heard), and diagnostically rich (the strongest opposing case reveals the actual crux of the disagreement).",
 ex:"Before arguing against a client's request for AI-generated bulk content, state their case at full strength: cost, speed, competitors doing it, 'good enough' distribution math. Only after they nod do you introduce what the strong case still misses — and now they can hear it.",
 mis:"Steelmanning as performance before delivering the takedown you'd already written. The point is that YOUR view must survive contact with their best case — sometimes it won't, and that is the model working.",
 hook:"A sword tested against armor, not against straw. If your blade only cuts scarecrows, you don't know if you have a blade.",
 links:["fae","inv"],
 drill:{q:"What is steelmanning and its three payoffs?",
 a:"Articulate the opposing view at its <b>strongest</b> — until its holder would endorse your version. Payoffs: epistemic honesty (beating the weak version proves nothing), persuasion (people can't hear you until they feel heard), and diagnosis (the strong version exposes the real crux)."}},

{id:"nvc", d:"com", code:"COM·05", name:"Nonviolent Communication", short:"NVC",
 essence:"Observation → feeling → need → request: separate data from interpretation.",
 mech:"Rosenberg's structure for high-stakes conversation: (1) state the observable fact, camera-level, no evaluation; (2) name your feeling, owned as yours; (3) name the underlying need; (4) make a specific, doable request — not a demand. The engine is step one: 'you ignored me' is an interpretation that invites defense; 'you replied after three days' is footage nobody can dispute. It is the map-territory distinction applied to conflict.",
 ex:"Long-distance friction: 'You don't prioritize us' (verdict, triggers defense) versus 'We've had one call this week (observation); I feel disconnected (feeling) because closeness needs regular contact for me (need) — can we set two fixed call nights? (request)'. Same grievance, opposite trajectory.",
 mis:"Using the format as a passive-aggressive delivery system ('I feel that you are selfish' is a judgment wearing NVC's clothes). Feelings are one word — hurt, scared, tired — not smuggled accusations.",
 hook:"A camera cannot record 'disrespect'. If a camera couldn't capture it, it goes in step two or three, not step one.",
 links:["aud","map"],
 drill:{q:"Recite NVC's four steps and the camera test.",
 a:"<b>Observation</b> (camera-level fact, no evaluation) → <b>feeling</b> (one word, owned) → <b>need</b> (the value underneath) → <b>request</b> (specific, doable, not a demand). Camera test: if a camera couldn't record it, it isn't an observation — 'I feel that you…' is a judgment in disguise."}},

/* ---------- DECISION-MAKING ---------- */
{id:"ev", d:"dec", code:"DEC·01", name:"Expected Value", short:"Expected Value",
 essence:"Weight each outcome by its probability; judge decisions, not results.",
 mech:"EV = Σ(probability × payoff) across outcomes. Its deepest gift is separating decision quality from outcome quality: a good bet can lose and a bad bet can win, so you evaluate the process, not the result ('resulting' is the poker term for getting this wrong). Its sharpest edge case: EV assumes repeated play — for one-shot decisions with ruin branches, survival constraints override the arithmetic.",
 ex:"A pitch with a 20% chance at a $10k contract 'costs' four unpaid hours: EV ≈ $2,000 against maybe $200 of time — take it every time, and expect to lose most of them. Losing 8 of 10 such pitches while going up overall is the system working.",
 mis:"Resulting (judging the decision by its outcome), false precision (the probabilities are guesses — EV exposes assumptions, it doesn't launder them into facts), and applying casino math to non-repeatable, ruinable situations.",
 hook:"The poker player who loses the hand and says 'good bet' — because over a thousand deals, that bet prints money.",
 links:["bayes","oc","loss","mos"],
 drill:{q:"Define EV, explain 'resulting', and name the edge case where EV logic must yield.",
 a:"EV = Σ(probability × payoff). <b>Resulting</b> = judging a decision by its outcome — wrong, because good bets lose and bad bets win; judge the process. EV assumes repeated play: for one-shot decisions with <b>ruin</b> branches, survival overrides positive EV."}},

{id:"bayes", d:"dec", code:"DEC·02", name:"Bayesian Updating", short:"Bayesian Updating",
 essence:"Beliefs are probabilities, revised in proportion to evidence.",
 mech:"Treat every belief as a credence (a number between 0 and 100%), never certainty. When evidence arrives, ask the one Bayesian question: how much more likely is this evidence if my belief is true than if it is false? Strong evidence (very asymmetric) moves you a lot; weak evidence (would happen either way) moves you barely. Posterior odds = prior odds × likelihood ratio. The prior matters: extraordinary claims need extraordinary evidence because they start from long odds.",
 ex:"You believe a client is happy (4:1). They skip a scheduled call. Skipping is maybe twice as likely if unhappy — update to 2:1. Still probably fine, correctly less sure. What you don't do: flip to 'they're leaving' (overreaction) or 'means nothing' (under-reaction).",
 mis:"Confirmation-biased likelihoods — asking only 'is this consistent with my belief?' instead of 'how likely is it under the ALTERNATIVE?'. Almost everything is consistent with almost anything; the ratio is the whole game.",
 hook:"A dimmer switch for belief, not a toggle. Evidence turns the dial in proportion to its surprise value.",
 links:["map","hyp","base","ev"],
 drill:{q:"What is THE Bayesian question to ask of any new evidence?",
 a:"<b>How much more likely is this evidence if my belief is true than if it is false?</b> That likelihood ratio — not mere consistency — determines the update. Posterior odds = prior odds × likelihood ratio; weak (symmetric) evidence barely moves the dial."}},

{id:"doors", d:"dec", code:"DEC·03", name:"Reversible vs. Irreversible", short:"One/Two-Way Doors",
 essence:"Match decision speed to decision reversibility.",
 mech:"Bezos's frame: two-way-door decisions can be walked back — make them fast, with ~70% of the information you want, delegated low. One-way doors cannot — make them slowly, deliberately, at maximum information. The two costly errors are symmetric: treating one-way doors casually (catastrophe), and treating two-way doors ceremonially (organizational and personal sclerosis — the more common error by far).",
 ex:"Trying a new article structure on one post: two-way, decide in minutes. Signing a year lease sight-unseen, burning a bridge with a publisher, a public statement under your own name: one-way, sleep on each. Most decisions that FEEL heavy are actually two-way doors wearing costumes.",
 mis:"Misclassification. Some doors are one-way only in aggregate (each junk-food choice is reversible; the habit isn't — compounding turns two-way doors into a one-way corridor). Check the loop, not just the instance.",
 hook:"A door that locks behind you versus a door on a spring. Check the hinge BEFORE deciding how long to stand in the doorway.",
 links:["mos","reg"],
 drill:{q:"State the two-door rule and both failure modes.",
 a:"<b>Reversible</b> (two-way) decisions: decide fast at ~70% information. <b>Irreversible</b> (one-way): slow, deliberate, max information. Failures: casual one-way decisions (catastrophe) and ceremonial two-way decisions (sclerosis — the commoner error). Watch for reversible choices that compound into an irreversible habit."}},

{id:"base", d:"dec", code:"DEC·04", name:"Base Rates & the Outside View", short:"Base Rates",
 essence:"Start from what usually happens to people like you.",
 mech:"The inside view builds a forecast from your case's vivid particulars; the outside view asks what happened, statistically, to everyone who attempted this reference class. The outside view wins embarrassingly often, because your particulars feel unique but the forces acting on you are not. Discipline: anchor on the base rate first, then adjust modestly for genuine differences — never the reverse order.",
 ex:"'How long will my credential evaluation take?' Inside view: 'my file is complete and simple — six weeks.' Outside view: the median applicant — who also believed their file was simple — waited four months. Plan on four months and be delighted.",
 mis:"Reference-class gerrymandering: choosing a flattering comparison group ('startups founded by people as determined as me'). The honest class is the broadest one that shares the causal structure, not the narrative.",
 hook:"Kahneman's own textbook team: insiders estimated 2 years; the base rate for such projects was 7–10 years or never. It took 8. The forecaster KNEW the base rate and still believed his case was different.",
 links:["bayes","map","proof"],
 drill:{q:"Define inside vs. outside view, and the correct order of operations.",
 a:"Inside view: forecast from your case's particulars. Outside view: the <b>base rate</b> of the whole reference class of similar attempts. Anchor on the base rate FIRST, then adjust modestly for real differences — and pick the reference class honestly, not flatteringly."}},

{id:"prem", d:"dec", code:"DEC·05", name:"The Pre-Mortem", short:"Pre-Mortem",
 essence:"Assume the plan already failed; explain why, in past tense.",
 mech:"Klein's method: before committing, project to a future where the plan failed COMPLETELY, and write the history of that failure. Prospective hindsight — treating the failure as fact — bypasses optimism bias and social pressure in a way that 'what could go wrong?' never does, because imagining a certain event generates far more specific causes than imagining a possible one. Then convert causes into present-day safeguards and tripwires.",
 ex:"'It's July 2027 and the Canada repositioning failed.' The past-tense stories come fast: credentials stalled, savings ran out before the network formed, applied only to posted jobs, the long-distance strain drained the will. Each story is a safeguard you can build this month.",
 mis:"Running it solo on plans you're in love with, or running it and filing the output. A pre-mortem that doesn't change the plan was theater.",
 hook:"The obituary written before the surgery — so the surgery can be changed while the patient is still on the table.",
 links:["inv","whys"],
 drill:{q:"How does a pre-mortem differ from asking 'what could go wrong?' — and what must its output become?",
 a:"It uses <b>prospective hindsight</b>: the failure is assumed certain and narrated in past tense, which generates far more specific causes than hypothetical framing (and licenses dissent in groups). Output must become present-day <b>safeguards and tripwire metrics</b>, or it was theater."}},

{id:"reg", d:"dec", code:"DEC·06", name:"10/10/10 & Regret Minimization", short:"10/10/10",
 essence:"Judge choices from three time horizons — and from age eighty.",
 mech:"Suzy Welch's 10/10/10: how will I feel about this in 10 minutes, 10 months, 10 years? It forcibly de-weights the present emotional spike (which loss aversion and fear inflate) and re-weights the horizons your future selves inhabit. Bezos's regret-minimization frame is the limit case: at 80, looking back, which choice minimizes regret? Empirically, long-run regret attaches overwhelmingly to inactions — the things not tried — while action-regrets fade through rationalization and learning.",
 ex:"Staying in the comfortable-but-flat arrangement versus the risky repositioning: at 10 minutes, staying wins (relief); at 10 months, roughly tied; at 10 years and from age 80, the untried path is the one that aches. That asymmetry IS the answer for reversible-enough risks.",
 mis:"Using the long horizon to bulldoze real short-term costs. The 10-minute scream is data — about a transition cost to mitigate, a fear to examine — not noise to override.",
 hook:"Three chairs in a row: you in ten minutes, ten months, ten years. Let all three vote — but the eighty-year-old chairs the meeting.",
 links:["so","doors","coc"],
 drill:{q:"What bias does 10/10/10 correct, and what do people at 80 regret most?",
 a:"It de-weights the <b>present emotional spike</b> by giving your 10-month and 10-year selves a vote. Long-run regret attaches overwhelmingly to <b>inactions</b> — risks not taken — while action-regrets fade via learning and rationalization. But treat the short-term scream as data about costs to mitigate."}},

{id:"mos", d:"dec", code:"DEC·07", name:"Margin of Safety", short:"Margin of Safety",
 essence:"Build buffers because your estimates are wrong.",
 mech:"Engineers rate a bridge for far more load than it will ever carry — not because they expect the load, but because they expect their own errors. Apply the same to money (runway beyond the plan), time (deadlines before the real ones), commitments (capacity unbooked), and beliefs (act only where being partly wrong still leaves you fine). The margin's size should scale with uncertainty and with the cost of breach — and it is the practical answer to 'my EV estimate might be garbage'.",
 ex:"Budgeting the Ottawa transition on the assumption that income arrives three months later than projected and costs run 25% over: if you're wrong, you're pleasantly early; if you're right, you never touch the panic zone where bad decisions breed.",
 mis:"Margins as procrastination ('I'll start when I have two years of runway') or stacked so conservatively that nothing initiates. The margin serves the action; it must never replace it.",
 hook:"A bridge rated for 30 tons carrying 10-ton trucks. The extra 20 tons is not for the trucks — it is for the engineer's mistakes.",
 links:["inv","ev","loss","doors"],
 drill:{q:"What is a margin of safety FOR, and what two factors size it?",
 a:"It buffers against <b>your own estimation errors</b>, not just bad luck — the bridge's spare capacity is for the engineer's mistakes. Size it by (1) how uncertain the estimate is and (2) how costly a breach would be. It must serve action, not excuse delay."}},

{id:"sunk", d:"dec", code:"DEC·08", name:"Sunk Cost Fallacy", short:"Sunk Cost",
 essence:"Spent resources are gone; only future costs and benefits count.",
 mech:"Rationally, a decision should weigh only what happens from now on — money, time, and pain already spent are identical across all options and therefore irrelevant. Psychologically, they dominate: loss aversion makes quitting feel like 'realizing' the loss, and dissonance makes abandoning feel like admitting the past self was wrong. The clean test: 'knowing what I know now, would I START this today?' If no, the only question left is exit logistics.",
 ex:"Three years into a manuscript that no longer excites you: the three years are equally gone whether you continue or stop. The only live question is whether the NEXT year is better spent finishing it or writing what you've become. (Sometimes finishing wins — on future value, never on past investment.)",
 mis:"Over-rotating into serial quitting — abandoning everything at the first flat stretch and calling it rationality. Compounding curves LOOK like dead projects in the middle; distinguish 'no future value' from 'value not yet visible'.",
 hook:"Sitting through a terrible film 'to get your money's worth' — paying a second price (two hours) to honor the first (the ticket).",
 links:["oc","loss","diss","coc"],
 drill:{q:"State the sunk cost rule, the clean test, and the over-correction to avoid.",
 a:"Past costs are identical across all options → only <b>future</b> costs/benefits count. Test: <b>'knowing what I know now, would I start this today?'</b> Over-correction: serial quitting — compounding projects look dead in the flat middle; distinguish 'no future value' from 'value not visible yet'."}}
];

const byId = {}; MODELS.forEach(m => byId[m.id] = m);
const ensoSvg = (d, cls="") =>
  `<svg class="enso ${cls}" aria-hidden="true"${cls.includes("dom")?` style="color:${DOMAINS[d].color}"`:""}><use href="#e-dom-${d}"/></svg>`;

/* ================= STORAGE (localStorage with in-memory fallback) ================= */
const memStore = {};
function sGet(k){ try{ const v = localStorage.getItem(k); return v===null ? (memStore[k]??null) : v; }catch(e){ return memStore[k]??null; } }
function sSet(k,v){ memStore[k]=v; try{ localStorage.setItem(k,v); }catch(e){} }
function loadProgress(){ try{ return JSON.parse(sGet("lattice_progress")||"{}"); }catch(e){ return {}; } }
function saveProgress(p){ sSet("lattice_progress", JSON.stringify(p)); }

/* ================= TABS ================= */
const tabBtns = document.querySelectorAll(".tab-btn");
tabBtns.forEach(b => b.addEventListener("click", () => {
  tabBtns.forEach(x => x.classList.remove("active"));
  b.classList.add("active");
  document.querySelectorAll("section.panel").forEach(p => p.classList.remove("active"));
  document.getElementById("panel-" + b.dataset.tab).classList.add("active");
  window.scrollTo({top:0});
}));

/* ================= MODELS LIBRARY ================= */
const filterRow = document.getElementById("filterRow");
const modelList = document.getElementById("modelList");
let activeFilter = "all";

function buildFilters(){
  const mk = (key,label,hex) => {
    const b = document.createElement("button");
    b.className = "f-btn" + (key===activeFilter ? " on" : "");
    b.textContent = label;
    if(key===activeFilter && hex) b.style.background = hex;  /* hex here is DOMAINS[k].color (var) */
    if(key===activeFilter && !hex) b.style.background = "var(--chalk)";
    b.addEventListener("click", () => { activeFilter = key; buildFilters(); renderModels(); });
    filterRow.appendChild(b);
  };
  filterRow.innerHTML = "";
  mk("all","All 38",null);
  Object.entries(DOMAINS).forEach(([k,d]) => mk(k,d.name,d.color));
}

function fieldHtml(label, html, cls){
  return `<div class="mfield ${cls||""}"><div class="fl">${label}</div><p>${html}</p></div>`;
}

function renderModels(){
  modelList.innerHTML = "";
  MODELS.filter(m => activeFilter==="all" || m.d===activeFilter).forEach(m => {
    const card = document.createElement("div");
    card.className = "mcard";
    card.id = "card-" + m.id;
    const linksHtml = m.links.map(l =>
      `<button class="mlink" data-goto="${l}">${byId[l].code} · ${byId[l].short}</button>`).join("");
    card.innerHTML = `
      <button class="mcard-head" aria-expanded="false">
        ${ensoSvg(m.d, "enso-dom")}
        <span class="mcode" style="color:${DOMAINS[m.d].color}">${m.code}</span>
        <span class="mname">${m.name}<span class="messence">${m.essence}</span></span>
        <span class="mtoggle">+</span>
      </button>
      <div class="mbody">
        ${fieldHtml("Mechanism", m.mech)}
        ${fieldHtml("Worked example", m.ex)}
        ${fieldHtml("How it gets misused", m.mis)}
        ${fieldHtml("Memory hook", m.hook, "hook")}
        <div class="mfield"><div class="fl">Threads in the lattice</div><div class="mlinks">${linksHtml}</div></div>
      </div>`;
    card.querySelector(".mcard-head").addEventListener("click", () => {
      const open = card.classList.toggle("open");
      card.querySelector(".mcard-head").setAttribute("aria-expanded", open);
    });
    card.querySelectorAll(".mlink").forEach(btn => btn.addEventListener("click", e => {
      e.stopPropagation(); gotoModel(btn.dataset.goto);
    }));
    modelList.appendChild(card);
  });
}

function gotoModel(id){
  const target = byId[id];
  if(activeFilter!=="all" && target.d!==activeFilter){ activeFilter="all"; buildFilters(); renderModels(); }
  const card = document.getElementById("card-"+id);
  if(card){
    if(!card.classList.contains("open")) card.querySelector(".mcard-head").click();
    card.scrollIntoView({behavior:"smooth", block:"center"});
  }
}

buildFilters();
renderModels();

/* ================= LATTICE ================= */
const SVGNS = "http://www.w3.org/2000/svg";
const svg = document.getElementById("latticeSvg");
const latDetail = document.getElementById("latDetail");
const latLegend = document.getElementById("latLegend");

Object.values(DOMAINS).forEach(d => {
  const s = document.createElement("span");
  s.innerHTML = `<i style="background:${d.color}"></i>${d.name}`;
  latLegend.appendChild(s);
});

// radial chord layout: all nodes on one circle, grouped into domain arcs,
// connections drawn as Bézier chords bowing through the centre
const domainKeys = Object.keys(DOMAINS);
const CX=640, CY=640, R=400;
const GAP = 0.12; // radians of breathing room between domain groups
const ordered = [];
domainKeys.forEach(k => MODELS.filter(m => m.d===k).forEach(m => ordered.push(m)));
const step = (Math.PI*2 - GAP*domainKeys.length) / MODELS.length;
const positions = {}, angles = {};
{
  let a = -Math.PI/2, prev = null;
  ordered.forEach(m => {
    if(prev && m.d !== prev) a += GAP;
    prev = m.d;
    angles[m.id] = a;
    positions[m.id] = {x: CX + R*Math.cos(a), y: CY + R*Math.sin(a)};
    a += step;
  });
}

// domain arc bands behind the nodes
domainKeys.forEach(k => {
  const ids = MODELS.filter(m => m.d===k).map(m => m.id);
  const a0 = angles[ids[0]] - step*0.38, a1 = angles[ids[ids.length-1]] + step*0.38;
  const arc = document.createElementNS(SVGNS,"path");
  const large = (a1-a0) > Math.PI ? 1 : 0;
  arc.setAttribute("d", `M ${CX+R*Math.cos(a0)} ${CY+R*Math.sin(a0)} A ${R} ${R} 0 ${large} 1 ${CX+R*Math.cos(a1)} ${CY+R*Math.sin(a1)}`);
  arc.setAttribute("class","lat-arc");
  arc.setAttribute("stroke", DOMAINS[k].color);
  svg.appendChild(arc);
});

// edges (dedupe)
const edgeSet = new Set(); const edges = [];
MODELS.forEach(m => m.links.forEach(l => {
  const key = [m.id,l].sort().join("|");
  if(!edgeSet.has(key) && byId[l]){ edgeSet.add(key); edges.push([m.id,l]); }
}));

function chordPath(a,b){
  const p1 = positions[a], p2 = positions[b];
  // control points pulled toward the centre — closer chords bow less
  const pull = 0.72;
  const c1x = p1.x + (CX-p1.x)*pull, c1y = p1.y + (CY-p1.y)*pull;
  const c2x = p2.x + (CX-p2.x)*pull, c2y = p2.y + (CY-p2.y)*pull;
  return `M ${p1.x} ${p1.y} C ${c1x} ${c1y} ${c2x} ${c2y} ${p2.x} ${p2.y}`;
}
const edgeEls = {};
edges.forEach(([a,b]) => {
  const ln = document.createElementNS(SVGNS,"path");
  ln.setAttribute("d", chordPath(a,b));
  ln.setAttribute("class","lat-edge");
  svg.appendChild(ln);
  (edgeEls[a]=edgeEls[a]||[]).push(ln);
  (edgeEls[b]=edgeEls[b]||[]).push(ln);
});

let selNode = null;
const nodeEls = {};
MODELS.forEach(m => {
  const g = document.createElementNS(SVGNS,"g");
  g.setAttribute("class","lat-node");
  g.setAttribute("tabindex","0");
  g.setAttribute("role","button");
  g.setAttribute("aria-label", m.name);
  const p = positions[m.id];
  const c = document.createElementNS(SVGNS,"circle");
  c.setAttribute("cx",p.x); c.setAttribute("cy",p.y); c.setAttribute("r",7.5);
  c.setAttribute("fill",DOMAINS[m.d].color);
  c.setAttribute("stroke","var(--node-halo)"); c.setAttribute("stroke-width","1.5");
  const t = document.createElementNS(SVGNS,"text");
  const ang = angles[m.id], deg = ang*180/Math.PI;
  const leftSide = Math.cos(ang) < -1e-6;
  const lx = CX + (R+16)*Math.cos(ang), ly = CY + (R+16)*Math.sin(ang);
  t.setAttribute("x",lx); t.setAttribute("y",ly);
  t.setAttribute("dy","0.35em");
  t.setAttribute("text-anchor", leftSide ? "end" : "start");
  t.setAttribute("transform", `rotate(${leftSide ? deg+180 : deg} ${lx} ${ly})`);
  t.textContent = m.short;
  g.appendChild(c); g.appendChild(t);
  const select = () => (latTest ? testTap(m.id) : selectNode(m.id));
  g.addEventListener("click",select);
  g.addEventListener("keydown",e => { if(e.key==="Enter"||e.key===" "){e.preventDefault();select();} });
  svg.appendChild(g);
  nodeEls[m.id]=g;
});

function selectNode(id){
  document.querySelectorAll(".lat-edge").forEach(e=>e.classList.remove("hot"));
  Object.values(nodeEls).forEach(n=>n.classList.remove("sel"));
  selNode = id;
  nodeEls[id].classList.add("sel");
  (edgeEls[id]||[]).forEach(e=>e.classList.add("hot"));
  const m = byId[id];
  const threads = m.links.map(l => {
    return `<p style="margin-top:8px">→ <b style="color:${DOMAINS[byId[l].d].color}">${byId[l].name}</b> — <span>${threadNote(id,l)}</span></p>`;
  }).join("");
  latDetail.innerHTML = `
    <div class="ld-name" style="color:${DOMAINS[m.d].color}">${ensoSvg(m.d, "enso-inline")}${m.code} · ${m.name}</div>
    <p>${m.essence} ${m.mech.split(". ")[0]}.</p>
    <div style="margin-top:10px"><span class="chip">Threads</span></div>
    ${threads}
    <p style="margin-top:14px"><button class="btn" onclick="document.querySelector('[data-tab=models]').click(); setTimeout(()=>gotoModel('${id}'),80)">Open full card ↗</button></p>`;
}

function threadNote(a,b){
  const pair = [a,b].sort().join("|");
  const notes = {
    "decomp|fp":"both strip a problem to fundamentals before rebuilding",
    "fp|inv":"two directions of unconventional attack: from the ground up, or from failure backward",
    "fp|map":"first principles is how you redraw a map that stopped matching territory",
    "inv|prem":"the pre-mortem is inversion turned into a repeatable ritual",
    "inv|mos":"invert to find the failure modes; the margin is what you buy against them",
    "fb|so":"second-order effects are the first steps of a feedback loop",
    "comp|so":"compounding is what second-order effects do when they repeat",
    "comp|fb":"compounding is a reinforcing loop given time",
    "fb|funnel":"a flywheel is a funnel whose output feeds its input",
    "reg|so":"10/10/10 is second-order thinking with timestamps",
    "funnel|ttc":"the leakiest funnel stage is the system's bottleneck",
    "pareto|ttc":"the vital few causes usually point at the constraint",
    "decomp|ttc":"you must decompose the system before you can find its neck",
    "oc|pareto":"the 80/20 review is an opportunity-cost audit of your effort",
    "ev|oc":"opportunity cost sets the baseline every EV is measured against",
    "oc|sunk":"sunk cost is the failure to price the foregone alternative NOW",
    "coc|fae":"others' 'character flaws' are often circumstances — inside their circle, not yours",
    "coc|sunk":"the past is permanently outside the circle of control",
    "coc|reg":"the eighty-year-old only audits what was actually yours to control",
    "decomp|pyr":"the pyramid is decomposition applied to an argument",
    "cok|duck":"the duck forces the serialization the curse of knowledge skips",
    "duck|whys":"both work by making the implicit explicit, one layer at a time",
    "hyp|whys":"five whys generates the causal chain; hypothesis testing verifies each link",
    "bayes|hyp":"each debugging test is a Bayesian update on the suspect list",
    "prem|whys":"run five whys on the imagined corpse",
    "oc|yagni":"speculative features are paid for in foregone present work",
    "so|yagni":"YAGNI is second-order thinking about complexity's future tax",
    "jtbd|pos":"the job defines the shelf; positioning picks your slot on it",
    "aud|jtbd":"both start from the other person's situation, not your product",
    "cok|pos":"positioning fails when it assumes mental furniture the prospect lacks",
    "inc|signal":"a credible signal is an incentive structure only honest actors can afford",
    "proof|signal":"a crowd is a signal whose cost is that it can't be faked at scale — usually",
    "base|proof":"social proof is intuitive base-rate reasoning: 'what do people like me do?'",
    "fae|inc":"before blaming character, check circumstances — and before circumstances, check incentives",
    "fae|steel":"steelmanning forces the situational, charitable read the FAE suppresses",
    "diss|sunk":"sunk cost persists because quitting means admitting the past self erred",
    "diss|shadow":"both are the psyche protecting self-image from unwelcome evidence",
    "fae|shadow":"projection is the attribution error supercharged by your own disowned material",
    "ev|loss":"prospect theory describes how real minds bend the EV math",
    "loss|sunk":"quitting feels like 'realizing' the loss — so we don't",
    "loss|mos":"margins convert catastrophic losses into absorbable ones",
    "aud|nvc":"NVC is audience-first framing for conflict",
    "map|nvc":"step one separates the footage (territory) from the verdict (map)",
    "aud|pyr":"answer-first works because it serves the reader's memory, not the writer's process",
    "cok|pyr":"leading with the conclusion is the antidote to narrating your expert process",
    "cok|map":"your compressed expert map is not the novice's territory",
    "inv|steel":"steelmanning inverts the argument: attack your own position from its strongest angle",
    "bayes|ev":"Bayes supplies the probabilities that EV multiplies",
    "bayes|map":"updating is the act of redrawing the map as territory reports in",
    "base|bayes":"the base rate is the prior; the inside view is the evidence — in that order",
    "base|map":"the outside view checks your map against everyone else's territory",
    "doors|mos":"one-way doors demand the widest margins",
    "doors|reg":"regret at eighty attaches to unopened doors, especially the two-way ones",
    "ev|mos":"the margin of safety is insurance against your own EV estimates",
    "doors|loss":"loss aversion makes two-way doors look like one-way doors"
  };
  return notes[pair] || "conceptually adjacent — articulate the link yourself; that articulation is the learning";
}

/* ================= BLANK-PAGE TEST ================= */
const latticeWrap = document.querySelector(".lattice-wrap");
const blankBtn = document.getElementById("blankBtn");
const latScoreBtn = document.getElementById("latScoreBtn");
const latExitBtn = document.getElementById("latExitBtn");
const latTestStatus = document.getElementById("latTestStatus");
let latTest = null; // {first, guesses:Map(key->path), marks:[]}

function edgeKey(a,b){ return [a,b].sort().join("|"); }

function testTap(id){
  if(!latTest) return;
  if(latTest.first === null){ latTest.first = id; nodeEls[id].classList.add("sel"); return; }
  if(latTest.first === id){ latTest.first = null; nodeEls[id].classList.remove("sel"); return; }
  const key = edgeKey(latTest.first, id);
  nodeEls[latTest.first].classList.remove("sel");
  latTest.first = null;
  if(latTest.guesses.has(key)){
    latTest.guesses.get(key).remove();
    latTest.guesses.delete(key);
  } else {
    const [a,b] = key.split("|");
    const p = document.createElementNS(SVGNS,"path");
    p.setAttribute("d", chordPath(a,b));
    p.setAttribute("class","lat-guess");
    svg.appendChild(p);
    latTest.guesses.set(key, p);
  }
  latTestStatus.textContent = `${latTest.guesses.size} thread${latTest.guesses.size===1?"":"s"} drawn · ${edges.length} exist`;
}

function enterBlankTest(){
  latTest = {first:null, guesses:new Map(), marks:[]};
  latticeWrap.classList.add("testing");
  document.querySelectorAll(".lat-edge").forEach(e=>e.classList.remove("hot"));
  Object.values(nodeEls).forEach(n=>n.classList.remove("sel"));
  blankBtn.style.display = "none";
  latScoreBtn.style.display = latExitBtn.style.display = "inline-block";
  latTestStatus.textContent = `0 threads drawn · ${edges.length} exist`;
  latDetail.innerHTML = `<p class="empty">Blank page. Tap two nodes to draw a thread between them — tap the same pair again to erase. Draw every connection you remember, then score.</p>`;
}

function scoreBlankTest(){
  if(!latTest) return;
  const real = new Set(edges.map(([a,b]) => edgeKey(a,b)));
  let hits = 0; const invented = [], missed = [];
  latTest.guesses.forEach((path,key) => {
    if(real.has(key)){ hits++; path.classList.add("hit"); }
    else { invented.push(key); path.classList.add("bad"); }
  });
  real.forEach(key => {
    if(!latTest.guesses.has(key)){
      missed.push(key);
      const [a,b] = key.split("|");
      const p = document.createElementNS(SVGNS,"path");
      p.setAttribute("d", chordPath(a,b));
      p.setAttribute("class","lat-missed");
      svg.appendChild(p);
      latTest.marks.push(p);
    }
  });
  latScoreBtn.style.display = "none";
  latTestStatus.textContent = `${hits}/${edges.length} found · ${invented.length} invented`;
  try{
    const st = JSON.parse(sGet("lattice_stats")||"{}");
    st.blankpage = {date: new Date().toISOString().slice(0,10), found: hits, total: edges.length, invented: invented.length};
    sSet("lattice_stats", JSON.stringify(st));
  }catch(e){}
  const missedHtml = missed.slice(0,60).map(key => {
    const [a,b] = key.split("|");
    return `<p style="margin-top:8px">→ <b style="color:${DOMAINS[byId[a].d].color}">${byId[a].short}</b> × <b style="color:${DOMAINS[byId[b].d].color}">${byId[b].short}</b> — <span>${threadNote(a,b)}</span></p>`;
  }).join("");
  latDetail.innerHTML = `
    <div class="ld-name">${hits} of ${edges.length} threads from memory${invented.length?` · ${invented.length} invented`:""}</div>
    ${missed.length ? `<div style="margin-top:10px"><span class="chip">Missed — your review list</span></div>${missedHtml}
    <p style="margin-top:14px"><button class="btn primary" id="missedToDrill">Send ${missed.length} missed to drill</button></p>` : `<p>Perfect reproduction. The lattice is yours.</p>`}`;
  const mtd = document.getElementById("missedToDrill");
  if(mtd) mtd.addEventListener("click", () => {
    missed.forEach(key => { progress["t:"+key] = {box:1, due:0}; });
    saveProgress(progress);
    mtd.textContent = "Sent — they'll appear in today's drill";
    mtd.disabled = true;
    if(typeof onProgressChanged === "function") onProgressChanged();
    if(typeof buildDeckButtons === "function") buildDeckButtons();
    if(typeof renderProgress === "function") renderProgress();
  });
}

function exitBlankTest(){
  if(!latTest) return;
  latTest.guesses.forEach(p=>p.remove());
  latTest.marks.forEach(p=>p.remove());
  if(latTest.first) nodeEls[latTest.first].classList.remove("sel");
  latTest = null;
  latticeWrap.classList.remove("testing");
  blankBtn.style.display = "inline-block";
  latScoreBtn.style.display = latExitBtn.style.display = "none";
  latTestStatus.textContent = "";
  selectNode("fp");
}

if(blankBtn){
  blankBtn.addEventListener("click", enterBlankTest);
  latScoreBtn.addEventListener("click", scoreBlankTest);
  latExitBtn.addEventListener("click", exitBlankTest);
}

/* ================= DRILL (Leitner) ================= */
const INTERVALS = [0,1,3,7,21]; // days per box 1..5
const DAY = 86400000;
let progress = loadProgress();
let queue = [], current = null, deckLabel = "";

const drillSetup = document.getElementById("drillSetup");
const drillStage = document.getElementById("drillStage");
const drillQ = document.getElementById("drillQ");
const drillA = document.getElementById("drillA");
const drillCount = document.getElementById("drillCount");
const drillDomain = document.getElementById("drillDomain");
const revealBtn = document.getElementById("revealBtn");
const drillProgress = document.getElementById("drillProgress");

function cardState(id){
  return progress[id] || {box:1, due:0}; // new cards: box1, due immediately
}
// thread cards: key "t:a|b"; unlock once both endpoint models leave box 1
const THREAD_KEYS = edges.map(([a,b]) => "t:" + edgeKey(a,b));
function threadUnlocked(key){
  const [a,b] = key.slice(2).split("|");
  return cardState(a).box >= 2 && cardState(b).box >= 2;
}
function unlockedThreads(){ return THREAD_KEYS.filter(threadUnlocked); }
function dueCards(){
  const now = Date.now();
  return MODELS.filter(m => cardState(m.id).due <= now).map(m=>m.id)
    .concat(unlockedThreads().filter(k => cardState(k).due <= now));
}
function shuffle(a){ for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];} return a; }

function buildDeckButtons(){
  drillSetup.innerHTML = "";
  const due = dueCards().length;
  const mkBtn = (label, ids, primary) => {
    const b = document.createElement("button");
    b.className = "btn" + (primary ? " primary" : "");
    b.textContent = label;
    b.addEventListener("click", () => startDeck(label, ids));
    drillSetup.appendChild(b);
  };
  mkBtn(`Due today (${due})`, null, true); // null = compute at start
  Object.entries(DOMAINS).forEach(([k,d]) => {
    mkBtn(d.name, MODELS.filter(m=>m.d===k).map(m=>m.id), false);
  });
  mkBtn("Everything", MODELS.map(m=>m.id), false);
  const ut = unlockedThreads();
  mkBtn(`Threads (${ut.length}/${THREAD_KEYS.length})`, ut, false);
}

function startDeck(label, ids){
  deckLabel = label;
  queue = shuffle(ids ? ids.slice() : dueCards());
  if(queue.length===0){
    drillQ.textContent = "Nothing due. The spacing is working — come back tomorrow.";
    drillA.textContent = ""; drillDomain.textContent = ""; drillCount.textContent = "";
    revealBtn.style.display = "none"; drillStage.classList.remove("revealed");
    return;
  }
  nextCard();
}

function nextCard(){
  drillStage.classList.remove("revealed");
  if(queue.length===0){
    current = null;
    drillQ.textContent = "Deck complete. Grade honestly, return on schedule.";
    drillA.innerHTML = ""; drillDomain.textContent = ""; drillCount.textContent = deckLabel;
    revealBtn.style.display = "none";
    renderProgress(); buildDeckButtons();
    return;
  }
  current = queue.shift();
  drillCount.textContent = `${deckLabel} · ${queue.length+1} remaining`;
  if(current.startsWith("t:")){
    const [a,b] = current.slice(2).split("|");
    const A = byId[a], B = byId[b];
    drillDomain.innerHTML = `<svg class="enso enso-inline" style="color:${DOMAINS[A.d].color}"><use href="#e-dom-${A.d}"/></svg>${A.code} <span style="color:var(--chalk-faint)">×</span> <svg class="enso enso-inline" style="color:${DOMAINS[B.d].color}"><use href="#e-dom-${B.d}"/></svg>${B.code}`;
    drillDomain.style.color = "var(--chalk-faint)";
    drillQ.textContent = `Why do ${A.name} and ${B.name} touch?`;
    drillA.innerHTML = `<b>${threadNote(a,b)}</b><br><br><em style="color:var(--chalk-faint)">${A.short}: ${A.essence}<br>${B.short}: ${B.essence}</em>`;
  } else {
    const m = byId[current];
    drillDomain.innerHTML = ensoSvg(m.d, "enso-inline") + m.code;
    drillDomain.style.color = DOMAINS[m.d].color;
    drillQ.textContent = m.drill.q;
    drillA.innerHTML = m.drill.a + `<br><br><em style="color:var(--chalk-faint)">Hook: ${m.hook}</em>`;
  }
  revealBtn.style.display = "inline-block";
}

revealBtn.addEventListener("click", () => {
  drillStage.classList.add("revealed");
  revealBtn.style.display = "none";
});

document.querySelectorAll(".grade-row .btn").forEach(b => b.addEventListener("click", () => {
  if(!current) return;
  const g = +b.dataset.grade;
  const st = cardState(current);
  let box = st.box;
  if(g===0){ box = 1; }
  else if(g===1){ box = Math.max(1, box); }
  else if(g===2){ box = Math.min(5, box+1); }
  else { box = Math.min(5, box+2); }
  const dueDays = g===0 ? 0 : (g===1 ? Math.max(0.5, INTERVALS[box-1]/2) : INTERVALS[box-1]);
  progress[current] = {box, due: Date.now() + dueDays*DAY};
  saveProgress(progress);
  bumpReviews();
  if(g===0) queue.push(current); // failed cards return this session
  nextCard();
  if(typeof onProgressChanged === "function") onProgressChanged();
}));

function renderProgress(){
  const counts = [0,0,0,0,0];
  MODELS.forEach(m => counts[cardState(m.id).box - 1]++);
  unlockedThreads().forEach(k => counts[cardState(k).box - 1]++);
  const due = dueCards().length;
  drillProgress.innerHTML =
    `<div class="pbox"><div class="n">${due}</div><div class="l">Due now</div></div>` +
    counts.map((c,i)=>`<div class="pbox"><div class="n">${c}</div><div class="l">Box ${i+1} · ${INTERVALS[i]}d</div></div>`).join("");
}

buildDeckButtons();
renderProgress();
selectNode("fp");
/* ================= THEME ================= */
const themeMeta = document.querySelector('meta[name="theme-color"]');
const darkMql = window.matchMedia("(prefers-color-scheme: dark)");
function themePref(){ return sGet("lattice_theme") || "auto"; }
function applyTheme(){
  const pref = themePref();
  const dark = pref === "dark" || (pref === "auto" && darkMql.matches);
  document.documentElement.dataset.theme = dark ? "dark" : "light";
  if(themeMeta) themeMeta.setAttribute("content", dark ? "#161310" : "#F7F4ED");
  document.querySelectorAll(".theme-opt").forEach(b => b.classList.toggle("on", b.dataset.theme === pref));
}
darkMql.addEventListener("change", () => { if(themePref() === "auto") applyTheme(); });
document.querySelectorAll(".theme-opt").forEach(b => b.addEventListener("click", () => {
  sSet("lattice_theme", b.dataset.theme); applyTheme();
}));
const settingsBtn = document.getElementById("settingsBtn");
const settingsPop = document.getElementById("settingsPop");
settingsBtn.addEventListener("click", e => { e.stopPropagation(); settingsPop.classList.toggle("open"); });
document.addEventListener("click", e => {
  if(settingsPop.classList.contains("open") && !settingsPop.contains(e.target)) settingsPop.classList.remove("open");
});
applyTheme();

/* ================= API KEY ================= */
const apiKeyInput = document.getElementById("apiKeyInput");
if (apiKeyInput) {
  apiKeyInput.value = sGet("lattice_apikey") || "";
  apiKeyInput.addEventListener("input", () => { sSet("lattice_apikey", apiKeyInput.value.trim()); if (typeof updateSitMode === "function") updateSitMode(); if (typeof updateComposeMode === "function") updateComposeMode(); });
}
function getApiKey(){ return (sGet("lattice_apikey") || "").trim(); }

/* ================= SITUATION -> MODELS ================= */
/* ---- offline fallback: compact BM25 over the model corpus ---- */
const STOP = new Set("the a an and or but of to in on for with at by from as is are was be it this that these those you your i we they he she them his her its their our my me not no do does did so if then than into about over under out up down off can will would should could may might must have has had he's".split(" "));
function tok(str){
  return (str.toLowerCase().match(/[a-z0-9]+/g) || [])
    .filter(w => w.length > 2 && !STOP.has(w))
    .map(w => w.replace(/(ing|ed|es|s)$/,"") || w);
}
const bm25 = (() => {
  const docs = MODELS.map(m => tok([m.name, m.short, m.essence, m.mech, m.ex].join(" ")));
  const N = docs.length, df = {};
  docs.forEach(d => new Set(d).forEach(t => df[t] = (df[t]||0)+1));
  const avgdl = docs.reduce((a,d)=>a+d.length,0) / N;
  const k1 = 1.5, b = 0.75;
  return function(query){
    const q = tok(query); if(!q.length) return [];
    return MODELS.map((m,i) => {
      const d = docs[i], tf = {};
      d.forEach(t => tf[t] = (tf[t]||0)+1);
      let s = 0;
      new Set(q).forEach(t => {
        if(!tf[t]) return;
        const idf = Math.log(1 + (N - df[t] + 0.5)/(df[t] + 0.5));
        s += idf * (tf[t]*(k1+1)) / (tf[t] + k1*(1 - b + b*d.length/avgdl));
      });
      return {id:m.id, score:s};
    }).filter(r => r.score > 0).sort((a,b) => b.score - a.score).slice(0,5);
  };
})();

/* ---- LLM matcher: user's own Claude key, direct browser call ---- */
const PROTOCOLS = ["The 5-minute decision triage","Expected value worksheet","Bayes in 60 seconds","Pre-mortem script","10/10/10 + regret minimization","The weekly decision journal"];
const MODEL_IDS = MODELS.map(m => m.id);
const CATALOG = MODELS.map(m => `${m.id} | ${m.name} (${DOMAINS[m.d].name}): ${m.essence}`).join("\n");
const SIT_SCHEMA = {
  type:"object", additionalProperties:false, required:["matches"],
  properties:{ matches:{ type:"array", items:{
    type:"object", additionalProperties:false, required:["id","why"],
    properties:{
      id:{ type:"string", enum: MODEL_IDS },
      why:{ type:"string" },
      protocol:{ type:"string", enum: PROTOCOLS }
    }
  }}}
};
async function llmMatch(situation, key){
  const system =
    "You match a person's real situation to the mental models most worth thinking with. " +
    "Choose the 3-5 MOST relevant models from the catalog below (fewer if only a few truly fit), ordered most relevant first. " +
    "For each, write `why` as ONE concrete sentence naming how that model bears on THIS specific situation — not a generic definition. " +
    "Optionally set `protocol` to the single most useful field protocol. Only pick ids from the catalog.\n\nCATALOG (id | name (domain): essence):\n" + CATALOG;
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method:"POST",
    headers:{
      "content-type":"application/json",
      "x-api-key": key,
      "anthropic-version":"2023-06-01",
      "anthropic-dangerous-direct-browser-access":"true"
    },
    body: JSON.stringify({
      model:"claude-sonnet-5",
      max_tokens:1500,
      thinking:{type:"disabled"},
      system,
      messages:[{role:"user", content: situation}],
      output_config:{ format:{ type:"json_schema", schema: SIT_SCHEMA } }
    })
  });
  if(!res.ok){
    let msg = "HTTP " + res.status;
    try{ const e = await res.json(); msg = (e.error && e.error.message) || msg; }catch(_){}
    const err = new Error(msg); err.status = res.status; throw err;
  }
  const data = await res.json();
  if(data.stop_reason === "refusal") throw Object.assign(new Error("refusal"), {refusal:true});
  const textBlock = (data.content || []).find(b => b.type === "text");
  const parsed = JSON.parse(textBlock.text);
  return (parsed.matches || []).filter(m => byId[m.id]);
}

/* ---- UI ---- */
const sitInput = document.getElementById("sitInput");
const sitGo = document.getElementById("sitGo");
const sitMode = document.getElementById("sitMode");
const sitResults = document.getElementById("sitResults");

function updateSitMode(){
  if(!sitMode) return;
  sitMode.textContent = getApiKey() ? "analyzed by Claude" : "offline match — add a key in settings for tailored analysis";
}

function renderHits(matches, offline, noteHtml){
  if(!matches.length){
    sitResults.innerHTML = noteHtml || `<div class="sit-note">No clear match. Try describing the situation more concretely — what's happening, what you're deciding, what you're worried about.</div>`;
    return;
  }
  const head = noteHtml || (offline
    ? `<div class="sit-note"><b>Offline keyword match.</b> These share language with your situation. For reasoning about <em>your</em> specific case, add your Claude API key in <button class="sit-openset">settings</button>.</div>`
    : "");
  sitResults.innerHTML = head + matches.map(mm => {
    const m = byId[mm.id];
    const why = (offline || !mm.why) ? m.essence : mm.why;
    const proto = (!offline && mm.protocol) ? `<p class="sit-proto">Field protocol: <b>${mm.protocol}</b> — see the Apply tab.</p>` : "";
    return `<div class="sit-hit">
      <button class="sit-hit-head" data-goto="${m.id}">
        ${ensoSvg(m.d, "enso-dom")}
        <span class="mcode" style="color:${DOMAINS[m.d].color}">${m.code}</span>
        <span class="mname">${m.name}</span>
      </button>
      <p class="sit-why">${why}</p>
      ${proto}
      <div class="sit-links">
        <button class="mlink" data-goto="${m.id}">Open card &#8599;</button>
        <button class="mlink" data-lattice="${m.id}">See in lattice &#8599;</button>
      </div>
    </div>`;
  }).join("") + `<div class="sit-note">Writing something here? <button class="sit-compose">Draft a content brief from this &#8594;</button> · or <button class="sit-log">log it in the journal</button> to score later.</div>`;
  sitResults.querySelectorAll("[data-goto]").forEach(b => b.addEventListener("click", () => {
    document.querySelector('[data-tab=models]').click();
    setTimeout(() => gotoModel(b.dataset.goto), 80);
  }));
  sitResults.querySelectorAll("[data-lattice]").forEach(b => b.addEventListener("click", () => {
    document.querySelector('[data-tab=lattice]').click();
    setTimeout(() => { selectNode(b.dataset.lattice); nodeEls[b.dataset.lattice].scrollIntoView({behavior:"smooth",block:"center"}); }, 80);
  }));
  const open = sitResults.querySelector(".sit-openset");
  if(open) open.addEventListener("click", () => { settingsPop.classList.add("open"); apiKeyInput && apiKeyInput.focus(); });
  const logBtn = sitResults.querySelector(".sit-log");
  if(logBtn) logBtn.addEventListener("click", () => {
    if(typeof prefillJournal === "function")
      prefillJournal({ decision: (sitInput.value||"").trim(), models: matches.map(mm => mm.id) });
  });
  const cmpBtn = sitResults.querySelector(".sit-compose");
  if(cmpBtn) cmpBtn.addEventListener("click", () => {
    if(typeof prefillCompose === "function")
      prefillCompose({ pointA: (sitInput.value||"").trim() });
  });
}

async function runSituation(){
  const text = (sitInput.value || "").trim();
  if(text.length < 8){ sitResults.innerHTML = `<div class="sit-note">Give me a sentence or two about the situation.</div>`; return; }
  const key = getApiKey();
  if(key && navigator.onLine){
    sitResults.innerHTML = `<div class="sit-spinner"><i></i>Analyzing your situation with Claude…</div>`;
    sitGo.disabled = true;
    try{
      renderHits(await llmMatch(text, key), false);
    }catch(err){
      const why = err.refusal ? "Claude declined to analyze this one."
        : err.status === 401 ? "That API key was rejected — check it in settings."
        : "Couldn't reach Claude (" + (err.message||"error") + ").";
      const note = `<div class="sit-note">${why} Showing an offline keyword match instead — open <button class="sit-openset">settings</button> to fix the key.</div>`;
      renderHits(bm25(text), true, note);
    }finally{ sitGo.disabled = false; }
  } else {
    renderHits(bm25(text), true);
  }
}

if(sitGo){
  sitGo.addEventListener("click", runSituation);
  sitInput.addEventListener("keydown", e => { if((e.metaKey||e.ctrlKey) && e.key === "Enter") runSituation(); });
  window.addEventListener("online", updateSitMode);
  window.addEventListener("offline", updateSitMode);
  updateSitMode();
}

/* ================= COMPOSE (Fuzzy-Goal brief) ================= */
(function(){
  const $ = id => document.getElementById(id);
  const esc = s => (s==null?"":String(s)).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  const ymd = () => { const d=new Date(); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); };
  const jget = (k,d) => { try{ const v=sGet(k); return v==null?d:JSON.parse(v); }catch(e){ return d; } };
  const jset = (k,v) => sSet(k, JSON.stringify(v));
  const anchor = id => `<button class="cmp-anchor" data-goto="${id}"><svg class="enso enso-inline" style="color:${DOMAINS[byId[id].d].color}"><use href="#e-dom-${byId[id].d}"/></svg>${byId[id].code}</button>`;

  // slot: {key, zone:'A'|'space'|'B', heading, move, models:[id], prompt}
  const JOBS = {
    info: { label:"Informational article", slots:[
      {key:"reader", zone:"A", heading:"Who's asking, and what they already believe", move:"Diagnose search intent + current knowledge and misconceptions", models:["aud","cok"],
       prompt:"Who types this query, at what awareness level? What do they already (wrongly) assume, and where exactly is the gap you must close?"},
      {key:"answer", zone:"space", heading:"Direct answer — 40–60 words up top", move:"Answer-first, for the featured snippet and AI answers", models:["pyr"],
       prompt:"Answer the exact query in 2–3 plain sentences before any preamble. This is the block that wins the snippet."},
      {key:"outline", zone:"space", heading:"H2 outline — one sub-question each", move:"Break the topic into independent, self-contained modules", models:["decomp"],
       prompt:"List 4–7 H2s, each answering one sub-question a reader would ask next. Each should stand alone."},
      {key:"depth", zone:"space", heading:"Root-cause depth on the core question", move:"Go one or two layers past the obvious answer", models:["whys"],
       prompt:"For the main question, drill deeper than the surface answer — the 'why behind the why' that thin competitors skip."},
      {key:"counter", zone:"space", heading:"Fair counter-coverage", move:"Address the strongest objection or opposing view honestly", models:["steel"],
       prompt:"Name the best counter-argument or the thing skeptics say, and handle it fairly. This is EEAT and trust."},
      {key:"trust", zone:"space", heading:"Proof — EEAT signals", move:"Show expertise that a bluffer can't fake", models:["signal","proof"],
       prompt:"What original data, citations, credentials, or examples make this authoritative rather than rewritten? Add them."},
      {key:"takeaways", zone:"B", heading:"Key takeaways + FAQ", move:"The real job answered, plus the questions left over", models:["jtbd"],
       prompt:"3–5 scannable takeaways and 2–3 FAQs (the 'people also ask' tail)."},
      {key:"land", zone:"B", heading:"Where they leave — understanding + soft next step", move:"One clear conclusion and a low-pressure CTA", models:["pos","aud"],
       prompt:"The single thing they now understand, and the one soft next action (subscribe, related guide, quote)."},
    ]},
    trans: { label:"Transactional / landing page", slots:[
      {key:"reader", zone:"A", heading:"The hesitant buyer, mid-comparison", move:"Name their stage and who they're comparing you against", models:["aud","funnel"],
       prompt:"Who lands here, how ready are they, and what alternatives (including doing nothing) are they weighing?"},
      {key:"value", zone:"space", heading:"Value-prop headline", move:"A plain-words, differentiated promise", models:["cok","pos"],
       prompt:"State the core value in words a 12-year-old gets — no jargon. What one slot do you own that rivals don't?"},
      {key:"objections", zone:"space", heading:"Objection → proof pairs", move:"Dissolve each doubt with the proof that answers it", models:["steel","proof","signal"],
       prompt:"List the top 3–5 objections in the reader's order of doubt; pair each with the specific proof (testimonial, stat, guarantee, credential)."},
      {key:"loss", zone:"space", heading:"Cost of inaction", move:"Frame what staying put costs them", models:["loss"],
       prompt:"What does NOT acting cost — money, risk, time, peace of mind? Frame the loss, not only the upside."},
      {key:"derisk", zone:"space", heading:"Risk reversal", move:"Turn a one-way door into a two-way door", models:["doors"],
       prompt:"Lower the stakes: free trial, cancel anytime, money-back, no-obligation quote. Make the yes reversible."},
      {key:"cta", zone:"B", heading:"The one CTA", move:"A single, unmistakable action", models:["pos","aud"],
       prompt:"The single desired action, stated once, impossible to miss. Exact button copy."},
    ]},
  };
  const ZONE = { A:"Point A", space:"Challenge space", B:"Point B" };

  function skeleton(job){
    return JOBS[job].slots.map(s => ({ key:s.key, zone:s.zone, heading:s.heading, move:s.move, models:s.models.slice(), draft:"" }));
  }

  /* ---- LLM brief (BYO key, mirrors llmMatch) ---- */
  async function llmBrief(intake, key, skel){
    const job = JOBS[intake.job];
    const slotSpec = skel.map(s => `- ${s.key} [${ZONE[s.zone]}] "${s.heading}" — ${s.move}. Anchoring models: ${s.models.map(id=>byId[id].name).join(", ")}. Writer prompt: ${JOBS[intake.job].slots.find(x=>x.key===s.key).prompt}`).join("\n");
    const schema = {
      type:"object", additionalProperties:false, required:["headlines","sections","openQuestions"],
      properties:{
        headlines:{ type:"array", items:{type:"string"} },
        sections:{ type:"array", items:{ type:"object", additionalProperties:false, required:["key","draft"],
          properties:{ key:{ type:"string", enum: skel.map(s=>s.key) }, draft:{ type:"string" } } } },
        openQuestions:{ type:"array", items:{type:"string"} }
      }
    };
    const system =
      `You write a working content BRIEF for a professional copywriter — structure and direction they write the piece FROM, not finished copy. Job type: ${job.label}. ` +
      `The brief has fixed sections (below), each anchored to a mental model. For EACH section, write 'draft' as 2–4 sentences of concrete direction tailored to THIS reader crossing (Point A to Point B) — what to cover and the move to make, in the writer's shoes, not a definition of the model. ` +
      `Also give 2–3 'headlines' options and a short 'openQuestions' list of things to verify or research. Keep it tight and specific to the keyword and audience. Do not invent statistics; where a figure or claim is needed, say [verify].\n\n` +
      `SECTIONS:\n${slotSpec}\n\n` +
      `POINT A (reader now): ${intake.pointA}\nPOINT B (goal + CTA): ${intake.pointB}` +
      (intake.awareness?`\nReader awareness: ${intake.awareness}`:"") + (intake.keyword?`\nTarget keyword: ${intake.keyword}`:"") + (intake.tone?`\nTone: ${intake.tone}`:"");
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method:"POST",
      headers:{ "content-type":"application/json", "x-api-key":key, "anthropic-version":"2023-06-01", "anthropic-dangerous-direct-browser-access":"true" },
      body: JSON.stringify({ model:"claude-sonnet-5", max_tokens:2200, thinking:{type:"disabled"}, system,
        messages:[{role:"user", content:`Write the ${job.label} brief.`}],
        output_config:{ format:{ type:"json_schema", schema } } })
    });
    if(!res.ok){ let msg="HTTP "+res.status; try{const e=await res.json(); msg=(e.error&&e.error.message)||msg;}catch(_){} const err=new Error(msg); err.status=res.status; throw err; }
    const data = await res.json();
    if(data.stop_reason === "refusal") throw Object.assign(new Error("refusal"), {refusal:true});
    const tb = (data.content||[]).find(b=>b.type==="text");
    return JSON.parse(tb.text);
  }

  /* ---- storage ---- */
  const briefs = () => jget("lattice_briefs", []);
  const saveBriefs = b => jset("lattice_briefs", b);

  /* ---- render ---- */
  const cmpJob=$("cmpJob"), cmpA=$("cmpA"), cmpB=$("cmpB"), cmpAware=$("cmpAware"), cmpKw=$("cmpKw"), cmpTone=$("cmpTone"),
        cmpGo=$("cmpGo"), cmpMode=$("cmpMode"), cmpResults=$("cmpResults"), cmpSaved=$("cmpSaved");
  let currentId = null;

  window.updateComposeMode = updateComposeMode;
  function updateComposeMode(){
    if(!cmpMode) return;
    cmpMode.textContent = getApiKey() ? "drafted by Claude" : "structured skeleton — add a key in settings for a first-pass draft";
  }

  function briefHtml(b){
    const headlines = (b.headlines&&b.headlines.length)
      ? `<div class="cmp-headlines"><div class="cmp-hl-h">Headline options</div>${b.headlines.map(h=>`<p>${esc(h)}</p>`).join("")}</div>` : "";
    const secs = b.sections.map((s,i) => `
      <div class="cmp-sec cmp-zone-${s.zone}">
        <div class="cmp-sec-head">
          <span class="cmp-znum">${i+1}</span>
          <span class="cmp-zone-tag">${ZONE[s.zone]}</span>
          <div class="cmp-anchors">${s.models.map(anchor).join("")}</div>
        </div>
        <h4>${esc(s.heading)}</h4>
        <p class="cmp-move">${esc(s.move)}</p>
        <textarea class="cmp-draft" data-key="${s.key}" rows="3" placeholder="${esc(JOBS[b.job].slots.find(x=>x.key===s.key).prompt)}">${esc(s.draft)}</textarea>
      </div>`).join("");
    const oq = (b.openQuestions&&b.openQuestions.length)
      ? `<div class="cmp-oq"><div class="cmp-oq-h">Verify / open questions</div><ul>${b.openQuestions.map(q=>`<li>${esc(q)}</li>`).join("")}</ul></div>` : "";
    return `
      <div class="cmp-brief" data-id="${b.id}">
        <div class="cmp-brief-top">
          <div class="cmp-brief-meta">${JOBS[b.job].label}${b.keyword?` · <b>${esc(b.keyword)}</b>`:""} · ${b.built==="llm"?"Claude draft":"skeleton"}</div>
          <div class="cmp-brief-act"><button class="mlink cmp-copy">Copy brief</button><button class="mlink cmp-del">Delete</button></div>
        </div>
        <div class="cmp-ab-row">
          <div class="cmp-ab-box cmp-zone-A"><span class="cmp-zone-tag">Point A — reader now</span><p contenteditable="true" class="cmp-ab" data-ab="pointA">${esc(b.pointA)}</p></div>
          <div class="cmp-ab-box cmp-zone-B"><span class="cmp-zone-tag">Point B — land</span><p contenteditable="true" class="cmp-ab" data-ab="pointB">${esc(b.pointB)}</p></div>
        </div>
        ${headlines}
        ${secs}
        ${oq}
      </div>`;
  }

  function wireBrief(b){
    const root = cmpResults.querySelector(`.cmp-brief[data-id="${b.id}"]`); if(!root) return;
    root.querySelectorAll(".cmp-draft").forEach(t => t.addEventListener("input", () => {
      const sec = b.sections.find(x=>x.key===t.dataset.key); if(sec){ sec.draft = t.value; persist(b); }
    }));
    root.querySelectorAll(".cmp-ab").forEach(p => p.addEventListener("input", () => { b[p.dataset.ab] = p.textContent; persist(b); }));
    root.querySelectorAll("[data-goto]").forEach(x => x.addEventListener("click", () => {
      document.querySelector('[data-tab=models]').click(); setTimeout(()=>gotoModel(x.dataset.goto),80);
    }));
    root.querySelector(".cmp-copy").addEventListener("click", e => { copyBrief(b); const t=e.target; const o=t.textContent; t.textContent="Copied ✓"; setTimeout(()=>t.textContent=o,1400); });
    root.querySelector(".cmp-del").addEventListener("click", () => {
      saveBriefs(briefs().filter(x=>x.id!==b.id));
      if(currentId===b.id){ currentId=null; cmpResults.innerHTML=""; }
      renderSaved();
    });
  }

  function persist(b){ const all=briefs(); const i=all.findIndex(x=>x.id===b.id); if(i>=0){ all[i]=b; saveBriefs(all); } }

  function showBrief(b){ currentId=b.id; cmpResults.innerHTML = briefHtml(b); wireBrief(b); }

  function toMarkdown(b){
    let md = `# ${JOBS[b.job].label} brief\n\n`;
    if(b.keyword) md += `**Keyword:** ${b.keyword}  \n`;
    md += `**Point A (reader now):** ${b.pointA}\n\n**Point B (goal + CTA):** ${b.pointB}\n\n`;
    if(b.headlines&&b.headlines.length) md += `## Headline options\n` + b.headlines.map(h=>`- ${h}`).join("\n") + "\n\n";
    md += `## Outline\n\n`;
    b.sections.forEach((s,i) => {
      md += `### ${i+1}. ${s.heading} — via ${s.models.map(id=>byId[id].name).join(", ")}\n`;
      md += `_${s.move}_\n\n${s.draft||""}\n\n`;
    });
    if(b.openQuestions&&b.openQuestions.length) md += `## Verify / open questions\n` + b.openQuestions.map(q=>`- ${q}`).join("\n") + "\n";
    return md;
  }
  function copyBrief(b){
    const md = toMarkdown(b);
    if(navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(md).catch(()=>fallbackCopy(md));
    else fallbackCopy(md);
  }
  function fallbackCopy(text){ const t=document.createElement("textarea"); t.value=text; document.body.appendChild(t); t.select(); try{document.execCommand("copy");}catch(e){} t.remove(); }

  function renderSaved(){
    const all = briefs();
    if(!all.length){ cmpSaved.innerHTML=""; return; }
    cmpSaved.innerHTML = `<div class="cmp-saved-h">Saved briefs</div>` + all.map(b =>
      `<button class="cmp-saved-row ${b.id===currentId?"on":""}" data-open="${b.id}"><span>${JOBS[b.job].label}${b.keyword?` · ${esc(b.keyword)}`:""}</span><span class="cmp-saved-date">${b.date}</span></button>`).join("");
    cmpSaved.querySelectorAll("[data-open]").forEach(x => x.addEventListener("click", () => {
      const b = briefs().find(y=>y.id===x.dataset.open); if(b){ showBrief(b); renderSaved(); cmpResults.scrollIntoView({behavior:"smooth",block:"start"}); }
    }));
  }

  async function build(){
    const pointA=(cmpA.value||"").trim(), pointB=(cmpB.value||"").trim();
    if(pointA.length<6 || pointB.length<6){ (pointA.length<6?cmpA:cmpB).focus(); return; }
    const intake = { job:cmpJob.value, pointA, pointB, awareness:cmpAware.value, keyword:(cmpKw.value||"").trim(), tone:(cmpTone.value||"").trim() };
    const skel = skeleton(intake.job);
    const key = getApiKey();
    let headlines=[], openQuestions=[], built="offline", errNote="";
    if(key && navigator.onLine){
      cmpResults.innerHTML = `<div class="sit-spinner"><i></i>Building your brief with Claude…</div>`;
      cmpGo.disabled = true;
      try{
        const r = await llmBrief(intake, key, skel);
        headlines = r.headlines||[]; openQuestions = r.openQuestions||[];
        (r.sections||[]).forEach(rs => { const sec = skel.find(x=>x.key===rs.key); if(sec) sec.draft = rs.draft||""; });
        built = "llm";
      }catch(err){
        errNote = err.refusal ? "Claude declined this one — here's the structured skeleton to fill in."
          : err.status===401 ? "That API key was rejected — here's the skeleton; fix the key in settings."
          : "Couldn't reach Claude — here's the structured skeleton to fill in.";
      }finally{ cmpGo.disabled = false; }
    }
    const b = { id:"b"+Date.now().toString(36)+Math.random().toString(36).slice(2,5), date:ymd(),
      job:intake.job, pointA, pointB, awareness:intake.awareness, keyword:intake.keyword, tone:intake.tone,
      headlines, openQuestions, built, sections:skel, source:"manual" };
    const all = briefs(); all.unshift(b); saveBriefs(all);
    showBrief(b); renderSaved();
    if(errNote){ const n=document.createElement("div"); n.className="sit-note"; n.style.marginBottom="14px"; n.textContent=errNote; cmpResults.prepend(n); }
  }

  if(cmpGo){
    cmpGo.addEventListener("click", build);
    window.addEventListener("online", updateComposeMode);
    window.addEventListener("offline", updateComposeMode);
    updateComposeMode();
    renderSaved();
  }

  window.prefillCompose = function(opts){
    if(!cmpA) return;
    if(opts && opts.pointA) cmpA.value = opts.pointA;
    if(opts && opts.job && JOBS[opts.job]) cmpJob.value = opts.job;
    document.querySelector('[data-tab=compose]').click();
    setTimeout(()=>{ cmpB.focus(); document.querySelector(".cmp-box").scrollIntoView({behavior:"smooth",block:"start"}); }, 80);
  };
})();

/* ================= DAILY PRACTICE ================= */
(function(){
  const $ = id => document.getElementById(id);
  const esc = s => (s==null?"":String(s)).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  function ymd(ts){ const d = ts==null ? new Date() : new Date(ts); return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
  function today(){ return ymd(); }
  function daysBetween(a,b){ return Math.round((new Date(b+"T00:00") - new Date(a+"T00:00"))/DAY); }
  const jget = (k,d) => { try{ const v = sGet(k); return v==null?d:JSON.parse(v); }catch(e){ return d; } };
  const jset = (k,v) => sSet(k, JSON.stringify(v));
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" class="step-check"><path d="M20 6 9 17l-5-5"/></svg>';
  const glyph = ref => `<svg class="enso step-glyph" aria-hidden="true"><use href="#${ref}"/></svg>`;

  /* ---- stats & streak ---- */
  function stats(){ return jget("lattice_stats", {reviews:0}); }
  window.bumpReviews = function(){ const s=stats(); s.reviews=(s.reviews||0)+1; jset("lattice_stats", s); };
  function streak(){ return jget("lattice_streak", {count:0,last:null}); }
  function dayComplete(){ return feynmanToday() && dueCards().length===0; }
  function maybeAwardStreak(){
    if(!dayComplete()) return;
    const s = streak(), t = today();
    if(s.last === t) return;
    s.count = (s.last && daysBetween(s.last,t)===1) ? (s.count||0)+1 : 1;
    s.last = t; jset("lattice_streak", s);
  }

  /* ---- feynman ---- */
  const JARGON = ["heuristic","asymmetric","asymmetry","asymmetrically","probabilistic","stochastic","optimize","optimization","optimise","leverage","paradigm","synergy","orthogonal","monotonic","convex","nonlinear","exponential","exponentially","bottleneck","throughput","recursive","abstraction","instantiate","parameter","parameters","variance","posterior","prior","priors","bayesian","utility","equilibrium","incentive","incentives","dissonance","cognitive","salience","salient","normative","counterfactual","counterfactuals","epistemic","ontological","reification","marginal","subordinate","constraint","reference-class"];
  const JSET = new Set(JARGON);
  function feynLog(){ return jget("lattice_feynman", []); }
  function feynmanToday(){ return feynLog().some(e => e.date === today()); }
  function modelOfDay(){ return MODELS[Math.floor(Date.now()/DAY) % MODELS.length]; }
  function randomOtherId(cur){ let id; do{ id = MODELS[Math.floor(Math.random()*MODELS.length)].id; }while(id===cur && MODELS.length>1); return id; }
  function jargonWords(text){ const out=[]; (text.toLowerCase().match(/[a-z][a-z-]+/g)||[]).forEach(w=>{ if(JSET.has(w) && out.indexOf(w)<0) out.push(w); }); return out; }
  function highlightJargon(text){ return esc(text).replace(/[A-Za-z][A-Za-z-]+/g, w => JSET.has(w.toLowerCase()) ? `<mark class="jargon">${w}</mark>` : w); }
  function jargonNote(text){
    const w = jargonWords(text); if(!w.length) return `<p class="feyn-clear">No jargon — that's the mark of real understanding.</p>`;
    return `<p class="feyn-jargon">Plain-word check: ${w.map(x=>`<span class="jchip">${esc(x)}</span>`).join(" ")} — where you reached for a term, you found the edge of your understanding. Rewrite that spot.</p>`;
  }
  let feynId = modelOfDay().id, feynForce = false;

  /* ---- journal ---- */
  function journal(){ return jget("lattice_journal", []); }
  function saveJournal(j){ jset("lattice_journal", j); }
  function loggedThisWeek(){ const t=today(); return journal().some(e => daysBetween(e.date,t) <= 7); }
  const RESOLVE_AGE = 14;
  let jModels = new Set();

  /* ================= TODAY ================= */
  function renderStreak(){
    const s = streak(), el = $("streakBadge"); if(!el) return;
    const warm = s.last === today();
    el.innerHTML = `<div class="streak-n">${s.count||0}</div><div class="streak-l">day${(s.count===1)?"":"s"}</div>`;
    el.classList.toggle("cold", !warm);
    el.title = warm ? "Today's loop is complete" : "Finish today's loop to keep the streak";
  }
  function drillStep(){
    const dueList = dueCards();
    const due = dueList.length, tN = dueList.filter(k=>k.startsWith("t:")).length;
    if(due===0) return {done:true, html:`<div class="step done"><div class="step-mark">${CHECK}</div><div class="step-body"><div class="step-kicker">Drill · spaced repetition</div><h4>All caught up</h4><p class="step-note">Nothing due. The next cards return on their schedule.</p></div></div>`};
    return {done:false, html:`<div class="step"><div class="step-mark">${glyph("e-drill")}</div><div class="step-body"><div class="step-kicker">Drill · spaced repetition</div><h4>${due} card${due===1?"":"s"} due${tN?` · ${tN} thread${tN===1?"":"s"}`:""}</h4><p class="step-note">Retrieve each before revealing. Grade honestly.</p><div class="step-act"><button class="btn primary js-drill">Start drill</button></div></div></div>`};
  }
  function feynStep(){
    const done = feynmanToday() && !feynForce;
    let body;
    if(done){
      const e = feynLog().filter(x=>x.date===today()).slice(-1)[0];
      body = `<p class="step-note">You explained <b>${esc(byId[e.id].name)}</b> today.</p><div class="feyn-text">${highlightJargon(e.text)}</div>${jargonNote(e.text)}<div class="step-act"><button class="mlink js-feyn-another">Write another &#8599;</button></div>`;
    } else {
      const m = byId[feynId];
      body = `<p class="step-note">Explain <b>${esc(m.name)}</b> to a smart 12-year-old — no jargon.</p><textarea class="feyn-input" id="feynInput" rows="3" placeholder="In plain words…"></textarea><div class="step-act"><button class="btn primary js-feyn-save">Save explanation</button><button class="mlink js-feyn-skip">Different model</button></div>`;
    }
    return {done, html:`<div class="step ${done?"done":""}"><div class="step-mark">${done?CHECK:glyph("e-feyn")}</div><div class="step-body"><div class="step-kicker">Feynman · elaboration</div><h4>Explain one model</h4>${body}</div></div>`};
  }
  function applyStep(){
    const done = loggedThisWeek();
    const body = done
      ? `<p class="step-note">You logged a decision this week. Score old predictions in the journal when they resolve.</p>`
      : `<p class="step-note">Run one real decision through the models — the habit that compounds everything.</p><div class="step-act"><button class="btn primary js-open-journal">Open the journal</button></div>`;
    return {done, html:`<div class="step weekly ${done?"done":""}"><div class="step-mark">${done?CHECK:glyph("e-journal")}</div><div class="step-body"><div class="step-kicker">Apply · once a week</div><h4>Run a real decision</h4>${body}</div></div>`};
  }
  function renderAgenda(){
    const el = $("agenda"); if(!el) return;
    const d = drillStep(), f = feynStep(), a = applyStep();
    let footer = "";
    if(d.done && f.done){
      const s = streak();
      footer = `<div class="today-done"><div class="step-mark">${CHECK}</div><div><b>You're done for today.</b> ${s.count>1?`${s.count} days running — `:""}See you tomorrow.</div></div>`;
    }
    el.innerHTML = d.html + f.html + a.html + footer;

    const drillBtn = el.querySelector(".js-drill");
    if(drillBtn) drillBtn.addEventListener("click", () => { document.querySelector('[data-tab=drill]').click(); startDeck("Due today", null); });
    const save = el.querySelector(".js-feyn-save");
    if(save) save.addEventListener("click", () => {
      const t = ($("feynInput").value||"").trim();
      if(t.length < 15){ $("feynInput").focus(); $("feynInput").classList.add("shake"); setTimeout(()=>$("feynInput").classList.remove("shake"),400); return; }
      const log = feynLog(); log.push({date:today(), id:feynId, text:t}); jset("lattice_feynman", log);
      feynForce = false; onProgressChanged();
    });
    const skip = el.querySelector(".js-feyn-skip");
    if(skip) skip.addEventListener("click", () => { feynId = randomOtherId(feynId); renderAgenda(); });
    const another = el.querySelector(".js-feyn-another");
    if(another) another.addEventListener("click", () => { feynForce = true; feynId = randomOtherId(feynId); renderAgenda(); });
    const oj = el.querySelector(".js-open-journal");
    if(oj) oj.addEventListener("click", () => { document.querySelector('[data-tab=apply]').click(); setTimeout(()=>{ const jr=$("journalRoot"); if(jr) jr.scrollIntoView({behavior:"smooth",block:"start"}); },80); });
  }

  /* ================= PROGRESS PANEL ================= */
  function renderProgPanel(){
    const el = $("progPanel"); if(!el) return;
    const s = streak(), st = stats();
    const boxes = [0,0,0,0,0];
    MODELS.forEach(m => boxes[cardState(m.id).box-1]++);
    const mastered = boxes[4], learning = boxes[1]+boxes[2]+boxes[3], fresh = boxes[0], due = dueCards().length;
    const tile = (n,l) => `<div class="ptile"><div class="ptile-n">${n}</div><div class="ptile-l">${l}</div></div>`;
    const tiles = tile(s.count||0,"day streak") + tile(st.reviews||0,"reviews") + tile(due,"due now") + tile(mastered,"mastered");
    const domains = Object.keys(DOMAINS).map(k=>{
      const ms = MODELS.filter(m=>m.d===k);
      const avg = ms.reduce((a,m)=>a+cardState(m.id).box,0)/ms.length;
      const pct = Math.round((avg/5)*100);
      return `<div class="dbar"><span class="dbar-l">${DOMAINS[k].name}</span><span class="dbar-track"><i style="width:${pct}%;background:${DOMAINS[k].color}"></i></span><span class="dbar-v">${avg.toFixed(1)}</span></div>`;
    }).join("");
    const ut = unlockedThreads().length;
    const bp = st.blankpage;
    const bpTxt = bp ? ` Last blank-page test: <b>${bp.found}/${bp.total}</b> threads from memory (${bp.date}).` : "";
    el.innerHTML = `<div class="ptiles">${tiles}</div>
      <p class="prog-cap">${fresh} new · ${learning} taking root · ${mastered} mastered — the flat part of the curve is where most people quit. ${ut}/${THREAD_KEYS.length} threads unlocked.${bpTxt}</p>
      <div class="dbars"><div class="dbars-h">Maturity by domain <span>· average Leitner box, 1–5</span></div>${domains}</div>`;
  }

  /* ================= DECISION JOURNAL ================= */
  function renderChips(){
    const c = $("jChips"); if(!c) return;
    c.innerHTML = [...jModels].map(id=>`<span class="jchip sel" data-rm="${id}" style="border-color:${DOMAINS[byId[id].d].color}">${esc(byId[id].short)} <b>&times;</b></span>`).join("");
    c.querySelectorAll("[data-rm]").forEach(x=>x.addEventListener("click",()=>{ jModels.delete(x.dataset.rm); renderChips(); }));
  }
  function addModelByText(val){
    const v = val.trim().toLowerCase(); if(!v) return;
    const m = MODELS.find(m => (m.code+" · "+m.short).toLowerCase()===v || m.short.toLowerCase()===v || m.name.toLowerCase()===v)
           || MODELS.find(m => m.short.toLowerCase().includes(v) || m.name.toLowerCase().includes(v));
    if(m) jModels.add(m.id);
    renderChips();
  }
  function calibHtml(){
    const done = journal().filter(e => e.outcome && typeof e.outcome.correct === "boolean");
    if(done.length < 3) return `<div class="jcalib muted">Score at least 3 resolved predictions to see your calibration.</div>`;
    const buckets = [{lo:0,hi:59,lbl:"≤59%"},{lo:60,hi:74,lbl:"60–74%"},{lo:75,hi:89,lbl:"75–89%"},{lo:90,hi:100,lbl:"90%+"}];
    const rows = buckets.map(bk=>{
      const es = done.filter(e => e.prob>=bk.lo && e.prob<=bk.hi);
      if(!es.length) return "";
      const pred = Math.round(es.reduce((a,e)=>a+e.prob,0)/es.length);
      const hit = es.filter(e=>e.outcome.correct).length;
      const act = Math.round((hit/es.length)*100);
      return `<div class="crow"><span class="crow-l">${bk.lbl}</span><span class="crow-bars"><span class="crow-pred" style="width:${pred}%" title="predicted ${pred}%"></span><span class="crow-act" style="width:${act}%" title="actual ${act}%"></span></span><span class="crow-v">${hit}/${es.length}</span></div>`;
    }).join("");
    const meanPred = done.reduce((a,e)=>a+e.prob,0)/done.length;
    const meanAct = done.filter(e=>e.outcome.correct).length/done.length*100;
    const gap = meanPred - meanAct;
    const take = Math.abs(gap) < 8 ? "Well calibrated — your confidence tracks reality."
      : gap > 0 ? `Overconfident by ~${Math.round(gap)} points on average — shade your probabilities down.`
      : `Underconfident by ~${Math.round(-gap)} points — you're right more often than you claim.`;
    return `<div class="jcalib"><div class="jcalib-h">Calibration <span>· <i class="k-pred"></i> predicted &nbsp; <i class="k-act"></i> actual</span></div>${rows}<p class="jcalib-take">${take}</p></div>`;
  }
  function entryHtml(e){
    const age = daysBetween(e.date, today());
    const resolved = e.outcome && typeof e.outcome.correct === "boolean";
    const ready = !resolved && age >= RESOLVE_AGE;
    const badge = resolved ? `<span class="jbadge ${e.outcome.correct?"ok":"no"}">${e.outcome.correct?"called it":"missed"}</span>` : (ready?`<span class="jbadge ready">ready to score</span>`:"");
    const chips = (e.models||[]).filter(id=>byId[id]).map(id=>`<span class="jchip" style="border-color:${DOMAINS[byId[id].d].color}">${esc(byId[id].short)}</span>`).join(" ");
    const resolve = resolved ? "" : `<div class="jresolve">Did it happen as you expected? <button class="jr-btn" data-res="1" data-id="${e.id}">Yes</button> <button class="jr-btn" data-res="0" data-id="${e.id}">No</button></div>`;
    return `<div class="jentry ${resolved?"resolved":""} ${ready?"ready":""}">
      <div class="jentry-top"><span class="jentry-date">${e.date}</span><span class="jentry-prob">${e.prob}%</span>${badge}<button class="jentry-del" data-del="${e.id}" title="Remove">&times;</button></div>
      <p class="jentry-dec">${esc(e.decision)}</p>
      ${e.expect?`<p class="jentry-exp">Expected: ${esc(e.expect)}</p>`:""}
      ${chips?`<div class="jentry-models">${chips}</div>`:""}
      ${resolve}
    </div>`;
  }
  function renderJournal(){
    const root = $("journalRoot"); if(!root) return;
    if(!root.dataset.built){
      root.dataset.built = "1";
      root.innerHTML = `<div class="jrnl">
        <div class="jrnl-form">
          <svg class="enso card-enso" aria-hidden="true"><use href="#e-journal"/></svg>
          <h4>Decision journal</h4>
          <p class="jrnl-sub">Log a real decision and your prediction. Score it when it resolves — the app's only feedback loop with reality.</p>
          <textarea id="jDecision" rows="2" placeholder="The decision or problem…"></textarea>
          <input id="jExpect" placeholder="What I expect to happen…">
          <label class="jrnl-prob">Probability I'm right <b id="jProbV">70%</b><input type="range" id="jProb" min="5" max="95" step="5" value="70"></label>
          <div class="jrnl-models">
            <input id="jModelInput" list="jModelList" placeholder="Models you used — type a name, press enter">
            <datalist id="jModelList"></datalist>
            <div class="jrnl-chips" id="jChips"></div>
          </div>
          <button class="btn primary" id="jSave">Log decision</button>
        </div>
        <div id="jCalib"></div>
        <div id="jList"></div>
      </div>`;
      $("jModelList").innerHTML = MODELS.map(m=>`<option value="${esc(m.code+" · "+m.short)}">`).join("");
      $("jProb").addEventListener("input", () => $("jProbV").textContent = $("jProb").value + "%");
      const mi = $("jModelInput");
      mi.addEventListener("change", () => { addModelByText(mi.value); mi.value=""; });
      mi.addEventListener("keydown", e => { if(e.key==="Enter"){ e.preventDefault(); addModelByText(mi.value); mi.value=""; } });
      $("jSave").addEventListener("click", () => {
        const dec = ($("jDecision").value||"").trim();
        if(dec.length < 6){ $("jDecision").focus(); return; }
        const j = journal();
        j.push({ id:"j"+Date.now().toString(36)+Math.random().toString(36).slice(2,5), date:today(), decision:dec, expect:($("jExpect").value||"").trim(), prob:+$("jProb").value, models:[...jModels], outcome:null });
        saveJournal(j);
        $("jDecision").value=""; $("jExpect").value=""; $("jProb").value=70; $("jProbV").textContent="70%"; jModels = new Set(); renderChips();
        renderJournalBody(); onProgressChanged();
      });
      const list = $("jList");
      list.addEventListener("click", e => {
        const res = e.target.closest(".jr-btn");
        if(res){ const j=journal(); const it=j.find(x=>x.id===res.dataset.id); if(it){ it.outcome={correct:res.dataset.res==="1", date:today()}; saveJournal(j); renderJournalBody(); } return; }
        const del = e.target.closest(".jentry-del");
        if(del){ saveJournal(journal().filter(x=>x.id!==del.dataset.del)); renderJournalBody(); onProgressChanged(); }
      });
    }
    renderChips();
    renderJournalBody();
  }
  function renderJournalBody(){
    const cal = $("jCalib"), list = $("jList"); if(!cal||!list) return;
    cal.innerHTML = calibHtml();
    const items = journal().slice().sort((a,b)=> (a.date<b.date?1:-1));
    list.innerHTML = items.length
      ? `<div class="jlist-h">${items.length} logged</div>` + items.map(entryHtml).join("")
      : `<div class="jempty">No entries yet. Your first logged decision is the start of your calibration record.</div>`;
  }

  /* ================= BACKUP ================= */
  function lkeys(){ const out=[]; try{ for(let i=0;i<localStorage.length;i++){ const k=localStorage.key(i); if(k && k.indexOf("lattice_")===0) out.push(k); } }catch(e){} for(const k in memStore){ if(k.indexOf("lattice_")===0 && out.indexOf(k)<0) out.push(k); } return out; }
  function doExport(){
    const data = {}; lkeys().forEach(k => { if(k!=="lattice_apikey") data[k] = sGet(k); });
    const blob = new Blob([JSON.stringify({app:"latticework", exported:today(), data}, null, 2)], {type:"application/json"});
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "latticework-backup-"+today()+".json";
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(a.href), 2000);
  }
  function doImport(file){
    const r = new FileReader();
    r.onload = () => {
      try{
        const parsed = JSON.parse(r.result);
        const data = parsed.data || parsed;
        if(!data || typeof data !== "object") throw 0;
        if(!confirm("Restore this backup? It overwrites the drills, journal, and Feynman notes on this device.")) return;
        Object.keys(data).forEach(k => { if(k.indexOf("lattice_")===0 && k!=="lattice_apikey") sSet(k, data[k]); });
        location.reload();
      }catch(e){ alert("That doesn't look like a Latticework backup file."); }
    };
    r.readAsText(file);
  }

  /* ================= BADGE ================= */
  function badgePref(){ return sGet("lattice_badge")==="on"; }
  function updateBadge(){
    if(!("setAppBadge" in navigator)) return;
    if(!badgePref()){ if(navigator.clearAppBadge) navigator.clearAppBadge(); return; }
    const n = dueCards().length;
    if(n>0) navigator.setAppBadge(n).catch(()=>{}); else if(navigator.clearAppBadge) navigator.clearAppBadge().catch(()=>{});
  }

  /* ================= WIRING ================= */
  window.onProgressChanged = function(){ maybeAwardStreak(); renderStreak(); renderAgenda(); renderProgPanel(); renderJournalBody(); updateBadge(); };
  window.prefillJournal = function(opts){
    jModels = new Set((opts.models||[]).filter(id => byId[id]));
    renderChips();
    const d = $("jDecision");
    if(d && opts.decision) d.value = opts.decision;
    document.querySelector('[data-tab=apply]').click();
    setTimeout(() => { const jr = $("journalRoot"); if(jr) jr.scrollIntoView({behavior:"smooth", block:"start"}); if(d) d.focus(); }, 80);
  };

  const badgeToggle = $("badgeToggle");
  if(badgeToggle){
    if(!("setAppBadge" in navigator)){ badgeToggle.disabled = true; badgeToggle.closest(".sp-toggle").classList.add("unsupported"); }
    badgeToggle.checked = badgePref();
    badgeToggle.addEventListener("change", async () => {
      if(badgeToggle.checked){
        try{ if("Notification" in window && Notification.permission==="default") await Notification.requestPermission(); }catch(e){}
        sSet("lattice_badge","on");
      } else sSet("lattice_badge","off");
      updateBadge();
    });
  }
  const exportBtn = $("exportBtn"), importBtn = $("importBtn"), importFile = $("importFile");
  if(exportBtn) exportBtn.addEventListener("click", doExport);
  if(importBtn && importFile){ importBtn.addEventListener("click", () => importFile.click()); importFile.addEventListener("change", () => { if(importFile.files[0]) doImport(importFile.files[0]); importFile.value=""; }); }
  document.addEventListener("visibilitychange", () => { if(!document.hidden){ updateBadge(); renderStreak(); renderAgenda(); } });

  maybeAwardStreak();
  renderStreak(); renderAgenda(); renderProgPanel(); renderJournal(); updateBadge();
})();

/* ================= PWA ================= */
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("sw.js"));
}
