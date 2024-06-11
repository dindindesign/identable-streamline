import {
  AdjustmentsVerticalIcon,
  CalendarIcon,
  ChatBubbleLeftRightIcon,
  ClockIcon,
  CogIcon,
  PresentationChartLineIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const features = [
  {
    name: "Smart Scheduling",
    description:
      "Schedule posts in advance for optimal timing across all your channels",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Intelligent Automation",
    description:
      "Let Identable's AI handle the heavy lifting of content curation and posting",
    href: "#",
    icon: CogIcon,
  },
  {
    name: "Seamless Workflows",
    description:
      "Streamline your social media processes and eliminate manual tasks",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
];

export default function SectionThree() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Streamline Your Social Media Workflow
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Identable&apos;s all-in-one platform simplifies your social
                media management, empowering you to create, schedule, and
                optimize content with ease.
              </p>
            </div>
            <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="/images/streamline-hero.jpg"
                className="object-cover object-center"
                alt="Identable Streamline"
                height={320}
                width={480}
              />
            </div>
          </div>
          <div className="mt-16 sm:mt-20 lg:mt-24">
            <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="mt-16 flex flex-col gap-8 sm:mt-20 lg:mt-24 lg:flex-col-reverse">
            <h2 className="text-2xl lg:text-center font-bold tracking-tight text-gray-900 sm:text-3xl">
              Real-Time Performance Tracking
            </h2>
            <div className="flex max-w-2xl flex-col gap-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-end">
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-50 p-8 sm:w-3/4 sm:max-w-md sm:flex-row-reverse sm:items-end lg:w-72 lg:max-w-none lg:flex-none lg:flex-col lg:items-start">
                <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
                  24/7
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-gray-900">
                    24/7 Monitoring
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-600">
                    Track your social media performance round the clock
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-gray-900 p-8 sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-sm lg:flex-auto lg:flex-col lg:items-start lg:gap-y-44">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  250K
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Real-Time Insights
                  </p>
                  <p className="mt-2 text-base leading-7 text-gray-400">
                    Access valuable data and analytics in real-time
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-blue-600 p-8 sm:w-11/12 sm:max-w-xl sm:flex-row-reverse sm:items-end lg:w-full lg:max-w-none lg:flex-auto lg:flex-col lg:items-start lg:gap-y-28">
                <p className="flex-none text-3xl font-bold tracking-tight text-white">
                  95%
                </p>
                <div className="sm:w-80 sm:shrink lg:w-auto lg:flex-none">
                  <p className="text-lg font-semibold tracking-tight text-white">
                    Quick Optimisation
                  </p>
                  <p className="mt-2 text-base leading-7 text-blue-200">
                    Quickly identify and address underperforming content
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
