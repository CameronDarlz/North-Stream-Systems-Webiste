'use client'

import * as Tooltip from '@radix-ui/react-tooltip'

export default function ServiceTooltipButton() {
  return (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            disabled
            className="inline-flex items-center gap-2 text-sm font-medium text-muted border border-gray-200 px-4 py-2 rounded-lg cursor-not-allowed opacity-60 select-none"
          >
            Learn More
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-nss-text text-white text-xs px-3 py-1.5 rounded-md shadow-lg max-w-[200px] text-center"
            sideOffset={5}
          >
            Detailed pricing and packages coming soon
            <Tooltip.Arrow className="fill-nss-text" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
