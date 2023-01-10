import { Animation } from "@babylonjs/core/Animations/animation";
import { CubicEase, EasingFunction } from "@babylonjs/core/Animations/easing";

const FRAMES_PER_SECOND = 30;

interface AniProps {
  property: string;
  from: number;
  to: number;
}

function createAnimation({ property, from, to }: AniProps) {
  const ease = new CubicEase();
  ease.setEasingMode(EasingFunction.EASINGMODE_EASEINOUT);

  const animation = Animation.CreateAnimation(
    property,
    Animation.ANIMATIONTYPE_FLOAT,
    FRAMES_PER_SECOND,
    ease
  );
  animation.setKeys([
    {
      frame: 0,
      value: from,
    },
    {
      frame: 100,
      value: to,
    },
  ]);
  return animation;
}

export default createAnimation;
