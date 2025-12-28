# Corzh UI - Component Addition Plan

## Current State

**Existing Components:**
- Button (complete)
- Icon (13 icons)
- Navigation (complete)
- Modal (complete)
- AuthorizedLayout (Header, Body, Footer stub)
- Cart (Item/List stubs - incomplete)

---

## Priority 1: Complete Incomplete Components

### 1.1 Cart.Item & Cart.List
**Status:** Stubs exist, need implementation
**Scope:**
- `Cart.Item` - Display product image, name, price, quantity, remove button
- `Cart.List` - Container for items with subtotal/total calculation
- Props: product data, quantity controls, remove handler

### 1.2 AuthorizedLayout.Footer
**Status:** Empty stub
**Scope:**
- Copyright text
- Footer navigation links
- Social media icons (add new icons)

---

## Priority 2: Form Components

### 2.1 Input
**Purpose:** Text input field
**Features:**
- Sizes: small, medium, large
- States: default, focus, error, disabled
- Variants: text, email, password, number
- Label and helper text support
- Left/right icon slots

### 2.2 TextArea
**Purpose:** Multi-line text input
**Features:**
- Resizable option
- Character count
- Error state and validation message
- Rows configuration

### 2.3 Select / Dropdown
**Purpose:** Single/multi-select dropdown
**Features:**
- Searchable option
- Multi-select support
- Option groups
- Custom option rendering
- Uses existing DownArrow icon

### 2.4 Checkbox
**Purpose:** Single checkbox input
**Features:**
- Sizes: small, medium
- States: checked, unchecked, indeterminate, disabled
- Label positioning (left/right)

### 2.5 Radio / RadioGroup
**Purpose:** Radio button selection
**Features:**
- Single selection within group
- Horizontal/vertical layouts
- Disabled individual options

### 2.6 Toggle / Switch
**Purpose:** Boolean on/off control
**Features:**
- Sizes: small, medium, large
- Label support
- Disabled state

### 2.7 Form
**Purpose:** Form wrapper with validation
**Features:**
- Form state management
- Validation patterns
- Submit/reset handlers
- Error summary

---

## Priority 3: Feedback Components

### 3.1 Toast / Notification
**Purpose:** Temporary feedback messages
**Features:**
- Types: success, error, warning, info
- Position options (top-right, bottom-center, etc.)
- Auto-dismiss with timer
- Manual dismiss
- Stack multiple toasts

### 3.2 Alert
**Purpose:** Inline alert messages
**Features:**
- Types: success, error, warning, info
- Dismissible option
- Icon support
- Title and description

### 3.3 Progress
**Purpose:** Progress indicators
**Features:**
- Linear progress bar
- Circular progress (spinner)
- Determinate/indeterminate modes
- Sizes and colors

### 3.4 Skeleton
**Purpose:** Loading placeholder
**Features:**
- Text lines
- Avatar
- Card
- Custom shapes
- Animation options

### 3.5 Spinner / Loading
**Purpose:** Loading indicator
**Features:**
- Sizes: small, medium, large
- Colors
- Full-page overlay option

---

## Priority 4: Data Display Components

### 4.1 Card
**Purpose:** Content container
**Features:**
- Header, body, footer sections
- Image support
- Hover effects
- Clickable variant

### 4.2 Badge
**Purpose:** Status indicators / counts
**Features:**
- Colors: red, green, blue, orange, gray
- Sizes: small, medium
- Dot variant (no text)
- Pill shape

### 4.3 Avatar
**Purpose:** User/entity representation
**Features:**
- Image avatar
- Initials fallback
- Sizes: xs, sm, md, lg, xl
- Status indicator (online/offline)
- Avatar group

### 4.4 Table
**Purpose:** Tabular data display
**Features:**
- Sortable columns
- Pagination
- Row selection
- Responsive (horizontal scroll or card view)
- Empty state

### 4.5 List
**Purpose:** Vertical list display
**Features:**
- List items with icons
- Dividers
- Clickable items
- Nested lists

### 4.6 Tag / Chip
**Purpose:** Labels and filters
**Features:**
- Removable option
- Colors
- Sizes
- Icon support

