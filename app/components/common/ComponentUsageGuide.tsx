import Divider from "@/app/components/common/Divider";

export default function ComponentUsageGuide() {
  return (
    <div className="min-h-screen bg-[#1d1d1d] py-16">
      <div className="container max-w-4xl mx-auto px-4 space-y-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            Divider Component Quick Reference
          </h1>
          <p className="text-lg text-gray-400">Copy & paste ready examples</p>
        </div>

        {/* Quick Examples */}
        <div className="space-y-12">
          {/* Example 1 */}
          <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-xl font-bold text-white">
              #1 Basic Divider with Text
            </h2>
            <div className="bg-[#1d1d1d] p-4 rounded">
              <Divider>Section Title Here</Divider>
            </div>
            <code className="block bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              {`<Divider>Section Title Here</Divider>`}
            </code>
          </div>

          {/* Example 2 */}
          <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-xl font-bold text-white">
              #2 Simple Line (No Text)
            </h2>
            <div className="bg-[#1d1d1d] p-4 rounded">
              <Divider />
            </div>
            <code className="block bg-black text-green-400 p-4 rounded text-sm">
              {`<Divider />`}
            </code>
          </div>

          {/* Example 3 */}
          <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-xl font-bold text-white">
              #3 Small Spacing (Good for "or")
            </h2>
            <div className="bg-[#1d1d1d] p-4 rounded">
              <Divider spacing="sm">or</Divider>
            </div>
            <code className="block bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              {`<Divider spacing="sm">or</Divider>`}
            </code>
          </div>

          {/* Example 4 */}
          <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-xl font-bold text-white">
              #4 Large Spacing (Section Headers)
            </h2>
            <div className="bg-[#1d1d1d] p-4 rounded">
              <Divider spacing="lg">FEATURES & BENEFITS</Divider>
            </div>
            <code className="block bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              {`<Divider spacing="lg">FEATURES & BENEFITS</Divider>`}
            </code>
          </div>

          {/* Example 5 */}
          <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-xl font-bold text-white">
              #5 Custom Color (Brand Colors)
            </h2>
            <div className="bg-[#1d1d1d] p-4 rounded">
              <Divider lineColor="border-blue-400" textColor="text-blue-400">
                CUSTOM STYLED
              </Divider>
            </div>
            <code className="block bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              {`<Divider
  lineColor="border-blue-400"
  textColor="text-blue-400"
>
  CUSTOM STYLED
</Divider>`}
            </code>
          </div>

          {/* Example 6 */}
          <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
            <h2 className="text-xl font-bold text-white">
              #6 With Custom Margin
            </h2>
            <div className="bg-[#1d1d1d] p-4 rounded">
              <Divider className="my-12">Large Margin</Divider>
            </div>
            <code className="block bg-black text-green-400 p-4 rounded text-sm overflow-x-auto">
              {`<Divider className="my-12">Large Margin</Divider>`}
            </code>
          </div>
        </div>

        {/* Props Reference */}
        <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
          <h2 className="text-xl font-bold text-white">Props Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-2 px-3 text-white font-semibold">
                    Prop
                  </th>
                  <th className="text-left py-2 px-3 text-white font-semibold">
                    Type
                  </th>
                  <th className="text-left py-2 px-3 text-white font-semibold">
                    Default
                  </th>
                  <th className="text-left py-2 px-3 text-white font-semibold">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-3 text-gray-300">
                    <code className="bg-gray-800 px-2 py-1 rounded">
                      children
                    </code>
                  </td>
                  <td className="py-3 px-3 text-gray-400">ReactNode</td>
                  <td className="py-3 px-3 text-gray-400">undefined</td>
                  <td className="py-3 px-3 text-gray-400">Center content</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-3 text-gray-300">
                    <code className="bg-gray-800 px-2 py-1 rounded">
                      spacing
                    </code>
                  </td>
                  <td className="py-3 px-3 text-gray-400">
                    "sm" | "md" | "lg"
                  </td>
                  <td className="py-3 px-3 text-gray-400">"md"</td>
                  <td className="py-3 px-3 text-gray-400">Size variant</td>
                </tr>
                <tr className="border-b border-gray-700">
                  <td className="py-3 px-3 text-gray-300">
                    <code className="bg-gray-800 px-2 py-1 rounded">
                      lineColor
                    </code>
                  </td>
                  <td className="py-3 px-3 text-gray-400">string</td>
                  <td className="py-3 px-3 text-gray-400 text-xs">
                    "border-gray-300..."
                  </td>
                  <td className="py-3 px-3 text-gray-400">
                    Line color classes
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-3 text-gray-300">
                    <code className="bg-gray-800 px-2 py-1 rounded">
                      textColor
                    </code>
                  </td>
                  <td className="py-3 px-3 text-gray-400">string</td>
                  <td className="py-3 px-3 text-gray-400 text-xs">
                    "text-gray-700..."
                  </td>
                  <td className="py-3 px-3 text-gray-400">
                    Text color classes
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Common Use Cases */}
        <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
          <h2 className="text-xl font-bold text-white">Common Use Cases</h2>
          <ul className="space-y-2 text-gray-300">
            <li>✓ Section separators</li>
            <li>✓ Feature breakdowns</li>
            <li>✓ Form field separators ("or" login options)</li>
            <li>✓ Timeline steps</li>
            <li>✓ Comparison sections (Before vs After)</li>
            <li>✓ Content hierarchy</li>
            <li>✓ Visual design accents</li>
          </ul>
        </div>

        {/* Import Statement */}
        <div className="space-y-4 p-6 bg-[#2a2a2a] rounded-lg">
          <h2 className="text-xl font-bold text-white">Import Statement</h2>
          <code className="block bg-black text-green-400 p-4 rounded overflow-x-auto">
            {`import Divider from "@/app/components/common/Divider";`}
          </code>
        </div>
      </div>
    </div>
  );
}

