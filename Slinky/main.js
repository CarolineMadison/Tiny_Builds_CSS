import gsap from 'https://cdn.skypack.dev/gsap'

gsap.to('.box', {
  rotate: 360,
  delay: (index) => index,
  repeatDelay: 1,
  repeat: -1,
  ease: 'power1.inOut',
})