### 4.7 Tooltip
**Purpose:** Contextual information
**Features:**
- Positions: top, bottom, left, right
- Trigger: hover, click
- Arrow pointer
- Delay options

### 4.8 Popover
**Purpose:** Rich content overlay
**Features:**
- Any content as children
- Positions
- Trigger options
- Close on outside click

---

## Priority 5: Navigation Components

### 5.1 Tabs
**Purpose:** Tabbed content navigation
**Features:**
- Horizontal/vertical
- Icons with labels
- Disabled tabs
- Controlled/uncontrolled modes

### 5.2 Breadcrumb
**Purpose:** Hierarchical navigation
**Features:**
- Separator customization
- Truncation for long paths
- Home icon option
- Uses existing Link icon

### 5.3 Pagination
**Purpose:** Page navigation
**Features:**
- Page numbers
- Previous/next buttons
- Items per page selector
- Total count display

### 5.4 Sidebar
**Purpose:** Vertical navigation panel
**Features:**
- Collapsible
- Nested menu items
- Icons
- Active state styling
- Mobile drawer variant

### 5.5 Stepper
**Purpose:** Multi-step process indicator
**Features:**
- Horizontal/vertical
- Step status (completed, active, pending)
- Clickable steps
- Description text

---

## Priority 6: Overlay Components

### 6.1 Drawer / Slide-over
**Purpose:** Side panel overlay
**Features:**
- Positions: left, right, top, bottom
- Sizes: sm, md, lg, full
- Backdrop
- Close button

### 6.2 Dropdown Menu
**Purpose:** Action menu
**Features:**
- Menu items with icons
- Dividers
- Nested submenus
- Keyboard navigation
- Uses Menu icon

---

## Priority 7: Layout Components

### 7.1 Container
**Purpose:** Responsive content wrapper
**Features:**
- Max-width constraints
- Centered option
- Padding options

### 7.2 Grid
**Purpose:** CSS Grid layout
**Features:**
- Responsive column counts
- Gap configuration
- Span options

### 7.3 Stack
**Purpose:** Flexbox layout helper
**Features:**
- Direction: horizontal/vertical
- Gap
- Alignment
- Wrap option

### 7.4 Divider
**Purpose:** Visual separator
**Features:**
- Horizontal/vertical
- With text label
- Dashed/solid styles

### 7.5 Accordion
**Purpose:** Collapsible content sections
**Features:**
- Single/multiple open
- Default open state
- Icons
- Smooth animation (Tailwind animate already configured)

---

## Priority 8: Additional Icons

### 8.1 Essential Icons to Add
- Check / Checkmark
- Plus / Add
- Minus / Remove
- Edit / Pencil
- Settings / Gear
- Star (filled and outline)
- Heart (filled and outline)
- Info
- Warning / Alert
- Success / CheckCircle
- Error / XCircle
- Eye / Visibility
- EyeOff / Hide
- Copy
- Download
- Upload
- Filter
- Sort
- Calendar
- Clock / Time
- Phone
- Email / Mail
- Lock
- Unlock
- Refresh
- Home
- Notification / Bell

---

## Implementation Notes

### Patterns to Follow
1. Use TypeScript interfaces for all props
2. Export from component's index.ts
3. Add to main `/src/index.ts` exports
4. Create Storybook stories for each component
5. Use `cn()` utility for className merging
6. Follow existing color system (Tailwind)
7. Support controlled and uncontrolled modes where applicable

### Dependencies to Consider
- `@headlessui/react` - Already installed, use for accessible overlays
- `class-variance-authority` - Already installed, use for variant management
- Consider `@radix-ui/react-*` primitives for complex components

### Accessibility
- All interactive components need keyboard support
- ARIA attributes where appropriate
- Focus management for modals/overlays
- Color contrast compliance

---

## Suggested Implementation Order

1. **Input, Select, Checkbox** - Most needed for forms
2. **Card, Badge, Avatar** - Common UI patterns
3. **Toast, Alert** - User feedback
4. **Tabs, Breadcrumb, Pagination** - Navigation enhancement
5. **Drawer, Dropdown Menu** - Overlay patterns
6. **Table** - Data display
7. **Remaining form components**
8. **Layout utilities**
9. **Additional icons throughout**
