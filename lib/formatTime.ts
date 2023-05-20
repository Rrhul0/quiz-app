export default function formatTime(seconds: number): { minutes: string; seconds: string } {
    const timeMinutes = Math.floor(seconds / 60)
    const timeSeconds = seconds % 60

    const timeMinutesStr = (timeMinutes < 10 ? '0' : '') + timeMinutes
    const timeSecondsStr = (timeSeconds < 10 ? '0' : '') + timeSeconds

    return { minutes: timeMinutesStr, seconds: timeSecondsStr }
}
