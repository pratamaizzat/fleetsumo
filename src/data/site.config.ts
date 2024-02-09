interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'Fleetsumo', // Site author
	title: 'Fleetsumo', // Site title.
	description: 'Fleet Management System Pertama di Indonesia', // Description to display in the meta tags
	lang: 'en',
	ogLocale: 'en',
	shareMessage: 'Bagikan', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
