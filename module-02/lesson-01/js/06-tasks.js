/**
 * Напиши скрипт перевірки підписки користувача при доступі до контента
 * - Є три типа підписки: free, pro і vip.
 * - Отримати доступ можуть тільки користувачі pro і vip
 */

const sub = "pro";

const hasAccess = sub === "pro" || sub === "vip";
// console.log("hasAccess:", hasAccess);

/**
 * Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
 * Для цього, користувач має бути:
 * - другом
 * - онлайн
 * - без режима не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = false; // режим не турбувати вимкнено

const canOpenChat = isOnline && isFriend && !isDnd;
// console.log("Можна відкрити чат? ", canOpenChat);
