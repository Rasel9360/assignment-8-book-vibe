const Blog = ({ blog }) => {
    const { title, author, date, content, image } = blog;
    return (
        <div className="border-2 p-3 rounded-lg shadow-lg hover:scale-105 hover:border-[#23BE0A]">
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50">
                <img role="presentation" className="object-cover w-full rounded h-52 dark:bg-gray-500" src={image} />
                <div className="p-4 space-y-2">
                    <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline p-font">{title}</h3>
                    <span className="text-xs dark:text-gray-600">{date}</span>
                    <p className="font-bold p-font">Author : {author}</p>
                    <p className="text-justify font-serif">{content}</p>
                </div>
            </a>
        </div>
    );
};

export default Blog;