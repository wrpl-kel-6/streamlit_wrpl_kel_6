import os

import streamlit.components.v1 as components

# Create a _RELEASE constant. We'll set this to False while we're developing
# the component, and True when we're ready to package and distribute it.
_RELEASE = True

if not _RELEASE:
    checkoutPage = components.declare_component(
        "material_login",
        url="http://localhost:3001",
    )
else:
    parent_dir = os.path.dirname(os.path.abspath(__file__))
    build_dir = os.path.join(parent_dir, "frontend/build")
    checkoutPage = components.declare_component("material_login", path=build_dir)


def checkout( key=None):
    return checkoutPage( key=key)
