import { AdvancedImage } from '@cloudinary/react';
import { Cloudinary } from '@cloudinary/url-gen';
import { scale } from '@cloudinary/url-gen/actions/resize';
import { auto } from '@cloudinary/url-gen/qualifiers/format';
import { auto as qAuto } from '@cloudinary/url-gen/qualifiers/quality';
import { format, quality } from '@cloudinary/url-gen/actions/delivery';

const Character = ({ name, faction, weapon }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'tamas-demo',
    },
  });

  const cloudinaryPublicID = `jam/${name.toLowerCase().replace(/\s/g, '')}`;
  const characterImage = cld.image(cloudinaryPublicID);
  characterImage
    .resize(scale().width(400))
    .delivery(format(auto()))
    .delivery(quality(qAuto()));
  return (
    <div>
      <h1 className="text-2xl font-bold">Hello, I am {name}!</h1>
      <p className="text-xl py-2">
        I fight for the {faction} and I fight with a {weapon}
      </p>
      <AdvancedImage cldImg={characterImage} />
    </div>
  );
};

export default Character;
