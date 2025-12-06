import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Composable for scroll-triggered animations using Intersection Observer
 * Works with animate.css classes
 *
 * @param {Object} options - Configuration options
 * @param {string} options.animation - The animate.css animation class (e.g., 'fadeInUp')
 * @param {number} options.threshold - Intersection threshold (0-1), default 0.1
 * @param {string} options.delay - Animation delay class (e.g., 'animate__delay-1s')
 * @param {boolean} options.once - Whether to animate only once, default true
 * @returns {Object} - { elementRef, isVisible }
 */
export function useScrollAnimation(options = {}) {
  const {
    animation = 'fadeInUp',
    threshold = 0.1,
    delay = '',
    once = true
  } = options

  const elementRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  const startAnimation = (element) => {
    isVisible.value = true
    element.classList.add('animate__animated', `animate__${animation}`)
    if (delay) {
      element.classList.add(delay)
    }
    element.style.opacity = '1'
    element.style.visibility = 'visible'
  }

  const resetAnimation = (element) => {
    isVisible.value = false
    element.classList.remove('animate__animated', `animate__${animation}`)
    if (delay) {
      element.classList.remove(delay)
    }
    element.style.opacity = '0'
    element.style.visibility = 'hidden'
  }

  onMounted(() => {
    if (!elementRef.value) return

    // Initial hidden state
    elementRef.value.style.opacity = '0'
    elementRef.value.style.visibility = 'hidden'

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            startAnimation(entry.target)
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            resetAnimation(entry.target)
          }
        })
      },
      { threshold }
    )

    observer.observe(elementRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    elementRef,
    isVisible
  }
}

/**
 * Directive-like composable for animating multiple elements with staggered delays
 * @param {Object} options - Configuration options
 * @param {string} options.animation - The animate.css animation class
 * @param {number} options.threshold - Intersection threshold
 * @param {number} options.staggerDelay - Delay between each element in ms
 * @param {boolean} options.once - Whether to animate only once
 * @returns {Object} - { containerRef, isVisible }
 */
export function useScrollAnimationGroup(options = {}) {
  const {
    animation = 'fadeInUp',
    threshold = 0.1,
    staggerDelay = 100,
    once = true,
    childSelector = '[data-animate]'
  } = options

  const containerRef = ref(null)
  const isVisible = ref(false)
  let observer = null

  onMounted(() => {
    if (!containerRef.value) return

    const children = containerRef.value.querySelectorAll(childSelector)

    // Initial hidden state for all children
    children.forEach((child) => {
      child.style.opacity = '0'
      child.style.visibility = 'hidden'
    })

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate__animated', `animate__${animation}`)
                child.style.opacity = '1'
                child.style.visibility = 'visible'
              }, index * staggerDelay)
            })
            if (once) {
              observer.unobserve(entry.target)
            }
          } else if (!once) {
            isVisible.value = false
            children.forEach((child) => {
              child.classList.remove('animate__animated', `animate__${animation}`)
              child.style.opacity = '0'
              child.style.visibility = 'hidden'
            })
          }
        })
      },
      { threshold }
    )

    observer.observe(containerRef.value)
  })

  onUnmounted(() => {
    if (observer) {
      observer.disconnect()
    }
  })

  return {
    containerRef,
    isVisible
  }
}

export default useScrollAnimation
