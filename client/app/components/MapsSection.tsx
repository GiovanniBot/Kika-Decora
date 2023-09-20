import Image from "next/image";

export default function HeroSVGs() {
  return (
    <section className="mt-12 lg:mt-24 grid grid-cols-12 mb-12 lg:mb-16">
      <p className="col-start-2 lg:col-start-3 col-span-8 font-semibold text-lg lg:text-2xl mb-3 lg:mb-6">
        Onde nos encontrar
      </p>

      <div className="col-start-2 lg:col-start-3 col-span-10 lg:col-span-8 flex flex-wrap md:flex-row">
        <div className="basis-full md:basis-3/5 mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3891.5655542664035!2d-38.61484702417277!3d-12.741740455231184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7167520e1c34cb3%3A0xd5e9ae0008c89a71!2sR.%20Tancredo%20Neves%2C%20144%2C%20Me.%20de%20Deus%20-%20BA%2C%2042600-000!5e0!3m2!1spt-BR!2sbr!4v1695199880676!5m2!1spt-BR!2sbr"
            width="500"
            height="500"
            style={{ border: "0" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full '
          ></iframe>
        </div>
        <div className="basis-full md:basis-2/5 md:pl-6 text-sm lg:text-lg xl:text-xl lg:mt-3">
          <p>
            <span className="font-semibold">Local:</span> Rua Tancredo Neves, Madre de Deus, n.º144 - BA, 42600-000
          </p>
          <p>
            <span className="font-semibold">WhatsApp:</span> (71) 9XXXX-XXXX
          </p>
          <p>
            <span className="font-semibold">E-mail:</span> exemplo@exemplo.com
          </p>
          <p>
            <span className="font-semibold">Instagram:</span> @kika_mini_decora
          </p>
        </div>
      </div>
    </section>
  );
}
