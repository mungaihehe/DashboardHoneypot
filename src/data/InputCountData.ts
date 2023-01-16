export const InputCountData = [
  { command: "uname -a	", count: 1295 },
  { command: "cd ~; chattr -ia .ssh; lockr -ia .ssh	", count: 1282 },
  { command: "lockr -ia .ssh	", count: 1282 },
  { command: "cat /proc/cpuinfo | grep name | wc -l	", count: 1256 },
  {
    command: "cat /proc/cpuinfo | grep model | grep name | wc -l	",
    count: 1255,
  },
  {
    command:
      "cat /proc/cpuinfo | grep name | head -n 1 | awk '{print $4,$5,$6,$7,$8,$9;}'	",
    count: 1255,
  },
  { command: "crontab -l	", count: 1255 },
  {
    command: "free -m | grep Mem | awk '{print $2 ,$3, $4, $5, $6, $7}'	",
    count: 1255,
  },
  { command: "ls -lh $(whic,h ls)", count: 1255 },
  { command: "top	", count: 1255 },
];
