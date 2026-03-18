import Divider from "@/app/components/common/Divider";

export default function DividerDemo() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1d1d1d] py-24">
      <div className="container max-w-6xl mx-auto px-4 space-y-16">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Divider Component
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Flexible divider with centered text
          </p>
        </div>

        {/* Example 1: Default */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Default Divider
          </h2>
          <Divider>What Is EggMpire Token (EGGS)</Divider>
        </div>

        {/* Example 2: No Text */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Simple Line Divider
          </h2>
          <Divider />
        </div>

        {/* Example 3: Large Spacing */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Large Spacing
          </h2>
          <Divider spacing="lg">FEATURES & BENEFITS</Divider>
        </div>

        {/* Example 4: Small Spacing */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Small Spacing
          </h2>
          <Divider spacing="sm">or</Divider>
        </div>

        {/* Example 5: Custom Colors */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Custom Colors
          </h2>
          <Divider
            lineColor="border-blue-400 dark:border-blue-600"
            textColor="text-blue-600 dark:text-blue-400"
          >
            CUSTOM STYLED
          </Divider>
        </div>

        {/* Example 6: In Context */}
        <div className="space-y-6 bg-gray-50 dark:bg-[#2a2a2a] p-8 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            In Context
          </h2>
          <p className="text-gray-700 dark:text-gray-300">
            EggMpire is a decentralized token built on blockchain technology.
            With our innovative approach to DeFi, we&apos;re revolutionizing the
            way people interact with digital finance.
          </p>

          <Divider>Key Benefits</Divider>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-primary dark:text-blue-400 font-bold">
                ✓
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Fast and secure transactions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary dark:text-blue-400 font-bold">
                ✓
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Low transaction fees
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary dark:text-blue-400 font-bold">
                ✓
              </span>
              <span className="text-gray-700 dark:text-gray-300">
                Community governed
              </span>
            </li>
          </ul>

          <Divider>Get Started</Divider>

          <p className="text-gray-700 dark:text-gray-300">
            Join thousands of users who are already part of the EggMpire
            ecosystem.
          </p>
        </div>
      </div>
    </div>
  );
}

