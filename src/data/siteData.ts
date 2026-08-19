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
		description: '',
		items: [
			'Unlike standard theory, Chinese households’ propensity to consume does not decline monotonically with wealth; instead, it falls sharply in the early stage of wealth accumulation.',
			'Using household survey data and DID/DDD designs, I identify the core mechanism as a deep bundling of household utility with housing thresholds, and I develop a Threshold HANK model to draw policy implications.',
			'Conventional consumption policy would subsidize those with the strongest propensity to consume; I argue instead that more attention should be paid to households whose consumption has been suppressed by social mechanisms. As reliance on land finance recedes, we should loosen the link between household utility and housing—for example, by equalizing public-service rights for renters and homeowners. Counterfactual experiments show that such reforms can unlock substantial consumption without fiscal stimulus.',
			'Explanations of weak monetary transmission often stress the supply side, arguing that credit is overly allocated to firms; I focus on the demand side, emphasizing that because many life entitlements are tied to housing, even when credit reaches households, some families use it for aggressive saving for future house rather than consumption.',
		],
	},
	{
		id: 'research-courier-mpc',
		shortTitle: 'MPC heterogeneity among food delivery riders',
		title: 'Target Saving and non-monotonic MPC: Evidence from Food Delivery Riders',
		description: '',
		items: [
			'I joined Meituan as a food-delivery rider since December 2025, and collected consumption data on frontline food-delivery riders through offline interviews and online surveys. I obtained demographic, financial, discount-factor, and propensity-to-consume data from more than 8,000 riders.',
			'The consumption behavior of China’s hand-to-mouth, as represented by food-delivery riders, differs markedly from standard economic theory. In particular, riders with lower discount factors (less patient) and with less wealth also have a low propensity to consume in practice, rather than the higher propensity that theory would predict.',
			'Survey evidence shows that having a saving target is the core reason for this anomaly. Unmarried riders have the lowest propensity to consume because they are saving for marriage. Married riders at the same wealth level, by contrast, have a higher propensity to consume, consistent with theory.',
			'Consumption policy typically targets subsidies at those with the highest propensity to consume, but groups who suppress consumption in order to save also deserve attention. Counterfactual experiments show that weakening the link between marriage and saving can unlock substantial consumption potential without fiscal subsidies.',
		],
	},
	{
		id: 'research-housing-monetary',
		shortTitle: 'Housing Market Heterogeneity',
		title: 'U.S. Monetary Surprises, China’s Stratified Housing Market and Asset-Reallocation Channel',
		description: '',
		items: [
			'People usually look only at city-wide house-price trends, but homes differ in size, location, and property rights, and prices of different types of housing can move in different ways. I collected nearly 3 million existing-home transactions from Lianjia and Anjuke across more than 40 cities to study these heterogeneous price trends.',
			'Using local projections, I study how U.S. monetary policy shocks affect house prices in China. After a U.S. tightening shock, prices fall more in cities with larger economies and a higher share of finance. Larger homes also see faster price declines, and their time to sale shortens markedly.',
		],
	},
	{
		id: 'research-country-monetary',
		shortTitle: 'Country Heterogeneity',
		title: 'Cross-Country Heterogeneity in the International Transmission of U.S. Monetary Policy',
		description: '',
		items: [
			'How do U.S. monetary tightening shocks affect other countries? The conventional view emphasizes the interest-rate channel: other countries follow with rate hikes, and output falls. Signaling theory instead argues that U.S. tightening conveys news of a stronger U.S. economy, which would raise output abroad.',
			'Using VAR models and data for nearly 150 countries from 1995 to 2025, I find that in financially underdeveloped countries, the signaling view holds: both interest rates and output rise significantly. Inequality also shapes the output response: more unequal countries exhibit a weaker response.',
			'The existing literature mainly studies U.S. monetary spillovers under different exchange-rate regimes. After controlling for exchange-rate regime, I further examine financial development, equality indices, and related factors.',
		],
	},
	{
		id: 'research-balassa-samuelson',
		shortTitle: 'Balassa-Samuelson Puzzle in China',
		title: 'Distribution Costs and the Formation Mechanism of Chinese Interprovincial Price Differences',
		description: '',
		items: [
			'This paper uses the Balassa-Samuelson framework to explain inflation differences across Chinese provinces, but finds that the relationship does not hold stably. Provinces with faster productivity growth in tradables do not necessarily see faster growth in the overall price level.',
			'In theory, tradable prices should be similar across provinces. In China, however, large cross-province differences in land rents and labor costs also drive differences in tradable prices. After controlling for these distribution costs, the Balassa-Samuelson framework holds across provinces.',
			'This study incorporates distribution costs into tradable prices and offers a perspective for refining the Balassa-Samuelson framework.',
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
		description: '',
		imageSrc: '/project-meshare.svg',
		imageAlt: 'Illustration for the MeShare China macroeconomic data library project',
		links: [
			{ href: 'https://github.com/MinjieDING/meshare', label: 'View on GitHub' },
			{ href: 'https://www.meshare.xyz/en/index.html', label: 'Documentation' },
		],
		items: [
			"A Python library for China's macroeconomic data, featuring bilingual documentation in Chinese and English for data querying, automated charting, and assisted analysis.",
			"Compared to common API, MeShare focus more on China's macroeconomic data, covering GDP, prices, PMI, finance, interest rates, bonds, and foreign exchange.",
		],
	},
	{
		tag: 'AI Skill',
		title: 'Macro Desk: Skill for Industry Macro Research Drafting',
		description: '',
		imageSrc: '/project-macro-desk.svg',
		imageAlt: 'Illustration for the Macro Desk industry macro research drafting skill project',
		links: [
			{ href: 'https://github.com/MinjieDING/macro-desk', label: 'View on GitHub' },
			{ href: 'https://www.macroskill.xyz/', label: 'Documentation' },
			{ href: '/macro-desk-calendar.svg', label: 'Calendar' },
			{ href: 'https://dingminjie.substack.com/p/china-macro-strategies-twenty-cases', label: 'Narrative' },
		],
		items: [
			"An AI skill for automatically drafting macro research reports around China's data releases, covering outlooks, event commentaries, thematic briefings, and macroeconomic weekly reports.",
			'Sample reports are included in the project documentation.',
		],
	},
	{
		tag: 'Code',
		title: 'Macro Quant Strategies',
		description: '',
		imageSrc: '/project-macro-quant.svg',
		imageAlt: 'Illustration for the Macro Quant Strategies notes and code project',
		links: [
			{ href: 'https://github.com/MinjieDING/macroquant', label: 'View on GitHub' },
			{ href: 'https://minjieding.github.io/macroquant/en/02.html', label: 'Documentation' },
		],
		items: [
			'Notes and code on traditional factor quantitative investing and emerging macro quantitative investing.',
			'Starting from CAPM and classical style factors, progressively expanding to a broader factor library and macro allocation strategies.',
		],
	},
	{
		tag: 'Code',
		title: 'Monetary Economics and Heterogeneous Agent Model',
		description: '',
		imageSrc: '/project-5360tutorial.svg',
		imageAlt: 'Illustration for the Monetary Economics and Heterogeneous Agent Model tutorial project',
		links: [
			{ href: 'https://github.com/MinjieDING/5360tutorial', label: 'View on GitHub' },
			{ href: 'https://5360tutorial.vercel.app/0_Tutorial_Introduction.html', label: 'Tutorial Notes' },
		],
		items: [
			'Notes and code on monetary economics, covering RBC models, New Keynesian frameworks, numerical methods, the Aiyagari model, and HA models.',
			'RBC models are implemented using MATLAB, Dynare, Python, and Julia. Other models are implemented primarily in MATLAB.',
		],
	},
	{
		tag: 'Data',
		title: 'Lianjia Housing Transaction Data Pipeline',
		description: '',
		imageSrc: '/project-lianjia.svg',
		imageAlt: 'Illustration for the Lianjia housing transaction data pipeline project',
		links: [{ href: 'https://github.com/MinjieDING/Lianjia', label: 'View on GitHub' }],
		items: [
			'A Selenium-based web scraper for Lianjia transaction data, supporting batch scraping by district, resumable downloads, and CAPTCHA interruption handling.',
			"Lianjia's publicly listed transactions are dynamically adjusted, causing historical listings to appear and disappear inconsistently across different scraping times.",
			'An account gets banned after scraping approximately 15,000 items on average, making the data acquisition cost relatively high. Like-minded peers are welcome to collaborate.',
		],
	},
	{
		tag: 'Data',
		title: 'Discount Rates and MPC among Food Delivery Couriers',
		description: '',
		imageSrc: '/project-courier-survey.svg',
		imageAlt: 'Illustration for the food delivery courier survey project',
		links: [{ href: '/project-courier-survey-summary', label: 'Descriptive Statistics' }],
		items: [
			'Collected demographic, financial, discount factor, and consumption propensity data of frontline delivery riders through offline interviews and online questionnaires.',
			'Two rounds of surveys have been completed so far, covering over 30,000 respondents, with a 5 RMB cash reward offered for valid responses, yielding over 8,000 data entries.',
			'This has successfully materialized abstract economic concepts like discount factors and consumption propensities into concrete figures, holding high research value.',
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