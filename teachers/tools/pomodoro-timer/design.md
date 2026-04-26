# Pomodoro Flip Cube Timer Design

## Goal
Create a timer that feels like a physical Pomodoro cube while staying clear and usable in both regular and full-screen modes.

## Layout Choices
- Keep the app centered on the page using a full-height wrapper.
- Make the default app shell large (`min(1120px, 100%)`) so it feels almost full-screen even before entering full screen.
- Use a structured layout:
  - Header with status + full-screen button
  - Mode buttons
  - Main center stage with large timer and cube
  - Bottom control row and guidance note

## Full-Screen Behavior
- Added a dedicated **Enter Full Screen / Exit Full Screen** button.
- Full-screen mode is applied to the timer container itself (not whole browser chrome).
- In full-screen mode:
  - border radius is removed
  - border is removed
  - timer fills available viewport area

## Visual Theme
- Rich, high-contrast palette inspired by physical LED timers:
  - Focus: bright cyan/blue
  - Short break: teal/green
  - Long break: warm orange
- Background uses layered gradients for depth.
- Surfaces use glass-like translucency with balanced shadows.
- All spacing and corner radii are symmetrical and consistent.

## Physical Timer Metaphor
- Added a 3D cube that rotates to different faces for each mode:
  - Focus (25)
  - Short Break (5)
  - Long Break (15)
- Added face selection controls: “Show Focus Face”, “Show Short Face”, “Show Long Face”.
- Selecting a face also loads the associated timer duration.

## Typography + Readability
- Primary time display is very large and tabular-numeric for stable digit alignment.
- Supporting text uses muted color for hierarchy.
- Buttons share consistent weight, radius, and hover motion.

## Interaction Rules
- **Start / Pause** toggles running state.
- **Reset Session** resets current mode duration.
- **Stop & Clear** stops timer and resets remaining time.
- Session note text updates for user feedback on each main action.

## Accessibility + Responsiveness
- Maintains semantic controls and `aria-label` usage for key regions/buttons.
- Uses responsive clamp values and mobile breakpoints.
- On smaller screens, mode and face control rows stack into single-column buttons.
