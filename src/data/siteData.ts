export const siteMeta = {
	title: 'Minjie Ding',
	description:
		"Minjie Ding's personal academic website featuring research on macroeconomics, housing markets, monetary policy, and economic heterogeneity.",
};

export const profile = {
	name: 'Minjie Ding',
	tagline:
		'I am a researcher whose work focuses on macroeconomics and housing markets, drawing on tools from statistics and computer science.',
	email: 'adingminjie [at] 163.com',
	location: 'China',
	avatarSrc: '/avatar.png',
	avatarAlt: 'Portrait of Minjie Ding',
};

export const navigationItems = [
	{ href: '/', label: 'Home' },
	{ href: '/research', label: 'Research' },
	{ href: '/education', label: 'Education' },
	{ href: '/projects', label: 'Projects' },
	{ href: '/teaching', label: 'Teaching' },
	{ href: '/industry', label: 'Industry' },
	{ href: '/miscellaneous', label: 'Miscellaneous' },
];

export const sectionCards = [
	{
		href: '/research',
		kicker: 'Research',
		title: 'Economic heterogeneity, housing markets, and monetary policy',
		description:
			'Paper summaries, the current research framework, and the main empirical and theoretical questions driving the agenda.',
	},
	{
		href: '/education',
		kicker: 'Education',
		title: 'Training across economics, finance, statistics, and computer science',
		description:
			'Academic background and degree history, separated from the homepage so the site no longer reads like a single long CV.',
	},
	{
		href: '/projects',
		kicker: 'Projects',
		title: 'Research infrastructure, data pipelines, and AI tools',
		description:
			'Project pages for the code, datasets, and systems that support the empirical workflow.',
	},
	{
		href: '/teaching',
		kicker: 'Teaching',
		title: 'Courses and instructional work',
		description: 'Teaching assistant experience grouped by institution and course.',
	},
	{
		href: '/industry',
		kicker: 'Industry',
		title: 'Research and finance experience outside academia',
		description: 'Professional background across macro research, equity analysis, and audit work.',
	},
	{
		href: '/miscellaneous',
		kicker: 'Miscellaneous',
		title: 'Volunteer work, athletics, and personal interests',
		description: 'Everything that belongs on the site but not on the home page.',
	},
];

export const researchAreas = [
	{
		id: 'research-family-mpc',
		shortTitle: 'MPC heterogeneity among households with asset threshold',
		title: 'Optimal Consumption under Asset Thresholds: Evidence and a Threshold HANK Model',
		description:
			'Uses Chinese household data and a HANK framework to study how housing, marriage, hukou, and education thresholds reshape consumption, saving, and monetary policy transmission.',
		items: [
			'Estimates household MPC from CFPS data and finds a U-shaped pattern over income and assets rather than a monotonic decline',
			'Uses cross-city down-payment policy variation in DID and DDD designs to identify the consumption effects of tighter thresholds',
			'Builds a threshold HANK model in which near-threshold households save more aggressively, weakening immediate stimulus but making monetary and fiscal effects more persistent over time',
		],
	},
	{
		id: 'research-courier-mpc',
		shortTitle: 'MPC heterogeneity among food delivery riders',
		title: 'Target Saving and MPC among Food Delivery Riders',
		description:
			'Uses original survey data on food delivery riders to study how time preference (patience), liquidity stress, and marriage-related target saving jointly shape consumption behavior.',
		items: [
			'Constructs core measures including discount factors, temporary MPC, persistent MPC, and daily MPC from questionnaires',
			'Finds that financial fragility raises MPC, but low-asset and impatient riders do not necessarily consume more',
			'Explains low spending among target savers through a dynamic model of marriage-related saving pressure and counterfactual relief',
		],
	},
	{
		id: 'research-housing-monetary',
		shortTitle: 'Housing Market Heterogeneity',
		title: 'U.S. Monetary Surprises, China’s Stratified Housing Market and Asset-Reallocation Channel',
		description:
			'Examines how unexpected U.S. monetary tightening transmits into China’s existing-home market across cities, size bands, and price tiers.',
		items: [
			'Combines Anjuke listing prices, Lianjia transactions, and smooth local projections on high-frequency U.S. surprises',
			'Finds larger price declines in bigger cities and in cities with deeper financial markets',
			'Finds that larger housing units experience faster price declines and faster sales',
		],
	},
	{
		id: 'research-country-monetary',
		shortTitle: 'Country Heterogeneity',
		title: 'Cross-Country Heterogeneity in the International Transmission of U.S. Monetary Policy',
		description:
			'Studies why U.S. monetary policy shocks generate different interest-rate, industrial-production, and exchange-rate responses across countries.',
		items: [
			'Uses country-level monthly VARs with high-frequency policy news shocks to estimate domestic impulse responses',
			'Links response heterogeneity to financial development, inequality, capital-account openness, exchange-rate regimes, and income levels',
			'Shows that financial structure and distribution shape both the magnitude of spillovers and the co-movement of rates and output',
		],
	},
	{
		id: 'research-balassa-samuelson',
		shortTitle: 'Balassa-Samuelson Puzzle in China',
		title: 'Distribution Costs and the Formation Mechanism of Chinese Interprovincial Price Differences',
		description:
			'Places distribution costs inside the Balassa-Samuelson framework to explain both retail law-of-one-price deviations and unstable price-level transmission across provinces.',
		items: [
			'Tests the Penn effect, the BS core channel, and inflation decomposition within one unified empirical framework',
			'Shows that distribution costs significantly explain tradable retail-price deviations across provinces',
			'Explains why relative productivity can move sectoral relative prices without stably passing through to the overall price level',
		],
	},
];

