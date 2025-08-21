// 1. Define Keyframes
// Keyframes specify the different stages of your animation. The basic syntax uses @keyframes:

// This means:
// Runs for 4 seconds
// Starts after 2 seconds
// Loops forever
// Swaps direction every cycle

// Property	Purpose (plain css)

// @keyframes	=> Stages of animation
// animation-name	=> Which keyframes to use
// animation-duration => How long it lasts
// animation-timing-function =>	Speed curve (ease, linear, etc.)
// animation-delay =>	Wait before starting
// animation-iteration-count =>	How many repeats (1, infinite, etc.)
// animation-direction =>	Forwards or backwards, alternate as needed


// Animation Class	Effect (talwind)
{/* <div class="transition-transform duration-500 ease-in-out transform hover:scale-110">
  Hover and Grow
</div>; */}

// transition	=> Enables transitions for state changes
// duration-300 =>	Sets transition duration to 300ms
// ease-in-out =>	Uses in-out easing for transitions
// animate-spin =>	Makes the element rotate continuously
// animate-pulse =>	Element fades in and out
// animate-bounce=>	Element bounces up and down
// animate-ping	=> Element “pings” with an expanding circle effect

function AnimationComp() {
  return (
    <div>
      <div
      className="transition-opacity transform animate-ping duration-150 ease-in-out"
        style={{
          position: "relative",
          width: "100px",
          height: "100px",
          backgroundColor: "red",
          animation: "move 2s ease-in-out infinite alternate",
          animationName: "example",
          animationDuration: "4s",
        }}
      >
        Animation Example
      </div>
    </div>
  );
}

export default AnimationComp;
