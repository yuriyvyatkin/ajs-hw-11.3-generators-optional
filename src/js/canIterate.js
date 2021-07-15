export default function canIterate(instance) {
  try {
    (() => [...instance])();
    return true;
  } catch (e) {
    return false;
  }
}
