// Installers are attached to adertha-client GitHub Releases with fixed names,
// so "latest/download/<file>" always points at the newest version.
const base = 'https://github.com/vikrant101001/adertha-client/releases/latest/download/'
const platforms = [
  { id: 'windows', label: 'Windows', file: 'Adertha-Setup.exe' },
  { id: 'mac', label: 'macOS (Apple Silicon)', file: 'Adertha.dmg' },
  { id: 'linux', label: 'Linux', file: 'Adertha.AppImage' },
]

const ua = navigator.userAgent
const detected = /Win/.test(ua) ? 'windows' : /Mac/.test(ua) ? 'mac' : 'linux'
const primary = platforms.find((p) => p.id === detected)

export default function App() {
  return (
    <main>
      <h1>Adertha</h1>
      <p className="tagline">Reunite your team with its vision.</p>
      <a className="download" href={base + primary.file}>Download for {primary.label}</a>
      <p className="others">
        {platforms.filter((p) => p !== primary).map((p, i) => (
          <span key={p.id}>
            {i > 0 && ' · '}
            <a href={base + p.file}>{p.label}</a>
          </span>
        ))}
      </p>
    </main>
  )
}
