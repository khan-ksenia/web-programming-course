/**
 * Задание 4: Flex и Grid layouts
 *
 * Задачи:
 * 1. Создайте flex контейнер с кнопками (TODO: используйте flex, gap, justify)
 * 2. Создайте grid галерею (TODO: используйте grid, grid-cols, gap)
 * 3. Центрируйте карточку (TODO: используйте flex, items-center, justify-center)
 */

const colorClasses: Record<string, string> = {
  red: 'bg-red-500 hover:bg-red-600',
  blue: 'bg-blue-500 hover:bg-blue-600',
  green: 'bg-green-500 hover:bg-green-600',
  yellow: 'bg-yellow-400 hover:bg-yellow-500 text-black',
  purple: 'bg-purple-500 hover:bg-purple-600',
  pink: 'bg-pink-500 hover:bg-pink-600',
};

const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];

const images = [
  'https://avatars.mds.yandex.net/i?id=4cd37f8ae30fe687237fac000a6fc6bb_l-4012804-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/i?id=68a17fa29baa6e177004c8d98fbb5907_l-5661150-images-thumbs&n=13',
  'https://avatars.mds.yandex.net/get-mpic/7689172/img_id3999768467811250354.png/orig',
  'https://avatars.mds.yandex.net/get-mpic/14635071/2a0000019835191d493a7f674e1dd78d7579/orig',
];

function Task4() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Задание 4: Flex и Grid layouts</h2>

      <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-6 text-sm">
        Откройте <code className="bg-blue-100 px-1 rounded">src/tasks/Task4.tsx</code> и добавьте flex/grid классы
      </div>

      <div className="space-y-8">
        {/* 1. Flex: горизонтальные кнопки */}
        <div>
          <h3 className="text-lg font-semibold mb-3">1. Flex: кнопки в ряд</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {colors.map(color => (
              <button
                key={color}
                className={`${colorClasses[color]} text-white px-4 py-2 rounded transition`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>

        {/* 2. Grid: галерея изображений */}
        <div>
          <h3 className="text-lg font-semibold mb-3">2. Grid: галерея 2x2</h3>
          <div className="grid grid-cols-2 gap-4">
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Image ${i + 1}`}
                className="w-full h-32 object-cover rounded"
              />
            ))}
          </div>
        </div>

        {/* 3. Flex: центрирование карточки */}
        <div>
          <h3 className="text-lg font-semibold mb-3">3. Flex: центрирование карточки</h3>
          <div className="flex items-center justify-center h-64 bg-gray-200 rounded">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">Я по центру!</p>
            </div>
          </div>
        </div>

        {/* 4. Flex: space-between */}
        <div>
          <h3 className="text-lg font-semibold mb-3">4. Flex: space-between</h3>
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Товар</span>
              <span className="text-blue-600 font-bold">5990 ₽</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Task4;
