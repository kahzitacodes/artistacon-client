import { Feature } from "../../components/Feature";
import { FeatureDiscord } from "../../components/FeatureDiscord";
import { Banner } from "../../components/Banner";
import logoVertical from "../../assets/images/artistacon-logo-light-vertical.svg";
import comoFunciona from "../../assets/images/como-vai-funcionar.png";
import maisDetalhes from "../../assets/images/mais-detalhes.png";
import mascotinho from "../../assets/images/mascotinho-nero.svg";

export function About() {
   return (
      <main className="main-divider-top">

         <Feature
            preTitle="Sobre o evento"
            title="3, 4 e 5 de Setembro de 2021"
            image={logoVertical}
            textPosition="right"
            alt="mascote do artista con"
         >
            <p>
               Sentindo falta de feirinhas pra jogar dinheiro nos artistas incríveis do Beco dos Artistas? A gente também. E foi pensando nisso que a Artista Con nasceu: uma feira independente de <strong>Beco dos Artistas 100% online e gratuita</strong>, organizada por pequenos artistas que sentem falta de eventos de HQs, animes, jogos e artesanato.
            </p>
            <p>
               Sabemos que feiras como essas são importantes para artistas independentes, por isso, a ideia da feira é divulgar lojas e projetos de artistas, quadrinistas, autores, artesãos e para qualquer um que queira expor, vender ou comprar produtos originais.
            </p>
         </Feature>

         <Banner
            preTitle="Saiu a lista"
            title="Saiu a lista do Artist's Alley!"
            cta="Ver artistas"
            image={mascotinho}
         >
            <p>Dá uma olhadinha aqui na lista de centenas de artistas incríveis que vão participar da Artista Con!</p>
         </Banner>

         <Feature
            title="Como vai funcionar?"
            image={comoFunciona}
            textPosition="left"
         >
            <p>
               Como todo bom Beco dos Artistas, o principal objetivo do Artista Con é divulgar as lojinhas dos artistas em um só lugar, só que tudo <strong>100% online</strong>.
            </p>
            <p>
               Dessa forma, como visitante, você pode descobrir  e ter acesso a vários artistas incríveis e escolher aquele produtinho lindo de forma fácil e organizada. E, como artista, você tem a facilidade de expor seu trabalho ao público!
            </p>
         </Feature>

         <Feature
            title="Mais detalhes"
            image={maisDetalhes}
            textPosition="right"
         >
            <p>
               A feira reunirá os artistas selecionados numa única página de forma aleatória, para rápida visualização dos participantes. Cada artista terá sua própria página também, com uma breve descrição e apresentação do seu trabalho e um link para sua loja.
            </p>
            <p>
               Também queremos trazer a interatividade de uma feira física para o Artista Con, abrindo um canal no Discord nos dias do evento. Aguarde novidades!!
            </p>
         </Feature>

         <FeatureDiscord />

      </main>
   );
}