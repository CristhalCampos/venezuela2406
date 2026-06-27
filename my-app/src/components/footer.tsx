export default function Footer() {
  return (
    <footer className="flex items-center justify-center w-full h-20 border-t">
      <p className="text-sm text-zinc-600">
        &copy; {new Date().getFullYear()} Venezuela2406. Todos los derechos reservados.
      </p>
    </footer>
  );
}