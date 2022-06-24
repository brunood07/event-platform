import { Article } from "phosphor-react";
import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? (
          <Video lessonSlug={slug} />
        ) : (
          <div className="flex flex-col flex-1 items-center justify-center">
            <Article size={100} />
            <p className="mt-6 text-4xl text-gray-200">Oopss...</p>
            <p className="mt-3 text-xl text-gray-200">
              Você precisa selecionar uma aula na barra lateral
            </p>
          </div>
        )}
        <Sidebar />
      </main>
    </div>
  );
}
