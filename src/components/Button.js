const Button = {
  render(createElement) {
    return createElement("button", this.$slots.default);
  },
};

export default Button;
