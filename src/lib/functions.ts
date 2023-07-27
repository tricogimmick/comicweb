import type sqlite3 from 'sqlite3';
import type { MagazineType, IssueType, TitleType, AuthorType } from './types';

export function getAllMagazines(db: sqlite3.Database) {
	return new Promise<MagazineType[]>((ok, ng) => {
		db.all<MagazineType>("SELECT * FROM magazines ORDER BY id", [], (err, rows) => {
			if (err || rows == null) {
				ng(err || "Data nor found");
			} else {
				ok(rows);
			}
		});
	})
}

export function getAllIssues(db: sqlite3.Database) {
	return new Promise<IssueType[]>((ok, ng) => {
		db.all<IssueType>("SELECT * FROM issues ORDER BY id", [] , (err, rows) => {
			if (err || rows == null) {
				ng(err || "Data nor found");
			} else {
				ok(rows);
			}
		});
	})
}

export function getAllTitles(db: sqlite3.Database) {
	return new Promise<TitleType[]>((ok, ng) => {
		db.all<TitleType>("SELECT * FROM titles ORDER BY title", [] , (err, rows) => {
			if (err || rows == null) {
				ng(err || "Data nor found");
			} else {
				ok(rows);
			}
		});
	})
}

export function getAllAuthors(db: sqlite3.Database) {
	return new Promise<AuthorType[]>((ok, ng) => {
		db.all<AuthorType>("SELECT * FROM authors ORDER BY name", [] , (err, rows) => {
			if (err || rows == null) {
				ng(err || "Data nor found");
			} else {
				ok(rows);
			}
		});
	})
}

export function getAuthors(db: sqlite3.Database, titleId: number, authorType: "AUTHOR"|"SCRIPT") {
    return new Promise<AuthorType[]>((ok, ng) => {
        db.all<AuthorType>(
            "SELECT a.* FROM title_authors as r JOIN authors as a ON a.id = r.author_id WHERE r.title_id = ? AND author_type = ?",
            [titleId, authorType],
            (err, rows) => {
                if (err) {
                    ng(err);
                } else {
                    ok(rows || []);
                }
            }
        )
    });
}

export function getMagazine(db: sqlite3.Database, id: string) {
	return new Promise<MagazineType>((ok, ng) => {
		db.get<MagazineType>("SELECT * FROM magazines WHERE id = ?", [id], (err, row) => {
			if (err || row == null) {
				ng(err || "Data not found");
			} else {
				ok(row);
			}
		});
	})
}

export function getContentType(contentType: number|null) {
    if (contentType == null) {
        return "";
    }
    switch (contentType) {
        case 0: return "読み切り";
        case 1: return "連載";
        case 2: return "出張掲載";
        default: return "";
    }
}