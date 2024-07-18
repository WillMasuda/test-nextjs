import TestMessage from './component-box/testMessage'
import TestLinks from './component-box/testLinks'
import TestBlog from './component-box/testBlog'

export default async function Home() {

  return (
    <main>

      <section>
        <TestMessage />
      </section>

      <section>
        <TestLinks />
      </section>

      <section>
        <TestBlog />
      </section>
<a href=""></a>
    </main>
  );
}