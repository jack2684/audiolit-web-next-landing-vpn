export default function getScrollAnimation() {
  return ({
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      }
    })
  })
}

export const INDEIGOGO_URL = "https://www.indiegogo.com/projects/audiolight-focus-more-on-leanring-less-on-screen/x/19794009#/";