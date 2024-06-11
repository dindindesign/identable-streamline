import {
  CheckBadgeIcon,
  PencilIcon,
  SparklesIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "Unique Branding",
    description:
      "Tailor templates to reflect your brand identity and visual style",
    icon: CheckBadgeIcon,
  },
  {
    name: "Flexible Layouts",
    description: "Adjust the structure and format to suit your content needs",
    icon: SquaresPlusIcon,
  },
  {
    name: "Streamlined Creation",
    description:
      "Quickly build compelling posts with pre-designed, customisable templates",
    icon: PencilIcon,
  },
  {
    name: "Consistent Aesthetics",
    description:
      "Maintain a cohesive look and feel across your social channels",
    icon: SparklesIcon,
  },
];

const features3 = [
  {
    name: "Audience Analytics",
    description:
      "Identable's AI-powered analytics provide deep insights into your audience's preferences and behaviors.",
    imageUrl: "/images/audience-analytics.jpg",
  },
  {
    name: "Personalized Content",
    description:
      "Identable generates customized, high-performing posts tailored to your unique audience.",
    imageUrl: "/images/personalized-content.jpg",
  },
  {
    name: "Optimized Performance",
    description:
      "Maximize visibility and drive meaningful interactions across all your social channels.",
    imageUrl: "/images/optimized-performance.jpg",
  },
];

export default function SectionTwo() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-10 lg:grid-cols-2">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/images/streamline-feature.jpg"
                className="object-cover object-center"
                alt="Identable Streamline"
                height={320}
                width={480}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Maximise Visibility and Engagement Across Channels
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Optimise content distribution across social media for maximum
                reach. Tailor content to resonate with your target audience on
                each platform. Leverage interactive features to drive higher
                engagement.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  Try Identable
                </Link>
                <Link
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Customisable Content Templates
            </h2>
            <dl className="mt-8 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-300">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Intelligent Content Optimisation
            </h2>
            <dl className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-3">
              {features3.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <Image
                      className="mb-6 aspect-[3/2] w-full rounded-2xl object-cover"
                      src={feature.imageUrl}
                      alt={feature.name}
                      height={200}
                      width={300}
                    />
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Powerful SaaS Platform for Businesses
            </h2>
            <dl className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-white">
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
