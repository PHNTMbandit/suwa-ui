import { GearIcon, HeartIcon, PlusIcon } from "@phosphor-icons/react"
import type { Meta, StoryObj } from "@storybook/react-vite"
import { Button } from "./button"
import "tailwindcss"

const meta = {
	title: "Components/Button",
	component: Button,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		tone: {
			control: { type: "select" },
			options: [
				"primary",
				"secondary",
				"accent",
				"success",
				"warning",
				"destructive",
				"neutral",
				"glass",
			],
		},
		style: {
			control: { type: "select" },
			options: ["solid", "outline", "ghost"],
		},
		size: {
			control: { type: "select" },
			options: [
				"small",
				"medium",
				"large",
				"iconSmall",
				"iconMedium",
				"iconLarge",
			],
		},
		disabled: {
			control: { type: "boolean" },
		},
	},
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default button
export const Default: Story = {
	args: {
		children: "Button",
	},
}

// Tone variants
export const Primary: Story = {
	args: {
		tone: "primary",
		children: "Primary Button",
	},
}

export const Secondary: Story = {
	args: {
		tone: "secondary",
		children: "Secondary Button",
	},
}

export const Accent: Story = {
	args: {
		tone: "accent",
		children: "Accent Button",
	},
}

export const Success: Story = {
	args: {
		tone: "success",
		children: "Success Button",
	},
}

export const Warning: Story = {
	args: {
		tone: "warning",
		children: "Warning Button",
	},
}

export const Destructive: Story = {
	args: {
		tone: "destructive",
		children: "Destructive Button",
	},
}

export const Neutral: Story = {
	args: {
		tone: "neutral",
		children: "Neutral Button",
	},
}

export const Glass: Story = {
	args: {
		tone: "glass",
		children: "Glass Button",
	},
}

// Style variants
export const Solid: Story = {
	args: {
		style: "solid",
		children: "Solid Button",
	},
}

export const Outline: Story = {
	args: {
		style: "outline",
		children: "Outline Button",
	},
}

export const Ghost: Story = {
	args: {
		style: "ghost",
		children: "Ghost Button",
	},
}

// Size variants
export const Small: Story = {
	args: {
		size: "small",
		children: "Small Button",
	},
}

export const Medium: Story = {
	args: {
		size: "medium",
		children: "Medium Button",
	},
}

export const Large: Story = {
	args: {
		size: "large",
		children: "Large Button",
	},
}

// Icon variants
export const IconSmall: Story = {
	args: {
		size: "iconSmall",
		children: <HeartIcon />,
	},
}

export const IconMedium: Story = {
	args: {
		size: "iconMedium",
		children: <GearIcon />,
	},
}

export const IconLarge: Story = {
	args: {
		size: "iconLarge",
		children: <PlusIcon />,
	},
}

// Button with icon and text
export const WithIcon: Story = {
	args: {
		children: (
			<>
				<PlusIcon />
				Add Item
			</>
		),
	},
}

// Disabled state
export const Disabled: Story = {
	args: {
		disabled: true,
		children: "Disabled Button",
	},
}

// Combinations showcase
export const AllTonesSolid: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button style="solid" tone="primary">
				Primary
			</Button>
			<Button style="solid" tone="secondary">
				Secondary
			</Button>
			<Button style="solid" tone="accent">
				Accent
			</Button>
			<Button style="solid" tone="success">
				Success
			</Button>
			<Button style="solid" tone="warning">
				Warning
			</Button>
			<Button style="solid" tone="destructive">
				Destructive
			</Button>
			<Button style="solid" tone="neutral">
				Neutral
			</Button>
			<Button style="solid" tone="glass">
				Glass
			</Button>
		</div>
	),
}

export const AllTonesOutline: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button style="outline" tone="primary">
				Primary
			</Button>
			<Button style="outline" tone="secondary">
				Secondary
			</Button>
			<Button style="outline" tone="accent">
				Accent
			</Button>
			<Button style="outline" tone="success">
				Success
			</Button>
			<Button style="outline" tone="warning">
				Warning
			</Button>
			<Button style="outline" tone="destructive">
				Destructive
			</Button>
			<Button style="outline" tone="neutral">
				Neutral
			</Button>
			<Button style="outline" tone="glass">
				Glass
			</Button>
		</div>
	),
}

export const AllTonesGhost: Story = {
	render: () => (
		<div className="flex flex-wrap gap-4">
			<Button style="ghost" tone="primary">
				Primary
			</Button>
			<Button style="ghost" tone="secondary">
				Secondary
			</Button>
			<Button style="ghost" tone="accent">
				Accent
			</Button>
			<Button style="ghost" tone="success">
				Success
			</Button>
			<Button style="ghost" tone="warning">
				Warning
			</Button>
			<Button style="ghost" tone="destructive">
				Destructive
			</Button>
			<Button style="ghost" tone="neutral">
				Neutral
			</Button>
			<Button style="ghost" tone="glass">
				Glass
			</Button>
		</div>
	),
}

export const AllSizes: Story = {
	render: () => (
		<div className="flex items-center flex-wrap gap-4">
			<Button size="small">Small</Button>
			<Button size="medium">Medium</Button>
			<Button size="large">Large</Button>
		</div>
	),
}

export const AllIconSizes: Story = {
	render: () => (
		<div className="flex items-center flex-wrap gap-4">
			<Button size="iconSmall">
				<HeartIcon />
			</Button>
			<Button size="iconMedium">
				<GearIcon />
			</Button>
			<Button size="iconLarge">
				<PlusIcon />
			</Button>
		</div>
	),
}

export const InteractivePlayground: Story = {
	args: {
		tone: "primary",
		style: "solid",
		size: "medium",
		children: "Interactive Button",
		disabled: false,
	},
}
