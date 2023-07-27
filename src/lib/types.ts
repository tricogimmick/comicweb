export type MagazineType = {
	id: string,
	title: string,
	publisher: string|null,
	description: string|null
}

export type IssueType = {
	id: string,
	magazine_id: string,
	title: string,
	cover_url: string | null,
	toc_url: string | null,
	description: string | null
}

export type ContentType = {
    issue_id: string,
    order_no: number,
    title_id: number,
    page_no: number,
    content_type: number,
    color: number | null,
    serialization_status: number | null,
    description: string | null,
}

export type TitleType = {
    id: number,
    title: string,
    content_type: number,
    publication: string,
    completion: number,
    description: string
}

export type AuthorType = {
    id: number,
    name: string,
    kana: string,
    author_type: string,
    description: string
}
