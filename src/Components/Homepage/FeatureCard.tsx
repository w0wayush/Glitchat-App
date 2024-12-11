import { IconType } from "react-icons";

export const FeatureCard = ({
  icon: Icon,
  title,
  subtitle,
}: {
  icon: IconType;
  title: string;
  subtitle: string;
}) => (
  <div className="group relative w-full max-w-2xl rounded-lg bg-pink-400/30 p-6 hover:bg-pink-300 transition-all duration-300 cursor-pointer m-2">
    <div className="flex items-start justify-between">
      <div className="flex items-center gap-4">
        <div className="rounded-lg p-2">
          <Icon className="h-6 w-6 text-pink-900" />
        </div>
        <div>
          <h3 className="font-mono text-lg font-medium text-pink-950">
            {title}
          </h3>
          <p className="font-mono text-sm text-pink-800">{subtitle}</p>
        </div>
      </div>
      <div className="text-pink-900">
        <svg
          className="h-5 w-5 transform transition-transform group-hover:translate-x-1"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </div>
    </div>
  </div>
);
