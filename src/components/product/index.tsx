const products = [
  {
    id: 1,
    name: 'Jordan 1 Mid SE',
    href: '#',
    price: '$100',
    color: 'golden',
    imageSrc: '/src/images/airjordan.png',
    imageAlt: 'Jordan 1 Mid SE',
  },
  {
    id: 2,
    name: 'Superstar',
    href: '#',
    price: '$96',
    color: 'cloud white',
    imageSrc: 'src/images/superstar.png',
    imageAlt: 'Adidas Superstar',
  },
  {
    id: 3,
    name: 'Chuck Taylor All Star',
    href: '#',
    price: '$89',
    color: 'White',
    imageSrc: 'src/images/allstar.png',
    imageAlt: 'Chuck Taylor All Star',
  },
  {
    id: 4,
    name: 'Suede XL',
    href: '#',
    price: '$70',
    color: 'Blue',
    imageSrc: 'src/images/suede.png',
    imageAlt:
      'Hand holding black machined steel mechanical pencil with brass tip and top.',
  },
]

export function Products() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map(product => (
            <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  className="h-72 w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-800">{product.name}</h3>
              <h3 className="mt-2 text- text-gray-400 capitalize">
                {product.color}
              </h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.price}
              </p>
              <div className="w-full p-5">
                <button
                  type="button"
                  className="bg-violet-500 rounded-lg w-full h-10 text-gray-100"
                >
                  Add to Cart
                </button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
