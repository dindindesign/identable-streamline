import {
  BoltIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  DevicePhoneMobileIcon,
  PencilIcon,
  SparklesIcon,
  SquaresPlusIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "One-Click Content",
    description:
      "Easily generate your social media content and scheduled your months worth of calendar with Identable's platform",
    icon: BoltIcon,
  },
  {
    name: "Cross-Platform Publishing",
    description:
      "Publish your content simultaneously across all major social networks",
    icon: DevicePhoneMobileIcon,
  },
  {
    name: "Unified Analytics",
    description:
      "Track performance metrics and audience insights from a single, centralised dashboard",
    icon: ChartBarIcon,
  },
  {
    name: "Effortless Collaboration",
    description:
      "Invite team members and clients to review, approve, and contribute content",
    icon: UserGroupIcon,
  },
];

const features1 = [
  {
    name: "Manage all your social channels from a single, intuitive interface",
    icon: CheckCircleIcon,
  },
  {
    name: "Streamline content creation, scheduling, and performance tracking",
    icon: CheckCircleIcon,
  },
  {
    name: "Involve your team in every step of the social media process",
    icon: CheckCircleIcon,
  },
  {
    name: "Receive personalized recommendations to optimize your social strategy",
    icon: CheckCircleIcon,
  },
];

export default function SectionFour() {
  return (
    <div className="bg-blue-600">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-10 lg:grid-cols-2">
            <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/images/streamline-feature-4.jpg"
                className="object-cover object-center"
                alt="Identable Streamline"
                height={320}
                width={480}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Streamline Your Social Media Workflow
              </h2>
              <dl className="mt-8 text-base leading-7 text-gray-300 space-y-4">
                {features1.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline text-white">
                      <feature.icon
                        className="absolute left-1 top-1 h-5 w-5 text-white"
                        aria-hidden="true"
                      />
                      {feature.name}
                    </dt>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Seamless Integration with Social Platforms
            </h2>
            <dl className="mt-8 grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-white">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-white">
                      <feature.icon
                        className="h-6 w-6 text-blue-600"
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
        </div>
      </div>
    </div>
  );
}
