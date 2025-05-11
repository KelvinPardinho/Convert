import { Link } from 'react-router-dom';

interface BlogCardProps {
  title: string;
  excerpt: string;
  slug: string;
  coverImage: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogCard = ({ title, excerpt, slug, coverImage, date, category, readTime }: BlogCardProps) => {
  return (
    <article className="card group hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
      <Link to={`/blog/${slug}`} className="block overflow-hidden">
        <img
          src={coverImage}
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{category}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <Link to={`/blog/${slug}`}>
          <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
        </Link>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{excerpt}</p>
        <Link
          to={`/blog/${slug}`}
          className="text-blue-600 text-sm font-medium flex items-center self-start"
        >
          Ler mais
          <svg
            className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
};

export default BlogCard;