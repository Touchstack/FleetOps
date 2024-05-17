import { z } from "zod"

export const formSchema = z.object({
    form_number: z.number().min(1, {
      required_error: "Form number is required",
    }),
    form_code:z.number().min(1, {
      required_error: "Form number is required",
    }),
    driver_account_num: z.string().min(1, {
      required_error: "Driver account number is required",
    }),
    vehicle_reg_num: z.string().min(1, {
      required_error: " Vehicle reg. number is required",
    }),
    form_acceptance: z.boolean({
      required_error: "Acceptance is required",
      invalid_type_error: "must be a boolean",
    }).default(false),
    road_test: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    overall_comment: z.string().min(1, {
      required_error: " Overall comment is required",
    }),
    form_acceptance_date: z.string().date({
      required_error: " Acceptance date is required",
    }),
    road_test_comment: z.string().min(1, {
      required_error: " road test comment is required",
    }),
    front_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    reverse_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    wheel_caps: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    wheel_caps_comment:  z.string().min(1, {
      required_error: "comment is required",
    }),
    indicator_lights_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    front_lights_high_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    reverse_lights_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    parking_lights_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    front_lights_deem_comment:  z.string().min(1, {
      required_error: "comment is required",
    }),
    break_lights: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    radio: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    air_conditioner: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    fire_extinguisher: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    radio_comment:z.string().min(1, {
      required_error: "comment is required",
    }),
    air_conditioner_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    fire_extinguisher_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    vehicle_tools: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    warning_triangle:  z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    spare_tire:  z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
    vehicle_tools_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    warning_triangle_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    spare_tire_comment: z.string().min(1, {
      required_error: "comment is required",
    }),
    horn: z.boolean({
      invalid_type_error: "must be a boolean",
    }).default(false).optional(),
      wiper_function: z.boolean({
        invalid_type_error: "must be a boolean",
      }).default(false).optional(),
  })


export const defaultValues = {
    form_number: "21",
    driver_account_num: "230012784",
    vehicle_reg_num: "GT4555-18",
    form_code: '290',
    form_acceptance_date: "2024-02-09",
    form_acceptance: false,
    road_test: false,
    overall_comment: "",
    road_test_comment: "",
    front_lights_high: false,
    reverse_lights: false,
    wheel_caps: false,
    indicator_lights_comment: "",
    front_lights_high_comment: "",
    reverse_lights_comment: "",
    parking_lights_comment: "",
    front_lights_deem_comment: "",
    parking_light: false,
    front_lights_deem: false,
    indicator_lights: false,
    break_lights: false,
    radio: false,
    air_conditioner: false,
    fire_extinguisher: false,
    radio_comments: "",
    air_conditioner_comment: "",
    fire_extinguisher_comment: "",
    vehicle_tools: false,
    warning_triangle: false,
    spare_tire: false,
    vehicle_tools_comment: "",
    warning_triangle_comment: "",
    spare_tire_comment: "",
    horn: false,
    wiper_function: false,
  }
