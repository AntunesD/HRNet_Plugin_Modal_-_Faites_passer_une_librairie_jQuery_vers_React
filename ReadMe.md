# Modal React Component

Ce composant React crée une modal personnalisable pour afficher des messages de confirmation ou d'autres contenus nécessitant une interaction de l'utilisateur. Il a été développé par un étudiant dans le cadre d'un projet de formation sur OpenClassroom.

## Installation

Pour installer ce composant dans votre projet, vous pouvez utiliser npm. Exécutez la commande suivante dans votre terminal :

```
npm install modal_antunes_lib
```

## Utilisation

Pour utiliser ce composant dans votre application React, vous pouvez l'importer comme suit :

```javascript
import Modal from 'modal_antunes_lib';
```

Ensuite, vous pouvez l'utiliser dans votre code en passant les propriétés suivantes :

- `title` : Le titre de la modal.
- `paragraph` : Le contenu de la modal, généralement un paragraphe ou un message.
- `onClose` : La fonction de fermeture de la modal.

Voici un exemple d'utilisation :

```javascript
import React, { useState } from 'react';
import Modal from 'modal_antunes_lib/dist/bundle';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => setShowModal(true)}>Ouvrir la modal</button>
      {showModal && (
        <Modal
          title="Confirmation"
          paragraph="La modal est ouverte"
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
```

## Props

- `title` (string, requis) : Le titre de la modal.
- `paragraph` (string, requis) : Le contenu de la modal.
- `onClose` (function, requis) : La fonction de fermeture de la modal.

## License

Ce composant est sous licence MIT. Vous êtes libre de l'utiliser, de le modifier et de le distribuer.