export const researchFramework = [
	{
		title: 'Economic Heterogeneity',
		description:
			'How differences across households and countries reshape consumption behavior and monetary policy transmission.',
		accentClass: 'framework-track-olive',
		nodes: [
			{ label: 'MPC heterogeneity among households with asset threshold', href: '#research-family-mpc' },
			{ label: 'MPC heterogeneity among food delivery riders', href: '#research-courier-mpc' },
			{ label: 'Housing-market responses to U.S. monetary policy shocks', href: '#research-housing-monetary' },
			{ label: 'Cross-country heterogeneity in U.S. monetary policy spillovers', href: '#research-country-monetary' },
		],
	},
	{
		title: 'Theory-Empirics Gap',
		description:
			'Where standard theory fails to account for the data, necessitating the development of new mechanisms.',
		accentClass: 'framework-track-rose',
		nodes: [
			{ label: 'Why is MPC higher among asset-rich households?', href: '#research-family-mpc' },
			{ label: 'Why are less patient riders associated with lower MPC?', href: '#research-courier-mpc' },
			{ label: 'Why does Balassa-Samuelson fail across Chinese provinces?', href: '#research-balassa-samuelson' },
		],
	},
];

export const projectAreas = [
	{
		tag: 'AI Platform',
		title: 'MeShare: China Macroeconomic Data Library',
		description:
			'A Python library for China macroeconomic data, designed as a streamlined fork of AKShare and paired with bilingual documentation for data lookup, charts, and macro analysis workflows.',
		imageSrc: '/project-meshare.svg',
		imageAlt: 'Illustration for the MeShare China macroeconomic data library project',
		links: [
			{ href: 'https://github.com/MinjieDING/meshare', label: 'View on GitHub' },
			{ href: 'https://www.meshare.xyz/en/index.html', label: 'Documentation' },
		],
		items: [
			'Focused China macro data APIs spanning GDP, prices, PMI, finance, rates, bonds, and FX',
			'Handbook and datasets organized by macro workflow from GDP to policy tracking',
			'Bilingual docs, chart galleries, and an agent advisor built on the same pipeline',
		],
	},
	{
		tag: 'AI Skill',
		title: 'Macro Desk: Skill for Industry Macro Research Drafting',
		description:
			'An AI skill for automatically drafting macro research notes around China data releases. It helps structure previews, event-driven commentaries, thematic briefs, and weekly macro reports with a repeatable workflow.',
		imageSrc: '/project-macro-desk.svg',
		imageAlt: 'Illustration for the Macro Desk industry macro research drafting skill project',
		links: [
			{ href: 'https://github.com/MinjieDING/macro-desk', label: 'View on GitHub' },
			{ href: 'https://www.macroskill.xyz/', label: 'Documentation' },
			{ href: '/macro-desk-calendar.svg', label: 'Calendar' },
			{ href: 'https://dingminjie.substack.com/p/china-macro-strategies-twenty-cases', label: 'Narrative' },
		],
		items: [
			'Automates first drafts for previews, commentaries, briefs, and weekly reports',
			'Follows macro release calendars and reusable research templates',
			'Documentation showcases sample outputs generated by the skill',
		],
	},
	{
		tag: 'Data',
		title: 'Lianjia Housing Transaction Data Pipeline',
		description:
			'A Selenium-based data collection pipeline for Lianjia housing transaction records, designed for housing market research. The project supports batch scraping by district, checkpoint resume, CAPTCHA-aware interruption handling, and structured Excel export.',
		imageSrc: '/project-lianjia.svg',
		imageAlt: 'Illustration for the Lianjia housing transaction data pipeline project',
		links: [{ href: 'https://github.com/MinjieDING/Lianjia', label: 'View on GitHub' }],
		items: [
			'Housing transaction data collection for Lianjia city sites using Guangzhou as the working example',
			'Checkpoint resume and partial-save workflow for long-running scraping tasks',
			'Structured export for downstream housing market analysis and research use',
			'For more data from other cities and longer periods, please contact me.',
		],
	},
	{
		tag: 'Data',
		title: 'Discount Rates and MPC among Food Delivery Couriers',
		description:
			'A survey-based project on intertemporal choice and consumption behavior among food delivery couriers. The study asks how large discount rates and marginal propensities to consume are in practice and what personal and economic characteristics shape them.',
		imageSrc: '/project-courier-survey.svg',
		imageAlt: 'Illustration for the food delivery courier survey project',
		links: [{ href: '/project-courier-survey-summary', label: 'Descriptive Statistics' }],
		items: [
			'Estimates discount rates from a large-scale survey of food delivery riders',
			'Measures MPC and links it to rider characteristics and economic conditions',
			'Based on two survey waves covering roughly 40,000 respondents',
		],
	},
];

