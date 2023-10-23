import { useState, useEffect } from 'react'
import Header from './components/Header'
// import Project from './components/Project'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <div className='position-relative'>
        <Header />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam blanditiis quidem soluta harum sint ab, totam mollitia amet ipsum earum numquam dolore a culpa molestias assumenda laborum placeat cum eveniet!
        Doloremque illo quibusdam minus sequi libero et enim qui nesciunt incidunt quaerat possimus ipsam, vitae recusandae, dolores harum consectetur omnis neque! Eligendi ad earum quidem, voluptates repellat repudiandae vel rerum.
        Repellat ex deleniti illo quasi et, nulla possimus minima nisi provident alias officiis quod maiores eius natus id tempora beatae corrupti at quis. Ea aliquam totam qui nobis quam distinctio?
        Rerum esse aliquid libero deserunt impedit magnam voluptatibus temporibus magni non ipsum vitae aliquam labore sequi enim quod numquam, omnis quisquam qui quibusdam illum sint dolor iste atque exercitationem! Facere?
        Impedit asperiores et enim itaque recusandae quis culpa reiciendis totam adipisci sint reprehenderit ut voluptate sequi saepe, sed velit ea suscipit corrupti, doloribus facilis qui. Perspiciatis culpa ex voluptatem a.
        Odit pariatur eligendi repellat aperiam ad non at, accusamus temporibus nostrum unde saepe iste excepturi esse eaque voluptatibus in minus soluta aliquam maxime rem repellendus tenetur veniam harum accusantium? Velit.
        Eos totam explicabo consequuntur aliquid ipsa rem eius officiis officia perferendis sint, earum possimus optio aut tempora dolore ea! Reiciendis cumque ad illo, hic laudantium dolor tempora qui sit magnam.
        Laboriosam et exercitationem nisi sequi perferendis, placeat inventore itaque optio vitae qui possimus recusandae illum ad architecto voluptates repudiandae labore nam ratione reiciendis ea quo at quisquam. Sint, nam aliquam!
        Tenetur, error quibusdam. Inventore repellendus impedit veritatis iste, iusto, aliquam placeat sunt animi possimus maxime suscipit incidunt officiis atque omnis, consequatur autem unde voluptas. Nam delectus alias quis itaque nisi!
        Quasi aut, omnis quas veniam repellendus vel vero minima voluptatibus deserunt neque molestias recusandae eligendi dolor atque aspernatur labore, quia corrupti. Sed odit nostrum cupiditate, consectetur laudantium tempora recusandae harum?
        Magni delectus totam libero? Praesentium, dolor voluptas consequatur, similique voluptatem repudiandae quidem ipsum, ab tempore quasi impedit sed corporis nobis velit. Aliquam nobis nulla labore beatae quibusdam possimus, ipsum sed.
        Dolore natus tempore nisi ab? Atque debitis aspernatur, numquam ratione eos amet consectetur dolorem ea laboriosam, blanditiis dolores animi porro alias officia quam quisquam ipsa suscipit quo! Corporis, placeat repellat.
        A nihil natus soluta, aliquid quaerat in tempore, vitae, similique tenetur eius voluptatibus! Explicabo id a nihil sequi voluptatibus architecto illo dicta? Vel quos fugit a labore nesciunt ipsam mollitia.
        Quo incidunt deserunt perspiciatis natus veniam iure ducimus temporibus et. Quis praesentium impedit rem, nam facilis minima explicabo adipisci voluptas modi et nisi. Numquam natus, voluptatum ipsum expedita accusantium a!
        Possimus esse, iure dolores tempora fugiat veniam officia dicta voluptatibus ullam maxime ipsam qui rerum reiciendis facilis, minus, excepturi maiores nam culpa molestias. Mollitia commodi minima accusamus. Eaque, mollitia provident.
        Maiores inventore accusantium molestiae corporis sequi blanditiis consequatur tempora, cumque cum? Soluta iste saepe placeat impedit dolorem similique facilis rem. Nesciunt error earum architecto atque consequuntur quos dolor hic expedita!
        Quis quia ad dolore maxime consectetur. Optio adipisci, excepturi, impedit et ducimus rem saepe aspernatur reiciendis facere beatae voluptatum voluptate! Eum, rem. Enim earum est quia distinctio animi illo reiciendis.
        Ducimus laborum veritatis iusto tenetur corrupti explicabo beatae cumque dolorum, distinctio vero aperiam sint! At temporibus incidunt, velit odit voluptatibus dolore, ratione soluta vel sed nemo alias, laborum atque ipsa.
        Facere iure dolor, sunt sint at, qui voluptatum natus delectus porro unde fugiat expedita recusandae, iste itaque mollitia harum beatae explicabo laborum tenetur in animi alias! Aut modi eum dolorem.
        Ab, dignissimos temporibus? Voluptate delectus, officiis cum placeat consequatur illo perspiciatis nisi voluptatibus ut? Rerum amet natus doloribus in cupiditate aliquam voluptas, a, eum repellendus laboriosam soluta suscipit velit dolorum.
        Autem vel aspernatur modi nemo odit beatae in! Blanditiis et odit iure odio illo dolore minima molestias! Tenetur non ducimus nobis quisquam debitis temporibus. Consectetur iure earum iste rerum ut?
        Totam aperiam odit, atque iusto earum fugiat facere magnam, blanditiis repellendus natus explicabo quos repudiandae sit quo. Reprehenderit eos rerum earum. Cumque, atque obcaecati beatae doloremque molestiae ab illum expedita!
        Suscipit ea culpa repellat eos, numquam laborum, quos nemo recusandae sequi reiciendis totam. Vero reprehenderit exercitationem vel cum est doloremque, aut obcaecati culpa consequatur quam laudantium. Alias blanditiis repudiandae qui?
        Modi minus deserunt eaque officia incidunt ea blanditiis, eos, magnam itaque nam eveniet iure nostrum molestiae vitae. Harum reprehenderit architecto, ipsam inventore fugit quos dolores, deleniti illum consequatur magnam vero?
        Illo totam perspiciatis iure expedita! Vero repellendus expedita, totam distinctio minima consequuntur adipisci ad cupiditate esse modi delectus repudiandae nihil, consectetur quasi alias debitis quibusdam, sed assumenda dolorem mollitia corrupti?
        Ea error deserunt dolor nesciunt sapiente impedit repellat pariatur soluta, tempore, distinctio, natus iusto iste unde. Harum soluta reiciendis neque laudantium dolor dicta possimus rem. Repellat magni enim quas eveniet?
        Nulla, aliquid eaque cupiditate ipsam vel animi? Assumenda, provident! Minus omnis eum magnam adipisci voluptatibus sit culpa, non repudiandae. Cum totam voluptatum iusto recusandae ducimus dolor tenetur inventore facere molestias.
        Reprehenderit qui assumenda sequi odit laborum tenetur. Qui eius maiores illo reprehenderit labore, quaerat mollitia, saepe sint eaque ratione consectetur possimus rerum obcaecati alias! Commodi similique quia tenetur illum ab.
        Harum, sed? Quibusdam expedita enim soluta et quod, nisi dicta eum ut ex. Placeat molestiae officiis praesentium repellendus. Cumque enim id voluptates facere iusto repudiandae soluta quod? Quisquam, excepturi pariatur.
        Perspiciatis obcaecati cum, corrupti dolores quas voluptatum labore voluptas unde consequatur, quo illo perferendis dolore. Harum, perferendis quas magnam aperiam voluptatum voluptate necessitatibus ea at distinctio, corporis ipsa, culpa dolore.
        Odit ratione eos reiciendis itaque quas sit beatae sequi asperiores quod, et cupiditate natus ipsa optio in eius velit vitae numquam voluptatibus sapiente tempora modi! Perspiciatis suscipit molestiae dolores in?
        Provident sequi excepturi exercitationem eius adipisci! Minima dolore est dignissimos illo deserunt officiis amet nemo eveniet. Et, enim quia. Dignissimos qui, recusandae blanditiis vitae corporis nam dolorum obcaecati eaque doloribus.
        Sunt non nesciunt inventore voluptate quisquam aliquam molestias reprehenderit laudantium in velit excepturi debitis, a dolorum sint sit cupiditate iure numquam dolorem omnis vitae optio asperiores odio nemo soluta? Tempora.
        Aperiam minima nam ad magni animi, adipisci quas sapiente! Aperiam quidem sed quisquam iure provident ex ut facere debitis dicta blanditiis repudiandae cupiditate vero corporis, consequuntur rerum. Eveniet, ipsa officia?
        Ad vero suscipit illo cumque exercitationem aperiam eum assumenda itaque voluptas vel. Facere dolore quidem nostrum soluta assumenda voluptates consectetur dolorem officia numquam? Odio magnam ex quas nam eveniet nihil?
        Nisi deserunt sed commodi quos excepturi hic molestias perspiciatis illum quas quae non, porro, repellat assumenda ad voluptas consequuntur tenetur repudiandae explicabo ipsum! Facilis consequatur tempora dolores dolore praesentium obcaecati.
        Praesentium dolore sunt nam deleniti eaque tempore, asperiores sapiente numquam illum dolor ipsam, vel dolorem ut necessitatibus soluta placeat, quis culpa neque voluptates quo explicabo quos saepe. Architecto, cum eaque.
        Enim maiores ullam tenetur voluptatibus placeat doloribus quisquam quod veritatis modi quo, ratione, deserunt ut. Consectetur voluptas ratione pariatur modi minus natus ea qui deleniti reprehenderit quia iste, repellendus necessitatibus.
        Saepe pariatur facere nobis. Consectetur sunt exercitationem debitis obcaecati voluptate suscipit, modi dolores ex perferendis fugit corporis accusantium dolor! Neque distinctio ipsam mollitia dicta minus blanditiis quas labore tenetur voluptatum.
        Quaerat tempora impedit temporibus dicta natus eius possimus quis velit sit accusamus? Sit, saepe. Aliquid expedita dolorem voluptatibus, quam deserunt quaerat saepe ea, aspernatur fugit quisquam, sed modi? Assumenda, corrupti.
        Facere delectus velit esse architecto sapiente molestiae aliquid nesciunt rem, sit eaque nisi voluptatem similique cumque natus nobis dicta necessitatibus quos autem, id quas! Quo praesentium delectus cumque nisi tenetur.
        Sit nobis, excepturi in rem natus ab eligendi error ipsam harum asperiores minima ipsum saepe laboriosam magnam eius totam eos quam quae est perspiciatis dolores libero vitae mollitia sequi! Sequi?
        Ullam quam dignissimos perspiciatis rerum, et recusandae consequatur consequuntur fugiat commodi laborum accusantium optio placeat tempora! Nisi asperiores fuga, molestiae neque a ea id reprehenderit, aspernatur corrupti mollitia delectus consectetur?
        Quidem est commodi soluta ad sapiente earum optio blanditiis deserunt corporis voluptas. Delectus ullam saepe ut, in, laudantium ratione nobis quaerat quasi beatae unde debitis voluptatibus magnam necessitatibus assumenda voluptas.
        Voluptatem tempora aliquid voluptatum accusantium? Fuga fugit architecto temporibus consectetur, ipsam quia alias nam dolorum veritatis esse reiciendis molestias iste vero labore reprehenderit quod incidunt inventore accusantium totam recusandae aliquid.
        Ducimus, pariatur temporibus eius saepe a doloribus dolore tenetur suscipit corporis quasi laudantium nisi hic aliquid harum delectus provident nostrum sapiente qui debitis id soluta excepturi voluptatibus nihil voluptate. Ex.
        Nulla veritatis minus repudiandae harum error, ex itaque, officia quia velit fugit eius sint hic quaerat ullam dolorum quasi? Ex nostrum quisquam ad quae nihil quidem vitae suscipit excepturi rerum.
        Deserunt doloremque suscipit harum voluptatibus itaque est saepe, non ducimus optio repellat modi blanditiis explicabo sed fugit! Esse, placeat ipsa, animi reprehenderit rerum qui doloremque nam illum maxime vero nesciunt?
        Laboriosam, eius at. Labore asperiores quaerat quia soluta error officiis ullam, laborum doloribus fuga voluptates non. Ipsam distinctio, quasi architecto debitis ipsa explicabo fugiat, qui illum est sunt eius vitae.
        Accusamus, minima aspernatur! Dicta est veniam soluta iusto nemo repudiandae maxime, repellat provident debitis vitae molestiae ad nihil? Sunt eum rerum expedita natus qui iste saepe voluptatibus doloremque architecto quam!</p>
        {/* Inner stuff */}
        <Footer className='position-absolute right-100'/>
    </div>
  )
}

export default App
