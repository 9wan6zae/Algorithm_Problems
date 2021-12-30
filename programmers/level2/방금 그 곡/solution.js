function solution(m, musicinfos) {
  const replaceMelody = (melody) => {
      return melody.replace(/\w#/g, word => word[0].toLowerCase())
  }
  const _m = replaceMelody(m)
  const _musicinfos = musicinfos.map((musicinfo) => {
      const [start, end, title, melody] = musicinfo.split(',')
      const _melody = replaceMelody(melody)
      const [s_h, s_m] = start.split(':')
      const [e_h, e_m] = end.split(':')
      const runtime = (+e_h - +s_h) * 60 + +e_m - +s_m
      let stream = _melody.repeat(Math.floor(runtime / _melody.length));
      stream += _melody.slice(0, Math.floor(runtime % _melody.length))
      return [title, stream, runtime]
  }).filter((musicinfo) => musicinfo[1].indexOf(_m) > -1)
  
  return _musicinfos.length ? _musicinfos.sort((a, b) => b[2] - a[2])[0][0] : '(None)'
}