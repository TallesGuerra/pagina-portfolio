import { useEffect } from 'react'

export default function Cursor() {
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const ring = document.getElementById('cursorRing')

    const onMove = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
      setTimeout(() => {
        ring.style.left = e.clientX + 'px'
        ring.style.top = e.clientY + 'px'
      }, 70)
    }

    const onEnter = () => {
      cursor.style.width = '18px'
      cursor.style.height = '18px'
      ring.style.width = '46px'
      ring.style.height = '46px'
      ring.style.opacity = '.5'
    }

    const onLeave = () => {
      cursor.style.width = '10px'
      cursor.style.height = '10px'
      ring.style.width = '32px'
      ring.style.height = '32px'
      ring.style.opacity = '.2'
    }

    document.addEventListener('mousemove', onMove)

    const targets = document.querySelectorAll('a,button,.project-card,.project-featured,.skill-tag,.contact-item')
    targets.forEach(el => {
      el.addEventListener('mouseenter', onEnter)
      el.addEventListener('mouseleave', onLeave)
    })

    return () => {
      document.removeEventListener('mousemove', onMove)
      targets.forEach(el => {
        el.removeEventListener('mouseenter', onEnter)
        el.removeEventListener('mouseleave', onLeave)
      })
    }
  }, [])

  return (
    <>
      <div className="cursor" id="cursor" />
      <div className="cursor-ring" id="cursorRing" />
    </>
  )
}
