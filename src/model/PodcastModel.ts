interface AuthorName {
  label: string;
}

interface AuthorUri {
  label: string;
}

interface Author {
  name: AuthorName;
  uri: AuthorUri;
}

interface Updated {
  label: string;
}

interface Rights {
  label: string;
}

interface Title {
  label: string;
}

interface Icon {
  label: string;
}

interface LinkAttributes {
  rel: string;
  type?: string;
  href: string;
}

interface Link {
  attributes: LinkAttributes;
}

interface Id {
  label: string;
}

interface EntryName {
  label: string;
}

interface EntryImageAttributes {
  height: string;
}

interface EntryImage {
  label: string;
  attributes: EntryImageAttributes;
}

interface Summary {
  label: string;
}

interface PriceAttributes {
  amount: string;
  currency: string;
}

interface Price {
  label: string;
  attributes: PriceAttributes;
}

interface ContentTypeAttributes {
  term: string;
  label: string;
}

interface ContentType {
  attributes: ContentTypeAttributes;
}

interface EntryRights {
  label: string;
}

interface EntryTitle {
  label: string;
}

interface EntryLinkAttributes {
  rel: string;
  type: string;
  href: string;
}

interface EntryLink {
  attributes: EntryLinkAttributes;
}

interface EntryIdAttributes {
  'im:id': string;
}

interface EntryId {
  label: string;
  attributes: EntryIdAttributes;
}

interface ArtistAttributes {
  href: string;
}

interface Artist {
  label: string;
  attributes: ArtistAttributes;
}

interface CategoryAttributes {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}

interface Category {
  attributes: CategoryAttributes;
}

interface ReleaseDateAttributes {
  label: string;
}

interface ReleaseDate {
  label: string;
  attributes: ReleaseDateAttributes;
}

export interface Entry {
  'im:name': EntryName;
  'im:image': EntryImage[];
  summary: Summary;
  'im:price': Price;
  'im:contentType': ContentType;
  rights: EntryRights;
  title: EntryTitle;
  link: EntryLink;
  id: EntryId;
  'im:artist': Artist;
  category: Category;
  'im:releaseDate': ReleaseDate;
}

interface Feed {
  author: Author;
  entry: Entry[];
  updated: Updated;
  rights: Rights;
  title: Title;
  icon: Icon;
  link: Link[];
  id: Id;
}

export default interface Podcast {
  feed: Feed;
}
