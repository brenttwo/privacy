import { useEffect, useRef } from 'react'
import './App.css'

function App() {
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return

    let frame: number

    const check = () => {
      const remaining = el.scrollWidth - el.scrollLeft - el.clientWidth
      const fade = Math.max(0, Math.min(remaining, 40))
      if (fade < 1) {
        el.style.maskImage = 'none'
        el.style.webkitMaskImage = 'none'
      } else {
        const m = `linear-gradient(to right, #000 calc(100% - ${fade}px), transparent 100%)`
        el.style.maskImage = m
        el.style.webkitMaskImage = m
      }
      frame = 0
    }

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(check)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    check()
    return () => {
      el.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <div className="card">
      <h1>Privacy Policy</h1>

      <p>We don't distribute or store your raw IP</p>

      

      <p>
        When you verify, we store a few things in the database. Here's exactly
        what each field is and why it exists.
      </p>

      <div className="table-wrap" ref={wrapRef}>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>token</th>
              <th>user_id</th>
              <th>ip</th>
              <th>verified</th>
              <th>role_id</th>
              <th>guild_id</th>
              <th>notified</th>
              <th>created_at</th>
              <th>raw_ip</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="cell"><code>1</code></td>
              <td className="cell"><code>1a2bc3d4-1234-abcd-5678-1d2f3g4h5i6j</code></td>
              <td className="cell"><code>123456789012345678</code></td>
              <td className="cell bg-hash"><code>4dabcab210766e35f03e77120e6986d6e6d4752b2a9ff22980b9253d026080d8</code></td>
              <td className="cell"><code>true</code></td>
              <td className="cell"><code>1511208129981845594</code></td>
              <td className="cell"><code>1508498007463821433</code></td>
              <td className="cell"><code>true</code></td>
              <td className="cell"><code>2026-06-07 10:21 UTC</code></td>
              <td className="cell"><code>Null</code></td>
            </tr>
          </tbody>
        </table>
      </div>

      <ul>
        <li><strong>token</strong> A unique ID for each verification attempt. Deleted if the website is never visited for an amount of time, or marked as used once the process is complete</li>
        <li><strong>ip</strong> Your IP address runs through SHA-256. This is basically irreversible. The example used is a hash of <code>123.123.123.123</code></li>
        <li><strong>verified</strong> Whether the verification went through. <code>false</code> means the bot hasn't processed it yet</li>
        <li><strong>notified</strong> Whether the bot has already sent you a DM about the result (success, VPN detected, etc.)</li>
        <li><strong>raw_ip</strong> Your actual IP, stored temporarily while the bot checks it against a VPN database. Deleted immediately after the check, usually within seconds. Never used for anything else.</li>
      </ul>


      <p>
        When you verify, we grab your
        IP address and immediately run it through SHA-256 before storing it. We don't store
        your original IP anywhere.
      </p>

      <p>
        The hash is used for one thing: checking if someone with the same IP
        has already verified. That's it. We don't sell it, share it, trade it,
        or do anything else with it. It's basically just an anti ban evasion
        measure.
        Example:
      </p>
      <pre className="hash-example">IP:    203.0.113.42<br/>Hash:  17af1cf3d1b5332c53349fc789abdc853bbeea7ed33eff727ff794ab741ccac9</pre>

      <p>
        That hash is all that ever gets stored. The original IP never reaches
        the database, a log file, or anywhere else.
      </p>

      <p>
        If you want to know what IP hash we have stored for you, or want it
        removed, just message the server owner or open a ticket with your
        Discord user ID. We can delete the hash from our database for you.
        Keep in mind though: if you have been flagged for ban evasion or
        using an alt account, we will not remove your data.
      </p>

      <p>
        We don't sell, share, or trade any of this. The only purpose is
        preventing ban evasion and alt accounts. If you want your data
        reviewed or removed, message the server owner or open a ticket
        with your Discord user ID.
      </p>

      <div className="divider" />

      <p className="small">
        Source code: <a href="https://github.com/brenttwo/verify">github.com/brenttwo/verify</a>
      </p>

      <p className="small">
        Email: <a href="mailto:signaajames@proton.me">signaajames@proton.me</a> (replies may take a bit longer)
      </p>

      <p className="small">
        To request data removal or review: DM the server owner or admin with your user ID,
        or open a ticket in the server, or email the address above.
      </p>
    </div>
  )
}

export default App
