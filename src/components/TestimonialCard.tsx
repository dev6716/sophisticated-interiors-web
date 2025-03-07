
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image?: string;
}

const TestimonialCard = ({ name, role, content, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white p-8 rounded shadow-sm">
      <div className="space-y-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="36"
          className="fill-ks-yellow mb-4"
          viewBox="0 0 45 36"
        >
          <path
            d="M13.415.001C6.07 5.185.887 13.681.887 23.041c0 7.632 4.608 12.096 9.936 12.096 5.04 0 8.784-4.032 8.784-8.784 0-4.752-3.312-8.208-7.632-8.208-.864 0-2.016.144-2.304.288.72-4.896 5.328-10.656 9.936-13.536L13.415.001zm24.768 0c-7.2 5.184-12.384 13.68-12.384 23.04 0 7.632 4.608 12.096 9.936 12.096 4.896 0 8.784-4.032 8.784-8.784 0-4.752-3.456-8.208-7.776-8.208-.864 0-1.872.144-2.16.288.72-4.896 5.184-10.656 9.792-13.536L38.183.001z"
          />
        </svg>
        <p className="text-base leading-relaxed">
          {content}
        </p>
        <div className="flex items-center mt-6">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full mr-4 object-cover"
            />
          ) : (
            <div className="w-12 h-12 rounded-full bg-ks-yellow text-white flex items-center justify-center mr-4">
              {name.charAt(0)}
            </div>
          )}
          <div>
            <h4 className="font-medium">{name}</h4>
            <p className="text-sm text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
