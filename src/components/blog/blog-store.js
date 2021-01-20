// Store with posts

import { writable } from 'svelte/store'

const posts = writable([
  {
    _id: 'post1',
    title: 'A sample post',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Ut etiam sit amet nisl purus in mollis nunc sed. Neque convallis a cras semper. Amet mauris commodo quis imperdiet. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Facilisis gravida neque convallis a cras semper auctor neque vitae. Orci phasellus egestas tellus rutrum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Sed viverra ipsum nunc aliquet. Eu non diam phasellus vestibulum lorem sed. Hendrerit dolor magna eget est. Amet risus nullam eget felis eget nunc. Nisl pretium fusce id velit ut tortor pretium. Varius sit amet mattis vulputate enim. Rhoncus urna neque viverra justo nec ultrices dui sapien. Enim tortor at auctor urna nunc id cursus metus. Lorem dolor sed viverra ipsum nunc. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in.',
      'Risus in hendrerit gravida rutrum quisque non tellus. Faucibus vitae aliquet nec ullamcorper sit. Ipsum dolor sit amet consectetur adipiscing elit ut. Interdum velit euismod in pellentesque massa placerat. Integer feugiat scelerisque varius morbi. Habitant morbi tristique senectus et netus et. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed turpis tincidunt id aliquet risus feugiat in ante. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Risus commodo viverra maecenas accumsan lacus vel. Non arcu risus quis varius. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Neque aliquam vestibulum morbi blandit. Diam vel quam elementum pulvinar etiam. Pellentesque nec nam aliquam sem et tortor.'
    ]
  },
  {
    _id: 'post2',
    title: 'A second sample post',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Ut etiam sit amet nisl purus in mollis nunc sed. Neque convallis a cras semper. Amet mauris commodo quis imperdiet. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Facilisis gravida neque convallis a cras semper auctor neque vitae. Orci phasellus egestas tellus rutrum. Turpis massa tincidunt dui ut ornare lectus sit amet est. Sed viverra ipsum nunc aliquet. Eu non diam phasellus vestibulum lorem sed. Hendrerit dolor magna eget est. Amet risus nullam eget felis eget nunc. Nisl pretium fusce id velit ut tortor pretium. Varius sit amet mattis vulputate enim. Rhoncus urna neque viverra justo nec ultrices dui sapien. Enim tortor at auctor urna nunc id cursus metus. Lorem dolor sed viverra ipsum nunc. Diam vulputate ut pharetra sit amet aliquam id diam maecenas. Pharetra magna ac placerat vestibulum lectus mauris ultrices eros in.',
      'Risus in hendrerit gravida rutrum quisque non tellus. Faucibus vitae aliquet nec ullamcorper sit. Ipsum dolor sit amet consectetur adipiscing elit ut. Interdum velit euismod in pellentesque massa placerat. Integer feugiat scelerisque varius morbi. Habitant morbi tristique senectus et netus et. Sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed turpis tincidunt id aliquet risus feugiat in ante. Adipiscing tristique risus nec feugiat in fermentum posuere urna nec. Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Risus commodo viverra maecenas accumsan lacus vel. Non arcu risus quis varius. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Neque aliquam vestibulum morbi blandit. Diam vel quam elementum pulvinar etiam. Pellentesque nec nam aliquam sem et tortor.'
    ]
  }
])

const customBlogStore = {
  subscribe: posts.subscribe
}

export default customBlogStore;