export const educationItems = [
	"Master's degree in Computer Science, University of Colorado Boulder",
	"Master's degree in Economics, Hong Kong University of Science and Technology (HKUST)",
	"Master's degree in Finance, Peking University",
	"Bachelor's degree in Finance, Guanghua School of Management, Peking University",
	'Bachelor Minor in Statistics, School of Mathematical Sciences, Peking University',
	'High School Diploma in Science, Suzhou & Haian High School of Jiangsu Province',
];

export const teachingGroups = [
	{
		institution: 'HKUST',
		items: [
			{
				text: 'Monetary Economics (ECON 5360) - ',
				linkLabel: 'TA Notes',
				href: 'https://5360tutorial.vercel.app/0_Tutorial_Introduction.html',
			},
			{ text: 'Banking and Financial Intermediation (ECON 5350)' },
			{ text: 'Macroeconomics (ECON 2123)' },
			{ text: 'International Macroeconomics and Finance (ECON 4374)' },
			{ text: 'Money and Banking (ECON 4334)' },
			{ text: 'What Economics Tells Us (ECON 1222)' },
		],
	},
	{
		institution: 'Peking University',
		items: [
			{ text: 'Intermediate Macroeconomics (NSD)' },
			{ text: 'Financial Economics (GSM)' },
			{ text: 'Financial Derivatives (GSM)' },
		],
	},
];

export const industryExperiences = [
	{
		company: 'Vanke Group',
		location: 'Beijing & Shenzhen',
		roles: [
			{
				title: 'Economist',
				period: '2019--2021',
				bullets: [
					"Provide research support to Vanke's management team.",
					'Communicate with government departments related to macroeconomics and real estate.',
				],
			},
		],
	},
	{
		company: 'China International Capital Corporation (CICC)',
		location: 'Beijing',
		roles: [
			{
				title: 'Equity Analyst, Research Department',
				period: '2017--2019',
			},
			{
				title: 'Intern, Research Department',
				period: '2015--2016',
			},
		],
		bullets: [
			{
				text: 'Cover stocks in TMT industry, with a focus on media, movie, and TV drama industry. ',
				linkLabel: 'Report',
				href: 'https://mp.weixin.qq.com/s/HfG1sErvvKCBJLe0NqmhmA',
			},
			{
				text: 'Then internally transferred to cover macroeconomics. ',
				linkLabel: 'Report',
				href: 'https://mp.weixin.qq.com/s/ojXzUaOJ8cs2DCFBFP4c9g',
			},
		],
	},
	{
		company: 'Deloitte China',
		location: 'Beijing',
		roles: [
			{
				title: 'Intern, Audit Department',
				period: '2014--2015',
				bullets: ['Conduct annual audit service for listed companies in the Internet industry.'],
			},
		],
	},
];

export const otherGroups = [
	{
		title: 'Volunteer',
		items: [
			'I am a member of Beijing Volunteer Service Federation (BVF) since 2012.',
			"I was volunteer for Haidian Marathon, Zhufang Migrant Workers' Children School, etc.",
		],
	},
	{
		title: 'Hobbies',
		items: [
			"I am an amateur sprinter, specializing in 400m and 400m hurdles, with personal bests of 53.43 and 66.30 seconds, respectively.",
			{
				text: "Several gold medals were earned in men's 400m, 200m, 4*100m relay race at the intramural athletics meet held by Peking University in 2011-",
				secondaryLinkLabel: '2016',
				secondaryHref: 'https://mp.weixin.qq.com/s/FOnbi4fMHZsjb5faJ8QG1w',
				middleText: ', by HKUST in ',
				linkLabel: '2023',
				href: 'https://hkustsportsassocia.wixsite.com/su-sport/records',
				suffix: '. And a silver medal in 400m at Beijing Capital Inter-University Autumn Athletic Meet in 2013.',
			},
			'Also, I am a Track & Field Coach and Level-2 Track & Field Judge certified by the Chinese Athletic Association. I hope my knowledge in physical training can help people stay healthy and energetic.',
		],
	},
];